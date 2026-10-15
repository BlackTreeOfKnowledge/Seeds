import * as THREE from "three";

const canvas = document.querySelector("#tree-renderer");
const container = canvas.closest(".tree-canvas");
const status = document.querySelector("#tree-scene-message");
const fallbackArt = document.querySelector(".tree-art");
const topicButtons = [...document.querySelectorAll(".tree-topic")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const branchPoints = [
  { branch: "people", position: [-3.78, 3.32, 0.16] },
  { branch: "health", position: [-2.22, 4.38, 0.18] },
  { branch: "safety", position: [3.52, 3.15, 0.16] },
  { branch: "learning", position: [2.27, 4.48, 0.12] },
  { branch: "families", position: [3.7, 1.56, 0.16] },
];

function setFallback(message) {
  status.textContent = message;
  status.hidden = false;
  canvas.hidden = true;
  fallbackArt.style.display = "block";
}

function point(x, y, z = 0) {
  return new THREE.Vector3(x, y, z);
}

function addTaperedTube(parent, points, radius, material, options = {}) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, y, z]) => point(x, y, z)));
  const radialSegments = options.radialSegments ?? 9;
  const tubularSegments = options.tubularSegments ?? 28;
  const taper = options.taper ?? 0.78;
  const vertices = [];
  const uvs = [];
  const indices = [];
  const up = point(0, 1, 0);
  const forward = point(0, 0, 1);

  for (let ring = 0; ring <= tubularSegments; ring += 1) {
    const t = ring / tubularSegments;
    const center = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).normalize();
    const reference = Math.abs(tangent.dot(up)) > 0.94 ? forward : up;
    const normal = new THREE.Vector3().crossVectors(tangent, reference).normalize();
    const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();
    const ringRadius = Math.max(0.012, radius * Math.pow(1 - taper * t, 1.12));

    for (let segment = 0; segment < radialSegments; segment += 1) {
      const angle = (segment / radialSegments) * Math.PI * 2;
      const vertex = center.clone()
        .addScaledVector(normal, Math.cos(angle) * ringRadius)
        .addScaledVector(binormal, Math.sin(angle) * ringRadius);
      vertices.push(vertex.x, vertex.y, vertex.z);
      uvs.push((segment / radialSegments) * 4, t * 2);
    }
  }

  for (let ring = 0; ring < tubularSegments; ring += 1) {
    for (let segment = 0; segment < radialSegments; segment += 1) {
      const nextSegment = (segment + 1) % radialSegments;
      const first = ring * radialSegments + segment;
      const second = ring * radialSegments + nextSegment;
      const third = (ring + 1) * radialSegments + nextSegment;
      const fourth = (ring + 1) * radialSegments + segment;
      indices.push(first, fourth, second, second, fourth, third);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  parent.add(new THREE.Mesh(geometry, material));
  return curve;
}

function createBarkTexture() {
  const barkCanvas = document.createElement("canvas");
  barkCanvas.width = 512;
  barkCanvas.height = 512;
  const context = barkCanvas.getContext("2d");
  const random = seededRandom(9031);

  context.fillStyle = "#e7e6df";
  context.fillRect(0, 0, barkCanvas.width, barkCanvas.height);

  for (let grain = 0; grain < 680; grain += 1) {
    const x = random() * barkCanvas.width;
    const width = 0.35 + random() * 1.4;
    const offset = (random() - 0.5) * 14;
    const light = random() > 0.53;
    context.strokeStyle = light ? "rgba(255,255,250,0.44)" : "rgba(108,112,109,0.16)";
    context.lineWidth = width;
    context.beginPath();
    context.moveTo(x, 0);
    context.bezierCurveTo(x + offset, 150, x - offset * 0.7, 345, x + offset * 0.35, 512);
    context.stroke();
  }

  for (let fissure = 0; fissure < 90; fissure += 1) {
    const x = random() * barkCanvas.width;
    const y = random() * barkCanvas.height;
    const length = 3 + random() * 16;
    context.strokeStyle = "rgba(104,108,105,0.2)";
    context.lineWidth = 0.4 + random() * 0.8;
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(x + (random() - 0.5) * 5, y + length * 0.5, x + (random() - 0.5) * 3, y + length);
    context.stroke();
  }

  const texture = new THREE.CanvasTexture(barkCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}

function createGroundTexture() {
  const groundCanvas = document.createElement("canvas");
  groundCanvas.width = 256;
  groundCanvas.height = 256;
  const context = groundCanvas.getContext("2d");
  const gradient = context.createRadialGradient(128, 128, 4, 128, 128, 126);
  gradient.addColorStop(0, "rgba(54,67,43,0.72)");
  gradient.addColorStop(0.48, "rgba(40,53,37,0.58)");
  gradient.addColorStop(0.82, "rgba(29,42,31,0.32)");
  gradient.addColorStop(1, "rgba(21,31,24,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(groundCanvas);
}

function makeTree(scene) {
  const tree = new THREE.Group();
  tree.position.y = -0.08;
  scene.add(tree);

  const barkTexture = createBarkTexture();
  const bark = new THREE.MeshStandardMaterial({
    color: 0xd8d8cf,
    map: barkTexture,
    bumpMap: barkTexture,
    bumpScale: 0.024,
    roughness: 0.86,
    metalness: 0.015,
  });
  const barkLight = new THREE.MeshStandardMaterial({
    color: 0xf3f1e9,
    map: barkTexture,
    bumpMap: barkTexture,
    bumpScale: 0.016,
    roughness: 0.8,
    metalness: 0.01,
  });

  addTaperedTube(tree, [
    [0, -3.45, 0], [-0.18, -2.55, 0.02], [0.12, -1.65, 0.12],
    [-0.1, -0.72, 0.02], [0.12, 0.12, -0.04], [-0.08, 1.05, 0.05],
    [0.1, 2.02, -0.06], [-0.08, 2.93, 0.02], [0.03, 3.78, -0.03],
    [-0.02, 4.55, 0],
  ], 0.48, bark, { radialSegments: 14, tubularSegments: 72, taper: 0.93 });

  addTaperedTube(tree, [
    [-0.5, -3.4, 0.18], [-0.62, -2.5, 0.24], [-0.18, -1.55, 0.35],
    [0.3, -0.76, 0.38], [0.48, 0.02, 0.32], [0.08, 0.82, 0.28],
    [-0.5, 1.55, 0.18], [-0.55, 2.22, 0.12], [-0.05, 2.87, 0.15],
    [0.52, 3.63, 0.09], [0.58, 4.42, 0],
  ], 0.31, barkLight, { radialSegments: 12, tubularSegments: 64, taper: 0.94 });

  const branches = [
    { radius: 0.27, points: [[-0.02, -0.35, 0], [-0.74, 0.12, 0.18], [-1.82, 0.85, 0.08], [-2.65, 2.07, 0.14], [-3.72, 3.27, 0.16], [-4.1, 3.68, 0.22]] },
    { radius: 0.22, points: [[0.01, 0.72, -0.02], [0.75, 1.18, 0.28], [1.78, 1.42, 0.14], [2.57, 2.23, 0.17], [3.48, 3.06, 0.16], [3.9, 3.43, 0.2]] },
    { radius: 0.19, points: [[-0.02, 1.75, -0.04], [-0.82, 2.2, 0.12], [-1.25, 3.08, 0.2], [-1.92, 3.83, 0.14], [-2.2, 4.36, 0.18], [-2.55, 4.66, 0.22]] },
    { radius: 0.19, points: [[-0.02, 2.52, -0.04], [0.67, 2.8, -0.2], [1.25, 3.48, -0.12], [1.85, 4.0, 0.02], [2.26, 4.47, 0.12], [2.64, 4.72, 0.18]] },
    { radius: 0.23, points: [[0, -0.72, 0.02], [0.83, -0.28, 0.34], [1.72, 0.15, 0.25], [2.64, 0.73, 0.16], [3.38, 1.33, 0.16], [3.7, 1.56, 0.16]] },
    { radius: 0.115, points: [[-1.82, 0.85, 0.08], [-2.62, 1.08, -0.18], [-3.2, 1.58, -0.24], [-3.68, 1.88, -0.22]] },
    { radius: 0.1, points: [[-2.65, 2.07, 0.14], [-3.1, 2.48, 0.36], [-3.67, 2.66, 0.38], [-4.22, 2.72, 0.34]] },
    { radius: 0.11, points: [[1.78, 1.42, 0.14], [2.42, 1.43, -0.18], [3.07, 1.7, -0.24], [3.55, 2.0, -0.2]] },
    { radius: 0.1, points: [[2.57, 2.23, 0.17], [3.13, 2.31, 0.4], [3.68, 2.56, 0.42], [4.04, 2.78, 0.36]] },
    { radius: 0.1, points: [[-1.25, 3.08, 0.2], [-1.8, 3.18, 0.43], [-2.35, 3.42, 0.46], [-2.67, 3.72, 0.38]] },
    { radius: 0.1, points: [[1.25, 3.48, -0.12], [1.72, 3.38, -0.42], [2.3, 3.52, -0.45], [2.7, 3.82, -0.32]] },
    { radius: 0.075, points: [[0.1, 2.02, -0.06], [0.44, 2.67, -0.55], [0.56, 3.18, -0.62], [0.47, 3.55, -0.56]] },
    { radius: 0.08, points: [[-0.08, 1.05, 0.05], [-0.46, 1.62, 0.58], [-0.52, 2.15, 0.67], [-0.32, 2.5, 0.62]] },
    { radius: 0.085, points: [[-3.72, 3.27, 0.16], [-4.04, 3.48, 0.3], [-4.42, 3.55, 0.34], [-4.7, 3.48, 0.3]] },
    { radius: 0.075, points: [[-3.2, 1.58, -0.24], [-3.42, 1.42, -0.48], [-3.8, 1.47, -0.55], [-4.02, 1.65, -0.5]] },
    { radius: 0.08, points: [[-3.1, 2.48, 0.36], [-3.44, 2.62, 0.58], [-3.82, 2.6, 0.62], [-4.07, 2.45, 0.56]] },
    { radius: 0.085, points: [[3.48, 3.06, 0.16], [3.9, 3.31, 0.3], [4.28, 3.35, 0.34], [4.62, 3.2, 0.3]] },
    { radius: 0.075, points: [[3.07, 1.7, -0.24], [3.38, 1.55, -0.5], [3.77, 1.6, -0.55], [4.02, 1.78, -0.5]] },
    { radius: 0.08, points: [[3.13, 2.31, 0.4], [3.5, 2.42, 0.62], [3.88, 2.35, 0.66], [4.16, 2.16, 0.6]] },
    { radius: 0.065, points: [[-1.92, 3.83, 0.14], [-2.22, 4.02, 0.4], [-2.55, 4.04, 0.48], [-2.76, 3.9, 0.45]] },
    { radius: 0.065, points: [[1.85, 4.0, 0.02], [2.12, 4.18, -0.22], [2.47, 4.2, -0.27], [2.72, 4.08, -0.2]] },
    { radius: 0.06, points: [[-0.5, 1.55, 0.18], [-0.92, 1.7, 0.44], [-1.22, 1.98, 0.5], [-1.3, 2.24, 0.46]] },
    { radius: 0.06, points: [[0.48, 0.02, 0.32], [0.95, 0.18, 0.54], [1.27, 0.5, 0.56], [1.35, 0.77, 0.5]] },
  ];

  branches.forEach(({ radius, points }, index) => {
    addTaperedTube(tree, points, radius, index % 3 === 0 ? barkLight : bark, {
      radialSegments: 9,
      tubularSegments: 30,
      taper: 0.88,
    });
  });

  const roots = [
    [[0, -3.23, 0], [-0.38, -3.42, 0.16], [-1.1, -3.48, 0.34], [-2.0, -3.52, 0.43], [-2.75, -3.5, 0.37]],
    [[0, -3.3, 0], [0.4, -3.43, 0.12], [1.12, -3.48, 0.27], [2.04, -3.49, 0.29], [2.78, -3.46, 0.18]],
    [[0, -3.3, 0], [-0.16, -3.45, -0.3], [-0.42, -3.51, -0.88], [-0.46, -3.5, -1.55]],
    [[0, -3.32, 0], [0.18, -3.45, -0.25], [0.55, -3.49, -0.84], [1.12, -3.47, -1.45]],
    [[-0.06, -3.25, 0.02], [-0.28, -3.47, 0.42], [-0.6, -3.5, 1.0], [-0.84, -3.46, 1.62]],
    [[0.02, -3.28, 0], [0.28, -3.45, 0.4], [0.76, -3.46, 0.95], [1.42, -3.43, 1.5]],
    [[-0.04, -3.32, 0.08], [-0.7, -3.48, 0.2], [-1.18, -3.34, 0.42], [-1.12, -3.18, 0.65], [-0.82, -3.2, 0.72], [-0.78, -3.4, 0.84], [-1.58, -3.49, 0.96], [-2.1, -3.46, 0.9]],
    [[0.05, -3.32, 0.06], [0.72, -3.47, 0.16], [1.2, -3.34, 0.37], [1.15, -3.19, 0.61], [0.87, -3.2, 0.68], [0.84, -3.39, 0.8], [1.62, -3.47, 0.9], [2.15, -3.43, 0.84]],
    [[-0.12, -3.34, -0.06], [-0.5, -3.48, -0.42], [-0.91, -3.37, -0.7], [-1.12, -3.2, -0.63], [-1.03, -3.18, -0.4], [-0.84, -3.39, -0.36], [-1.25, -3.48, -1.06], [-1.65, -3.46, -1.35]],
  ];
  roots.forEach((root, index) => addTaperedTube(tree, root, index < 2 ? 0.22 : 0.14, index % 2 ? bark : barkLight, {
    radialSegments: 8,
    tubularSegments: 18,
    taper: 0.9,
  }));

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(5.1, 72),
    new THREE.MeshBasicMaterial({ map: createGroundTexture(), transparent: true, depthWrite: false, side: THREE.DoubleSide }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -3.58;
  tree.add(ground);

  const canopyGlow = new THREE.Mesh(
    new THREE.SphereGeometry(1, 32, 24),
    new THREE.MeshBasicMaterial({ color: 0xe5e9e6, transparent: true, opacity: 0.045, side: THREE.BackSide, depthWrite: false }),
  );
  canopyGlow.position.set(0, 3.12, -0.35);
  canopyGlow.scale.set(4.15, 2.25, 1.75);
  tree.add(canopyGlow);

  const foliage = addLeaves(tree);
  const markers = addBranchMarkers(tree);
  return { tree, markers, foliage };
}

function addLeaves(tree) {
  const patches = [
    { center: [-3.52, 3.24, 0.12], radius: [1.15, 0.72, 0.88], count: 164 },
    { center: [-2.2, 4.15, 0.1], radius: [0.92, 0.69, 0.88], count: 140 },
    { center: [-0.8, 4.18, -0.16], radius: [1.0, 0.66, 0.92], count: 128 },
    { center: [0.8, 4.17, -0.1], radius: [0.98, 0.68, 0.94], count: 132 },
    { center: [2.31, 4.18, 0.08], radius: [0.96, 0.69, 0.9], count: 144 },
    { center: [3.48, 3.1, 0.12], radius: [1.13, 0.76, 0.9], count: 156 },
    { center: [-1.7, 2.62, 0.1], radius: [0.87, 0.69, 0.86], count: 96 },
    { center: [1.73, 2.76, 0.08], radius: [0.9, 0.65, 0.84], count: 100 },
    { center: [3.45, 1.55, 0.14], radius: [0.75, 0.56, 0.68], count: 72 },
    { center: [-2.85, 1.82, 0.04], radius: [0.74, 0.58, 0.62], count: 92 },
    { center: [-2.08, 0.96, 0.05], radius: [0.62, 0.5, 0.62], count: 74 },
    { center: [-0.9, 0.35, 0.06], radius: [0.72, 0.48, 0.7], count: 68 },
    { center: [1.85, 0.5, 0.1], radius: [0.72, 0.48, 0.66], count: 82 },
    { center: [2.95, 0.95, 0.15], radius: [0.62, 0.52, 0.65], count: 84 },
    { center: [-2.45, 2.48, 0.24], radius: [0.78, 0.54, 0.68], count: 84 },
    { center: [-1.12, 1.9, 0.24], radius: [0.72, 0.52, 0.65], count: 78 },
    { center: [0.95, 2.12, 0.2], radius: [0.76, 0.55, 0.68], count: 88 },
    { center: [2.58, 2.5, 0.24], radius: [0.78, 0.56, 0.7], count: 88 },
  ];
  const density = 2.15;
  const total = patches.reduce((sum, patch) => sum + Math.round(patch.count * density), 0);
  const leafGeometry = createLeafGeometry();
  const leafMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xfffdf9,
    roughness: 0.78,
    metalness: 0.005,
    clearcoat: 0.08,
    clearcoatRoughness: 0.74,
    side: THREE.DoubleSide,
    vertexColors: false,
  });
  const leaves = new THREE.InstancedMesh(leafGeometry, leafMaterial, total);
  leaves.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const dummy = new THREE.Object3D();
  const random = seededRandom(4729);
  const leafInstances = [];
  let instance = 0;

  patches.forEach((patch, patchIndex) => {
    for (let leaf = 0; leaf < Math.round(patch.count * density); leaf += 1) {
      const theta = random() * Math.PI * 2;
      const vertical = random() * 2 - 1;
      const radial = Math.sqrt(1 - vertical * vertical);
      const shell = random() < 0.82 ? 0.58 + random() * 0.42 : Math.cbrt(random()) * 0.58;
      const position = point(
        patch.center[0] + Math.cos(theta) * radial * patch.radius[0] * shell,
        patch.center[1] + vertical * patch.radius[1] * shell,
        patch.center[2] + Math.sin(theta) * radial * patch.radius[2] * shell,
      );
      const direction = point(
        (position.x - patch.center[0]) / patch.radius[0] + (random() - 0.5) * 0.75,
        0.18 + random() * 0.65,
        (position.z - patch.center[2]) / patch.radius[2] + (random() - 0.5) * 0.75,
      ).normalize();
      dummy.position.copy(position);
      dummy.quaternion.setFromUnitVectors(point(1, 0, 0), direction);
      dummy.rotateX((random() - 0.5) * Math.PI * 0.72);
      dummy.scale.set(0.16 + random() * 0.12, 0.62 + random() * 0.36, 0.16 + random() * 0.1);
      dummy.updateMatrix();
      leaves.setMatrixAt(instance, dummy.matrix);
      leafInstances.push({
        position: position.clone(),
        quaternion: dummy.quaternion.clone(),
        scale: dummy.scale.clone(),
        growth: 0.75 + random() * 0.55,
        currentGrowth: 1,
      });
      const color = new THREE.Color().setHSL(0.14 + random() * 0.035, 0.008 + random() * 0.025, 0.86 + random() * 0.12);
      if ((patchIndex + leaf) % 37 === 0) color.setHSL(0.15, 0.02, 0.75);
      leaves.setColorAt(instance, color);
      instance += 1;
    }
  });

  tree.add(leaves);
  return { mesh: leaves, instances: leafInstances, dummy };
}

function createLeafGeometry() {
  const lengthSegments = 12;
  const widthSegments = 6;
  const rowSize = widthSegments + 1;
  const positions = [];
  const indices = [];

  for (let row = 0; row <= lengthSegments; row += 1) {
    const along = row / lengthSegments;
    const length = along - 0.5;
    const taper = Math.pow(Math.sin(Math.PI * along), 0.72);

    for (let column = 0; column <= widthSegments; column += 1) {
      const across = (column / widthSegments) * 2 - 1;
      const width = across * taper * 0.48;
      const midrib = Math.max(0, 1 - Math.abs(across));
      const raisedVeins = (0.018 + Math.sin(along * 7 * Math.PI) * 0.004) * midrib * taper;
      const curledEdge = Math.pow(Math.abs(across), 2) * taper * 0.012;
      positions.push(length, raisedVeins + curledEdge, width);

      if (row < lengthSegments && column < widthSegments) {
        const current = row * rowSize + column;
        const nextRow = current + rowSize;
        indices.push(current, current + 1, nextRow, current + 1, nextRow + 1, nextRow);
      }
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();
  return geometry;
}

function addBranchMarkers(tree) {
  const markers = new Map();
  const geometry = new THREE.SphereGeometry(0.105, 20, 16);
  const ringGeometry = new THREE.TorusGeometry(0.17, 0.012, 6, 36);

  branchPoints.forEach(({ branch, position }) => {
    const material = new THREE.MeshStandardMaterial({
      color: 0xf5d990,
      emissive: 0xc68b32,
      emissiveIntensity: 1.2,
      roughness: 0.26,
      metalness: 0.46,
    });
    const marker = new THREE.Group();
    marker.position.set(...position);
    marker.userData.branch = branch;
    const core = new THREE.Mesh(geometry, material);
    core.userData.branch = branch;
    marker.add(core);
    const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({
      color: 0xf2d38b,
      transparent: true,
      opacity: 0.76,
    }));
    ring.userData.branch = branch;
    marker.add(ring);
    tree.add(marker);
    markers.set(branch, { group: marker, core, ring, material });
  });

  return markers;
}

function addAtmosphere(scene) {
  const starCount = 260;
  const positions = new Float32Array(starCount * 3);
  const random = seededRandom(8071);
  for (let star = 0; star < starCount; star += 1) {
    positions[star * 3] = (random() - 0.5) * 19;
    positions[star * 3 + 1] = (random() - 0.28) * 13;
    positions[star * 3 + 2] = -3.3 - random() * 6;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const stars = new THREE.Points(geometry, new THREE.PointsMaterial({
    color: 0xe3d29b,
    size: 0.024,
    transparent: true,
    opacity: 0.64,
    sizeAttenuation: true,
    depthWrite: false,
  }));
  scene.add(stars);

  const moteCount = 75;
  const motePositions = new Float32Array(moteCount * 3);
  for (let mote = 0; mote < moteCount; mote += 1) {
    motePositions[mote * 3] = (random() - 0.5) * 8.8;
    motePositions[mote * 3 + 1] = (random() - 0.35) * 8.2;
    motePositions[mote * 3 + 2] = (random() - 0.5) * 3.2;
  }
  const moteGeometry = new THREE.BufferGeometry();
  moteGeometry.setAttribute("position", new THREE.BufferAttribute(motePositions, 3));
  const motes = new THREE.Points(moteGeometry, new THREE.PointsMaterial({
    color: 0xf2cf7a,
    size: 0.042,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true,
    depthWrite: false,
  }));
  scene.add(motes);
  return { stars, motes };
}

function seededRandom(seed) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function startScene(THREE) {
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.14;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0b1710, 0.022);
  const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 80);
  camera.position.set(0, 0.62, 14.6);
  camera.lookAt(0, 0.48, 0);

  scene.add(new THREE.HemisphereLight(0xe8edf0, 0x48443b, 1.8));
  const keyLight = new THREE.DirectionalLight(0xfffbf3, 3.4);
  keyLight.position.set(-4.8, 7.5, 6.5);
  scene.add(keyLight);
  const rimLight = new THREE.PointLight(0xe2ebf0, 18, 15, 1.8);
  rimLight.position.set(4.2, 3.4, -1.1);
  scene.add(rimLight);
  const goldLight = new THREE.PointLight(0xe8edf2, 10, 13, 1.7);
  goldLight.position.set(-3.4, 1.2, 3.4);
  scene.add(goldLight);
  const rootLight = new THREE.PointLight(0xd6dfd2, 8, 9, 2);
  rootLight.position.set(0.3, -2.65, 2.8);
  scene.add(rootLight);

  const { tree, markers, foliage } = makeTree(scene);
  const atmosphere = addAtmosphere(scene);
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const markerCores = [...markers.values()].map(({ core }) => core);
  const clock = new THREE.Clock();
  let hoveredBranch = null;
  let activeBranch = null;
  let pointerX = 0;
  let pointerY = 0;
  let pointerActive = false;
  let pointerClientX = 0;
  let pointerClientY = 0;
  const projectedLeaf = new THREE.Vector3();
  let foliageNeedsUpdate = false;
  let leafTargetsPending = false;

  function updateLeafTargets() {
    tree.updateMatrixWorld(true);
    foliage.instances.forEach((leaf) => {
      projectedLeaf.copy(leaf.position).applyMatrix4(tree.matrixWorld).project(camera);
      const screenX = ((projectedLeaf.x + 1) / 2) * container.clientWidth;
      const screenY = ((1 - projectedLeaf.y) / 2) * container.clientHeight;
      const distance = Math.hypot(screenX - pointerClientX, screenY - pointerClientY);
      const proximity = pointerActive ? Math.max(0, 1 - distance / 150) : 0;
      leaf.targetGrowth = 1 + Math.pow(proximity, 1.8) * leaf.growth * 1.7;
    });
    foliageNeedsUpdate = true;
  }

  function scheduleLeafTargetUpdate() {
    if (leafTargetsPending) return;
    leafTargetsPending = true;
    requestAnimationFrame(() => {
      leafTargetsPending = false;
      updateLeafTargets();
    });
  }

  function resize() {
    const { width, height } = container.getBoundingClientRect();
    if (width === 0 || height === 0) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.position.z = width < 600 ? 15.4 : 14.6;
    camera.updateProjectionMatrix();
    if (pointerActive) scheduleLeafTargetUpdate();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  resize();

  container.addEventListener("pointermove", (event) => {
    const rect = container.getBoundingClientRect();
    pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    pointerClientX = event.clientX - rect.left;
    pointerClientY = event.clientY - rect.top;
    pointerActive = true;
    pointerX = pointer.x;
    pointerY = pointer.y;
    scheduleLeafTargetUpdate();
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObjects(markerCores, false)[0];
    hoveredBranch = hit?.object.userData.branch ?? null;
    container.style.cursor = hoveredBranch ? "pointer" : "grab";
  });

  container.addEventListener("pointerleave", () => {
    hoveredBranch = null;
    pointerActive = false;
    pointerX = 0;
    pointerY = 0;
    foliage.instances.forEach((leaf) => { leaf.targetGrowth = 1; });
    foliageNeedsUpdate = true;
    container.style.cursor = "grab";
  });

  container.addEventListener("click", (event) => {
    if (event.target.closest(".tree-topic")) return;
    if (hoveredBranch) window.dispatchEvent(new CustomEvent("rooted:select-branch", { detail: { branch: hoveredBranch } }));
  });

  window.addEventListener("rooted:active-branch", (event) => {
    activeBranch = event.detail.branch;
  });

  activeBranch = document.querySelector(".tree-topic[aria-pressed='true']")?.dataset.branch ?? null;

  function render() {
    const elapsed = clock.getElapsedTime();
    if (!reduceMotion) {
      tree.rotation.y += ((pointerX * 0.2) + Math.sin(elapsed * 0.18) * 0.025 - tree.rotation.y) * 0.018;
      tree.rotation.x += ((-pointerY * 0.035) - tree.rotation.x) * 0.018;
      atmosphere.motes.rotation.y = Math.sin(elapsed * 0.11) * 0.055;
      atmosphere.motes.position.y = Math.sin(elapsed * 0.36) * 0.07;
      atmosphere.stars.rotation.y = Math.sin(elapsed * 0.035) * 0.025;
    }

    if (foliageNeedsUpdate) {
      let stillGrowing = false;
      let matricesChanged = false;
      foliage.instances.forEach((leaf, index) => {
        const previousGrowth = leaf.currentGrowth;
        const difference = leaf.targetGrowth - previousGrowth;
        const isGrowing = Math.abs(difference) > 0.003;
        if (isGrowing) stillGrowing = true;
        leaf.currentGrowth = isGrowing ? previousGrowth + difference * (reduceMotion ? 1 : 0.16) : leaf.targetGrowth;
        if (Math.abs(leaf.currentGrowth - previousGrowth) < 0.0005) return;
        foliage.dummy.position.copy(leaf.position);
        foliage.dummy.quaternion.copy(leaf.quaternion);
        foliage.dummy.scale.copy(leaf.scale).multiplyScalar(leaf.currentGrowth);
        foliage.dummy.updateMatrix();
        foliage.mesh.setMatrixAt(index, foliage.dummy.matrix);
        matricesChanged = true;
      });
      if (matricesChanged) foliage.mesh.instanceMatrix.needsUpdate = true;
      foliageNeedsUpdate = stillGrowing;
    }

    markers.forEach(({ group, ring, material }, branch) => {
      const selected = branch === activeBranch;
      const hovered = branch === hoveredBranch;
      const pulse = 1 + Math.sin(elapsed * 2.3 + branch.length) * 0.055;
      group.scale.setScalar((selected ? 1.35 : hovered ? 1.2 : 1) * pulse);
      ring.rotation.z = elapsed * (selected ? 0.5 : 0.22);
      material.emissiveIntensity = selected ? 2.4 : hovered ? 1.9 : 1.2;
    });

    renderer.render(scene, camera);
  }

  renderer.setAnimationLoop(render);
  status.hidden = true;
  canvas.hidden = false;
  fallbackArt.style.display = "none";
}

import("three")
  .then(startScene)
  .catch(() => setFallback("3D view is unavailable here; the sourced facts remain available."));
