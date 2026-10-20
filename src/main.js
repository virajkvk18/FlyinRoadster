import * as THREE from 'three';
import RAPIER from '@dimforge/rapier3d-compat';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import './style.css';
import {evaluateFlight} from './stunts.js';
import {DriveAudio, courses, installExperience} from './experience.js';

const fleet=[
 {name:'Tesla Roadster',kind:'sport',mass:1250,agility:1.5,power:23,color:0xd9dcdf,label:'EXTREME',weight:'LIGHT'},
 {name:'Tesla Cybertruck',kind:'truck',mass:3100,agility:.65,power:18,color:0x90999e,label:'SLUGGISH',weight:'SUPER HEAVY'},
 {name:'Model S Plaid',kind:'sedan',mass:2100,agility:1.15,power:28,color:0x721f27,label:'HIGH',weight:'MEDIUM'},
 {name:'Mahindra Thar',kind:'suv',mass:1900,agility:1.25,power:19,color:0xbfb8a7,label:'WILD',weight:'HEAVY'},
 {name:'Maruti Suzuki Swift',kind:'hatch',mass:950,agility:2,power:20,color:0xd73129,label:'HYPER-AGILE',weight:'ULTRA LIGHT'},
 {name:'Tata Safari',kind:'suv',mass:2200,agility:.8,power:20,color:0x183e49,label:'STABLE',weight:'HEAVY'}
];
document.querySelector('#app').innerHTML=`<div id="ui"><header><div class="brand">THRUSTER<i> / </i>VOID</div><div class="tag"><span class="dot"></span>EXPERIMENTAL DRIVING LAB</div><div class="top-actions"><button class="small" id="garage">GARAGE</button><button class="small" id="help-button">? CONTROLS</button></div></header><section class="panel"><div class="eyebrow">01 / THE MEGA GAP</div><h1>DEFY<br>THE GROUND.</h1><div class="rule"></div><p>No roads. No limits. Just you, the void,<br>and six axes of cold-gas thrust.</p><label class="select-label" for="vehicle"><span>SELECT YOUR MACHINE</span><span>06 VEHICLES</span></label><select id="vehicle">${fleet.map((v,i)=>`<option value="${i}">${v.name}</option>`).join('')}</select><div class="specs"><div><span>WEIGHT CLASS</span><b id="weight">LIGHT</b></div><div><span>AIR AGILITY</span><b id="agility">EXTREME</b></div></div><button class="launch" id="launch"><span>ENTER THE VOID</span><span>↗</span></button><p class="hint">DESKTOP KEYBOARD  /  HEADPHONES RECOMMENDED</p></section><div class="right-info"><div class="eyebrow">SESSION SCORE</div><strong id="score">000000</strong><div class="eyebrow">BEST <span id="best">0</span></div><div class="course"><div class="eyebrow">TEST FACILITY / 001</div><span>120 m launch  /  65 m gap</span><span>Cold-gas package equipped</span></div></div><div id="toast"></div><div class="corner">MOMENTUM IS EVERYTHING.</div><div class="bottom"><div class="telemetry"><div><div class="eyebrow">VELOCITY</div><div class="speed"><span id="speed">000</span> <small>KM/H</small></div></div><div class="pressure"><div class="pressure-title"><span>COLD GAS PRESSURE</span><span id="gas-text">100%</span></div><div class="bar"><div id="gas-bar"></div></div><div class="state" id="state">● SYSTEM READY</div></div></div><div class="controls"><div><kbd>W A S D</kbd> DRIVE<br><kbd>SHIFT</kbd> DRIFT</div><div><kbd>SPACE</kbd> JUMP / BOOST<br><kbd>ARROWS</kbd> AIR CONTROL</div><div><kbd>Q E</kbd> YAW<br><kbd>X</kbd> RECOVER / <kbd>R</kbd> RESET  /  <kbd>C</kbd> CAMERA</div></div></div></div><div id="help" hidden><div class="help-box"><div class="eyebrow">FLIGHT MANUAL / 001</div><h2>MAKE GRAVITY OPTIONAL.</h2><p><b>Ground:</b> W/S or ↑/↓ accelerate, brake and reverse. A/D or ←/→ steer. Shift drifts. Tap Space to jump; hold Space on the ground for handbrake.</p><p><b>Air:</b> ↑/↓ or W/S pitch. ←/→ or A/D roll. Q/E or PageUp/PageDown yaw. Hold Space to thrust upward. Gas runs out fast. Land upright on all four wheels to refill.</p><p>Build speed on the runway. Aim for the receiving ramp. Complete rotations for points, then land to bank them. R starts a fresh run. X recovers to your checkpoint and keeps banked points. C cycles chase, side and overhead cameras. Esc pauses. Garage returns to vehicle selection.</p><button class="launch" id="close-help">GOT IT ↗</button></div></div><div id="loading">INITIALIZING PHYSICS…</div>`;
installExperience();
const audio = new DriveAudio();
let courseIndex=0, runTime=0, peakSpeed=0, maxAir=0, combo=1, completed=false, checkpoint=false, highFX=true;
const trackMeshes=[], trackColliders=[];
const $=id=>document.getElementById(id), keys=new Set();
let active=false,paused=false,selected=0,gas=100,score=0,best=0,airTime=0,rotations=new THREE.Vector3(),grounded=false,contacts=0,jumpQueued=false,spaceAt=0,camMode=0,toastTime=0,airLock=0,flight=false,landCooldown=0;
try{best=Number(localStorage.getItem('void-best')||0)}catch{} $('best').textContent=best;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x000000);
const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.1,1600);
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setSize(innerWidth,innerHeight);renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;document.body.prepend(renderer.domElement);
const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));composer.addPass(new UnrealBloomPass(new THREE.Vector2(innerWidth,innerHeight),.45,.45,1.05));composer.addPass(new OutputPass());
scene.add(new THREE.HemisphereLight(0xbac9dd,0x141416,1.1));
const keyLight=new THREE.DirectionalLight(0xe0e9ff,3.5);keyLight.position.set(-15,25,12);scene.add(keyLight);
const rim=new THREE.DirectionalLight(0xffeeee,1.8);rim.position.set(9,8,-12);scene.add(rim);
const roadCanvas=document.createElement('canvas');roadCanvas.width=roadCanvas.height=128;
const roadContext=roadCanvas.getContext('2d');const roadPixels=roadContext.createImageData(128,128);
let noiseSeed=17;for(let i=0;i<roadPixels.data.length;i+=4){noiseSeed=(noiseSeed*1664525+1013904223)>>>0;const shade=85+(noiseSeed%35);roadPixels.data[i]=shade;roadPixels.data[i+1]=shade;roadPixels.data[i+2]=shade;roadPixels.data[i+3]=255;}
roadContext.putImageData(roadPixels,0,0);const roadTexture=new THREE.CanvasTexture(roadCanvas);roadTexture.wrapS=roadTexture.wrapT=THREE.RepeatWrapping;roadTexture.colorSpace=THREE.SRGBColorSpace;
const roadMat=new THREE.MeshStandardMaterial({color:0x72767d,map:roadTexture,roughness:.93,metalness:.14});
const white=new THREE.MeshBasicMaterial({color:new THREE.Color(3,3,3)}),red=new THREE.MeshBasicMaterial({color:new THREE.Color(3,.035,.015)});
let world,body,car,profile=fleet[0];const wheels=[],particles=[],trails=[];
const vec=(x=0,y=0,z=0)=>new THREE.Vector3(x,y,z);
function box(parent,w,h,d,mat,x=0,y=0,z=0){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m}
function beam(a,b,mat,r=.045){const d=new THREE.Vector3().subVectors(b,a);const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),6),mat);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(vec(0,1,0),d.normalize());scene.add(m);trackMeshes.push(m);return m}
function track(start,end,width,fn){const vertices=[],indices=[],samples=100;for(let i=0;i<=samples;i++){let z=start+(end-start)*i/samples;vertices.push(-width/2,fn(z),z,width/2,fn(z),z);if(i<samples){let k=i*2;indices.push(k,k+2,k+1,k+1,k+2,k+3)}}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));const uv=[];for(let i=0;i<vertices.length;i+=3)uv.push(vertices[i]/4,vertices[i+2]/4);g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const mesh=new THREE.Mesh(g,roadMat);mesh.receiveShadow=true;scene.add(mesh);trackMeshes.push(mesh);trackColliders.push(world.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(vertices),new Uint32Array(indices)).setFriction(.8)));for(let i=0;i<samples;i++){const z=start+(end-start)*i/samples,zz=start+(end-start)*(i+1)/samples;for(const x of [-width/2,width/2])beam(vec(x,fn(z)+.08,z),vec(x,fn(zz)+.08,zz),i>88?red:white);if(i%6===0){beam(vec(-.045,fn(z)+.025,z),vec(-.045,fn(zz)+.025,zz),white,.025)}}}
function buildCourse(){
for(const mesh of trackMeshes){scene.remove(mesh);mesh.geometry.dispose()} trackMeshes.length=0;
for(const collider of trackColliders)world.removeCollider(collider,true);trackColliders.length=0;
const c=courses[courseIndex], receiver=-150-c.gap;
track(-90,40,18,()=>0);track(-150,-90,18,z=>c.curve*(z+90)**2);
track(receiver-125,receiver,c.width||26,z=>Math.max(0,c.rise-(receiver-z)*c.rise/110));
track(-500,receiver-125,c.width||26,()=>0);
for(let z=-20;z>-90;z-=20){beam(vec(-8.5,.03,z),vec(-5,.03,z),red,.055);beam(vec(5,.03,z),vec(8.5,.03,z),red,.055)}
// Floating finish gate and distance markers keep the void visually minimal.
for(const x of [-5.5,5.5])beam(vec(x,0,-465),vec(x,8,-465),white,.09);
beam(vec(-5.5,8,-465),vec(5.5,8,-465),red,.12);
for(let z=-10;z>=-80;z-=10)for(const x of [-7,7])beam(vec(x,.035,z),vec(x+(x<0?1:-1),.035,z-2),white,.035);
$('course-select').value=courseIndex;
document.querySelector('.panel .eyebrow').textContent=c.name;
document.querySelector('.course').innerHTML='<div class="eyebrow">'+c.name+'</div><span>'+c.description+'</span><span>Land clean. Bank the combo.</span>';
}
function makeCar(){if(car){scene.remove(car);const owned=new Set();car.traverse(o=>{if(o.isMesh){o.geometry.dispose();if(o.material!==white&&o.material!==red)owned.add(o.material)}if(o.isLight&&o.shadow?.map)o.shadow.map.dispose()});owned.forEach(m=>m.dispose());world.removeRigidBody(body)} wheels.length=0;car=new THREE.Group();scene.add(car);const suv=profile.kind==='suv',truck=profile.kind==='truck',hatch=profile.kind==='hatch';const length=truck?5.2:hatch?3.6:4.5,roof=suv?1.05:truck?.8:.48;
const paint=new THREE.MeshStandardMaterial({color:profile.color,metalness:.65,roughness:.28});const glass=new THREE.MeshStandardMaterial({color:0x101b22,metalness:.75,roughness:.16});const dark=new THREE.MeshStandardMaterial({color:0x080a0c,roughness:.65});
box(car,1.85,.45,length,paint,0,.05,0);box(car,1.93,.12,length-.15,dark,0,-.2,0);const cabin=box(car,1.5,roof, length*.48,glass,0,.38+roof/2,.12);cabin.rotation.x=truck?-.12:0;box(car,1.52,.07,length*.38,paint,0,.4+roof,.22);box(car,1.75,.12,1.1,paint,0,.3,-length/2+.62);
for(const x of [-.97,.97])for(const z of [-length*.31,length*.31]){const w=new THREE.Group();w.position.set(x,-.2,z);const tire=new THREE.Mesh(new THREE.CylinderGeometry(.39,.39,.25,20),dark);tire.rotation.z=Math.PI/2;w.add(tire);const hub=new THREE.Mesh(new THREE.CylinderGeometry(.24,.24,.27,10),new THREE.MeshStandardMaterial({color:0x69717a,metalness:.8,roughness:.25}));hub.rotation.z=Math.PI/2;w.add(hub);car.add(w);wheels.push(w)}
for(const x of [-.68,.68]){box(car,.44,.065,.045,white,x,.12,-length/2-.02);box(car,.58,.065,.045,red,x,.13,length/2+.02);const light=new THREE.SpotLight(0xe5edff,75,95,Math.PI/7,.5,1.1);light.position.set(x,.2,-length/2);light.target.position.set(x,-1,-40);light.castShadow=true;light.shadow.mapSize.set(1024,1024);car.add(light,light.target)}
if(profile.kind==='sport'){
box(car,1.9,.06,.4,dark,0,.65,1.8);
for(const x of [-.6,.6])box(car,.06,.35,.07,dark,x,.48,1.8);
}
for(const w of wheels){for(let i=0;i<5;i++){const spoke=box(w,.29,.035,.4,white,0,0,0);spoke.rotation.x=i*Math.PI/5;}}
body=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(0,1,18).setLinearDamping(.05).setAngularDamping(.4).setCcdEnabled(true));world.createCollider(RAPIER.ColliderDesc.cuboid(.9,.35,length/2).setMass(profile.mass).setFriction(.15).setRestitution(.05),body);reset();}
function toast(text,time=2){$('toast').textContent=text;toastTime=time}
function reset(recover=false){
if(!recover){score=0;runTime=0;peakSpeed=0;maxAir=0;checkpoint=false;completed=false;}
for(const a of [...particles,...trails]){scene.remove(a.m);a.m.material.dispose()}particles.length=0;trails.length=0;
combo=1;grounded=false;contacts=0;jumpQueued=false;keys.clear();$('results').hidden=true;
body.setTranslation({x:0,y:1,z:recover&&checkpoint?-370:18},true);body.setRotation({x:0,y:0,z:0,w:1},true);body.setLinvel(vec(),true);body.setAngvel(vec(),true);gas=100;airTime=0;flight=false;rotations.set(0,0,0);airLock=0;landCooldown=0;camera.position.set(10,7,29);toast('');}
const vaporCanvas=document.createElement('canvas');vaporCanvas.width=vaporCanvas.height=64;const ctx=vaporCanvas.getContext('2d'),gradient=ctx.createRadialGradient(32,32,0,32,32,32);gradient.addColorStop(0,'rgba(255,255,255,.95)');gradient.addColorStop(.35,'rgba(245,250,255,.5)');gradient.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,64,64);const vaporMap=new THREE.CanvasTexture(vaporCanvas);
function smoke(local,dir){if(particles.length>160)return;const p=local.clone().applyQuaternion(car.quaternion).add(car.position),v=dir.clone().applyQuaternion(car.quaternion).multiplyScalar(12).add(vec().copy(body.linvel()).multiplyScalar(.3));const m=new THREE.Sprite(new THREE.SpriteMaterial({map:vaporMap,color:0xffffff,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));m.position.copy(p);m.scale.setScalar(.55);scene.add(m);particles.push({m,v,life:.7,max:.7});}
function step(dt){if(!active||paused||completed)return;runTime+=dt;const q=new THREE.Quaternion().copy(body.rotation()),p=vec().copy(body.translation()),vel=vec().copy(body.linvel()),up=vec(0,1,0).applyQuaternion(q),forward=vec(0,0,-1).applyQuaternion(q),right=vec(1,0,0).applyQuaternion(q),mass=profile.mass;
contacts=0;airLock=Math.max(0,airLock-dt);landCooldown=Math.max(0,landCooldown-dt);
for(const w of wheels){const anchor=w.position.clone();anchor.y=0;anchor.applyQuaternion(q).add(p);const down=up.clone().negate();const hit=world.castRay(new RAPIER.Ray(anchor,down),.95,true,RAPIER.QueryFilterFlags.EXCLUDE_DYNAMIC);if(hit&&airLock===0){contacts++;const dist=hit.timeOfImpact;const av=vec().copy(body.angvel());const pointVelocity=av.cross(anchor.clone().sub(p)).add(vel).dot(up);const force=Math.max(0,(.65-dist)*mass*35-pointVelocity*mass*2.5);body.applyImpulseAtPoint(up.clone().multiplyScalar(force*dt),anchor,true)}}
grounded=contacts>=2;const allWheels=contacts===4;const input=(...k)=>k.some(a=>keys.has(a))?1:0;const throttle=input('KeyW','ArrowUp')-input('KeyS','ArrowDown'),steer=input('KeyA','ArrowLeft')-input('KeyD','ArrowRight');
if(grounded){const speed=vel.dot(forward),drift=keys.has('ShiftLeft')||keys.has('ShiftRight')||(keys.has('Space')&&performance.now()-spaceAt>180);body.applyImpulse(forward.clone().multiplyScalar(throttle*profile.power*mass*dt*(speed>70&&throttle>0||speed < -16&&throttle<0?0:1)*(throttle*speed < -1?1.7:1)),true);body.applyImpulse(right.clone().multiplyScalar(-vel.dot(right)*mass*(drift?1.1:8)*dt),true);if(drift)body.applyImpulse(forward.clone().multiplyScalar(-speed*mass*1.7*dt),true);const av=body.angvel();body.setAngvel({x:av.x,y:steer*Math.min(Math.abs(speed)/8,1)*1.3*Math.sign(speed||1),z:av.z},true);
if(allWheels&&up.y>.75&&flight&&landCooldown===0){if(Math.abs(vel.y)<12){const {points}=evaluateFlight(rotations,airTime,combo);score+=points;gas=100;combo=Math.min(combo+1,5);audio.chime();toast(`CLEAN LANDING +${points} / COMBO ${combo}×`);best=Math.max(best,score);try{localStorage.setItem('void-best',best)}catch{}$('best').textContent=best}else {combo=1;audio.chime(false);toast('HARD LANDING / COMBO LOST')};flight=false;airTime=0;rotations.set(0,0,0);landCooldown=.5;}
}else{airTime+=dt;if(airTime>.18)flight=true;const av=body.angvel();const localSpin=vec(av.x,av.y,av.z).applyQuaternion(q.clone().invert());rotations.addScaledVector(localSpin,dt);maxAir=Math.max(maxAir,airTime);}
if(jumpQueued){if(grounded&&gas>=15){body.applyImpulse(vec(0,mass*9,0),true);gas-=15;airLock=.25;grounded=false;}jumpQueued=false;}
if(!grounded&&gas>0){const pitch=input('ArrowUp','KeyW')-input('ArrowDown','KeyS'),roll=input('ArrowLeft','KeyA')-input('ArrowRight','KeyD'),yaw=input('KeyQ','PageUp')-input('KeyE','PageDown'),lift=input('Space');if(pitch||roll||yaw||lift){const factor=Math.min(1,gas/(dt*23));const torque=vec(pitch*2.1*(profile.name==='Mahindra Thar'?1.5:1),yaw*1.7,roll*1.45).multiplyScalar(mass*profile.agility*dt*factor).applyQuaternion(q);body.applyTorqueImpulse(torque,true);if(lift)body.applyImpulse(up.clone().multiplyScalar(mass*17*dt*factor),true);gas=Math.max(0,gas-dt*(23+lift*10));if(lift){smoke(vec(-.7,-.3,0),vec(0,-1,0));smoke(vec(.7,-.3,0),vec(0,-1,0));}if(pitch)smoke(vec(0,0,pitch>0?-1.8:1.8),vec(0,-1,0));if(roll)smoke(vec(roll>0?.9:-.9,0,0),vec(0,-1,0));if(yaw)smoke(vec(.9,0,-1.5),vec(-yaw,0,0));}}
world.timestep=dt;world.step();if(body.translation().y < -55){reset(true);audio.chime(false);toast('RECOVERED / UNBANKED POINTS LOST');}
if(body.translation().z < -360&&grounded&&!checkpoint){checkpoint=true;toast('CHECKPOINT / RECOVERY ONLINE');}
if(body.translation().z < -465&&grounded&&!completed){completed=true;keys.clear();audio.chime();$('results').hidden=false;$('result-stats').innerHTML=`<div><span>BANKED SCORE</span><b>${score.toLocaleString()}</b></div><div><span>RUN TIME</span><b>${runTime.toFixed(1)} s</b></div><div><span>TOP SPEED</span><b>${Math.round(peakSpeed)} km/h</b></div><div><span>LONGEST FLIGHT</span><b>${maxAir.toFixed(1)} s</b></div>`;}

for(const w of wheels)w.rotation.x-=vel.dot(forward)*dt/.39;
}
let previous=performance.now(),accumulator=0;
function render(now){requestAnimationFrame(render);const delta=Math.min((now-previous)/1000,.05);previous=now;accumulator+=delta;while(accumulator>=1/60){step(1/60);accumulator-=1/60}if(body){car.position.copy(body.translation());car.quaternion.copy(body.rotation());const p=car.position;if(active){const velocity=vec().copy(body.linvel());const heading=flight&&velocity.length()>3?velocity.clone():vec(0,0,-1).applyQuaternion(car.quaternion);heading.y=0;heading.normalize();const desired=camMode===1?p.clone().add(vec(19,9,14)):camMode===2?p.clone().add(vec(0,35,12)):p.clone().add(heading.multiplyScalar(-11)).add(vec(0,5,0));camera.position.lerp(desired,1-Math.exp(-delta*4));camera.lookAt(p.clone().add(vec(0,1,0)).add(velocity.multiplyScalar(.12)));}else{const t=now*.00008;camera.position.set(p.x+8+Math.sin(t)*2,p.y+4.5,p.z+10);camera.lookAt(p.clone().add(vec(-3,.6,-3)));}
const speed=vec().copy(body.linvel()).length()*3.6;
if(active&&!paused&&!completed)peakSpeed=Math.max(peakSpeed,speed);
camera.fov=THREE.MathUtils.lerp(camera.fov,active?48+Math.min(speed/16,16):48,delta*3);camera.updateProjectionMatrix();
audio.update(speed,keys.has('KeyW')||keys.has('ArrowUp')?1:0,active&&!paused&&!completed,!grounded);
const stunt=evaluateFlight(rotations,airTime,combo);
$('pending').textContent='+'+stunt.points;
$('trick').textContent=flight?stunt.label:'BUILD SPEED. FIND YOUR LINE.';
$('altitude').textContent=Math.max(0,p.y-.65).toFixed(1);$('airtime').textContent=airTime.toFixed(1);$('combo').textContent=combo+'× COMBO';
$('flight-hud').classList.toggle('in-air',flight);$('run-time').textContent=String(Math.floor(runTime/60)).padStart(2,'0')+':'+(runTime%60).toFixed(1).padStart(4,'0');
$('run-progress').style.width=THREE.MathUtils.clamp((18-p.z)/483*100,0,100)+'%';$('checkpoint').textContent=checkpoint?'CHECKPOINT SAVED':'REACH THE RECEIVER';
$('speed').textContent=Math.round(speed).toString().padStart(3,'0');$('gas-text').textContent=Math.round(gas)+'%';$('gas-bar').style.width=gas+'%';$('gas-bar').style.background=gas<25?'#ef493c':'#e8ecee';$('score').textContent=score.toString().padStart(6,'0');$('state').textContent=!active?'SYSTEM READY':completed?'RUN COMPLETE':paused?'PAUSED':grounded?'GROUND CONTACT':`AIRBORNE / ${airTime.toFixed(1)}s`;
if(active&&!paused&&!completed&&speed>40){for(const x of [-.68,.68]){const pos=vec(x,.12,2.3).applyQuaternion(car.quaternion).add(p);const m=new THREE.Sprite(new THREE.SpriteMaterial({map:vaporMap,color:0xff1808,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));m.position.copy(pos);m.scale.set(.23,.1,1);scene.add(m);trails.push({m,life:.18});}}
}for(let i=particles.length-1;i>=0;i--){const a=particles[i];a.life-=delta;a.m.position.addScaledVector(a.v,delta);a.m.scale.setScalar(.5+(a.max-a.life)*4);a.m.material.opacity=Math.max(0,a.life/a.max);if(a.life<=0){scene.remove(a.m);a.m.material.dispose();particles.splice(i,1)}}for(let i=trails.length-1;i>=0;i--){const a=trails[i];a.life-=delta;a.m.material.opacity=Math.max(0,a.life/.18);if(a.life<=0){scene.remove(a.m);a.m.material.dispose();trails.splice(i,1)}}if(toastTime>0){toastTime-=delta;if(toastTime<=0)$('toast').textContent=''}if(highFX)composer.render();else renderer.render(scene,camera);}
function pause(value){paused=value;$('ui').classList.toggle('paused',value);keys.clear();jumpQueued=false;$('pause-menu').hidden=!value||!$('help').hidden;}
window.addEventListener('keydown',e=>{if(e.target.tagName==='SELECT')return;if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','PageUp','PageDown'].includes(e.code))e.preventDefault();if(e.repeat)return;keys.add(e.code);if(e.code==='Space')spaceAt=performance.now();if(e.code==='KeyR'&&active&&$('help').hidden){reset();pause(false)}if(e.code==='KeyX'&&active&&!completed&&$('help').hidden){reset(true);pause(false);toast('RECOVERED / COMBO RESET')}if(e.code==='KeyC')camMode=(camMode+1)%3;if(e.code==='Escape'&&active&&!completed&&$('help').hidden)pause(!paused)});
window.addEventListener('keyup',e=>{keys.delete(e.code);if(e.code==='Space'&&performance.now()-spaceAt<180&&active&&!paused)jumpQueued=true});window.addEventListener('blur',()=>{if(active)pause(true);keys.clear()});
$('vehicle').onchange=e=>{selected=Number(e.target.value);profile=fleet[selected];$('weight').textContent=profile.weight;$('agility').textContent=profile.label;makeCar()};$('launch').onclick=()=>{audio.start();active=true;pause(false);$('ui').classList.add('playing');reset();toast('W TO ACCELERATE  /  SPACE TO JUMP',3)};$('garage').onclick=()=>{$('help').hidden=true;active=false;pause(false);keys.clear();$('ui').classList.remove('playing');reset()};$('help-button').onclick=()=>{$('help').hidden=false;if(active)pause(true)};$('close-help').onclick=()=>{$('help').hidden=true;if(active)pause(false)};
$('course-select').onchange=e=>{courseIndex=Number(e.target.value);buildCourse();reset()};
$('sound').onclick=()=>{audio.start();audio.enabled=!audio.enabled;$('sound').textContent=audio.enabled?'SOUND ON':'SOUND OFF'};
$('quality').onclick=()=>{highFX=!highFX;$('quality').textContent=highFX?'FX HIGH':'FX LOW';renderer.setPixelRatio(Math.min(devicePixelRatio,highFX?1.6:1));composer.setPixelRatio(renderer.getPixelRatio())};
$('resume').onclick=()=>{audio.start();pause(false)};$('restart').onclick=()=>{reset();pause(false)};
$('again').onclick=()=>{reset();pause(false)};$('result-garage').onclick=()=>$('garage').click();
window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);composer.setSize(innerWidth,innerHeight)});
try{await RAPIER.init();world=new RAPIER.World({x:0,y:-9.81,z:0});buildCourse();makeCar();$('loading').remove();requestAnimationFrame(render);window.__void={getState:()=>({active,gas,score,grounded,contacts,position:body.translation(),velocity:body.linvel(),vehicle:profile.name,course:courseIndex,runTime,checkpoint,completed,paused,combo}),reset};}catch(error){$('loading').textContent='STARTUP FAILED: '+error.message;console.error(error)}
