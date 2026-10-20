import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const FLEET = [
  {name:'Roadster',kind:'sport',mass:1250,power:25,agility:1.35,color:0xf0f4f8,length:4.5,underglow:0x00f5d4},
  {name:'Cybertruck',kind:'truck',mass:3100,power:19,agility:.75,color:0xa0abb2,length:5.2,underglow:0x38bdf8},
  {name:'Model S',kind:'sedan',mass:2100,power:28,agility:1.05,color:0x8b1e2e,length:4.8,underglow:0xff4458},
  {name:'Thar',kind:'suv',mass:1900,power:20,agility:1.15,color:0xc2bcab,length:4.1,underglow:0xffb703},
  {name:'Swift',kind:'hatch',mass:950,power:21,agility:1.65,color:0xe63946,length:3.6,underglow:0xc5f879},
  {name:'Safari',kind:'suv',mass:2200,power:21,agility:.9,color:0x1b4348,length:4.6,underglow:0x00f0ff},
];

export function createVehicle(profile) {
  const group = new THREE.Group(), wheels = [];
  const paint = new THREE.MeshPhysicalMaterial({
    color: profile.color,
    metalness: .75,
    roughness: .2,
    clearcoat: 1.0,
    clearcoatRoughness: .12
  });
  const glass = new THREE.MeshPhysicalMaterial({
    color: 0x0e1722,
    metalness: .4,
    roughness: .08,
    clearcoat: 1.0,
    transmission: .25,
    ior: 1.5
  });
  const rubber = new THREE.MeshStandardMaterial({color:0x0f1114,roughness:.92});
  const metal = new THREE.MeshStandardMaterial({color:0x9da6af,metalness:.9,roughness:.18});
  const black = new THREE.MeshStandardMaterial({color:0x07090d,metalness:.4,roughness:.35});
  const lamp = new THREE.MeshStandardMaterial({color:0xe8f5ff,emissive:0xd0ecff,emissiveIntensity:4.5});
  const tail = new THREE.MeshStandardMaterial({color:0xff2b14,emissive:0xff1c05,emissiveIntensity:3.5});
  const thrusterMetal = new THREE.MeshStandardMaterial({color:0x1e242b,metalness:.85,roughness:.3});
  const plasmaMat = new THREE.MeshStandardMaterial({color:0x00f0ff,emissive:0x00d9ff,emissiveIntensity:6.0});
  const underglowMat = new THREE.MeshBasicMaterial({color:profile.underglow||0x00f5d4,transparent:true,opacity:.75});

  const add = (geo, mat, parent = group) => {
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = true; m.receiveShadow = true; parent.add(m); return m;
  };
  const box = (w, h, d, mat, x, y, z, r = .04, parent = group) => {
    const m = add(new RoundedBoxGeometry(w, h, d, 2, r), mat, parent);
    m.position.set(x, y, z); return m;
  };

  const length = profile.length, tall = profile.kind === 'suv', truck = profile.kind === 'truck';

  // Aerodynamic shaped bodywork
  const sections = [[-.5,.68,-.12,.04],[-.43,.9,-.2,.2],[-.23,.96,-.22,.34],[.2,.96,-.22,.35],[.43,.9,-.17,.28],[.5,.73,-.08,.16]];
  const points = [], indices = [];
  for(const [z,w,b,t] of sections) for(const [x,y] of [[-w*.82,b],[-w,b+.12],[-w*.92,t],[w*.92,t],[w,b+.12],[w*.82,b]]) points.push(x,y,z*length);
  for(let i=0;i<sections.length-1;i++) for(let j=0;j<6;j++){const a=i*6+j,b=i*6+(j+1)%6,c=a+6,d=b+6;indices.push(a,c,b,b,c,d);}
  for(let j=1;j<5;j++){indices.push(0,j,j+1);const k=(sections.length-1)*6;indices.push(k,k+j+1,k+j);}
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(points,3));
  geo.setIndex(indices);geo.computeVertexNormals();add(geo,paint);

  // Carbon Underbody
  box(1.84,.12,length*.87,black,0,-.2,0);

  // Cockpit glass canopy
  const h = tall ? .96 : truck ? .75 : .51, front = -length*.25, rear = length*.27;
  const canopy = new THREE.BufferGeometry();
  canopy.setAttribute('position',new THREE.Float32BufferAttribute([
    -.77,.31,front, .77,.31,front, -.64,.31+h,front+.48, .64,.31+h,front+.48,
    -.77,.31,rear,  .77,.31,rear,  -.65,.31+h,rear-.22,  .65,.31+h,rear-.22
  ],3));
  canopy.setIndex([0,2,1,1,2,3,4,5,6,5,7,6,0,4,2,4,6,2,1,3,5,5,3,7,2,6,3,3,6,7]);
  canopy.computeVertexNormals();add(canopy,glass);
  box(1.3,.045,rear-front-.7,paint,0,.34+h,(front+rear+.26)/2);

  // Side mirrors & Pillars
  for(const x of [-.8,.8]){
    box(.08,h*.8,.065,paint,x,.3+h*.4,.3);
    box(.2,.11,.28,paint,x*1.25,.5,-.48);
  }

  // Wheels & Spoke Assemblies
  for(const x of [-.99,.99]) for(const z of [-length*.31,length*.31]){
    const pivot = new THREE.Group();pivot.position.set(x,-.23,z);group.add(pivot);
    const spin = new THREE.Group();pivot.add(spin);
    const tire = add(new THREE.CylinderGeometry(.36,.36,.26,32),rubber,spin);tire.rotation.z = Math.PI/2;
    const hub = add(new THREE.CylinderGeometry(.235,.235,.275,24),black,spin);hub.rotation.z = Math.PI/2;
    for(let i=0;i<5;i++){const spoke=add(new THREE.BoxGeometry(.29,.036,.43),metal,spin);spoke.rotation.x = i*Math.PI/5;}
    const center = add(new THREE.CylinderGeometry(.075,.075,.29,16),metal,spin);center.rotation.z = Math.PI/2;
    // Caliper glow accent
    const caliper = add(new THREE.BoxGeometry(.09,.16,.14),plasmaMat,spin);caliper.position.set(0,.2,0);
    wheels.push({pivot,spin,anchor:new THREE.Vector3(x,0,z),front:z<0});
  }

  // Headlights & Tail Lights with SpotLight Projectors
  for(const x of [-.63,.63]){
    box(.45,.045,.055,lamp,x,.1,-length*.49,.015);
    box(.57,.05,.055,tail,x,.12,length*.49,.015);
    const headlight = new THREE.SpotLight(0xd4e8ff,45,65,.4,.6,1.2);
    headlight.position.set(x,.15,-length*.48);
    headlight.target.position.set(x,-1,-32);
    group.add(headlight,headlight.target);
  }

  // Dual Rear Rocket Jet Thruster Nozzles
  const thrusters = [];
  for(const x of [-.42,.42]){
    const nozzle = new THREE.Group();
    nozzle.position.set(x,.16,length*.485);
    // Outer titanium exhaust bell
    const cone = add(new THREE.CylinderGeometry(.16,.19,.32,16,1,true),thrusterMetal,nozzle);
    cone.rotation.x = Math.PI/2;
    // Inner plasma injector core
    const core = add(new THREE.CircleGeometry(.14,16),plasmaMat,nozzle);
    core.rotation.y = Math.PI;
    core.position.z = .06;
    group.add(nozzle);
    thrusters.push({group:nozzle,core});
  }

  // Deployable Aero Flight Wings (extend outwards when airborne)
  const leftWing = new THREE.Group(), rightWing = new THREE.Group();
  leftWing.position.set(-.88,.24,length*.08);
  rightWing.position.set(.88,.24,length*.08);

  const wingGeo = new THREE.BufferGeometry();
  wingGeo.setAttribute('position',new THREE.Float32BufferAttribute([
    0,0,-.45, 0,0,.45, -.82,.04,.15, -.82,.04,-.15
  ],3));
  wingGeo.setIndex([0,2,1,0,3,2]);wingGeo.computeVertexNormals();
  const leftWingMesh = new THREE.Mesh(wingGeo,black);leftWingMesh.castShadow=true;leftWing.add(leftWingMesh);

  const wingGeoR = wingGeo.clone();
  wingGeoR.scale(-1,1,1);wingGeoR.computeVertexNormals();
  const rightWingMesh = new THREE.Mesh(wingGeoR,black);rightWingMesh.castShadow=true;rightWing.add(rightWingMesh);

  // Wingtip LED markers
  const tipL = add(new THREE.BoxGeometry(.04,.02,.35),plasmaMat,leftWing);tipL.position.set(-.82,.04,0);
  const tipR = add(new THREE.BoxGeometry(.04,.02,.35),plasmaMat,rightWing);tipR.position.set(.82,.04,0);
  group.add(leftWing,rightWing);

  // Neon Underglow Plane (Ground Effect Glow)
  const underglowMesh = new THREE.Mesh(new THREE.PlaneGeometry(2.1,length*.85),underglowMat);
  underglowMesh.rotation.x = -Math.PI/2;
  underglowMesh.position.y = -.27;
  group.add(underglowMesh);

  // Sport spoiler & aerodynamic diffusers
  if(profile.kind === 'sport'){
    box(1.72,.06,.3,black,0,.54,length*.39);
    for(const x of [-.6,.6]) box(.045,.24,.07,black,x,.4,length*.39);
  }
  for(const x of [-.7,.7]) box(.1,.06,length*.45,black,x,.35,0);

  return {
    group,
    wheels,
    tail,
    thrusters,
    wings: {left:leftWing,right:rightWing},
    underglow: underglowMesh,
    profile,
    dispose(){
      const geometry = new Set(), materials = new Set();
      group.traverse(o=>{if(o.isMesh){geometry.add(o.geometry);materials.add(o.material);}});
      geometry.forEach(g=>g.dispose());
      materials.forEach(m=>m.dispose());
      underglowMat.dispose();
    }
  };
}
