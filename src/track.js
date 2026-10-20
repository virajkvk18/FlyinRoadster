import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {FACILITIES,carJumpLayout} from './gameplay.js';

export function createTrack(scene, world, RAPIER, mode, difficulty, carCount=3) {
  const group=new THREE.Group();scene.add(group);const colliders=[],whiteParts=[],redParts=[];
  const customObjects=[],boostPads=[];
  const road=new THREE.MeshStandardMaterial({color:0x262a30,roughness:.78,metalness:.12});
  const white=new THREE.MeshStandardMaterial({color:0xcbd8e5,emissive:0xcbd8e5,emissiveIntensity:1.8});
  const red=new THREE.MeshStandardMaterial({color:0xff4532,emissive:0xff3020,emissiveIntensity:2.5});
  const cyan=new THREE.MeshStandardMaterial({color:0x00f0ff,emissive:0x00d4ff,emissiveIntensity:2.8});
  const yellow=new THREE.MeshStandardMaterial({color:0xffcc00,emissive:0xffaa00,emissiveIntensity:2.2});
  const c=FACILITIES[difficulty]||FACILITIES[0],layout=carJumpLayout(carCount),receiver=mode==='carjump'?layout.receiver:-150-c.gap;
  const obstacleHandles=new Set(),extraMaterials=[cyan,yellow];

  function line(a,b,color='white',radius=.035){
    const d=new THREE.Vector3().subVectors(b,a),g=new THREE.CylinderGeometry(radius,radius,d.length(),5);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize()));
    g.translate((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);
    (color==='red'?redParts:whiteParts).push(g);
  }
  const v=(x,y,z)=>new THREE.Vector3(x,y,z);

  function surface(start,end,width,height){
    const vertices=[],indices=[],uv=[],n=Math.max(2,Math.ceil(Math.abs(end-start)/2));
    for(let i=0;i<=n;i++){const z=start+(end-start)*i/n;vertices.push(-width/2,height(z),z,width/2,height(z),z);uv.push(0,z/10,width/10,z/10);if(i<n){const k=i*2;indices.push(k,k+2,k+1,k+1,k+2,k+3);}}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const m=new THREE.Mesh(g,road);m.receiveShadow=true;group.add(m);
    colliders.push(world.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(vertices),new Uint32Array(indices)).setFriction(.65)));
    for(let i=0;i<n;i++){const z=start+(end-start)*i/n,zz=start+(end-start)*(i+1)/n;for(const x of [-width/2,width/2])line(v(x,height(z)+.04,z),v(x,height(zz)+.04,zz),i<3||i>n-4?'red':'white');if(i%5===0)line(v(0,height(z)+.018,z),v(0,height(zz)+.018,zz),'white',.018);}
  }

  function block(x,y,z,w,h,d,mat,obstacle=false){
    const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);
    const col=world.createCollider(RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setTranslation(x,y,z).setFriction(.5));colliders.push(col);if(obstacle)obstacleHandles.add(col.handle);return mesh;
  }

  function localRamp(x,z,length,width,height,rotY=0){
    const vertices=new Float32Array([-width/2,0,0,width/2,0,0,-width/2,height,-length,width/2,height,-length]);
    const indices=new Uint32Array([0,1,2,1,3,2]);
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(vertices,3));g.setIndex(new THREE.BufferAttribute(indices,1));g.computeVertexNormals();
    if(rotY!==0)g.rotateY(rotY);
    g.translate(x,0,z);
    const m=new THREE.Mesh(g,road);m.receiveShadow=true;group.add(m);
    const posArr=new Float32Array(g.attributes.position.array);
    colliders.push(world.createCollider(RAPIER.ColliderDesc.trimesh(posArr,indices)));
    const edgeOffset=new THREE.Vector3(-width/2,0,0).applyAxisAngle(new THREE.Vector3(0,1,0),rotY);
    const topEdge=new THREE.Vector3(-width/2,height,-length).applyAxisAngle(new THREE.Vector3(0,1,0),rotY);
    line(v(x+edgeOffset.x,.04,z+edgeOffset.z),v(x+topEdge.x,height+.04,z+topEdge.z),'red',.05);
  }

  function addBoostStrip(x,z,w=5,l=9,rotY=0){
    const padMat=new THREE.MeshBasicMaterial({color:0x00f5d4,transparent:true,opacity:.85});
    const g=new THREE.PlaneGeometry(w,l);g.rotateX(-Math.PI/2);g.rotateY(rotY);
    const mesh=new THREE.Mesh(g,padMat);mesh.position.set(x,.03,z);group.add(mesh);
    boostPads.push({position:new THREE.Vector3(x,0,z),radius:Math.max(w,l)/1.6,rotY});
    extraMaterials.push(padMat);
  }

  if(mode==='free'){
    // Large stunt arena (800x800)
    block(0,-.5,0,800,1,800,road);
    for(let n=-400;n<=400;n+=40){line(v(n,.02,-400),v(n,.02,400),'white',.013);line(v(-400,.02,n),v(400,.02,n),'white',.013);}
    const barrier=new THREE.MeshStandardMaterial({color:0x4b5764,roughness:.75});
    const orange=new THREE.MeshStandardMaterial({color:0xe78435,roughness:.7});
    const neonMat=new THREE.MeshStandardMaterial({color:0x39ff14,emissive:0x22cc00,emissiveIntensity:2});
    extraMaterials.push(barrier,orange,neonMat);

    // Perimeter boundary walls
    for(const x of [-400,400])block(x,2,0,4,4,800,barrier);
    for(const z of [-400,400])block(0,2,z,800,4,4,barrier);

    // Varied stunt ramps: standard, medium, and mega ramps
    localRamp(0,-70,40,16,5); // Center launch ramp
    localRamp(-85,-110,45,18,8); // High ramp west
    localRamp(95,-60,35,14,4); // East ramp
    localRamp(140,120,45,18,7,Math.PI); // South-east reverse ramp
    localRamp(-130,130,40,16,6,Math.PI); // South-west reverse ramp
    localRamp(0,180,60,22,12,Math.PI); // MEGA JUMP RAMP (12m high)

    // Slalom drift courses
    for(let i=0;i<16;i++){
      const x=45+(i%2)*12,z=35-i*14;
      const g=new THREE.ConeGeometry(.75,1.6,8),m=new THREE.Mesh(g,orange);m.position.set(x,.8,z);group.add(m);
      colliders.push(world.createCollider(RAPIER.ColliderDesc.cone(.8,.75).setTranslation(x,.8,z)));
    }

    // Concrete barrier chicane
    for(let i=0;i<10;i++)block(-95+i*14,1,75,6,2,3,barrier);
    for(let i=0;i<6;i++)block(-130,1+i*.4,-90-i*7,8,2+i*.6,4,barrier);

    // Stunt Hoop / Ring to fly through
    const ringGeo=new THREE.TorusGeometry(7,.4,8,32);ringGeo.rotateY(Math.PI/2);
    const ringMesh=new THREE.Mesh(ringGeo,cyan);ringMesh.position.set(0,9,-130);group.add(ringMesh);
    const ringLeg1=new THREE.Mesh(new THREE.CylinderGeometry(.25,.25,9,8),barrier);ringLeg1.position.set(-6.8,4.5,-130);group.add(ringLeg1);
    const ringLeg2=new THREE.Mesh(new THREE.CylinderGeometry(.25,.25,9,8),barrier);ringLeg2.position.set(6.8,4.5,-130);group.add(ringLeg2);

    // Speed boost pads
    addBoostStrip(0,-30,6,12,0);
    addBoostStrip(0,120,6,14,Math.PI);
    addBoostStrip(-85,-50,6,10,0);
    addBoostStrip(95,-20,6,10,0);

  }else if(mode==='carjump'){
    // Runway approach
    surface(-80,50,22,()=>0);
    // Takeoff Ramp (smooth curved trajectory)
    surface(-110,-80,18,z=>4.5*((z+80)/30)**2);
    // Landing receiver deck past the lineup
    surface(receiver-130,receiver,32,z=>Math.max(0,4-(receiver-z)*.04));
    surface(-550,receiver-130,32,()=>0);

    const paint=new THREE.MeshStandardMaterial({color:0x5e7994,metalness:.6,roughness:.35});
    const glass=new THREE.MeshStandardMaterial({color:0x111c26,roughness:.1,metalness:.4});
    const tire=new THREE.MeshStandardMaterial({color:0x121417,roughness:.9});
    extraMaterials.push(paint,glass,tire);

    // Parked Cars Lineup
    for(const [w,h,d,y,mat] of [[4.5,.68,1.9,.68,paint],[2.2,.58,1.6,1.28,glass]]){
      const mesh=new THREE.InstancedMesh(new THREE.BoxGeometry(w,h,d),mat,layout.count);mesh.castShadow=true;group.add(mesh);
      for(let i=0;i<layout.count;i++){
        const z=-116-i*3.3;
        mesh.setMatrixAt(i,new THREE.Matrix4().makeTranslation(0,y,z));
        const col=world.createCollider(RAPIER.ColliderDesc.cuboid(w/2,h/2,d/2).setTranslation(0,y,z));
        colliders.push(col);obstacleHandles.add(col.handle);
      }
    }
    const wheels=new THREE.InstancedMesh(new THREE.CylinderGeometry(.35,.35,.24,12),tire,layout.count*4);group.add(wheels);let wi=0;
    for(let i=0;i<layout.count;i++)for(const x of [-1.4,1.4])for(const zz of [-1,1]){
      const m=new THREE.Matrix4().makeRotationX(Math.PI/2);m.setPosition(x,.35,-116-i*3.3+zz);wheels.setMatrixAt(wi++,m);
    }

    // Landing zone markers
    for(const x of [-10,10])line(v(x,0,receiver-40),v(x,6,receiver-40),'white',.06);
    line(v(-10,6,receiver-40),v(10,6,receiver-40),'red',.08);

  }else if(mode==='ramp'){
    surface(-90,40,20,()=>0);
    surface(-150,-90,20,z=>c.rise*((z+90)/60)**2);
    surface(receiver-130,receiver,c.width,z=>Math.max(0,c.rise-(receiver-z)*c.rise/110));
    surface(-490,receiver-130,c.width,()=>0);
    for(const x of [-c.width/2,c.width/2])line(v(x,0,-430),v(x,7,-430),'white',.06);line(v(-c.width/2,7,-430),v(c.width/2,7,-430),'red',.08);

  }else if(mode==='sprint'){
    surface(-650,55,22,()=>0);
    for(let z=10;z>-650;z-=25)for(const x of [-8,8])line(v(x,.02,z),v(x+(x<0?1:-1),.02,z-2),'white',.025);

  }else{
    // Kickflip playground
    surface(-170,95,70,()=>0);
    for(const radius of [5,6,16])for(let i=0;i<64;i++){const a=i*Math.PI/32,b=(i+1)*Math.PI/32;line(v(Math.cos(a)*radius,.025,18+Math.sin(a)*radius),v(Math.cos(b)*radius,.025,18+Math.sin(b)*radius),radius===6?'red':'white',.025);}
  }

  line(v(-8,.022,12),v(8,.022,12),'white',.06);
  for(const [parts,mat] of [[whiteParts,white],[redParts,red]])if(parts.length){const merged=mergeGeometries(parts);const mesh=new THREE.Mesh(merged,mat);group.add(mesh);parts.forEach(g=>g.dispose());}

  // Dynamic In-Game Spawner for Free Roam
  function spawnObstacle(type, pos, quat) {
    const euler=new THREE.Euler().setFromQuaternion(quat,'YXZ');
    const rotY=euler.y;
    const forward=new THREE.Vector3(0,0,-1).applyEuler(new THREE.Euler(0,rotY,0));

    if(type==='ramp'){
      const w=8,l=14,h=3;
      const vertices=new Float32Array([-w/2,0,0,w/2,0,0,-w/2,h,-l,w/2,h,-l]);
      const indices=new Uint32Array([0,1,2,1,3,2]);
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(vertices,3));g.setIndex(new THREE.BufferAttribute(indices,1));g.computeVertexNormals();
      g.rotateY(rotY);g.translate(pos.x,0,pos.z);
      const mesh=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:0x3a4552,roughness:.6}));
      mesh.receiveShadow=true;mesh.castShadow=true;group.add(mesh);
      const col=world.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(g.attributes.position.array),indices));
      colliders.push(col);
      customObjects.push({mesh,col});
      return mesh;
    }
    if(type==='barrel'){
      // Stack of 6 knockback physics barrels
      const barrelMat=new THREE.MeshStandardMaterial({color:0xd32f2f,metalness:.5,roughness:.3});
      for(let row=0;row<3;row++){
        for(let colIdx=0;colIdx<=row;colIdx++){
          const bx=pos.x+(colIdx-row/2)*1.3;
          const by=.6+(2-row)*1.2;
          const bz=pos.z;
          const mesh=new THREE.Mesh(new THREE.CylinderGeometry(.45,.45,1.1,12),barrelMat);
          mesh.position.set(bx,by,bz);mesh.castShadow=true;group.add(mesh);
          const rbody=world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(bx,by,bz).setMass(35).setLinearDamping(.2).setAngularDamping(.3));
          const col=world.createCollider(RAPIER.ColliderDesc.cylinder(.55,.45).setRestitution(.3).setFriction(.6),rbody);
          customObjects.push({mesh,rbody,col,dynamic:true});
        }
      }
      return true;
    }
    if(type==='cone'){
      // Slalom cones
      const coneMat=new THREE.MeshStandardMaterial({color:0xff7700,roughness:.5});
      for(let i=0;i<4;i++){
        const cx=pos.x+forward.x*(i*5)+Math.sin(i)*2;
        const cz=pos.z+forward.z*(i*5);
        const mesh=new THREE.Mesh(new THREE.ConeGeometry(.65,1.5,8),coneMat);mesh.position.set(cx,.75,cz);mesh.castShadow=true;group.add(mesh);
        const col=world.createCollider(RAPIER.ColliderDesc.cone(.75,.65).setTranslation(cx,.75,cz));
        colliders.push(col);
        customObjects.push({mesh,col});
      }
      return true;
    }
    if(type==='boost'){
      addBoostStrip(pos.x,pos.z,7,12,rotY);
      return true;
    }
    if(type==='barrier'){
      const barrierMat=new THREE.MeshStandardMaterial({color:0x202933,roughness:.8});
      const mesh=new THREE.Mesh(new THREE.BoxGeometry(6,2,1.5),barrierMat);
      mesh.position.set(pos.x,1,pos.z);mesh.rotation.y=rotY;mesh.castShadow=true;group.add(mesh);
      const col=world.createCollider(RAPIER.ColliderDesc.cuboid(3,1,.75).setTranslation(pos.x,1,pos.z).setRotation({x:0,y:Math.sin(rotY/2),z:0,w:Math.cos(rotY/2)}));
      colliders.push(col);
      customObjects.push({mesh,col});
      return mesh;
    }
  }

  function clearCustomObstacles(){
    for(const obj of customObjects){
      if(obj.mesh){group.remove(obj.mesh);obj.mesh.geometry?.dispose();if(obj.mesh.material&&!extraMaterials.includes(obj.mesh.material))obj.mesh.material.dispose();}
      if(obj.rbody){try{world.removeRigidBody(obj.rbody);}catch{}}
      else if(obj.col){try{world.removeCollider(obj.col,true);}catch{}}
    }
    customObjects.length=0;
  }

  function syncDynamicCustoms(){
    for(const obj of customObjects){
      if(obj.dynamic&&obj.rbody&&obj.mesh){
        const t=obj.rbody.translation(),r=obj.rbody.rotation();
        obj.mesh.position.set(t.x,t.y,t.z);
        obj.mesh.quaternion.set(r.x,r.y,r.z,r.w);
      }
    }
  }

  return {
    receiver,
    layout,
    obstacleHandles,
    boostPads,
    free:mode==='free',
    carCount:layout.count,
    width:mode==='free'?800:mode==='carjump'?32:mode==='ramp'?c.width:mode==='kickflip'?70:22,
    spawnObstacle,
    clearCustomObstacles,
    syncDynamicCustoms,
    dispose(){
      clearCustomObstacles();
      scene.remove(group);
      group.traverse(o=>{if(o.isMesh)o.geometry.dispose();});
      road.dispose();white.dispose();red.dispose();
      extraMaterials.forEach(m=>m.dispose());
      colliders.forEach(col=>{try{world.removeCollider(col,true);}catch{}});
    }
  };
}
