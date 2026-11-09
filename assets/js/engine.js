/* ============================================================
   GeoQuest engine — question factories, scoring maths
   ============================================================ */
import { shuffle, sample, pick, seeded } from './ui.js';
import { factStat, isDue } from './core.js';

/* pick a representative fact for a section (stable, used as SRS key) */
export function factForSection(chapter, section) {
  const f = chapter.facts.find(x => x.s === section);
  return f ? f.id : chapter.facts[0]?.id;
}
export const refFor = (chapter, section) => `Ch ${chapter.n} · ${section}`;

const letters = ['A','B','C','D'];

/* ---------- normalised question objects ---------- */
export function mcqQuestions(chapter, n = 8, rng = Math.random) {
  const pool = shuffle(chapter.mcq, rng).slice(0, n);
  return pool.map(m => {
    const order = shuffle([0,1,2,3], rng);
    const options = order.map(i => m.o[i]);
    return {
      kind: 'mcq',
      q: m.q,
      options,
      answer: order.indexOf(m.a),
      why: m.why,
      ref: refFor(chapter, m.s),
      factId: factForSection(chapter, m.s),
      quote: m.why,
      difficulty: m.d || 2,
      src: m
    };
  });
}

export function trueFalseQuestions(chapter, n = 8, rng = Math.random) {
  const errs = shuffle(chapter.errors, rng).slice(0, n);
  return errs.map(e => {
    const correctLabel = e.ok ? 'True (as per NCERT)' : 'False (twisted)';
    const otherLabel = e.ok ? 'False (twisted)' : 'True (as per NCERT)';
    const opts = rng() < 0.5 ? [correctLabel, otherLabel] : [otherLabel, correctLabel];
    return {
      kind: 'tf',
      q: e.stmt,
      options: opts,
      answer: opts.indexOf(correctLabel),
      isTrue: e.ok,
      why: e.fix,
      ref: refFor(chapter, e.s),
      factId: factForSection(chapter, e.s),
      quote: e.fix
    };
  });
}

export function defQuestions(chapter, n = 6, rng = Math.random) {
  const pool = shuffle(chapter.defs, rng).slice(0, n);
  return pool.map(d => {
    const opts = shuffle([d.correct, ...d.traps.slice(0, 3)], rng);
    return {
      kind: 'def',
      q: `Which is the exact NCERT meaning of “${d.term}”?`,
      options: opts,
      answer: opts.indexOf(d.correct),
      why: d.correct,
      ref: `Ch ${chapter.n} · ${d.s}`,
      factId: factForSection(chapter, d.s),
      quote: d.correct,
      term: d.term
    };
  });
}

/* inverse definition duel: given the meaning, name the term */
export function termFromDefQuestions(chapter, n = 5, rng = Math.random) {
  const pool = shuffle(chapter.defs, rng).slice(0, n);
  return pool.map(d => {
    const others = sample(chapter.defs.filter(x => x.term !== d.term), 3, rng).map(x => x.term);
    const opts = shuffle([d.term, ...others], rng);
    return {
      kind: 'def-inverse',
      q: `Which term means: “${d.correct}”`,
      options: opts,
      answer: opts.indexOf(d.term),
      why: `${d.term} — ${d.correct}`,
      ref: `Ch ${chapter.n} · ${d.s}`,
      factId: factForSection(chapter, d.s),
      quote: d.correct
    };
  });
}

/* "complete the NCERT sentence" — high-volume sentence coverage */
const NUM_RE = /(?<![\w.,])\d+(?:,\d+)*(?:\.\d+)?(?:\s*[–-]\s*\d+(?:,\d+)*(?:\.\d+)?)?(?:\s+(?:per cent|nautical miles|square kilometres|sq km|km|kg|hectares|years|months|days|million|metres|m))?(?![\w])/g;

export function clozeQuestions(chapter, n = 8, rng = Math.random) {
  const usable = chapter.facts.filter(f => {
    NUM_RE.lastIndex = 0;
    return NUM_RE.test(f.t);
  });
  const pool = shuffle(usable.length >= n ? usable : chapter.facts, rng).slice(0, n);
  return pool.map(f => {
    NUM_RE.lastIndex = 0;
    const nums = [...new Set(f.t.match(NUM_RE) || [])].filter(x => x.trim().length > 1);
    if (!nums.length) return null;
    const target = pick(nums, rng);
    const q = f.t.replace(target, '________');
    const decoys = new Set();
    let guard = 0;
    while (decoys.size < 3 && guard++ < 200) {
      const r = chapter.facts[Math.floor(rng() * chapter.facts.length)];
      NUM_RE.lastIndex = 0;
      const cand = r.t.match(NUM_RE)?.[0];
      if (cand && cand !== target && !decoys.has(cand)) decoys.add(cand);
    }
    if (decoys.size < 3) return null;
    const opts = shuffle([target, ...decoys], rng);
    return {
      kind: 'cloze',
      q: `Fill the exact NCERT blank: “${q}”`,
      options: opts,
      answer: opts.indexOf(target),
      why: f.t,
      ref: f.ref,
      factId: f.id,
      quote: f.t
    };
  }).filter(Boolean);
}

/* ---------- weighted pools (spaced repetition aware) ---------- */
export function srsWeight(fact) {
  const s = factStat(fact.id);
  if (!s.s) return 1.6;              // unseen: slightly boosted for coverage
  if (isDue(fact.id)) return 2.6;    // due: highest priority
  if (s.w > 0) return 2.2;           // previously wrong
  return 1;
}

export function dueFirst(pool, rng = Math.random) {
  return pool
    .map(item => ({ item, w: Math.random() * srsWeight({ id: item.factId }) }))
    .sort((a, b) => b.w - a.w)
    .map(o => o.item);
}

/* ---------- mixed exams ---------- */
export function mixedQuestions(chapter, n = 15, rng = Math.random) {
  const quota = { mcq: Math.round(n * 0.42), tf: Math.round(n * 0.2), def: Math.round(n * 0.16), cloze: Math.round(n * 0.22) };
  const qs = [
    ...mcqQuestions(chapter, quota.mcq, rng),
    ...trueFalseQuestions(chapter, quota.tf, rng),
    ...defQuestions(chapter, quota.def, rng),
    ...clozeQuestions(chapter, quota.cloze, rng)
  ];
  return shuffle(qs, rng).slice(0, n);
}

export function crossChapterQuestions(chapters, n = 25, rng = Math.random) {
  const per = Math.ceil(n / chapters.length);
  const all = chapters.flatMap(c => mixedQuestions(c, per, rng).map(q => ({ ...q, chN: c.n, chapterTitle: c.title })));
  return shuffle(all, rng).slice(0, n);
}

/* ---------- scoring ---------- */
export function xpForCorrect({ base = 10, combo = 0, ms = 0, timeLimit = 0, difficulty = 2 }) {
  const comboMult = 1 + Math.min(combo, 12) * 0.12;
  let speed = 1;
  if (timeLimit && ms) {
    const ratio = Math.max(0, 1 - ms / (timeLimit * 1000));
    speed = 1 + ratio * 0.45;
  }
  return Math.round(base * (0.8 + difficulty * 0.2) * comboMult * speed);
}

export function gradeFor(pct) {
  if (pct >= 95) return { grade: 'A+', label: 'Board topper', tone: 'lime' };
  if (pct >= 85) return { grade: 'A', label: 'Distinction', tone: 'lime' };
  if (pct >= 70) return { grade: 'B', label: 'Solid', tone: 'cyan' };
  if (pct >= 55) return { grade: 'C', label: 'Needs revision', tone: 'amber' };
  if (pct >= 35) return { grade: 'D', label: 'Danger zone', tone: 'amber' };
  return { grade: 'E', label: 'Comeback incoming', tone: 'red' };
}

/* ---------- daily challenge (deterministic per date) ---------- */
export function dailyQuestions(chapters, n = 12, seedStr = '') {
  const rng = seeded('geoquest-' + seedStr);
  const per = Math.ceil(n / chapters.length);
  const qs = chapters.flatMap(c => {
    const pool = [...mcqQuestions(c, 3, rng), ...trueFalseQuestions(c, 2, rng)];
    return shuffle(pool, rng).slice(0, per);
  });
  return shuffle(qs, rng).slice(0, n);
}
