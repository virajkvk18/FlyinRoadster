import * as THREE from 'three';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {FACILITIES,carJumpLayout} from './gameplay.js';

export function createTrack(scene, world, RAPIER, mode, difficulty, carCount = 3) {
  const group = new THREE.Group();
  scene.add(group);
  const colliders = [], whiteParts = [], redParts = [], cyanParts = [];
  const customObjects = [], boostPads = [];

  const road = new THREE.MeshStandardMaterial({color: 0x1a1e24, roughness: .85, metalness: .18});
  const roadStrip = new THREE.MeshStandardMaterial({color: 0x0f1318, roughness: .9, metalness: .08});
  const white = new THREE.MeshStandardMaterial({color: 0xe2ecf7, emissive: 0xcbd8e5, emissiveIntensity: 2.2});
  const red = new THREE.MeshStandardMaterial({color: 0xff3b2b, emissive: 0xff2515, emissiveIntensity: 3.2});
  const cyan = new THREE.MeshStandardMaterial({color: 0x00f0ff, emissive: 0x00d4ff, emissiveIntensity: 3.5});
  const yellow = new THREE.MeshStandardMaterial({color: 0xffd37a, emissive: 0xffaa00, emissiveIntensity: 2.8});
  const towerMat = new THREE.MeshStandardMaterial({color: 0x090d14, roughness: .9, metalness: .3});

  const c = FACILITIES[difficulty] || FACILITIES[0];
  const layout = carJumpLayout(carCount);
  const receiver = mode === 'carjump' ? layout.receiver : -150 - c.gap;
  const obstacleHandles = new Set(), extraMaterials = [roadStrip, cyan, yellow, towerMat];

  function line(a, b, color = 'white', radius = .038) {
    const d = new THREE.Vector3().subVectors(b, a), g = new THREE.CylinderGeometry(radius, radius, d.length(), 6);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
    g.translate((a.x + b.x) / 2, (a.y + b.y) / 2, (a.z + b.z) / 2);
    if (color === 'red') redParts.push(g);
    else if (color === 'cyan') cyanParts.push(g);
    else whiteParts.push(g);
  }
  const v = (x, y, z) => new THREE.Vector3(x, y, z);

  function surface(start, end, width, height) {
    const vertices = [], indices = [], uv = [], n = Math.max(2, Math.ceil(Math.abs(end - start) / 2));
    for (let i = 0; i <= n; i++) {
      const z = start + (end - start) * i / n;
      vertices.push(-width / 2, height(z), z, width / 2, height(z), z);
      uv.push(0, z / 10, width / 10, z / 10);
      if (i < n) {
        const k = i * 2;
        indices.push(k, k + 2, k + 1, k + 1, k + 2, k + 3);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(indices);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, road);
    m.receiveShadow = true;
    group.add(m);
    colliders.push(world.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(vertices), new Uint32Array(indices)).setFriction(.65)));

    for (let i = 0; i < n; i++) {
      const z = start + (end - start) * i / n, zz = start + (end - start) * (i + 1) / n;
      for (const x of [-width / 2, width / 2]) {
        line(v(x, height(z) + .04, z), v(x, height(zz) + .04, zz), i < 3 || i > n - 4 ? 'red' : 'cyan', .042);
      }
      if (i % 4 === 0) {
        line(v(0, height(z) + .02, z), v(0, height(zz) + .02, zz), 'white', .022);
      }
    }
  }

  function block(x, y, z, w, h, d, mat, obstacle = false) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
    const col = world.createCollider(RAPIER.ColliderDesc.cuboid(w / 2, h / 2, d / 2).setTranslation(x, y, z).setFriction(.5));
    colliders.push(col);
    if (obstacle) obstacleHandles.add(col.handle);
    return mesh;
  }

  function localRamp(x, z, length, width, height, rotY = 0) {
    const vertices = new Float32Array([-width / 2, 0, 0, width / 2, 0, 0, -width / 2, height, -length, width / 2, height, -length]);
    const indices = new Uint32Array([0, 1, 2, 1, 3, 2]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    g.setIndex(new THREE.BufferAttribute(indices, 1));
    g.computeVertexNormals();
    if (rotY !== 0) g.rotateY(rotY);
    g.translate(x, 0, z);
    const m = new THREE.Mesh(g, road);
    m.receiveShadow = true;
    group.add(m);
    const posArr = new Float32Array(g.attributes.position.array);
    colliders.push(world.createCollider(RAPIER.ColliderDesc.trimesh(posArr, indices)));
    const edgeOffset = new THREE.Vector3(-width / 2, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
    const topEdge = new THREE.Vector3(-width / 2, height, -length).applyAxisAngle(new THREE.Vector3(0, 1, 0), rotY);
    line(v(x + edgeOffset.x, .04, z + edgeOffset.z), v(x + topEdge.x, height + .04, z + topEdge.z), 'red', .055);
  }

  function addBoostStrip(x, z, w = 5.5, l = 10, rotY = 0) {
    const padGroup = new THREE.Group();
    padGroup.position.set(x, .025, z);
    padGroup.rotation.y = rotY;

    // Glowing base panel
    const baseMat = new THREE.MeshStandardMaterial({color: 0x00f5d4, emissive: 0x00d9b8, emissiveIntensity: 2.2, transparent: true, opacity: .75});
    const base = new THREE.Mesh(new THREE.PlaneGeometry(w, l), baseMat);
    base.rotation.x = -Math.PI / 2;
    padGroup.add(base);

    // Glowing chevron arrows
    const arrowMat = new THREE.MeshBasicMaterial({color: 0xffffff});
    for (let i = -3; i <= 3; i += 2.2) {
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(.8, 1.4, 3), arrowMat);
      arrow.rotation.x = -Math.PI / 2;
      arrow.position.set(0, .015, i);
      padGroup.add(arrow);
    }
    group.add(padGroup);
    boostPads.push({position: new THREE.Vector3(x, 0, z), radius: Math.max(w, l) / 1.5, rotY});
    extraMaterials.push(baseMat, arrowMat);
  }

  // --- Sci-Fi Void Sky & Celestial Starfield ---
  const starGeo = new THREE.BufferGeometry();
  const starCount = 1200;
  const starPositions = new Float32Array(starCount * 3);
  const starColors = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 0.9 + 0.1); // upper dome
    const radius = 600 + Math.random() * 400;
    starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    starPositions[i * 3 + 1] = radius * Math.cos(phi);
    starPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    // Subtle cyber palette: white, cyan, light violet
    const hueChoice = Math.random();
    if (hueChoice < 0.5) { starColors[i * 3] = 1; starColors[i * 3 + 1] = 1; starColors[i * 3 + 2] = 1; }
    else if (hueChoice < 0.8) { starColors[i * 3] = 0.4; starColors[i * 3 + 1] = 0.85; starColors[i * 3 + 2] = 1; }
    else { starColors[i * 3] = 0.75; starColors[i * 3 + 1] = 0.6; starColors[i * 3 + 2] = 1; }
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
  const starMat = new THREE.PointsMaterial({size: 2.2, vertexColors: true, transparent: true, opacity: .85});
  const starfield = new THREE.Points(starGeo, starMat);
  group.add(starfield);
  extraMaterials.push(starMat);

  // Distant Cyber Monoliths (Distant Skyline on the Void Horizon)
  for (let i = 0; i < 24; i++) {
    const angle = (i / 24) * Math.PI * 2;
    const dist = 480 + (i % 3) * 60;
    const mx = Math.cos(angle) * dist, mz = Math.sin(angle) * dist;
    const mh = 90 + (i * 17) % 110, mw = 22 + (i * 7) % 18;
    const monolith = block(mx, mh / 2, mz, mw, mh, mw, towerMat);
    // Vertical neon light beacon
    line(v(mx, 0, mz + mw / 2 + .3), v(mx, mh, mz + mw / 2 + .3), i % 2 === 0 ? 'cyan' : 'red', .18);
  }

  // Animated Energy Stunt Ring
  let energyRing;
  {
    const ringGeo = new THREE.TorusGeometry(8, .5, 12, 36);
    ringGeo.rotateY(Math.PI / 2);
    energyRing = new THREE.Mesh(ringGeo, cyan);
    energyRing.position.set(0, 11, -135);
    group.add(energyRing);
    const ringLeg1 = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, 11, 8), towerMat);
    ringLeg1.position.set(-7.8, 5.5, -135);
    const ringLeg2 = new THREE.Mesh(new THREE.CylinderGeometry(.3, .3, 11, 8), towerMat);
    ringLeg2.position.set(7.8, 5.5, -135);
    group.add(ringLeg1, ringLeg2);
  }

  if (mode === 'free') {
    // Large Stunt Arena (800x800)
    block(0, -.5, 0, 800, 1, 800, road);
    for (let n = -400; n <= 400; n += 40) {
      line(v(n, .02, -400), v(n, .02, 400), 'cyan', .018);
      line(v(-400, .02, n), v(400, .02, n), 'cyan', .018);
    }
    const barrier = new THREE.MeshStandardMaterial({color: 0x36414e, roughness: .75});
    const orange = new THREE.MeshStandardMaterial({color: 0xff6600, roughness: .6});
    extraMaterials.push(barrier, orange);

    for (const x of [-400, 400]) block(x, 2.5, 0, 4, 5, 800, barrier);
    for (const z of [-400, 400]) block(0, 2.5, z, 800, 5, 4, barrier);

    // Stunt ramps
    localRamp(0, -70, 40, 18, 5.5);
    localRamp(-90, -115, 45, 18, 8.5);
    localRamp(100, -65, 38, 15, 4.5);
    localRamp(145, 125, 45, 18, 7.5, Math.PI);
    localRamp(-135, 135, 40, 16, 6.5, Math.PI);
    localRamp(0, 190, 65, 24, 13, Math.PI); // MEGA 13M RAMP

    // Slalom drift course
    for (let i = 0; i < 18; i++) {
      const x = 50 + (i % 2) * 14, z = 40 - i * 14;
      const g = new THREE.ConeGeometry(.8, 1.7, 8), m = new THREE.Mesh(g, orange);
      m.position.set(x, .85, z);
      group.add(m);
      colliders.push(world.createCollider(RAPIER.ColliderDesc.cone(.85, .8).setTranslation(x, .85, z)));
    }

    for (let i = 0; i < 10; i++) block(-95 + i * 14, 1.2, 75, 6, 2.4, 3, barrier);
    for (let i = 0; i < 6; i++) block(-130, 1 + i * .4, -90 - i * 7, 8, 2 + i * .6, 4, barrier);

    // Speed boost strips
    addBoostStrip(0, -32, 7, 14, 0);
    addBoostStrip(0, 125, 7, 15, Math.PI);
    addBoostStrip(-90, -55, 6, 12, 0);
    addBoostStrip(100, -25, 6, 12, 0);

  } else if (mode === 'carjump') {
    surface(-80, 50, 22, () => 0);
    surface(-110, -80, 18, z => 4.6 * ((z + 80) / 30) ** 2);
    surface(receiver - 130, receiver, 32, z => Math.max(0, 4.2 - (receiver - z) * .04));
    surface(-550, receiver - 130, 32, () => 0);

    const paint = new THREE.MeshStandardMaterial({color: 0x5e7994, metalness: .65, roughness: .3});
    const glass = new THREE.MeshStandardMaterial({color: 0x111c26, roughness: .1, metalness: .4});
    const tire = new THREE.MeshStandardMaterial({color: 0x121417, roughness: .9});
    extraMaterials.push(paint, glass, tire);

    // Lineup of parked vehicles
    for (const [w, h, d, y, mat] of [[4.5, .68, 1.9, .68, paint], [2.2, .58, 1.6, 1.28, glass]]) {
      const mesh = new THREE.InstancedMesh(new THREE.BoxGeometry(w, h, d), mat, layout.count);
      mesh.castShadow = true;
      group.add(mesh);
      for (let i = 0; i < layout.count; i++) {
        const z = -116 - i * 3.3;
        mesh.setMatrixAt(i, new THREE.Matrix4().makeTranslation(0, y, z));
        const col = world.createCollider(RAPIER.ColliderDesc.cuboid(w / 2, h / 2, d / 2).setTranslation(0, y, z));
        colliders.push(col);
        obstacleHandles.add(col.handle);
      }
    }
    const wheels = new THREE.InstancedMesh(new THREE.CylinderGeometry(.35, .35, .24, 12), tire, layout.count * 4);
    group.add(wheels);
    let wi = 0;
    for (let i = 0; i < layout.count; i++) {
      for (const x of [-1.4, 1.4]) for (const zz of [-1, 1]) {
        const m = new THREE.Matrix4().makeRotationX(Math.PI / 2);
        m.setPosition(x, .35, -116 - i * 3.3 + zz);
        wheels.setMatrixAt(wi++, m);
      }
    }

    // Landing zone beacon gates
    for (const x of [-10, 10]) line(v(x, 0, receiver - 40), v(x, 7, receiver - 40), 'cyan', .07);
    line(v(-10, 7, receiver - 40), v(10, 7, receiver - 40), 'red', .09);

  } else if (mode === 'ramp') {
    surface(-90, 40, 20, () => 0);
    surface(-150, -90, 20, z => c.rise * ((z + 90) / 60) ** 2);
    surface(receiver - 130, receiver, c.width, z => Math.max(0, c.rise - (receiver - z) * c.rise / 110));
    surface(-490, receiver - 130, c.width, () => 0);
    for (const x of [-c.width / 2, c.width / 2]) line(v(x, 0, -430), v(x, 8, -430), 'cyan', .07);
    line(v(-c.width / 2, 8, -430), v(c.width / 2, 8, -430), 'red', .09);

  } else if (mode === 'sprint') {
    surface(-650, 55, 22, () => 0);
    for (let z = 10; z > -650; z -= 25) {
      for (const x of [-8, 8]) line(v(x, .02, z), v(x + (x < 0 ? 1.2 : -1.2), .02, z - 2.5), 'cyan', .03);
    }
  } else {
    // Kickflip Pad
    surface(-170, 95, 70, () => 0);
    for (const radius of [5, 6, 16]) {
      for (let i = 0; i < 64; i++) {
        const a = i * Math.PI / 32, b = (i + 1) * Math.PI / 32;
        line(v(Math.cos(a) * radius, .025, 18 + Math.sin(a) * radius), v(Math.cos(b) * radius, .025, 18 + Math.sin(b) * radius), radius === 6 ? 'red' : 'cyan', .03);
      }
    }
  }

  line(v(-8, .022, 12), v(8, .022, 12), 'white', .07);

  // Merge lights into optimized single drawcalls
  for (const [parts, mat] of [[whiteParts, white], [redParts, red], [cyanParts, cyan]]) {
    if (parts.length) {
      const merged = mergeGeometries(parts);
      const mesh = new THREE.Mesh(merged, mat);
      group.add(mesh);
      parts.forEach(g => g.dispose());
    }
  }

  // Dynamic In-Game Spawner
  function spawnObstacle(type, pos, quat) {
    const euler = new THREE.Euler().setFromQuaternion(quat, 'YXZ');
    const rotY = euler.y;
    const forward = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(0, rotY, 0));

    if (type === 'ramp') {
      const w = 8, l = 14, h = 3.2;
      const vertices = new Float32Array([-w / 2, 0, 0, w / 2, 0, 0, -w / 2, h, -l, w / 2, h, -l]);
      const indices = new Uint32Array([0, 1, 2, 1, 3, 2]);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      g.setIndex(new THREE.BufferAttribute(indices, 1));
      g.computeVertexNormals();
      g.rotateY(rotY);
      g.translate(pos.x, 0, pos.z);
      const mesh = new THREE.Mesh(g, new THREE.MeshStandardMaterial({color: 0x323d4a, roughness: .6}));
      mesh.receiveShadow = true; mesh.castShadow = true;
      group.add(mesh);
      const col = world.createCollider(RAPIER.ColliderDesc.trimesh(new Float32Array(g.attributes.position.array), indices));
      colliders.push(col);
      customObjects.push({mesh, col});
      return mesh;
    }
    if (type === 'barrel') {
      const barrelMat = new THREE.MeshStandardMaterial({color: 0xdd2c00, metalness: .6, roughness: .25});
      for (let row = 0; row < 3; row++) {
        for (let colIdx = 0; colIdx <= row; colIdx++) {
          const bx = pos.x + (colIdx - row / 2) * 1.35;
          const by = .6 + (2 - row) * 1.25;
          const bz = pos.z;
          const mesh = new THREE.Mesh(new THREE.CylinderGeometry(.45, .45, 1.15, 12), barrelMat);
          mesh.position.set(bx, by, bz); mesh.castShadow = true; group.add(mesh);
          const rbody = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(bx, by, bz).setMass(35).setLinearDamping(.2).setAngularDamping(.3));
          const col = world.createCollider(RAPIER.ColliderDesc.cylinder(.58, .45).setRestitution(.35).setFriction(.6), rbody);
          customObjects.push({mesh, rbody, col, dynamic: true});
        }
      }
      return true;
    }
    if (type === 'cone') {
      const coneMat = new THREE.MeshStandardMaterial({color: 0xff6600, roughness: .5});
      for (let i = 0; i < 4; i++) {
        const cx = pos.x + forward.x * (i * 5.5) + Math.sin(i) * 2.2;
        const cz = pos.z + forward.z * (i * 5.5);
        const mesh = new THREE.Mesh(new THREE.ConeGeometry(.65, 1.6, 8), coneMat);
        mesh.position.set(cx, .8, cz); mesh.castShadow = true; group.add(mesh);
        const col = world.createCollider(RAPIER.ColliderDesc.cone(.8, .65).setTranslation(cx, .8, cz));
        colliders.push(col);
        customObjects.push({mesh, col});
      }
      return true;
    }
    if (type === 'boost') {
      addBoostStrip(pos.x, pos.z, 7, 13, rotY);
      return true;
    }
    if (type === 'barrier') {
      const barrierMat = new THREE.MeshStandardMaterial({color: 0x1e2733, roughness: .8});
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(6.5, 2.2, 1.6), barrierMat);
      mesh.position.set(pos.x, 1.1, pos.z); mesh.rotation.y = rotY; mesh.castShadow = true; group.add(mesh);
      const col = world.createCollider(RAPIER.ColliderDesc.cuboid(3.25, 1.1, .8).setTranslation(pos.x, 1.1, pos.z).setRotation({x: 0, y: Math.sin(rotY / 2), z: 0, w: Math.cos(rotY / 2)}));
      colliders.push(col);
      customObjects.push({mesh, col});
      return mesh;
    }
  }

  function clearCustomObstacles() {
    for (const obj of customObjects) {
      if (obj.mesh) { group.remove(obj.mesh); obj.mesh.geometry?.dispose(); if (obj.mesh.material && !extraMaterials.includes(obj.mesh.material)) obj.mesh.material.dispose(); }
      if (obj.rbody) { try { world.removeRigidBody(obj.rbody); } catch {} }
      else if (obj.col) { try { world.removeCollider(obj.col, true); } catch {} }
    }
    customObjects.length = 0;
  }

  function syncDynamicCustoms() {
    for (const obj of customObjects) {
      if (obj.dynamic && obj.rbody && obj.mesh) {
        const t = obj.rbody.translation(), r = obj.rbody.rotation();
        obj.mesh.position.set(t.x, t.y, t.z);
        obj.mesh.quaternion.set(r.x, r.y, r.z, r.w);
      }
    }
  }

  function updateVisuals(time) {
    if (energyRing) energyRing.rotation.z = time * 0.8;
  }

  return {
    receiver,
    layout,
    obstacleHandles,
    boostPads,
    free: mode === 'free',
    carCount: layout.count,
    width: mode === 'free' ? 800 : mode === 'carjump' ? 32 : mode === 'ramp' ? c.width : mode === 'kickflip' ? 70 : 22,
    spawnObstacle,
    clearCustomObstacles,
    syncDynamicCustoms,
    updateVisuals,
    dispose() {
      clearCustomObstacles();
      scene.remove(group);
      group.traverse(o => { if (o.isMesh || o.isPoints) o.geometry.dispose(); });
      road.dispose(); white.dispose(); red.dispose(); cyan.dispose();
      extraMaterials.forEach(m => m.dispose());
      colliders.forEach(col => { try { world.removeCollider(col, true); } catch {} });
    }
  };
}
