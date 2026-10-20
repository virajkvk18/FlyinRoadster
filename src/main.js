import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {DriveAudio} from './experience.js';
import {evaluateFlight} from './stunts.js';
import {MODES,FACILITIES,MPH60,damp,steeringRate,sprintCrossing,landingGrade,finishReached} from './gameplay.js';
import {createVehicle,FLEET} from './vehicle.js';
import {createTrack} from './track.js';
import {Input} from './input.js';
import {mountUI,$} from './ui.js';
import './style.css';

mountUI();
const input=new Input(),audio=new DriveAudio();
const V=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
let mode='sprint',difficulty=0,profile=FLEET[0],assist=true,quality=true,camMode=0;
let world,body,vehicle,track,ready=false,active=false,paused=false,complete=false;
let gas=100,score=0,combo=1,runTime=0,airTime=0,maxAir=0,peakSpeed=0,grounded=false,flight=false,contacts=0;
let airLock=0,landStable=0,landingImpact=0,checkpoint=false,receiverLanded=false,launchTime=null,sprintTime=null,previousForwardSpeed=0;
let countdown=0,throttle=0,steering=0,rollInput=0,pitchInput=0,yawInput=0,toastTimer=0,hudTimer=0,particleTimer=0,rollPeak=0;
const rotation=V(),cameraDirection=V(0,0,-1),cameraTarget=V(),previousPosition=V(),previousRotation=new THREE.Quaternion();
let records={};try{records=JSON.parse(localStorage.getItem('roadster-v3-records')||'{}')||{}}catch{}
const recordKey=()=>mode+':'+profile.name+(mode==='ramp'?':'+difficulty:'');
const scene=new THREE.Scene();scene.background=new THREE.Color(0x020305);scene.fog=new THREE.FogExp2(0x020305,.0018);
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.1,1400);
let renderer,composer,bloom,sun;
const particles=[];
const puffCanvas=document.createElement('canvas');puffCanvas.width=puffCanvas.height=32;const pc=puffCanvas.getContext('2d');
const gradient=pc.createRadialGradient(16,16,0,16,16,16);gradient.addColorStop(0,'rgba(230,245,255,.8)');gradient.addColorStop(1,'rgba(230,245,255,0)');pc.fillStyle=gradient;pc.fillRect(0,0,32,32);const puffMap=new THREE.CanvasTexture(puffCanvas);

function initGraphics(){
  renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;renderer.domElement.setAttribute('aria-label','3D stunt driving scene');document.body.prepend(renderer.domElement);
  const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment();scene.environment=pmrem.fromScene(room,.04).texture;scene.environmentIntensity=.65;room.dispose();pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xc7dbf3,0x16191f,1.5));sun=new THREE.DirectionalLight(0xf0f6ff,3);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-22;sun.shadow.camera.right=22;sun.shadow.camera.top=22;sun.shadow.camera.bottom=-22;sun.shadow.camera.near=1;sun.shadow.camera.far=90;sun.shadow.normalBias=.025;sun.shadow.bias=-.00015;scene.add(sun,sun.target);
  const rim=new THREE.DirectionalLight(0x859bbf,2);rim.position.set(-8,6,6);scene.add(rim);
  composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));bloom=new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.24,.35,1.35);composer.addPass(bloom);composer.addPass(new OutputPass());
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();pauseGame();toast('Graphics paused. Reload the page to restore the renderer.',20)});
}
function makeCar(){
  if(vehicle){scene.remove(vehicle.group);vehicle.dispose();world.removeRigidBody(body)}
  vehicle=createVehicle(profile);scene.add(vehicle.group);
  body=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0,.68,18).setLinearDamping(.04).setAngularDamping(.2).setCcdEnabled(true));
  world.createCollider(RAPIER.ColliderDesc.cuboid(.86,.29,profile.length*.46).setMass(profile.mass).setFriction(.3).setRestitution(.02),body);
  reset();
}
function changeTrack(){if(track)track.dispose();track=createTrack(scene,world,RAPIER,mode,difficulty);}
function clearParticles(){for(const a of particles){scene.remove(a.mesh);a.mesh.material.dispose()}particles.length=0;}
function reset(recover=false){
  if(!body)return;
  if(!recover){score=0;combo=1;runTime=0;maxAir=0;peakSpeed=0;checkpoint=false;receiverLanded=false;launchTime=null;sprintTime=null;}
  complete=false;gas=100;airTime=0;flight=false;grounded=false;contacts=0;airLock=0;landStable=0;landingImpact=0;rollPeak=0;rotation.set(0,0,0);throttle=steering=pitchInput=rollInput=yawInput=0;previousForwardSpeed=0;
  input.clear();clearParticles();$('results').close();
  const z=recover&&checkpoint?-365:18;
  body.setTranslation({x:0,y:.72,z},true);body.setRotation({x:0,y:0,z:0,w:1},true);body.setLinvel(V(),true);body.setAngvel(V(),true);previousPosition.copy(body.translation());previousRotation.copy(body.rotation());vehicle.group.position.copy(previousPosition);vehicle.group.quaternion.copy(previousRotation);
  cameraDirection.set(0,0,-1);cameraTarget.copy(previousPosition);camera.position.copy(previousPosition).add(V(0,4.1,10));toast('');
  if(recover){combo=1;if(mode==='sprint'){runTime=0;launchTime=null;sprintTime=null;toast('Sprint reset: timed attempts must start from rest.');}else toast(checkpoint?'Recovered to the landing deck.':'Recovered. Banked points kept.');}
}
function toast(message,seconds=2.8){$('toast').textContent=message;toastTimer=seconds;}
function bestText(){const r=records[recordKey()];return r?(mode==='sprint'?r.time.toFixed(2)+' s':r.score.toLocaleString()):'--';}
function saveRecord(){const key=recordKey(),r=records[key];if(!r||(mode==='sprint'?sprintTime<r.time:score>r.score)){records[key]={time:sprintTime,score};try{localStorage.setItem('roadster-v3-records',JSON.stringify(records))}catch{}return true}return false;}
function finish(title,detail){
  complete=true;input.clear();const personalBest=saveRecord();audio.chime();$('result-eyebrow').textContent=personalBest?'NEW PERSONAL BEST':'EXPERIMENT COMPLETE';$('result-title').textContent=title;$('result-detail').textContent=detail;
  $('result-stats').innerHTML=`<div><span>${mode==='sprint'?'0-60 MPH':'BANKED SCORE'}</span><b>${mode==='sprint'?sprintTime.toFixed(2)+' s':score.toLocaleString()}</b></div><div><span>TOP SPEED</span><b>${Math.round(peakSpeed)} km/h</b></div><div><span>RUN TIME</span><b>${runTime.toFixed(1)} s</b></div><div><span>LONGEST AIR</span><b>${maxAir.toFixed(1)} s</b></div>`;
  $('results').showModal();
}
function launch(){if(!ready)return;audio.start();active=true;paused=false;reset();countdown=2.4;document.body.classList.add('playing');$('menu').hidden=true;$('hud').hidden=false;$('touch-controls').hidden=!matchMedia('(pointer: coarse)').matches;updateHUD();document.activeElement?.blur();}
function menu(){active=false;paused=false;countdown=0;input.clear();for(const id of ['results','help','pause-menu'])$(id).close();document.body.classList.remove('playing');$('menu').hidden=false;$('hud').hidden=true;$('touch-controls').hidden=true;$('countdown').textContent='';reset();}
function pauseGame(){if(!active||complete||paused)return;paused=true;input.clear();$('pause-menu').showModal();}
function resume(){paused=false;input.clear();$('pause-menu').close();audio.start();}
function emitPuff(local,direction){if(particles.length>=80)return;const q=new THREE.Quaternion().copy(body.rotation());const mesh=new THREE.Sprite(new THREE.SpriteMaterial({map:puffMap,color:0xddeeff,transparent:true,opacity:.6,depthWrite:false,blending:THREE.AdditiveBlending}));mesh.position.copy(local).applyQuaternion(q).add(body.translation());mesh.scale.setScalar(.35);scene.add(mesh);particles.push({mesh,velocity:direction.clone().applyQuaternion(q).multiplyScalar(9).addScaledVector(V().copy(body.linvel()),.3),life:.55});}

function step(dt){
  if(!active||paused||complete)return;
  previousPosition.copy(body.translation());previousRotation.copy(body.rotation());
  if(countdown>0){countdown=Math.max(0,countdown-dt);input.jump=false;return;}
  const q=new THREE.Quaternion().copy(body.rotation()),position=V().copy(body.translation()),velocity=V().copy(body.linvel()),angular=V().copy(body.angvel());
  const up=V(0,1,0).applyQuaternion(q),forward=V(0,0,-1).applyQuaternion(q),right=V(1,0,0).applyQuaternion(q),mass=profile.mass;
  const wasGrounded=grounded;contacts=0;airLock=Math.max(0,airLock-dt);
  for(const wheel of vehicle.wheels){
    const offset=wheel.anchor.clone().applyQuaternion(q),anchor=offset.clone().add(position),down=up.clone().negate();
    const hit=world.castRay(new RAPIER.Ray(anchor,down),.91,true,RAPIER.QueryFilterFlags.EXCLUDE_DYNAMIC);
    if(hit&&hit.timeOfImpact<.86&&airLock===0&&up.y>.12){
      contacts++;const pointSpeed=angular.clone().cross(offset).add(velocity).dot(up);
      const spring=Math.max(0,Math.min(mass*18,(.73-hit.timeOfImpact)*(mass/4)*72-pointSpeed*(mass/4)*10));
      body.applyImpulseAtPoint(up.clone().multiplyScalar(spring*dt),anchor,true);
      wheel.pivot.position.y=damp(wheel.pivot.position.y,.36-hit.timeOfImpact,18,dt);
    }else wheel.pivot.position.y=damp(wheel.pivot.position.y,-.33,10,dt);
  }
  grounded=contacts>=2&&airLock===0;
  throttle=damp(throttle,input.axis(['KeyW'],['KeyS']),7,dt);steering=damp(steering,input.axis(['KeyA'],['KeyD']),9,dt);
  const speed=velocity.dot(forward),drift=input.has('ShiftLeft','ShiftRight');
  if(mode!=='sprint'||launchTime!==null)runTime+=dt;
  if(mode==='sprint'&&launchTime===null&&throttle>.05){launchTime=0;runTime=0;}
  if(grounded){
    const brake=throttle*speed<-.5,limit=speed>72&&throttle>0||speed< -14&&throttle<0;
    const acceleration=limit?0:throttle*profile.power*(brake?1.8:1)*Math.max(.25,1-Math.max(0,speed)/110);
    body.applyImpulse(forward.clone().multiplyScalar(acceleration*mass*dt),true);
    body.applyImpulse(right.clone().multiplyScalar(-velocity.dot(right)*mass*Math.min(1,(drift?1.4:9)*dt)),true);
    if(drift)body.applyImpulse(forward.clone().multiplyScalar(-speed*mass*Math.min(.8,1.6*dt)),true);
    const localAngular=angular.clone().applyQuaternion(q.clone().invert());localAngular.y=damp(localAngular.y,steeringRate(speed,steering,drift),7,dt);body.setAngvel(localAngular.applyQuaternion(q),true);
    for(const wheel of vehicle.wheels){if(wheel.front)wheel.pivot.rotation.y=steering*.36;wheel.spin.rotation.x-=speed*dt/.36;}
    if(flight){
      if(!wasGrounded)landingImpact=Math.abs(velocity.y);
      landStable=contacts===4&&up.y>.72?landStable+dt:0;
      if(landStable>.1){
        const grade=landingGrade(up.y,landingImpact,angular.length());
        if(grade!=='hard'){
          const stunt=evaluateFlight(rotation,airTime,combo);score+=Math.round(stunt.points*(grade==='perfect'?1.2:1));gas=100;combo=Math.min(combo+1,5);audio.chime();toast(`${grade.toUpperCase()} LANDING +${Math.round(stunt.points*(grade==='perfect'?1.2:1))}`);
          if(mode==='ramp'&&position.z<track.receiver){receiverLanded=true;checkpoint=true;}
          if(mode==='kickflip'&&Math.abs(rotation.z)>=Math.PI*1.9){finish('KICKFLIP LANDED.','One full roll. Four wheels down. Nicely done.');}
        }else{combo=1;audio.chime(false);toast('Hard landing. Slow your rotation before touchdown.');}
        flight=false;airTime=0;rotation.set(0,0,0);landStable=0;rollPeak=0;
      }
    }else{airTime=0;rotation.set(0,0,0);gas=Math.min(100,gas+dt*9);}
  }else{
    airTime+=dt;landStable=0;if(airTime>.14)flight=true;maxAir=Math.max(maxAir,airTime);
    const localAngular=angular.clone().applyQuaternion(q.clone().invert());rotation.addScaledVector(localAngular,dt);rollPeak=Math.max(rollPeak,Math.abs(rotation.z));
    pitchInput=damp(pitchInput,input.axis(['ArrowUp'],['ArrowDown']),8,dt);rollInput=damp(rollInput,input.axis(['ArrowLeft'],['ArrowRight']),8,dt);yawInput=damp(yawInput,input.axis(['KeyQ'],['KeyE']),8,dt);
    const boost=input.has('ShiftLeft','ShiftRight'),level=input.has('KeyF');const demand=Math.abs(pitchInput)+Math.abs(rollInput)+Math.abs(yawInput)+(boost?1:0)+(level?1:0);
    if(gas>0&&demand>.03){
      const cost=dt*(9*(Math.abs(pitchInput)+Math.abs(rollInput)+Math.abs(yawInput))+(boost?21:0)+(level?10:0)),factor=Math.min(1,gas/Math.max(.001,cost));gas=Math.max(0,gas-cost);
      const desired=V(pitchInput*2.9,yawInput*2.1,rollInput*4.2).multiplyScalar(profile.agility);const responsiveness=assist?4.5:2.6;
      const target=localAngular.clone();for(const axis of ['x','y','z'])if(assist||Math.abs(desired[axis])>.05)target[axis]=damp(target[axis],desired[axis],responsiveness*factor,dt);
      target.clampLength(0,6.5);body.setAngvel(target.applyQuaternion(q),true);
      if(boost)body.applyImpulse(up.clone().multiplyScalar(mass*16*dt*factor),true);
      if(level){const correction=up.clone().cross(V(0,1,0));body.applyTorqueImpulse(correction.multiplyScalar(mass*5*dt*factor),true);}
      particleTimer+=dt;if(particleTimer>.035){particleTimer=0;if(boost){emitPuff(V(-.7,-.3,0),V(0,-1,0));emitPuff(V(.7,-.3,0),V(0,-1,0));}else emitPuff(V(rollInput>0?.9:-.9,0,0),V(0,-1,0));}
    }else if(assist){body.setAngvel(angular.multiplyScalar(Math.exp(-2.1*dt)),true);}
  }
  if(input.jump){input.jump=false;if(grounded&&gas>=15){body.applyImpulse(V(0,mass*(mode==='kickflip'?12:9),0),true);gas-=15;airLock=.3;grounded=false;airTime=0;rotation.set(0,0,0);}}
  if(complete)return;
  world.timestep=dt;world.step();
  const newVelocity=V().copy(body.linvel()),newPosition=body.translation();peakSpeed=Math.max(peakSpeed,newVelocity.length()*3.6);
  if(mode==='sprint'&&launchTime!==null){const currentSpeed=Math.max(0,-newVelocity.z);const result=sprintCrossing(previousForwardSpeed,currentSpeed,runTime,dt);if(result!==null){sprintTime=result;finish('THAT WAS QUICK.',`0 to 60 mph in ${result.toFixed(2)} seconds. Same car. Try a cleaner launch.`);}previousForwardSpeed=currentSpeed;}
  if(finishReached(mode,newPosition,grounded,receiverLanded,track.width))finish('GAP CLEARED.','Launch, flight, landing. All three, under control.');
  if(newPosition.y < -35||Math.abs(newPosition.x)>150||newPosition.z>130||newPosition.z< -700){reset(true);audio.chime(false);}
  vehicle.tail.emissiveIntensity=throttle<-.1||drift?5:2.5;
}
function updateHUD(){
  if(!body)return;const position=body.translation(),speed=V().copy(body.linvel()).length()*3.6,stunt=evaluateFlight(rotation,airTime,combo);
  $('speed').textContent=Math.round(speed).toString().padStart(3,'0');$('mph').textContent=Math.round(speed/1.609344)+' MPH';$('score').textContent=score.toLocaleString();$('best').textContent=bestText();$('gas-text').textContent=Math.round(gas)+'%';$('gas-bar').style.width=gas+'%';$('gas-bar').style.background=gas<25?'#ff6654':'#c5f879';
  $('timer').textContent=(sprintTime??runTime).toFixed(2);$('airtime').textContent=airTime.toFixed(1);$('combo').textContent=combo+'x';$('pending').textContent='+'+stunt.points;$('trick').textContent=stunt.label;$('stunt-panel').classList.toggle('visible',flight);
  $('state').textContent=countdown>0?'PREPARE TO LAUNCH':paused?'PAUSED':grounded?'GROUND CONTACT':gas<1?'PRESSURE EMPTY':'AIRBORNE';
  $('mode-label').textContent=MODES.find(m=>m.id===mode).subtitle;
  $('objective').textContent=mode==='sprint'?'0 TO 60 MPH':mode==='kickflip'?'LAND A FULL ROLL':'CLEAR THE '+FACILITIES[difficulty].gap+' M GAP';
  const progress=mode==='sprint'?speed/96.56064:mode==='kickflip'?rollPeak/(Math.PI*2):(18-position.z)/448;$('progress').style.width=THREE.MathUtils.clamp(progress*100,0,100)+'%';
  $('coach').textContent=countdown>0?'Hold W. Launch when the lights go out.':mode==='sprint'?'Hold W to accelerate. Timing begins when you move.':mode==='kickflip'?flight?'Hold a roll arrow. Release before touchdown.':'Press Space, then hold LEFT or RIGHT arrow.':checkpoint?'Landing secured. Drive through the finish gate.':flight?'Release arrows to slow rotation. Hold F to level.':'Hold W. Stay centered. Let the ramp launch you.';
}
let previous=performance.now(),accumulator=0;
function render(now){
  requestAnimationFrame(render);const dt=Math.min((now-previous)/1000,.05);previous=now;accumulator+=dt;let steps=0;while(accumulator>=1/60&&steps<4){step(1/60);accumulator-=1/60;steps++;}
  if(body){
    const alpha=active&&!paused&&!complete&&countdown===0?accumulator/(1/60):1;
    vehicle.group.position.lerpVectors(previousPosition,V().copy(body.translation()),alpha);vehicle.group.quaternion.slerpQuaternions(previousRotation,new THREE.Quaternion().copy(body.rotation()),alpha);
    const p=vehicle.group.position,velocity=V().copy(body.linvel()),speed=velocity.length();
    if(active){
      if(grounded){const heading=V(0,0,-1).applyQuaternion(vehicle.group.quaternion);heading.y=0;if(heading.lengthSq()>.01)cameraDirection.lerp(heading.normalize(),1-Math.exp(-dt*3)).normalize();}
      const desired=camMode===1?p.clone().add(V(15,5.5,7)):camMode===2?p.clone().add(V(0,28,8)):p.clone().addScaledVector(cameraDirection,-9.5-Math.min(speed*.025,2)).add(V(0,3.7,0));
      camera.position.lerp(desired,1-Math.exp(-dt*5));cameraTarget.lerp(p.clone().add(V(0,.55,0)).addScaledVector(velocity,.08),1-Math.exp(-dt*8));camera.lookAt(cameraTarget);
    }else{const angle=now*.00012;camera.position.set(p.x+Math.sin(angle)*8,p.y+3.4,p.z+Math.cos(angle)*8);camera.lookAt(p.clone().add(V(0,.35,0)));}
    camera.fov=damp(camera.fov,active?48+Math.min(speed*.18,12):44,3,dt);camera.updateProjectionMatrix();sun.position.copy(p).add(V(9,20,10));sun.target.position.copy(p);
    audio.update(speed*3.6,Math.max(0,throttle),active&&!paused&&!complete&&countdown===0,!grounded);
  }
  if(!paused){for(let i=particles.length-1;i>=0;i--){const a=particles[i];a.life-=dt;a.mesh.position.addScaledVector(a.velocity,dt);a.mesh.scale.setScalar(.35+(.55-a.life)*3);a.mesh.material.opacity=Math.max(0,a.life);if(a.life<=0){scene.remove(a.mesh);a.mesh.material.dispose();particles.splice(i,1);}}if(toastTimer>0){toastTimer-=dt;if(toastTimer<=0)$('toast').textContent='';}}
  $('countdown').textContent=active&&!paused&&countdown>0?String(Math.ceil(countdown)):'';
  hudTimer+=dt;if(hudTimer>.075){hudTimer=0;updateHUD();}
  if(quality)composer.render();else renderer.render(scene,camera);
}

for(const card of document.querySelectorAll('[data-mode]'))card.onclick=()=>{if(!ready)return;mode=card.dataset.mode;document.querySelectorAll('[data-mode]').forEach(c=>{c.classList.toggle('selected',c===card);c.setAttribute('aria-pressed',c===card?'true':'false');});$('difficulty-wrap').hidden=mode!=='ramp';$('launch').firstChild.textContent='START '+MODES.find(m=>m.id===mode).name.toUpperCase()+' ';changeTrack();reset();};
$('vehicle').onchange=e=>{if(ready){profile=FLEET[Number(e.target.value)];makeCar();}};
$('difficulty').onchange=e=>{difficulty=Number(e.target.value);if(ready){changeTrack();reset();}};
$('assist').onchange=e=>assist=e.target.checked;
$('launch').onclick=launch;$('garage').onclick=menu;$('brand').onclick=e=>{e.preventDefault();if(ready)menu();};$('pause-button').onclick=pauseGame;$('resume').onclick=resume;
$('restart').onclick=()=>{$('pause-menu').close();launch();};$('again').onclick=()=>{$('results').close();launch();};$('pause-garage').onclick=menu;$('result-garage').onclick=menu;
let helpWasPaused=false;
$('help-button').onclick=()=>{helpWasPaused=paused;if(active){paused=true;input.clear();}$('help').showModal();};
function closeHelp(){$('help').close();paused=helpWasPaused;input.clear();}
$('close-help').onclick=closeHelp;$('help').addEventListener('cancel',e=>{e.preventDefault();closeHelp();});$('pause-menu').addEventListener('cancel',e=>{e.preventDefault();resume();});$('results').addEventListener('cancel',e=>e.preventDefault());
$('sound').onclick=()=>{audio.start();audio.enabled=!audio.enabled;$('sound').textContent=audio.enabled?'Sound on':'Sound off';$('sound').setAttribute('aria-pressed',String(audio.enabled));};
$('quality').onclick=()=>{quality=!quality;$('quality').textContent=quality?'FX High':'FX Low';if(renderer){renderer.setPixelRatio(Math.min(devicePixelRatio,quality?1.5:1));renderer.shadowMap.enabled=quality;composer.setPixelRatio(renderer.getPixelRatio());}};
input.onAction=code=>{if(!active||$('help').open)return;if(code==='Escape'){if(complete)return;if(paused)resume();else pauseGame();return;}if(code==='KeyC')camMode=(camMode+1)%3;if(code==='KeyR'){if(paused)$('pause-menu').close();launch();}if(code==='KeyX'&&!complete&&!paused){reset(true);}};
window.addEventListener('blur',pauseGame);document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseGame();});
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();if(renderer){renderer.setSize(innerWidth,innerHeight);composer.setSize(innerWidth,innerHeight);}});
try{initGraphics();await RAPIER.init();world=new RAPIER.World({x:0,y:-9.81,z:0});changeTrack();makeCar();world.timestep=1/60;world.step();ready=true;$('loading').remove();requestAnimationFrame(render);window.__void={getState:()=>({mode,active,paused,complete,grounded,contacts,gas,score,runTime,sprintTime,position:{...body.translation()},velocity:{...body.linvel()},rendererCalls:renderer.info.render.calls}),reset:()=>reset()};}
catch(error){console.error(error);$('loading').innerHTML='<b>Unable to start the driving lab</b><p>WebGL and a modern browser are required. Try reloading or enabling hardware acceleration.</p><small></small>';$('loading').querySelector('small').textContent=error.message;}
