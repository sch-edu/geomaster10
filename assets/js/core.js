/* ============================================================
   GeoQuest core — profile, XP, ranks, streaks, badges, SRS
   ============================================================ */
const KEY = 'geoquest.india.v1';
const DAY = 86400000;

export const RANKS = [
  { xp: 0,     name: 'Soil Beginner',        icon: '🌱' },
  { xp: 250,   name: 'Pebble Picker',        icon: '🪨' },
  { xp: 600,   name: 'Map Apprentice',       icon: '🧭' },
  { xp: 1150,  name: 'Monsoon Cadet',        icon: '🌧️' },
  { xp: 1900,  name: 'Crop Commander',       icon: '🌾' },
  { xp: 2900,  name: 'Mineral Miner',        icon: '⛏️' },
  { xp: 4100,  name: 'Industry Architect',   icon: '🏭' },
  { xp: 5600,  name: 'Lifeline Legend',      icon: '🚢' },
  { xp: 7600,  name: 'Board Exam Slayer',    icon: '🗡️' },
  { xp: 10000, name: 'Geography God — 100/100', icon: '🌏' }
];

export const BADGES = [
  { id:'first_blood', ic:'🩸', name:'First Strike',    desc:'Finish your first game' },
  { id:'perfect',     ic:'💯', name:'Flawless',        desc:'100% in a 10+ question game' },
  { id:'combo10',     ic:'🔥', name:'Combo Beast',     desc:'10 correct in a row' },
  { id:'streak3',     ic:'📅', name:'Three-Day Terror', desc:'3-day play streak' },
  { id:'streak7',     ic:'🗓️', name:'Week Warrior',    desc:'7-day play streak' },
  { id:'cartographer',ic:'🗺️', name:'Cartographer',    desc:'25 correct map pins' },
  { id:'soil_sage',   ic:'🌱', name:'Soil Sage',       desc:'Master 80% of Chapter 1' },
  { id:'boss1',       ic:'👑', name:'Boss Slayer',     desc:'Clear any chapter boss fight' },
  { id:'word_smith',  ic:'✍️', name:'Word Smith',      desc:'Score 80%+ in Long Answer Arena' },
  { id:'marathon',    ic:'🏃', name:'Marathon Mind',   desc:'Answer 250 questions total' },
  { id:'spartan',     ic:'🎁', name:'Daily Devotee',   desc:'Complete 5 daily challenges' },
  { id:'god',         ic:'🌏', name:'Geography God',   desc:'Clear the Ultimate God Exam' }
];

export const DEFAULT_PROFILE = () => ({
  v: 1,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  lastPlayed: null,        // YYYY-MM-DD
  lastSeenDate: null,
  facts: {},               // factId -> {s,c,w,st,e,i,d,t}
  badges: {},
  totals: { q: 0, correct: 0, games: 0, mapPins: 0, seconds: 0 },
  chapters: {},            // chapterId -> {best:{game:pct}, plays, bossCleared}
  dailies: {},             // date -> {score,total,done}
  weekly: {},              // weekKey -> {best,total}
  srsLog: [],
  sound: true,
  settings: { timer: true, snark: true }
});

let profile = DEFAULT_PROFILE();
export const bus = new EventTarget();
const emit = (type, detail) => bus.dispatchEvent(new CustomEvent(type, { detail }));

/* ---------- persistence ---------- */
export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      profile = Object.assign(DEFAULT_PROFILE(), parsed);
      profile.totals = Object.assign(DEFAULT_PROFILE().totals, parsed.totals || {});
    }
  } catch (e) { console.warn('GeoQuest: could not load save', e); }
  rollStreak();
  return profile;
}

let saveTimer = null;
export function save(now = false) {
  if (saveTimer) clearTimeout(saveTimer);
  const doSave = () => {
    try { localStorage.setItem(KEY, JSON.stringify(profile)); }
    catch (e) { console.warn('GeoQuest: save failed', e); }
  };
  if (now) doSave(); else saveTimer = setTimeout(doSave, 400);
}
export const P = () => profile;
export function resetProfile() { profile = DEFAULT_PROFILE(); save(true); emit('profile:reset'); }

/* ---------- dates / streak ---------- */
export const todayKey = (d = new Date()) =>
  `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;

function rollStreak() {
  const t = todayKey();
  const last = profile.lastPlayed;
  if (last === t) return;
  if (!last) return;
  const diff = Math.round((new Date(t) - new Date(last)) / DAY);
  if (diff > 1) { profile.streak = 0; }
}
function touchStreak() {
  const t = todayKey();
  if (profile.lastPlayed === t) return;
  const diff = profile.lastPlayed ? Math.round((new Date(t) - new Date(profile.lastPlayed)) / DAY) : 99;
  profile.streak = diff === 1 ? profile.streak + 1 : 1;
  profile.bestStreak = Math.max(profile.bestStreak, profile.streak);
  profile.lastPlayed = t;
  save();
  if (profile.streak === 3) unlock('streak3');
  if (profile.streak === 7) unlock('streak7');
  emit('streak', { streak: profile.streak });
}

/* ---------- ranks / levels ---------- */
export function rankFor(xp) {
  let r = RANKS[0];
  for (const rank of RANKS) if (xp >= rank.xp) r = rank;
  return r;
}
export function nextRank(xp) { return RANKS.find(r => r.xp > xp) || null; }
export function levelFor(xp) { return Math.floor(Math.pow(xp / 110, 0.62)) + 1; }
export function levelProgress(xp) {
  const lv = levelFor(xp);
  const cur = Math.pow((lv - 1), 1 / 0.62) * 110;
  const nxt = Math.pow(lv, 1 / 0.62) * 110;
  return { level: lv, pct: Math.max(0, Math.min(100, ((xp - cur) / (nxt - cur)) * 100)), toNext: Math.max(0, Math.ceil(nxt - xp)) };
}

/* ---------- XP ---------- */
export function addXP(amount, { reason = '', silent = false } = {}) {
  amount = Math.round(amount);
  if (!amount) return { amount: 0 };
  const beforeRank = rankFor(profile.xp).name;
  const beforeLevel = levelFor(profile.xp);
  profile.xp = Math.max(0, profile.xp + amount);
  const afterRank = rankFor(profile.xp);
  const afterLevel = levelFor(profile.xp);
  save();
  if (!silent) emit('xp', { amount, reason, xp: profile.xp });
  if (afterRank.name !== beforeRank) emit('rankup', { rank: afterRank });
  if (afterLevel > beforeLevel) emit('levelup', { level: afterLevel });
  return { amount, leveled: afterLevel > beforeLevel, rank: afterRank };
}

/* ---------- SRS (SM-2 lite) ---------- */
function factRec(id) {
  if (!profile.facts[id]) profile.facts[id] = { s:0, c:0, w:0, st:0, e:2.3, i:0, d:0, t:0 };
  return profile.facts[id];
}
export function recordAnswer(factId, correct, { ms = 0, game = '', mapPin = false } = {}) {
  if (!factId) return;
  const r = factRec(factId);
  const now = Date.now();
  r.s++; r.t = now;
  if (correct) {
    r.c++; r.st++;
    r.e = Math.min(2.9, r.e + 0.07);
    r.i = r.i ? Math.min(120, Math.round(r.i * r.e)) : 1;
    r.d = now + r.i * DAY;
  } else {
    r.w++; r.st = 0;
    r.e = Math.max(1.3, r.e - 0.28);
    r.i = 0;
    r.d = now + 0.02 * DAY;         // due almost immediately → forces micro-rematch
  }
  profile.totals.q++;
  if (correct) profile.totals.correct++;
  if (mapPin && correct) profile.totals.mapPins++;
  save();
  emit('answer', { factId, correct, ms, game });
  checkBadges();
}
export const factStat = id => profile.facts[id] || { s:0,c:0,w:0,st:0,d:0 };
export const isMastered = id => factStat(id).st >= 2;
export const isDue = id => factStat(id).d <= Date.now();

/* ---------- coverage ---------- */
export function coverageOf(chapter) {
  const ids = chapter.facts.map(f => f.id);
  let seen = 0, mastered = 0;
  for (const id of ids) { const s = factStat(id); if (s.s) seen++; if (s.st >= 2) mastered++; }
  return {
    total: ids.length, seen, mastered,
    pct: ids.length ? Math.round((mastered / ids.length) * 100) : 0,
    seenPct: ids.length ? Math.round((seen / ids.length) * 100) : 0
  };
}
export function globalCoverage(chapters) {
  let t = 0, m = 0, s = 0;
  for (const c of chapters) { const cv = coverageOf(c); t += cv.total; m += cv.mastered; s += cv.seen; }
  return { total: t, mastered: m, seen: s, pct: t ? Math.round((m / t) * 100) : 0, seenPct: t ? Math.round((s / t) * 100) : 0 };
}
export function dueFacts(chapter, limit = 20) {
  return chapter.facts.filter(f => factStat(f.id).s > 0 && isDue(f.id))
    .sort((a,b) => factStat(a.id).d - factStat(b.id).d).slice(0, limit);
}
export function weakFacts(chapter, limit = 12) {
  return chapter.facts
    .map(f => ({ f, s: factStat(f.id) }))
    .filter(o => o.s.s > 0)
    .sort((a,b) => (b.s.w - a.s.w) || (a.s.st - b.s.st) || (a.s.c - b.s.c))
    .slice(0, limit).map(o => o.f);
}

/* ---------- session bookkeeping ---------- */
export function startGame(gameId, chapterId) { touchStreak(); emit('game:start', { gameId, chapterId }); }
export function endGame({ gameId, chapterId, correct, total, xp, seconds = 0, detail = {} }) {
  profile.totals.games++;
  profile.totals.seconds += seconds;
  const cid = chapterId || 'mixed';
  profile.chapters[cid] = profile.chapters[cid] || { plays: 0, best: {}, bossCleared: false };
  const chRec = profile.chapters[cid];
  chRec.plays++;
  const pct = total ? Math.round((correct / total) * 100) : 0;
  chRec.best[gameId] = Math.max(chRec.best[gameId] || 0, pct);
  if (detail.boss && pct >= 95) chRec.bossCleared = true;
  save();
  unlock('first_blood');
  if (pct === 100 && total >= 10) unlock('perfect');
  if ((detail.bestCombo || 0) >= 10) unlock('combo10');
  if (profile.totals.q >= 250) unlock('marathon');
  if (profile.totals.mapPins >= 25) unlock('cartographer');
  if (detail.boss && pct >= 95) unlock('boss1');
  if (gameId === 'god' && pct >= 90) unlock('god');
  if (gameId === 'long' && pct >= 80) unlock('word_smith');
  checkBadges();
  emit('game:end', { gameId, chapterId, correct, total, xp, pct });
  return pct;
}

/* ---------- daily ---------- */
export function dailyDone() { return !!profile.dailies[todayKey()]?.done; }
export function markDaily(detail) {
  const k = todayKey();
  profile.dailies[k] = { ...(profile.dailies[k]||{}), ...detail, done: true };
  save();
  const doneCount = Object.values(profile.dailies).filter(d => d.done).length;
  if (doneCount >= 5) unlock('spartan');
  emit('daily', detail);
}
export const dailyCount = () => Object.values(profile.dailies).filter(d => d.done).length;
export const dailyStreakish = () => {
  let n = 0; const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today.getTime() - i * DAY);
    const rec = profile.dailies[todayKey(d)];
    if (rec?.done) n++; else if (i > 0) break;
  }
  return n;
};

/* ---------- badges ---------- */
export function unlock(id) {
  if (profile.badges[id]) return false;
  const b = BADGES.find(x => x.id === id);
  if (!b) return false;
  profile.badges[id] = Date.now();
  save();
  emit('badge', b);
  return true;
}
export function checkBadges() {
  const tot = profile.totals;
  if (tot.q >= 1) unlock('first_blood');
  if (tot.q >= 250) unlock('marathon');
  if (tot.mapPins >= 25) unlock('cartographer');
  if (profile.bestStreak >= 3) unlock('streak3');
  if (profile.bestStreak >= 7) unlock('streak7');
  if (dailyCount() >= 5) unlock('spartan');
  const ch1 = profile.chapters.ch1;
  if (ch1 && (ch1.best.sniper >= 80)) unlock('soil_sage');
}
export const hasBadge = id => !!profile.badges[id];

/* ---------- sound pref ---------- */
export function toggleSound() { profile.sound = !profile.sound; save(); return profile.sound; }
