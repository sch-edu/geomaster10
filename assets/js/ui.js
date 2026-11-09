/* ============================================================
   GeoQuest UI kit — DOM helpers, toasts, modal, juice
   ============================================================ */
export const $  = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));

export function h(strings, ...vals) {
  let out = strings[0];
  vals.forEach((v, i) => { out += String(v ?? '') + strings[i + 1]; });
  return out;
}
export function el(tag, attrs = {}, html = '') {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') n.className = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else if (k === 'html') n.innerHTML = v;
    else if (v !== false && v != null) n.setAttribute(k, v);
  }
  if (html) n.innerHTML = html;
  return n;
}

/* ---------- randomness ---------- */
export function seeded(str) {
  let a = 2166136261;
  for (let i = 0; i < str.length; i++) { a ^= str.charCodeAt(i); a = Math.imul(a, 16777619); }
  return function () {
    a += 0x6D2B79F5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const rand = (n = 1, rng = Math.random) => Math.floor(rng() * n);
export function shuffle(arr, rng = Math.random) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
export const sample = (arr, n, rng = Math.random) => shuffle(arr, rng).slice(0, n);
export const pick = (arr, rng = Math.random) => arr[Math.floor(rng() * arr.length)];

/* ---------- toasts ---------- */
export function toast(msg, type = '', ms = 3000) {
  const wrap = $('#toasts');
  if (!wrap) return;
  const t = el('div', { class: `toast ${type}` }, msg);
  wrap.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateY(10px)'; t.style.transition = '.3s'; }, ms - 320);
  setTimeout(() => t.remove(), ms);
}

/* ---------- modal ---------- */
export function modal(html, { dismissable = true } = {}) {
  const wrap = $('#modal'), body = $('#modal-body');
  body.innerHTML = html;
  wrap.hidden = false;
  wrap.dataset.dismissable = dismissable ? '1' : '0';
  return body;
}
export function closeModal() { const w = $('#modal'); if (w) { w.hidden = true; $('#modal-body').innerHTML = ''; } }
document.addEventListener('click', e => {
  const w = $('#modal');
  if (w && !w.hidden && e.target === w && w.dataset.dismissable !== '0') closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---------- confetti ---------- */
export function confetti(n = 60) {
  const colors = ['#b8ff5c','#4ee7ff','#ff5fa2','#ffc44d','#a78bfa','#3ddc97'];
  for (let i = 0; i < n; i++) {
    const c = el('i', { class: 'confetti' });
    c.style.left = Math.random() * 100 + 'vw';
    c.style.top = '-20px';
    c.style.background = colors[i % colors.length];
    c.style.borderRadius = Math.random() > .5 ? '50%' : '2px';
    c.style.animationDuration = (1.6 + Math.random() * 1.6) + 's';
    c.style.animationDelay = (Math.random() * .5) + 's';
    c.style.width = (5 + Math.random() * 7) + 'px';
    c.style.height = (8 + Math.random() * 10) + 'px';
    document.getElementById('fx-layer').appendChild(c);
    setTimeout(() => c.remove(), 3600);
  }
}

/* ---------- XP float ---------- */
export function xpFloat(amount, x, y) {
  const n = el('div', { class: 'xp-float' }, `+${amount} XP`);
  n.style.left = (x ?? window.innerWidth / 2) + 'px';
  n.style.top = (y ?? 160) + 'px';
  document.getElementById('fx-layer').appendChild(n);
  setTimeout(() => n.remove(), 1000);
}

/* ---------- audio (synth only, zero assets) ---------- */
let ac = null, soundOn = true;
export function setSound(on) { soundOn = on; }
function ctx() {
  if (!ac) { try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch { ac = null; } }
  if (ac && ac.state === 'suspended') ac.resume();
  return ac;
}
function tone(freq, dur, type = 'sine', gain = .07, delay = 0) {
  if (!soundOn) return;
  const a = ctx(); if (!a) return;
  const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.value = freq;
  o.connect(g); g.connect(a.destination);
  const t0 = a.currentTime + delay;
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(gain, t0 + .012);
  g.gain.exponentialRampToValueAtTime(.0001, t0 + dur);
  o.start(t0); o.stop(t0 + dur + .02);
}
export const sfx = {
  good() { tone(660, .12, 'sine', .06); tone(990, .16, 'sine', .05, .08); },
  great() { [523, 659, 784, 1046].forEach((f, i) => tone(f, .22, 'triangle', .05, i * .06)); },
  bad() { tone(190, .22, 'sawtooth', .05); tone(140, .26, 'sawtooth', .04, .08); },
  click() { tone(420, .05, 'square', .025); },
  tick() { tone(880, .03, 'square', .015); },
  level() { [392, 523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, .3, 'sine', .05, i * .08)); },
  pin() { tone(740, .07, 'triangle', .04); },
  boom() { tone(90, .4, 'sawtooth', .06); }
};
export function vibrate(ms = 30) { try { navigator.vibrate?.(ms); } catch {} }

/* ---------- misc ---------- */
export const fmtTime = s => `${Math.floor(s / 60)}:${String(Math.max(0, s % 60)).padStart(2, '0')}`;
export const pct = (a, b) => (b ? Math.round((a / b) * 100) : 0);
export const stars = (p, total = 5) => '★'.repeat(Math.round((p / 100) * total)) + '☆'.repeat(total - Math.round((p / 100) * total));

export const SNARK_GOOD = [
  'Correct. The examiner just felt a disturbance in the force.',
  'Boom. That answer had A-grade energy.',
  'Yes! Topper behaviour detected.',
  'Sahi hai! One more nail in the 100/100 coffin.',
  'Correct — NCERT would be proud of you.',
  'Perfect. Your future self is doing a little dance.',
  'Full marks energy. Keep it rolling.',
  'That is exactly what the book says. Word for word.'
];
export const SNARK_BAD = [
  'Nope. The book is hurt, but it will survive.',
  'Not quite — but now this fact is glued to your brain forever.',
  'Wrong, but in a character-building way.',
  'Almost. "Almost" gets 0 marks in boards though.',
  'Examiner says: nice try, beta. Read the line below.',
  'That was a trap and you walked in with confidence. Respect.',
  'Lost the point. Won the lesson. Rematch time.',
  'Close, but CBSE does not award vibes.'
];
export const snark = (good, rng = Math.random) => good ? pick(SNARK_GOOD, rng) : pick(SNARK_BAD, rng);
