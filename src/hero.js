// Mascot hero: real-time 3D frog that follows the cursor, drinks its Yoo-hoo, and speaks via a 3D Blender chat bubble.
// three.js r187, one GLB (meshopt) with morph targets: CheekPuff, Pucker, SwallowHigh/Low (Head, Lips),
// Squeeze/Sag (Box), Grip (Hand), Fill (Liquid). Rig nodes: HeadTrack (cursor), HeadSquash (sip lean +
// squash/stretch), Visor (bounce), BubbleRig -> ChatBubbleFrame + ChatBubbleFace (3D cartoon chat bubble).
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import { planSip, sipTargets, SipRig, Spring } from "./sip.js";
import { SipSound } from "./sound.js";
import "./site-ui.js";
import { BUBBLE_INDEX, answerQuestion, askLiveLLM, drawBubbleCanvas, readingTime, liveChatEnabled } from "./bubble.js";

const root = document.querySelector("[data-mascot]");
if (root) boot(root);

function boot(root) {
  const stage = root.querySelector(".mascot-stage");
  const soundBtn = root.querySelector(".mascot-sound");
  const params = new URLSearchParams(location.search);
  const modelUrl = params.get("glb") || root.dataset.mascotGlb || "assets/mascot.glb";
  const DEBUG = params.has("debug");
  const reduceMQ = matchMedia("(prefers-reduced-motion: reduce)");
  let reduced = reduceMQ.matches || params.get("motion") === "reduce";
  reduceMQ.addEventListener?.("change", (e) => { reduced = e.matches; });

  // ---------------------------------------------------------------- renderer (with graceful fallback)
  const canvas = document.createElement("canvas");
  canvas.className = "mascot-canvas";
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", "3D mascot: a green frog in red cat-eye visor glasses sipping a Yoo-hoo through a straw next to a 3D cartoon speech bubble.");
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (e) {
    root.classList.add("mascot-fallback");
    console.warn("[mascot] WebGL unavailable, showing the poster", e);
    return;
  }
  stage.appendChild(canvas);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NeutralToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);
  const baseDPR = Math.min(window.devicePixelRatio || 1, 2);
  let dpr = baseDPR;
  renderer.setPixelRatio(dpr);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.5, 60);
  scene.environment = makeStudioEnv(renderer);
  scene.environmentIntensity = 0.50;

  // key / fill / rims: fixed to the world, so highlights stay put while the head turns
  const key = new THREE.DirectionalLight(0xfff3e6, 2.1); key.position.set(-3.6, 4.6, 5.2);
  const fill = new THREE.DirectionalLight(0xdde8ff, 0.38); fill.position.set(5.2, 1.3, 4.6);
  const rim = new THREE.DirectionalLight(0xffffff, 1.6); rim.position.set(2.8, 3.6, -4.6);
  const rimL = new THREE.DirectionalLight(0xf0fff0, 0.95); rimL.position.set(-3.4, 2.6, -3.8);
  scene.add(key, fill, rim, rimL);

  // ---------------------------------------------------------------- shared shader uniforms
  const U = {
    uTime: { value: 0 },
    uWrap: { value: 0.24 },
    uRim: { value: 0.42 },
    uRimColor: { value: new THREE.Color(0xeaffd8) },
    uBlush: { value: 0 },
    uBlushColor: { value: new THREE.Color(0xff3870) },
    uTop: { value: 0 },
    uFlow: { value: 0 },
    uSputter: { value: 0 },
  };

  // ---------------------------------------------------------------- 3D Chat Bubble dynamic CanvasTexture state
  const bubbleCanvas = document.createElement("canvas");
  bubbleCanvas.width = 1600;
  bubbleCanvas.height = 500;
  const bubbleTex = new THREE.CanvasTexture(bubbleCanvas);
  bubbleTex.colorSpace = THREE.SRGBColorSpace;
  bubbleTex.flipY = false;

  const bubble = {
    mode: "about",          // "about" | "tab" | "qa"
    aboutIdx: 0,
    tabKey: null,
    tabIdx: 0,
    phase: "visible",       // "visible" | "hiding"
    timer: 0,
    showDur: readingTime(BUBBLE_INDEX.about[0]),
    hideDur: 7.5,          // quiet gap between idle thoughts so the hero doesn't feel naggy
    scale: new Spring(22, 0.38, 1),
    targetScale: 1,
    currentCard: BUBBLE_INDEX.about[0],
  };

  function setBubbleCard(card, popStrength = 3.2, extra = 0) {
    bubble.currentCard = card;
    bubble.showDur = card.thinking ? 1e9 : readingTime(card) + extra;
    drawBubbleCanvas(bubbleCanvas, card);
    bubbleTex.needsUpdate = true;
    bubble.phase = "visible";
    bubble.timer = 0;
    bubble.targetScale = 1;
    bubble.scale.kick(popStrength);
  }

  // Draw initial card immediately
  drawBubbleCanvas(bubbleCanvas, BUBBLE_INDEX.about[0]);
  bubbleTex.needsUpdate = true;

  const state = {
    ready: false, running: false, visible: true, inView: true,
    nodes: {}, morphs: {}, liquid: null, cursor: null,
    track: { yaw: { x: 0, v: 0 }, pitch: { x: 0, v: 0 }, roll: { x: 0, v: 0 } },
    pointer: { x: 0, y: 0, has: false, touch: false, last: -1e9 },
    sip: null, sipT: 0, ei: 0, rig: new SipRig(), nextIdleSip: 4 + Math.random() * 3, lastSipEnd: -10,
    level: 1, empty: false, clicks: [], queued: null, hoverBox: false, hoverBubble: false, refill: 0,
    eye: new THREE.Vector3(), rest: {}, t: 0, bubble,
  };
  const sound = new SipSound();

  // ---------------------------------------------------------------- load
  const loader = new GLTFLoader();
  loader.setMeshoptDecoder(MeshoptDecoder);
  loader.load(modelUrl, (gltf) => {
    setup(gltf.scene);
    state.ready = true;
    resize();
    renderer.render(scene, camera);
    root.classList.add("mascot-ready");
    start();
  }, undefined, (err) => {
    console.warn("[mascot] model failed to load, keeping the poster", err);
    root.classList.add("mascot-fallback");
  });

  function setup(model) {
    scene.add(model);
    const N = state.nodes;
    model.traverse((o) => {
      N[o.name] = o;
      if (o.isMesh) {
        o.frustumCulled = false;
        if (o.morphTargetDictionary) {
          for (const [name, idx] of Object.entries(o.morphTargetDictionary)) {
            (state.morphs[name] ||= []).push([o, idx]);
          }
        }
      }
    });
    const maxAniso = Math.min(8, renderer.capabilities.getMaxAnisotropy());
    const label = N.Box?.material?.map || null;
    if (label) { label.anisotropy = maxAniso; label.colorSpace = THREE.SRGBColorSpace; }
    bubbleTex.anisotropy = maxAniso;

    const skin = stylised(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0 }), { blush: true });
    const lip = stylised(new THREE.MeshStandardMaterial({ vertexColors: true, color: 0xe8e0dc, roughness: 0.68, metalness: 0, envMapIntensity: 0.6 }), { rim: 0.1, rimColor: 0xffd2a8 });
    const frame = stylised(new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.3, clearcoat: 0.55, clearcoatRoughness: 0.12 }), { wrap: 0.3, rim: 0.1 });
    const lens = new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 0.95 });
    const base = stylised(new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0 }), { wrap: 0.2, rim: 0.22, rimColor: 0xbfd0ff });
    const box = stylised(new THREE.MeshStandardMaterial({ map: label, vertexColors: true, roughness: 0.8, metalness: 0 }), { wrap: 0.3, rim: 0.08 });
    const bubbleFrameMat = stylised(new THREE.MeshPhysicalMaterial({ vertexColors: true, roughness: 0.36, clearcoat: 0.45, clearcoatRoughness: 0.14 }), { wrap: 0.25, rim: 0.25, rimColor: 0xdbeafe });
    const bubbleFaceMat = new THREE.MeshBasicMaterial({
      map: bubbleTex, toneMapped: false,
    });

    const set = (name, m) => { if (N[name]) N[name].material = m; };
    set("Head", skin); set("Hand", skin); set("Lips", lip); set("VisorFrame", frame); set("VisorLenses", lens);
    set("Base", base); set("Sleeves", base); set("Box", box);
    set("ChatBubbleFrame", bubbleFrameMat); set("ChatBubbleFace", bubbleFaceMat);

    // liquid + straw
    if (N.Liquid) {
      state.liquid = N.Liquid;
      N.Liquid.material = liquidMaterial();
      N.Liquid.renderOrder = 1;
      const ex = N.Liquid.userData || {};
      state.tBox = ex.t_box ?? 0.3; state.tMouth = ex.t_mouth ?? 0.93;
    }
    if (N.Straw) { N.Straw.material = strawMaterial(); N.Straw.renderOrder = 2; }

    // rest transforms
    for (const k of ["Mascot", "HeadTrack", "HeadSquash", "Visor", "Base", "DrinkRig", "BubbleRig"]) {
      if (N[k]) state.rest[k] = { p: N[k].position.clone(), q: N[k].quaternion.clone(), s: N[k].scale.clone() };
    }
    model.updateMatrixWorld(true);
    if (N.VisorLenses) new THREE.Box3().setFromObject(N.VisorLenses).getCenter(state.eye);
    const bb = new THREE.Box3().setFromObject(model);
    state.bounds = bb;
  }

  // ---------------------------------------------------------------- materials
  function stylised(mat, { wrap = 0.42, rim = 0.33, rimColor = null, blush = false } = {}) {
    const local = { uWrapLocal: { value: wrap }, uRimLocal: { value: rim }, uRimColorLocal: { value: new THREE.Color(rimColor ?? 0xeaffd8) } };
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, local, { uBlush: U.uBlush, uBlushColor: U.uBlushColor });
      sh.fragmentShader = "uniform float uWrapLocal; uniform float uRimLocal; uniform vec3 uRimColorLocal;\nuniform float uBlush; uniform vec3 uBlushColor;\n" +
        sh.fragmentShader
          .replace("#include <lights_physical_pars_fragment>", THREE.ShaderChunk.lights_physical_pars_fragment.replace(
            "reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );",
            "float wrapNL = saturate( ( dot( geometryNormal, directLight.direction ) + uWrapLocal ) / ( 1.0 + uWrapLocal ) );\n" +
            "reflectedLight.directDiffuse += ( wrapNL * directLight.color ) * diffuseBRDF * ( 1.0 - F );"))
          .replace("#include <color_fragment>", blush
            ? "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n diffuseColor.rgb *= vColor.rgb;\n float bm = smoothstep(0.10, 0.85, vColor.a) * clamp(uBlush, 0.0, 1.0);\n diffuseColor.g *= (1.0 - 0.76 * bm);\n diffuseColor.rgb = mix(diffuseColor.rgb, uBlushColor, bm * 0.88);\n#endif"
            : "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n diffuseColor.rgb *= vColor.rgb;\n#endif")
          .replace("#include <opaque_fragment>", blush
            ? "float fres = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0);\n" +
              "outgoingLight += uRimColorLocal * fres * uRimLocal * (0.35 + 0.65 * diffuseColor.g);\n" +
              "#if defined( USE_COLOR_ALPHA )\n float bmGlow = smoothstep(0.12, 0.85, vColor.a) * clamp(uBlush, 0.0, 1.0);\n outgoingLight += vec3(0.36, 0.05, 0.14) * bmGlow;\n#endif\n" +
              "#include <opaque_fragment>"
            : "float fres = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 3.0);\n" +
              "outgoingLight += uRimColorLocal * fres * uRimLocal * (0.35 + 0.65 * diffuseColor.g);\n#include <opaque_fragment>");
    };
    mat.customProgramCacheKey = () => `stylised-v3-${wrap}-${rim}-${blush}`;
    return mat;
  }

  function liquidMaterial() {
    const m = new THREE.MeshPhysicalMaterial({
      color: 0x52260d, roughness: 0.14, clearcoat: 0.75, clearcoatRoughness: 0.08,
      side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1
    });
    m.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, { uTop: U.uTop, uFlow: U.uFlow, uSputter: U.uSputter, uTime: U.uTime });
      sh.vertexShader = "varying float vT;\n" + sh.vertexShader.replace("#include <uv_vertex>", "#include <uv_vertex>\n vT = uv.x;");
      sh.fragmentShader = "varying float vT; uniform float uTop, uFlow, uSputter, uTime;\n" + sh.fragmentShader
        .replace("#include <clipping_planes_fragment>",
          "#include <clipping_planes_fragment>\n" +
          " if (uTop < 0.0) discard;\n" +
          " float top = uTop + 0.006 * sin(uTime * 24.0) * step(0.02, uTop);\n" +
          " if (vT > top) discard;\n" +
          " float bub = fract(vT * 10.0 - uTime * 3.0);\n" +
          " if (uSputter > 0.01 && bub < uSputter * 0.45 && vT > 0.22) discard;")
        .replace("#include <color_fragment>",
          "#include <color_fragment>\n" +
          " float streak = 0.5 + 0.5 * sin((vT * 46.0 - uTime * 9.0) * 6.2831);\n" +
          " float swirl = 0.5 + 0.5 * cos((vT * 22.0 - uTime * 5.0) * 6.2831);\n" +
          " diffuseColor.rgb *= 0.92 + (0.42 * streak + 0.16 * swirl) * (0.25 + 0.75 * uFlow);\n" +
          " diffuseColor.rgb += vec3(0.28, 0.15, 0.06) * smoothstep(top - 0.048, top, vT);\n" +
          " if (!gl_FrontFacing) diffuseColor.rgb *= 0.72;");
    };
    m.customProgramCacheKey = () => "liquid-v2";
    return m;
  }

  function strawMaterial() {
    const m = new THREE.MeshPhysicalMaterial({
      color: 0xf7fbff, roughness: 0.12, transparent: true, opacity: 0.32,
      depthWrite: false, clearcoat: 0.85, clearcoatRoughness: 0.05, side: THREE.FrontSide
    });
    m.onBeforeCompile = (sh) => {
      sh.fragmentShader = sh.fragmentShader.replace("#include <opaque_fragment>",
        "float fr = pow(1.0 - saturate(dot(normalize(normal), normalize(vViewPosition))), 2.1);\n" +
        "diffuseColor.a = clamp(0.14 + 0.76 * fr, 0.0, 0.90);\n" +
        "outgoingLight += vec3(0.14) * fr;\n#include <opaque_fragment>");
    };
    m.customProgramCacheKey = () => "straw-v2";
    return m;
  }

  // ---------------------------------------------------------------- framing
  // Fit the mascot's bounding box into a target rectangle of the hero (fractions, y from the top) instead of
  // hand-tuning a camera target. Wide screens: mascot tucked into the upper-right corner, bubble to its left.
  // Portrait/phones: bubble floats above the head so both stay readable.
  const MASCOT_BOX = { min: new THREE.Vector3(-1.29, -0.82, -0.9), max: new THREE.Vector3(1.32, 1.42, 1.28) };
  const layout = { bubbleOffset: new THREE.Vector3(), bubbleScale: 1 };
  function pickLayout(aspect) {
    if (aspect >= 1.25) {
      // desktop / landscape tablet: hint text top-left, ask bar bottom-left, mascot in the top-right corner, wide 2:1 bubble filling whitespace
      return { rect: { x0: 0.68, x1: 0.99, y0: 0.04, y1: 0.76 }, bubbleOffset: [0, 0, 0], bubbleScale: 1.0 };
    }
    // portrait: mascot lower-center, speech bubble centered above head
    return { rect: { x0: 0.16, x1: 0.84, y0: 0.44, y1: 0.74 }, bubbleOffset: [3.45, 2.15, 0.1], bubbleScale: 0.82 };
  }
  function resize() {
    const r = stage.getBoundingClientRect();
    const w = Math.max(1, Math.round(r.width)), h = Math.max(1, Math.round(r.height));
    renderer.setSize(w, h, false);
    const aspect = w / h;
    camera.aspect = aspect;
    const L = pickLayout(aspect);
    layout.bubbleOffset.fromArray(L.bubbleOffset);
    layout.bubbleScale = L.bubbleScale;
    const { x0, x1, y0, y1 } = L.rect;
    const bw = MASCOT_BOX.max.x - MASCOT_BOX.min.x, bh = MASCOT_BOX.max.y - MASCOT_BOX.min.y;
    const halfH = Math.max(bh / (2 * (y1 - y0)), bw / (2 * (x1 - x0) * aspect));
    const cx = (MASCOT_BOX.min.x + MASCOT_BOX.max.x) / 2, cy = (MASCOT_BOX.min.y + MASCOT_BOX.max.y) / 2;
    const target = new THREE.Vector3(
      cx - ((x0 + x1) - 1) * halfH * aspect,
      cy - (1 - (y0 + y1)) * halfH,
      0.35);
    const elev = THREE.MathUtils.degToRad(6);
    const dist = halfH / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    camera.position.set(target.x, target.y + Math.sin(elev) * dist, target.z + Math.cos(elev) * dist);
    camera.lookAt(target.x, target.y, target.z);
    camera.updateProjectionMatrix();
    if (state.ready && !state.running) renderer.render(scene, camera);
  }
  new ResizeObserver(resize).observe(stage);

  // ---------------------------------------------------------------- input & 3D bubble interaction
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const lookPlaneZ = 2.4;

  function onPointer(e) {
    state.pointer.x = e.clientX; state.pointer.y = e.clientY;
    state.pointer.has = true; state.pointer.last = performance.now();
    state.pointer.touch = e.pointerType === "touch";
  }
  addEventListener("pointermove", onPointer, { passive: true });
  addEventListener("pointerdown", onPointer, { passive: true });
  document.addEventListener("pointerleave", () => { state.pointer.has = false; });
  addEventListener("blur", () => { state.pointer.has = false; });

  function nextBubbleCard() {
    if (bubble.mode === "tab" && bubble.tabKey && BUBBLE_INDEX.tabs[bubble.tabKey]) {
      const list = BUBBLE_INDEX.tabs[bubble.tabKey];
      bubble.tabIdx = (bubble.tabIdx + 1) % list.length;
      setBubbleCard(list[bubble.tabIdx], 3.4);
    } else {
      bubble.mode = "about";
      bubble.aboutIdx = (bubble.aboutIdx + 1) % BUBBLE_INDEX.about.length;
      setBubbleCard(BUBBLE_INDEX.about[bubble.aboutIdx], 3.4);
    }
  }

  function showTabTopic(tabKey) {
    const list = BUBBLE_INDEX.tabs[tabKey];
    if (!list || !list.length) return;
    bubble.mode = "tab";
    bubble.tabKey = tabKey;
    bubble.tabIdx = 0;
    setBubbleCard(list[0], 4.2, 3);
    state.rig.event({ name: "kickVisor", amount: 0.55 });
  }

  function clearTabTopic() {
    bubble.mode = "about";
    bubble.tabKey = null;
    setBubbleCard(BUBBLE_INDEX.about[bubble.aboutIdx], 2.8);
  }

  let askSeq = 0;
  function askChatbot(query) {
    const q = (query || "").trim();
    if (!q) return null;
    const seq = ++askSeq;
    bubble.mode = "qa";
    state.rig.event({ name: "kickVisor", amount: 0.65 });
    state.rig.event({ name: "kickSquash", amount: 0.35 });
    const local = answerQuestion(q);
    if (!liveChatEnabled()) {
      setBubbleCard(local, 4.6, 4);
      return local;
    }
    // Live answer: show a thinking bubble, fall back to the on-page knowledge base if the API is slow or down.
    let dots = 1;
    setBubbleCard({ thinking: true, tag: "💭 thinking", title: "Hmm, good question", dots }, 3.6);
    const tick = setInterval(() => {
      if (seq !== askSeq || !bubble.currentCard.thinking) return clearInterval(tick);
      dots = (dots % 3) + 1;
      drawBubbleCanvas(bubbleCanvas, { ...bubble.currentCard, dots });
      bubbleTex.needsUpdate = true;
    }, 380);
    const timeout = new Promise((r) => setTimeout(() => r(null), 9000));
    Promise.race([askLiveLLM(q), timeout]).then((live) => {
      clearInterval(tick);
      if (seq !== askSeq) return;
      setBubbleCard(live || local, 3.0, 4);
    });
    return local;
  }

  root.addEventListener("click", (e) => {
    if (e.target.closest("a, button, input, form, [data-ask-bar]")) return;
    if (!state.ready) return;

    // Check if user clicked the 3D Blender Chat Bubble mesh
    const N = state.nodes;
    setNDC(e.clientX, e.clientY);
    ray.setFromCamera(ndc, camera);
    const bubbleMeshes = [N.ChatBubbleFace, N.ChatBubbleFrame].filter(Boolean);
    if (bubble.targetScale > 0.1 && bubbleMeshes.length && ray.intersectObjects(bubbleMeshes, false).length > 0) {
      nextBubbleCard();
      return;
    }

    if (reduced) return;
    const now = performance.now();
    state.clicks = state.clicks.filter((t) => now - t < 1800);
    state.clicks.push(now);
    sound.unlock();
    if (state.empty) { refill(); return; }
    if (state.clicks.length >= 4) { state.clicks = []; requestSip("empty"); return; }
    requestSip("normal");
  });

  soundBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const on = sound.toggle();
    soundBtn.setAttribute("aria-pressed", String(on));
    soundBtn.querySelector("span").textContent = on ? "Sound on" : "Sound off";
    if (on) {
      if (state.ready && !state.sip && !state.empty && !reduced) requestSip("normal");
      else sound.playDrinkClip(1.1);
    }
  });

  function hoverCheck() {
    if (!state.ready || !state.pointer.has || state.pointer.touch) return;
    const N = state.nodes;
    if (!N.Box) return;
    setNDC(state.pointer.x, state.pointer.y);
    ray.setFromCamera(ndc, camera);
    const bubbleHit = bubble.targetScale > 0.1 && ray.intersectObjects([N.ChatBubbleFace, N.ChatBubbleFrame].filter(Boolean), false).length > 0;
    const boxHit = !bubbleHit && ray.intersectObjects([N.Box, N.Hand].filter(Boolean), false).length > 0;
    state.hoverBubble = bubbleHit;
    if (boxHit !== state.hoverBox || bubbleHit) {
      state.hoverBox = boxHit;
      canvas.style.cursor = (boxHit || bubbleHit) ? "pointer" : "";
      if (boxHit && !reduced && !state.sip && !state.empty && state.t - state.lastSipEnd > 2.5) requestSip("normal");
    }
  }

  function setNDC(cx, cy) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((cx - r.left) / r.width) * 2 - 1, -((cy - r.top) / r.height) * 2 + 1);
  }

  // ---------------------------------------------------------------- sips (decoupled from chat bubble)
  function requestSip(kind, forceGulps) {
    if (state.empty && kind !== "empty") return;
    if (state.sip) { if (kind === "empty") state.queued = "empty"; return; }
    if (kind === "normal" && state.level <= 0.2) kind = "empty";
    const clipKey = sound.pickNextChoice();
    let gulps;
    if (clipKey === "fortnite_shield") {
      gulps = kind === "empty" ? 11 : 9;
    } else if (clipKey === "roblox_drink") {
      gulps = kind === "empty" ? 5 : 4;
    } else if (clipKey === "minecraft_drink") {
      gulps = 3;
    } else {
      gulps = 2; // roblox_nom
    }
    if (forceGulps != null) gulps = forceGulps;
    state.sip = planSip({ gulps, kind, strength: 0.85 + Math.random() * 0.3 });
    state.sipT = 0; state.ei = 0;
    sound.sipStart(state.sip, clipKey);
  }

  function refill() {
    state.empty = false; state.level = 1;
    state.rig.sagTarget = 0;
    state.rig.squeeze.x = Math.max(state.rig.squeeze.x, 0.85);
    state.rig.squeeze.kick(-6);
    state.refill = 1;
    sound.pop(1);
    state.rig.event({ name: "kickSquash", amount: 0.7 });
    state.rig.event({ name: "kickVisor", amount: 1.0 });
  }

  function finishSip() {
    const kind = state.sip.kind;
    state.sip = null;
    state.lastSipEnd = state.t;
    state.nextIdleSip = state.t + 6 + Math.random() * 4;
    if (kind === "empty") { state.level = 0; state.empty = true; state.rig.sagTarget = 1; }
    else if (kind === "normal") { state.level = Math.max(0, state.level - 0.13); state.rig.sagTarget = (1 - state.level) * 0.55; }
    if (state.queued) { const q = state.queued; state.queued = null; requestSip(q); }
  }

  // ---------------------------------------------------------------- springs
  function crit(s, target, w, dt) {
    dt = Math.max(0, dt);
    const x0 = s.x - target, e = Math.exp(-w * dt);
    const x = (x0 + (s.v + w * x0) * dt) * e;
    s.v = (s.v - w * (s.v + w * x0) * dt) * e;
    s.x = target + x;
  }
  const softClamp = (x, m) => m * Math.tanh(x / m);

  // ---------------------------------------------------------------- frame loop
  const clock = { last: 0 };
  const perf = { acc: 0, n: 0, slow: 0, fps: 60, ft: 0 };
  let raf = 0;
  function start() {
    if (state.running || state.frozen || !state.ready || !state.visible || !state.inView) return;
    state.running = true;
    clock.last = -1;
    raf = requestAnimationFrame(frame);
  }
  function stop() { state.running = false; cancelAnimationFrame(raf); }

  const tmpV = new THREE.Vector3(), plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -lookPlaneZ);

  function frame(now) {
    if (!state.running) return;
    raf = requestAnimationFrame(frame);
    if (clock.last < 0) clock.last = now;
    const dt = Math.max(0, Math.min((now - clock.last) / 1000, 1 / 20));
    clock.last = Math.max(clock.last, now);
    tick(dt, now);
  }

  function tick(dt, now) {
    state.t += dt;
    U.uTime.value = state.t;
    const t0 = performance.now();

    // ---- where to look
    const idle = !state.pointer.has || now - state.pointer.last > (state.pointer.touch ? 2500 : 3200);
    let tyaw = 0, tpitch = 0;
    const MAXY = reduced ? 0.20 : 0.34, MAXP_UP = reduced ? 0.07 : 0.14, MAXP_DN = reduced ? 0.04 : 0.07;
    if (!idle) {
      setNDC(state.pointer.x, state.pointer.y);
      ray.setFromCamera(ndc, camera);
      if (ray.ray.intersectPlane(plane, tmpV)) {
        tmpV.sub(state.eye);
        tyaw = Math.atan2(tmpV.x, tmpV.z);
        tpitch = -Math.atan2(tmpV.y, Math.hypot(tmpV.x, tmpV.z));
      }
    } else if (!reduced) {
      const s = state.t;
      tyaw = 0.26 * Math.sin(s / 2.3) + 0.08 * Math.sin(s / 1.27 + 1.3);
      tpitch = -0.03 + 0.05 * Math.sin(s / 2.9 + 0.4);
    }
    tyaw = softClamp(tyaw, MAXY);
    tpitch = tpitch < 0 ? softClamp(tpitch, MAXP_UP) : softClamp(tpitch, MAXP_DN);
    const w = reduced ? 4.2 : 7.6;
    const T = state.track;
    crit(T.yaw, tyaw, w, dt);
    crit(T.pitch, tpitch, w, dt);
    crit(T.roll, -0.13 * tyaw, w * 0.85, dt);

    // ---- 3D Chat Bubble periodic cycle (appears & cycles periodically)
    bubble.timer += dt;
    if (!reduced && !state.frozen) {
      if (bubble.phase === "visible" && bubble.timer >= bubble.showDur) {
        if (bubble.mode === "tab" && bubble.tabKey && BUBBLE_INDEX.tabs[bubble.tabKey]) {
          // Cycle within the active tab's elaboration cards
          const list = BUBBLE_INDEX.tabs[bubble.tabKey];
          bubble.tabIdx = (bubble.tabIdx + 1) % list.length;
          setBubbleCard(list[bubble.tabIdx], 2.8);
        } else {
          // Periodically tuck the 3D bubble away briefly, then pop up with the next About Me thought
          bubble.phase = "hiding";
          bubble.timer = 0;
          bubble.targetScale = 0;
        }
      } else if (bubble.phase === "hiding" && bubble.timer >= bubble.hideDur) {
        bubble.mode = "about";
        bubble.aboutIdx = (bubble.aboutIdx + 1) % BUBBLE_INDEX.about.length;
        setBubbleCard(BUBBLE_INDEX.about[bubble.aboutIdx], 3.4);
      }
    }
    bubble.scale.step(dt, bubble.targetScale);

    // ---- sip
    if (!reduced && !state.sip && !state.empty && state.t > state.nextIdleSip && !document.hidden) requestSip("normal");
    let tg = null;
    if (state.sip) {
      state.sipT += dt;
      const P = state.sip;
      while (state.ei < P.events.length && P.events[state.ei].t <= state.sipT) {
        const ev = P.events[state.ei++];
        state.rig.event(ev);
        sound.event(ev, P);
      }
      tg = sipTargets(P, Math.min(state.sipT, P.duration));
      if (state.sipT >= P.duration) finishSip();
    }
    const r = state.rig.update(dt, tg ? tg : (state.empty ? { squeeze: 0.88 } : null));
    applyRig(tg, r, dt);

    if ((state.frameNo = (state.frameNo || 0) + 1) % 6 === 0) hoverCheck();

    renderer.render(scene, camera);
    adapt(now, performance.now() - t0, dt);
  }

  function applyRig(tg, r, dt) {
    const N = state.nodes, R = state.rest, T = state.track;
    const s = r.squash;
    const breathe = reduced ? 0 : Math.sin(state.t * 2.1);
    if (N.Mascot && R.Mascot) {
      const sipLean = tg ? tg.leanPitch * 0.42 : 0;
      N.Mascot.rotation.set(T.pitch.x * 0.42 + sipLean, T.yaw.x * 0.46, T.roll.x * 0.44, "YXZ");
      N.Mascot.position.copy(R.Mascot.p);
      N.Mascot.position.y += 0.006 * breathe + 0.010 * s;
      N.Mascot.scale.set(1 - 0.012 * s, 1 + 0.020 * s, 1 - 0.012 * s);
    }
    if (N.HeadTrack && R.HeadTrack) {
      N.HeadTrack.rotation.set(T.pitch.x * 0.58, T.yaw.x * 0.54, T.roll.x * 0.56, "YXZ");
    }
    if (N.HeadSquash && R.HeadSquash) {
      N.HeadSquash.rotation.set(tg ? tg.leanPitch * 0.75 : 0, tg ? tg.leanYaw : 0, 0);
      N.HeadSquash.scale.set(1 - 0.028 * s, 1 + 0.056 * s, 1 - 0.028 * s);
    }
    if (N.Visor && R.Visor) {
      N.Visor.position.copy(R.Visor.p);
      N.Visor.position.y += 0.011 * r.visor;
      N.Visor.position.z += 0.005 * Math.abs(r.visor);
      N.Visor.quaternion.copy(R.Visor.q);
      N.Visor.rotateX(0.022 * r.visor);
    }
    if (N.BubbleRig && R.BubbleRig) {
      const bs = Math.max(0.0001, bubble.scale.x);
      N.BubbleRig.visible = bs > 0.015;
      N.BubbleRig.position.copy(R.BubbleRig.p).add(layout.bubbleOffset);
      const bob = reduced ? 0 : Math.sin(state.t * 1.65) * 0.018;
      N.BubbleRig.position.y += bob;
      const tiltZ = (reduced ? 0 : Math.sin(state.t * 1.1) * 0.012) + (bs - 1.0) * 0.14;
      N.BubbleRig.rotation.set(T.pitch.x * 0.08, T.yaw.x * 0.10, tiltZ, "YXZ");
      const k = bs * layout.bubbleScale;
      N.BubbleRig.scale.set(k, k, k);
    }
    const m = (name, v) => { const l = state.morphs[name]; if (l) for (const [o, i] of l) o.morphTargetInfluences[i] = v; };
    m("CheekPuff", tg ? tg.cheek : 0);
    m("Pucker", tg ? tg.pucker : 0);
    m("SwallowHigh", tg ? tg.swallowHi : 0);
    m("SwallowLow", tg ? tg.swallowLo : 0);
    m("Squeeze", r.squeeze);
    m("Sag", r.sag);
    const grip = tg ? Math.min(1, Math.max(0, tg.grip + 0.7 * (r.squeeze - tg.squeeze))) : Math.max(0, 0.7 * r.squeeze);
    m("Grip", grip);
    const fill = tg ? tg.fill : 0;
    m("Fill", fill);
    U.uTop.value = fill > 0.001 ? THREE.MathUtils.lerp(Math.max(0.04, state.tBox - 0.14), state.tMouth + 0.01, fill) : -1;
    U.uFlow.value = tg ? tg.flow : 0;
    U.uSputter.value = tg ? tg.sputter : 0;
    U.uBlush.value = tg ? tg.blush : 0;
  }

  // ---------------------------------------------------------------- adaptive resolution
  function adapt(now, cpuMs, dt) {
    perf.acc += dt; perf.n++;
    if (perf.acc >= 1) {
      perf.fps = perf.n / perf.acc; perf.ft = (perf.acc / perf.n) * 1000;
      if (perf.fps < 50 && dpr > 1) { perf.slow++; } else { perf.slow = 0; }
      if (perf.slow >= 2) { dpr = Math.max(1, dpr - 0.25); renderer.setPixelRatio(dpr); resize(); perf.slow = 0; }
      if (DEBUG) debugPanel(cpuMs);
      perf.acc = 0; perf.n = 0;
    }
  }
  let dbg;
  function debugPanel(cpuMs) {
    if (!dbg) { dbg = document.createElement("pre"); dbg.className = "mascot-debug"; root.appendChild(dbg); }
    const info = renderer.info.render;
    const gl = renderer.getContext();
    const ext = gl.getExtension("WEBGL_debug_renderer_info");
    const gpu = ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : "n/a";
    dbg.textContent = `fps ${perf.fps.toFixed(1)}  frame ${perf.ft.toFixed(1)} ms  cpu ${cpuMs.toFixed(2)} ms\n` +
      `dpr ${dpr}  draws ${info.calls}  tris ${info.triangles}\n${gpu}`;
    window.__mascotPerf = { fps: perf.fps, ft: perf.ft, cpuMs, dpr, draws: info.calls, tris: info.triangles, gpu };
  }

  // ---------------------------------------------------------------- pause when hidden / offscreen
  document.addEventListener("visibilitychange", () => {
    state.visible = !document.hidden;
    state.visible ? start() : stop();
  });
  new IntersectionObserver((entries) => {
    state.inView = entries[0].isIntersecting;
    state.inView ? start() : stop();
  }, { threshold: 0 }).observe(root);

  // test & UI hooks
  window.__mascot = {
    state, sound, sip: (k = "normal", g) => requestSip(k, g), refill,
    look: (x, y) => onPointer({ clientX: x, clientY: y, pointerType: "mouse" }),
    showTabTopic, clearTabTopic, ask: askChatbot, nextBubbleCard,
    showAnswer: (card) => { bubble.mode = "qa"; setBubbleCard(card, 4.6, 4); },
    renderer, camera, scene,
    freeze() { stop(); state.frozen = true; },
    resume() { state.frozen = false; start(); },
    advance(sec, fps = 60) {
      let now = state.fakeNow || performance.now();
      const n = Math.max(1, Math.round(sec * fps));
      for (let i = 0; i < n; i++) { now += 1000 / fps; state.pointer.last = state.pointer.has ? now : state.pointer.last; tick(1 / fps, now); }
      state.fakeNow = now;
    },
    snapshot(type = "image/png") { renderer.render(scene, camera); return canvas.toDataURL(type); },
  };
}

// ---------------------------------------------------------------- studio environment (round soft boxes)
function makeStudioEnv(renderer) {
  const env = new THREE.Scene();
  const dome = new THREE.Mesh(new THREE.SphereGeometry(20, 48, 24), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false,
    vertexShader: "varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
    fragmentShader: "varying vec3 vP; void main(){ float h = vP.y; vec3 top = vec3(0.95, 0.97, 1.0); vec3 hor = vec3(0.62, 0.66, 0.62); vec3 bot = vec3(0.24, 0.27, 0.22);" +
      " vec3 c = h > 0.0 ? mix(hor, top, pow(h, 0.55)) : mix(hor, bot, pow(-h, 0.45)); gl_FragColor = vec4(c, 1.0); }",
  }));
  env.add(dome);
  const disk = (r, x, y, z, I, sx = 1) => {
    const m = new THREE.Mesh(new THREE.CircleGeometry(r, 48), new THREE.MeshBasicMaterial({ color: new THREE.Color(I, I, I * 0.97), side: THREE.DoubleSide }));
    m.position.set(x, y, z); m.scale.x = sx; m.lookAt(0, 0, 0); env.add(m);
  };
  disk(2.6, -6, 7.5, 8, 7.5);        // key softbox (upper-left, front)
  disk(4.0, 2, 9, 2, 1.6);           // soft top light
  disk(1.8, 4, 5, -8, 5);            // rim
  disk(1.5, -5, 4, -7, 3);           // rim left
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.035).texture;
  pmrem.dispose();
  return tex;
}
