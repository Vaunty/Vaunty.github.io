// Sip choreography: pure, deterministic functions shared by the hero page (live, randomised)
// and tools/sample_sip.mjs (bakes the canonical 3-gulp clip that Blender keyframes into the GLB).
//
// Channels (all unitless 0..1 unless noted):
//   pucker      lips gather onto the straw            -> morph "Pucker" (Head + Lips)
//   fill        chocolate column top, 0 = box, 1 = mouth (shader uniform / morph "Fill")
//   flow        liquid streak speed while drawing     (shader uniform)
//   sputter     0..1 air bubbles breaking the column  (slurp-to-empty gag)
//   cheek       cheek puff                            -> morph "CheekPuff" (Head + Lips)
//   swallowHi/Lo travelling throat bump               -> morphs "SwallowHigh" / "SwallowLow"
//   squeeze     box crumple *target* (spring adds the springy pop + overshoot)
//   grip        hand squeeze                          -> morph "Grip"
//   leanPitch/leanYaw  radians, additive head lean toward the straw
//   blush       contented blush pulse
// Events (fire once when t crosses them): draw, gulp, release, pop, ahh, kickVisor, kickSquash.

export const ease = {
  inOut: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  out: (t) => 1 - Math.pow(1 - t, 3),
  in: (t) => t * t * t,
  outBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  sine: (t) => 0.5 - 0.5 * Math.cos(Math.PI * t),
};

function seg(t, t0, t1, a, b, e = ease.inOut) {
  if (t <= t0) return a;
  if (t >= t1) return b;
  return a + (b - a) * e((t - t0) / (t1 - t0));
}

function bump(t, t0, t1) {
  if (t <= t0 || t >= t1) return 0;
  const s = Math.sin(Math.PI * (t - t0) / (t1 - t0));
  return s * s;
}

// one gulp's cheek pulse: fill the mouth, hold, swallow
function puff(t, tg) {
  if (t < tg) return 0;
  if (t < tg + 0.16) return ease.out((t - tg) / 0.16);
  if (t < tg + 0.22) return 1;
  if (t < tg + 0.36) return 1 - ease.inOut((t - tg - 0.22) / 0.14);
  return 0;
}

/**
 * kind: "normal" | "empty" (greedy slurp that drains the box) | "dry" (box already empty, just air)
 */
export function planSip({ gulps = 3, period = 0.42, strength = 1, kind = "normal", rng = Math.random } = {}) {
  if (kind === "empty") { gulps = Math.max(gulps, 7); period = 0.27; }
  if (kind === "dry") { gulps = 2; period = 0.3; }
  const start = kind === "dry" ? 0.32 : 0.5;
  const gulpTimes = [];
  for (let i = 0; i < gulps; i++) gulpTimes.push(start + i * period + (i ? (rng() - 0.5) * 0.05 : 0));
  const release = start + gulps * period;
  const events = [{ t: 0.1, name: "draw" }];
  gulpTimes.forEach((tg, i) => {
    events.push({ t: tg + 0.2, name: "gulp", i });
    events.push({ t: tg + 0.26, name: "kickVisor", amount: kind === "empty" ? 0.6 : 0.85 });
  });
  events.push({ t: release, name: "release" });
  events.push({ t: release + 0.08, name: "pop" });
  events.push({ t: release + 0.12, name: "kickSquash", amount: kind === "dry" ? 0.6 : 1 });
  events.push({ t: release + 0.12, name: "kickVisor", amount: 1.4 });
  events.push({ t: release + 0.18, name: "ahh" });
  events.sort((a, b) => a.t - b.t);
  return { gulps, period, strength, kind, gulpTimes, release, start, events, duration: release + 1.45 };
}

export function sipTargets(p, t) {
  const { gulpTimes, release, strength, kind, start } = p;
  const after = t > release;
  const dry = kind === "dry", empty = kind === "empty";

  let pucker = after ? seg(t, release, release + 0.2, 1, 0, ease.out) : seg(t, 0, 0.22, 0, 1, ease.outBack);

  // liquid column: rise, tiny dips per swallow, then drain under gravity
  const riseEnd = start + 0.02;
  let fill = seg(t, 0.1, riseEnd, 0, 1, ease.inOut);
  let sputter = 0;
  if (dry) { fill = 0.42 * bump(t, 0.1, release + 0.1); sputter = seg(t, 0.1, 0.3, 0, 1); }
  let flow = seg(t, 0.3, start, 0, 1);

  let cheek = after ? 0 : seg(t, 0.28, start, 0, 0.16);
  let swallowHi = 0, swallowLo = 0, nod = 0;
  for (const tg of gulpTimes) {
    cheek += (empty ? 0.98 : 0.82) * puff(t, tg);
    swallowHi += 1.15 * bump(t, tg + 0.21, tg + 0.36);
    swallowLo += 1.15 * bump(t, tg + 0.28, tg + 0.45);
    if (!dry) fill -= 0.085 * bump(t, tg + 0.18, tg + 0.36);
    nod += 1.15 * bump(t, tg + 0.16, tg + 0.42);
  }
  if (empty) {
    // greedy: the last few gulps pull air, the column breaks up
    const tAir = gulpTimes[Math.max(0, gulpTimes.length - 3)];
    sputter = seg(t, tAir, tAir + 0.25, 0, 1);
  }
  if (after) {
    cheek *= seg(t, release, release + 0.22, 1, 0);
    fill = dry ? 0 : seg(t, release + 0.02, release + 0.42, Math.max(fill, 0.95), 0, ease.in);
    flow = seg(t, release, release + 0.3, 1, 0);
  }
  cheek = Math.min(cheek, 1.05);
  swallowHi = Math.min(swallowHi, 1);
  swallowLo = Math.min(swallowLo, 1);

  // box: squeezes a bit more with every gulp, springs back after release (spring lives in the rig)
  const n = gulpTimes.length;
  let squeeze = seg(t, 0.1, start, 0, 0.16);
  gulpTimes.forEach((tg, i) => {
    squeeze += ((empty ? 0.84 : 0.6) * strength / n) * seg(t, tg, tg + 0.3, 0, 1, ease.out);
  });
  if (dry) squeeze = 0.12 * bump(t, 0.1, release + 0.1);
  if (after && !empty) squeeze = seg(t, release + 0.06, release + 0.1, squeeze, 0, ease.in);
  const grip = Math.min(1, (after ? seg(t, release, release + 0.3, 0.3, 0) : seg(t, 0, 0.3, 0, 0.3)) + 0.7 * squeeze);

  // lean in toward the straw, little nods per gulp, satisfied tilt back after
  const lean = after ? seg(t, release, release + 0.5, 1, 0) : seg(t, 0, 0.3, 0, 1);
  const leanPitch = 0.040 * lean + 0.018 * nod - 0.035 * bump(t, release + 0.15, release + 1.0);
  const leanYaw = 0.05 * lean;

  // Blush warms up progressively across each gulp and blooms rosy-pink after release
  let gulpWarmth = 0;
  for (const tg of gulpTimes) {
    gulpWarmth += (0.58 / Math.max(1, n)) * seg(t, tg, tg + 0.28, 0, 1, ease.out) + 0.16 * puff(t, tg);
  }
  const activeBlush = Math.min(0.92, seg(t, 0.16, start, 0, 0.28) + gulpWarmth);
  const postBlush = seg(t, release, release + 0.24, Math.max(0.72, activeBlush), 1.0, ease.out) * seg(t, release + 0.98, release + 1.45, 1.0, 0.0);
  const blush = after ? postBlush : activeBlush;

  return { pucker, fill: Math.max(0, Math.min(1, fill)), flow, sputter, cheek, swallowHi, swallowLo,
           squeeze, grip, leanPitch, leanYaw, blush };
}

/** Damped spring with exact-ish fixed sub-stepping (stable for any frame time). */
export class Spring {
  constructor(omega, zeta, x = 0) { this.w = omega; this.z = zeta; this.x = x; this.v = 0; this.target = x; }
  kick(v) { this.v += v; }
  step(dt, target = this.target, zeta = this.z) {
    this.target = target;
    const h = 1 / 240;
    let n = Math.min(64, Math.ceil(dt / h));
    const sub = dt / Math.max(n, 1);
    for (let i = 0; i < n; i++) {
      const a = this.w * this.w * (target - this.x) - 2 * zeta * this.w * this.v;
      this.v += a * sub;
      this.x += this.v * sub;
    }
    return this.x;
  }
}

/**
 * Turn targets into the final rig values, with springs for the box pop, squash/stretch and visor bounce.
 * Call once per frame. Returns channel values ready to apply to morphs / nodes.
 */
export class SipRig {
  constructor() {
    this.squeeze = new Spring(23, 0.17);   // springy pop with overshoot
    this.squash = new Spring(15, 0.26);    // contented squash & stretch
    this.visor = new Spring(21, 0.24);     // visor bounce
    this.sag = new Spring(4, 1, 0);        // slow sag over many sips
    this.sagTarget = 0;
  }
  event(e) {
    if (e.name === "kickVisor") this.visor.kick(-e.amount * 9);
    if (e.name === "kickSquash") this.squash.kick(e.amount * 7.5);
  }
  update(dt, tg) {
    const squeezeTarget = tg ? tg.squeeze : 0;
    const releasing = squeezeTarget < this.squeeze.x - 0.02;
    const squeeze = this.squeeze.step(dt, squeezeTarget, releasing ? 0.17 : 0.95);
    const squash = this.squash.step(dt, 0);
    const visor = this.visor.step(dt, 0);
    const sag = this.sag.step(dt, this.sagTarget);
    return { squeeze, squash, visor, sag };
  }
}
