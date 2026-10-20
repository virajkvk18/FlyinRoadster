import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {FACILITIES} from './gameplay.js';

export function createTrack(scene, world, RAPIER, mode, difficulty) {
  const group=new THREE.Group();scene.add(group);const colliders=[],whiteParts=[],redParts=[];
  const road=new THREE.MeshStandardMaterial({color:0x262a30,roughness:.78,metalness:.12});
  const white=new THREE.MeshStandardMaterial({color:0xcbd8e5,emissive:0xcbd8e5,emissiveIntensity:1.8});
  const red=new THREE.MeshStandardMaterial({color:0xff4532,emissive:0xff3020,emissiveIntensity:2.5});
  const c=FACILITIES[difficulty],receiver=-150-c.gap;
  function line(a,b,color='white',radius=.035){
    const d=new THREE.Vector3().subVectors(b,a),g=new THREE.CylinderGeometry(radius,radius,d.length(),5);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize()));g.translate((a.x+b.x)/2,(a.y+b.y)/2,(a.z+b.z)/2);(color==='red'?redParts:whiteParts).push(g);
  }
  const v=(x,y,z)=>new THREE.Vector3(x,y,z);
  function surface(start,end,width,height){
    const vertices=[],indices=[],uv=[],n=Math.max(2,Math.ceil((end-start)/2));
    for(let i=0;i<=n;i++){const z=start+(end-start)*i/n;vertices.push(-width/2,height(z),z,width/2,height(z),z);uv.push(0,z/10,width/10,z/10);if(i<n){const k=i*2;indices.push(k,k+2,k+1,k+1,k+2,k+3);}}
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(indices);g.computeVertexNormals();const m=new THREE.Mesh(g,road);m.receiveShadow=true;group.add(m);
    colliders.push(world.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(vertices),new Uint32Array(indices)).setFriction(.65)));
    for(let i=0;i<n;i++){const z=start+(end-start)*i/n,zz=start+(end-start)*(i+1)/n;for(const x of [-width/2,width/2])line(v(x,height(z)+.04,z),v(x,height(zz)+.04,zz),i<3||i>n-4?'red':'white');if(i%5===0)line(v(0,height(z)+.018,z),v(0,height(zz)+.018,zz),'white',.018);}
  }
  if(mode==='ramp'){
    surface(-90,40,20,()=>0);surface(-150,-90,20,z=>c.rise*((z+90)/60)**2);
    surface(receiver-130,receiver,c.width,z=>Math.max(0,c.rise-(receiver-z)*c.rise/110));surface(-490,receiver-130,c.width,()=>0);
    for(const x of [-c.width/2,c.width/2])line(v(x,0,-430),v(x,7,-430),'white',.06);line(v(-c.width/2,7,-430),v(c.width/2,7,-430),'red',.08);
  }else if(mode==='sprint'){
    surface(-650,55,22,()=>0);
    for(let z=10;z>-650;z-=25)for(const x of [-8,8])line(v(x,.02,z),v(x+(x<0?1:-1),.02,z-2),'white',.025);
  }else{
    surface(-170,95,70,()=>0);
    // Concentric launch-zone markings, merged into the light mesh.
    for(const radius of [5,6,16])for(let i=0;i<64;i++){const a=i*Math.PI/32,b=(i+1)*Math.PI/32;line(v(Math.cos(a)*radius,.025,18+Math.sin(a)*radius),v(Math.cos(b)*radius,.025,18+Math.sin(b)*radius),radius===6?'red':'white',.025);}
  }
  line(v(-8,.022,12),v(8,.022,12),'white',.06);
  for(const [parts,mat] of [[whiteParts,white],[redParts,red]])if(parts.length){const merged=mergeGeometries(parts);const mesh=new THREE.Mesh(merged,mat);group.add(mesh);parts.forEach(g=>g.dispose());}
  return {receiver,width:mode==='ramp'?c.width:mode==='kickflip'?70:22,
    dispose(){scene.remove(group);group.traverse(o=>{if(o.isMesh)o.geometry.dispose();});road.dispose();white.dispose();red.dispose();colliders.forEach(col=>world.removeCollider(col,true));}
  };
}
