import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { buildMeshTextureSet } from "./cache.js";

const ROUGHNESS = {
  marble: 0.15,
  wood: 0.45,
  concrete: 0.85,
  solid: 0.55,
  ceramic: 0.2,
};

const METAL = { metal: 0.85 };

const TILES = {
  pintura: {
    algodon: { id: "pintura-algodon", type: "solid", base: "#F4F1EA", accent: "#E4DDD0", worldSize: 4 },
    arena: { id: "pintura-arena", type: "solid", base: "#C4A574", accent: "#A88858", worldSize: 4 },
    salvia: { id: "pintura-salvia", type: "solid", base: "#8FA38A", accent: "#738868", worldSize: 4 },
  },
  piso: {
    porcelanato: { id: "piso-porcelanato", type: "ceramic", base: "#E7E2D8", accent: "#C9C2B6", worldSize: 1.2 },
    madera: { id: "piso-madera", type: "wood", base: "#A67C52", accent: "#7A552E", worldSize: 1.8 },
    cemento: { id: "piso-cemento", type: "concrete", base: "#B7B7B7", accent: "#8A8A8A", worldSize: 2.2 },
  },
  cocina: {
    blanco: { id: "cocina-blanco", type: "marble", base: "#F7F7F5", accent: "#C8C2B8", worldSize: 2.2 },
    roble: { id: "cocina-roble", type: "wood", base: "#C49A6C", accent: "#8B6914", worldSize: 1.6 },
    grafito: { id: "cocina-grafito", type: "marble", base: "#3E4246", accent: "#8A8478", worldSize: 2.2 },
  },
  tela: {
    primera: { id: "tela-primera", type: "solid", base: "#D9D3C7", accent: "#C2B8A8", worldSize: 1.4 },
    familia: { id: "tela-familia", type: "solid", base: "#6E8FBF", accent: "#4C6C96", worldSize: 1.4 },
    estudio: { id: "tela-estudio", type: "solid", base: "#3D4650", accent: "#2A3138", worldSize: 1.4 },
  },
};

const VISTAS = {
  sala: { yaw: 0.7, pitch: 0.42, dist: 1.55 },
  cocina: { yaw: 2.35, pitch: 0.38, dist: 1.15 },
  habitacion: { yaw: 3.9, pitch: 0.4, dist: 1.25 },
  inteligente: { yaw: 5.3, pitch: 0.48, dist: 1.35 },
  bano: { yaw: 3.15, pitch: 0.55, dist: 1.05 },
  ropas: { yaw: 1.45, pitch: 0.58, dist: 1.05 },
};

function roleOf(name) {
  const n = (name || "").toLowerCase();
  if (/floor|piso|suelo/.test(n)) return "piso";
  if (/wall|muro|pared/.test(n)) return "pintura";
  if (/handle/.test(n)) return null;
  if (/fridge|stove|bottomdoor|upperdoor|cocina|meson|encimera/.test(n)) return "cocina";
  if (/tela/.test(n)) return "tela";
  return null;
}

function applyTile(mesh, tile) {
  const { tex, norm } = buildMeshTextureSet(tile, mesh);
  const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
  materials.forEach((material) => {
    if (!material) return;
    material.map = tex;
    material.color.set(0xffffff);
    if ("normalMap" in material) {
      material.normalMap = norm;
      if (material.normalScale) material.normalScale.set(0.6, 0.6);
    }
    if ("roughness" in material) material.roughness = ROUGHNESS[tile.type] ?? 0.5;
    if ("metalness" in material) material.metalness = METAL[tile.type] ?? 0;
    material.needsUpdate = true;
  });
}

export function createViewer(container, hooks) {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0xf4f4f4, 1);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf4f4f4);
  scene.add(new THREE.AmbientLight(0xc8d0e0, 1));
  scene.add(new THREE.HemisphereLight(0xb0c4de, 0x8090a0, 0.55));

  const sun = new THREE.DirectionalLight(0xfff4e0, 2);
  sun.position.set(8, 12, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x99bbff, 0.55);
  fill.position.set(-8, 6, -4);
  scene.add(fill);

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 500);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI / 2 + 0.12;

  const groups = { pintura: [], piso: [], cocina: [], tela: [] };
  let frame = { center: new THREE.Vector3(), radius: 6 };
  let ready = false;
  let disposed = false;
  let animating = false;
  const desiredPos = new THREE.Vector3();
  const desiredTarget = new THREE.Vector3();
  let pendingFinishes = null;
  let pendingView = null;

  function resize() {
    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  }

  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();

  function placeCamera(vista, immediate) {
    const pitch = vista.pitch;
    const yaw = vista.yaw;
    const dist = frame.radius * vista.dist;
    desiredTarget.copy(frame.center);
    desiredPos.set(
      frame.center.x + Math.cos(yaw) * Math.cos(pitch) * dist,
      frame.center.y + Math.sin(pitch) * dist,
      frame.center.z + Math.sin(yaw) * Math.cos(pitch) * dist,
    );
    if (immediate) {
      camera.position.copy(desiredPos);
      controls.target.copy(desiredTarget);
      animating = false;
    } else {
      animating = true;
    }
  }

  function applyFinishes(seleccion) {
    const pintura = TILES.pintura[seleccion.pintura] || TILES.pintura.algodon;
    const piso = TILES.piso[seleccion.piso] || TILES.piso.porcelanato;
    const cocina = TILES.cocina[seleccion.cocina] || TILES.cocina.blanco;
    const tela = TILES.tela[seleccion.estilo] || TILES.tela.primera;
    groups.pintura.forEach((mesh) => applyTile(mesh, pintura));
    groups.piso.forEach((mesh) => applyTile(mesh, piso));
    groups.cocina.forEach((mesh) => applyTile(mesh, cocina));
    groups.tela.forEach((mesh) => applyTile(mesh, tela));
  }

  function setView(modo, espacioId, index) {
    if (!ready) {
      pendingView = { modo, espacioId, index };
      return;
    }
    if (modo === "planta") {
      placeCamera({ yaw: 0.4, pitch: 1.25, dist: 1.7 }, false);
      return;
    }
    if (modo === "recorrido") {
      const yaw = (index % 8) * ((Math.PI * 2) / 8) + 0.4;
      placeCamera({ yaw, pitch: 0.38, dist: 1.45 }, false);
      return;
    }
    placeCamera(VISTAS[espacioId] || VISTAS.sala, false);
  }

  function setFinishes(seleccion) {
    pendingFinishes = seleccion;
    if (ready) applyFinishes(seleccion);
  }

  const loader = new GLTFLoader();
  loader.load(
    "/models/apto.glb",
    (gltf) => {
      if (disposed) return;
      const model = gltf.scene;
      model.traverse((child) => {
        if (!child.isMesh) return;
        child.castShadow = true;
        child.receiveShadow = true;
        if (Array.isArray(child.material)) child.material = child.material.map((item) => item.clone());
        else if (child.material) child.material = child.material.clone();
        const role = roleOf(child.name);
        if (role) groups[role].push(child);
      });

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      model.scale.multiplyScalar(6 / maxDim);
      box.setFromObject(model);
      const center = box.getCenter(new THREE.Vector3());
      model.position.sub(center);
      box.setFromObject(model);
      model.position.y -= box.min.y;
      scene.add(model);

      box.setFromObject(model);
      frame.center = box.getCenter(new THREE.Vector3());
      frame.radius = Math.max(box.getSize(new THREE.Vector3()).length() * 0.45, 1);
      ready = true;
      if (pendingFinishes) applyFinishes(pendingFinishes);
      if (pendingView) setView(pendingView.modo, pendingView.espacioId, pendingView.index);
      else placeCamera(VISTAS.sala, true);
      hooks.onReady?.();
    },
    undefined,
    () => hooks.onError?.(),
  );

  let raf = 0;
  const loop = () => {
    if (disposed) return;
    if (animating) {
      camera.position.lerp(desiredPos, 0.08);
      controls.target.lerp(desiredTarget, 0.08);
      if (camera.position.distanceTo(desiredPos) < 0.04) animating = false;
    }
    controls.update();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  };
  loop();

  return {
    setFinishes,
    setView,
    dispose() {
      disposed = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      controls.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}
