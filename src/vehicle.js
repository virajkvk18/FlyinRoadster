import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const FLEET = [
  {name:'Roadster',kind:'sport',mass:1250,power:24,agility:1.3,color:0xe5e9ed,length:4.5},
  {name:'Cybertruck',kind:'truck',mass:3100,power:18,agility:.7,color:0x939da4,length:5.2},
  {name:'Model S',kind:'sedan',mass:2100,power:27,agility:1,color:0x7b1e2b,length:4.8},
  {name:'Thar',kind:'suv',mass:1900,power:19,agility:1.1,color:0xbdb7a6,length:4.1},
  {name:'Swift',kind:'hatch',mass:950,power:20,agility:1.6,color:0xdd3b29,length:3.6},
  {name:'Safari',kind:'suv',mass:2200,power:20,agility:.85,color:0x244c50,length:4.6},
];

export function createVehicle(profile) {
  const group = new THREE.Group(), wheels=[];
  const paint = new THREE.MeshPhysicalMaterial({color:profile.color,metalness:.65,roughness:.24,clearcoat:1,clearcoatRoughness:.16});
  const glass = new THREE.MeshPhysicalMaterial({color:0x131c25,metalness:.35,roughness:.12,clearcoat:1});
  const rubber = new THREE.MeshStandardMaterial({color:0x101115,roughness:.9});
  const metal = new THREE.MeshStandardMaterial({color:0x8d949c,metalness:.85,roughness:.23});
  const black = new THREE.MeshStandardMaterial({color:0x090c10,metalness:.3,roughness:.4});
  const lamp = new THREE.MeshStandardMaterial({color:0xe5f4ff,emissive:0xd7edff,emissiveIntensity:4});
  const tail = new THREE.MeshStandardMaterial({color:0xff301c,emissive:0xff1808,emissiveIntensity:3});
  const add=(geo,mat,parent=group)=>{const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;};
  const box=(w,h,d,mat,x,y,z,r=.04)=>{const m=add(new RoundedBoxGeometry(w,h,d,2,r),mat);m.position.set(x,y,z);return m;};
  const length=profile.length, tall=profile.kind==='suv', truck=profile.kind==='truck';
  // Continuous shaped coachwork, tapering at the nose and rear.
  const sections=[[-.5,.68,-.12,.04],[-.43,.9,-.2,.2],[-.23,.96,-.22,.34],[.2,.96,-.22,.35],[.43,.9,-.17,.28],[.5,.73,-.08,.16]];
  const points=[],indices=[];
  for(const [z,w,b,t] of sections) for(const [x,y] of [[-w*.82,b],[-w,b+.12],[-w*.92,t],[w*.92,t],[w,b+.12],[w*.82,b]])points.push(x,y,z*length);
  for(let i=0;i<sections.length-1;i++)for(let j=0;j<6;j++){const a=i*6+j,b=i*6+(j+1)%6,c=a+6,d=b+6;indices.push(a,c,b,b,c,d);}
  for(let j=1;j<5;j++){indices.push(0,j,j+1);const k=(sections.length-1)*6;indices.push(k,k+j+1,k+j);}
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));geo.setIndex(indices);geo.computeVertexNormals();add(geo,paint);
  box(1.84,.12,length*.87,black,0,-.2,0);
  // Angled glass canopy with sloping windshield and rear window.
  const h=tall?.96:truck?.75:.51, front=-length*.25, rear=length*.27;
  const canopy=new THREE.BufferGeometry();canopy.setAttribute('position',new THREE.Float32BufferAttribute([
    -.77,.31,front,.77,.31,front,-.64,.31+h,front+.48,.64,.31+h,front+.48,
    -.77,.31,rear,.77,.31,rear,-.65,.31+h,rear-.22,.65,.31+h,rear-.22],3));
  canopy.setIndex([0,2,1,1,2,3,4,5,6,5,7,6,0,4,2,4,6,2,1,3,5,5,3,7,2,6,3,3,6,7]);canopy.computeVertexNormals();add(canopy,glass);
  box(1.3,.045,rear-front-.7,paint,0,.34+h,(front+rear+.26)/2);
  for(const x of [-.8,.8]){box(.08,h*.8,.065,paint,x,.3+h*.4,.3);box(.2,.11,.28,paint,x*1.25,.5,-.48);}
  for(const x of [-.99,.99])for(const z of [-length*.31,length*.31]){
    const pivot=new THREE.Group();pivot.position.set(x,-.23,z);group.add(pivot);
    const spin=new THREE.Group();pivot.add(spin);
    const tire=add(new THREE.CylinderGeometry(.36,.36,.26,32),rubber,spin);tire.rotation.z=Math.PI/2;
    const hub=add(new THREE.CylinderGeometry(.235,.235,.275,24),black,spin);hub.rotation.z=Math.PI/2;
    for(let i=0;i<5;i++){const spoke=add(new THREE.BoxGeometry(.29,.036,.43),metal,spin);spoke.rotation.x=i*Math.PI/5;}
    const center=add(new THREE.CylinderGeometry(.075,.075,.29,16),metal,spin);center.rotation.z=Math.PI/2;
    wheels.push({pivot,spin,anchor:new THREE.Vector3(x,0,z),front:z<0});
  }
  for(const x of [-.63,.63]){
    box(.45,.045,.055,lamp,x,.1,-length*.49,.015);box(.57,.05,.055,tail,x,.12,length*.49,.015);
    const light=new THREE.SpotLight(0xd4e8ff,45,65,.4,.6,1.2);light.position.set(x,.15,-length*.48);light.target.position.set(x,-1,-32);group.add(light,light.target);
  }
  if(profile.kind==='sport'){box(1.7,.06,.3,black,0,.54,length*.39);for(const x of [-.6,.6])box(.045,.24,.07,black,x,.4,length*.39);}
  for(const x of [-.7,.7])box(.1,.06,length*.45,black,x,.35,0);
  return {group,wheels,tail,dispose(){const geometry=new Set(),materials=new Set();group.traverse(o=>{if(o.isMesh){geometry.add(o.geometry);materials.add(o.material);}});geometry.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
