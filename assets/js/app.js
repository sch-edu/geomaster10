/* ============================================================
   GeoQuest: India Mastery — app shell & router
   ============================================================ */
import {
  load, P, RANKS, BADGES, addXP, coverageOf, globalCoverage, factStat, weakFacts, dueFacts, levelProgress,
  endGame, markDaily, dailyDone, dailyCount, resetProfile, toggleSound, todayKey, save
} from './core.js';
import { CHAPTERS, byChapter, BOOK, CBSE_MAP_LIST, ALL_MAP_PINS, TOTAL_FACTS } from './data/index.js';
import { GAMES, byId, gamesFor, mapBlitz, WHY_LOCKED, RULES } from './games/index.js';
import { buildMapGame } from './games/mapblitz.js';
import { makeMcqGame, GameFrame } from './games/base.js';
import { dailyQuestions, clozeQuestions, trueFalseQuestions, mcqQuestions } from './engine.js';
import { esc, $, toast, modal, closeModal, confetti, sfx, setSound, shuffle, seeded } from './ui.js';

const app = $('#app');
load();
setSound(P().sound !== false);

/* ---------- tiny helpers ---------- */
const go = hash => { location.hash = hash; };
const pctOf = ch => coverageOf(ch).pct;
const totalXP = () => P().xp;
const rankOf = xp => RANKS.filter(r => xp >= r.xp).slice(-1)[0];
const nextRank = xp => RANKS.find(r => r.xp > xp) || null;
const CHAPTER_IDS = CHAPTERS.map(c => c.id);
const isHard = () => !!(P().settings && P().settings.hard);
function weekKey() {
  const d = new Date();
  const day = (d.getDay() + 6) % 7;
  const mon = new Date(d.getTime() - day * 86400000);
  return todayKey(mon);
}

function syncHUD() {
  const p = P();
  const cov = globalCoverage(CHAPTERS);
  const r = rankOf(p.xp);
  $('#hud-streak b').textContent = p.streak;
  $('#hud-xp b').textContent = p.xp.toLocaleString();
  $('#hud-rank b').textContent = r.name;
  $('#hud-coverage b').textContent = cov.pct + '%';
  document.title = `GeoQuest · ${cov.pct}% of the book conquered`;
}

function chapterPill(ch) {
  const c = coverageOf(ch);
  return `<div class="chapter-card" style="--ch-hue:${ch.hue}" data-nav="#/ch/${ch.id}" role="button" tabindex="0">
    <span class="ch-emoji">${ch.emoji}</span>
    <span class="num">Chapter ${ch.n}</span>
    <h3>${esc(ch.title)}</h3>
    <span class="ch-tag">${esc(ch.tag)}</span>
    <div class="ch-foot">
      <span class="mini-bar"><i style="width:${c.pct}%"></i></span>
      <span>${c.pct}%</span>
    </div>
    <div class="ch-foot" style="margin-top:2px">
      <span class="tiny muted">${c.mastered}/${c.total} facts mastered</span>
      <span class="tiny muted">${ch.mapItems.length} map pins</span>
    </div>
  </div>`;
}

/* ============================================================
   HOME
   ============================================================ */
function screenHome() {
  const p = P();
  const cov = globalCoverage(CHAPTERS);
  const lastCh = byChapter[localStorage.getItem('gq.last')] || CHAPTERS[0];
  const nr = nextRank(p.xp);
  const r = rankOf(p.xp);
  const done = dailyDone();

  app.innerHTML = `<div class="screen stack">
    <section class="hero">
      <span class="kicker">● NCERT Contemporary India II · Class 10</span>
      <h1>You have conquered <span class="grad">${cov.pct}%</span> of the entire book.</h1>
      <p>${cov.pct === 0
        ? 'Every sentence in all 7 chapters is loaded into 18 game engines. Nothing is optional. Start with one round — the streak does the rest.'
        : `${cov.mastered} of ${cov.total} NCERT facts are locked into long-term memory. ${cov.total - cov.mastered} still need a rematch.`}</p>
      <div class="hero-stats">
        <div class="hero-stat"><b>${p.xp.toLocaleString()}</b><span>Total XP</span></div>
        <div class="hero-stat"><b>${r.icon} ${r.name}</b><span>Current rank</span></div>
        <div class="hero-stat"><b>${p.streak} 🔥</b><span>Day streak</span></div>
        <div class="hero-stat"><b>Lv ${levelProgress(p.xp).level}</b><span>Player level</span></div>
      </div>
      <div class="btn-row">
        <button class="btn primary" data-nav="#/ch/${lastCh.id}">▶ Continue Chapter ${lastCh.n}</button>
        <button class="btn" data-nav="#/daily">🎁 ${done ? 'Daily done — replay' : 'Daily challenge'}</button>
        <button class="btn" data-nav="#/map">🗺️ Map Arena</button>
        <button class="btn ghost" data-nav="#/arcade">🎮 All 18 formats</button>
      </div>
      ${nr ? `<div style="margin-top:18px;max-width:520px">
        <div class="between tiny muted"><span>${esc(r.name)}</span><span>${esc(nr.name)} · ${nr.xp.toLocaleString()} XP</span></div>
        <div class="progress-track" style="margin-top:6px"><i style="width:${Math.min(100, ((p.xp - r.xp) / (nr.xp - r.xp)) * 100)}%"></i></div>
      </div>` : `<div class="pill lime" style="margin-top:16px">👑 Max rank reached. You are the Geography God.</div>`}
    </section>

    <div class="section-title"><h2>Your seven vaults</h2><span class="line"></span><button class="pill" data-nav="#/coverage">📖 coverage tracker</button></div>
    <div class="chapter-grid">${CHAPTERS.map(chapterPill).join('')}</div>

    <div class="split" style="margin-top:22px">
      <div class="card">
        <div class="between"><h3>⚡ 20-minute addictive session</h3><span class="pill lime">recommended</span></div>
        <p class="muted tiny" style="margin-top:6px">The exact loop that builds 100/100: warm up fast, then go deep, then defend.</p>
        <div class="stack" style="margin-top:12px">
          <button class="game-tile" data-quick="rapid"><span class="gt-emoji">⚡</span><h4>1 · Rapid Fire (5 min)</h4><p>15 questions, 10 seconds each. Wakes up the recall.</p></button>
          <button class="game-tile" data-quick="sniper"><span class="gt-emoji">🎯</span><h4>2 · Sentence Sniper (7 min)</h4><p>Exact lines from the book. Precision training.</p></button>
          <button class="game-tile" data-quick="boss"><span class="gt-emoji">👑</span><h4>3 · Boss Fight (10 min)</h4><p>Timed exam conditions. 95% clears the chapter.</p></button>
        </div>
      </div>
      <div class="stack">
        <div class="card">
          <div class="between"><h3>🎁 Daily challenge</h3><span class="pill ${done ? 'lime' : 'amber'}">${done ? 'completed' : 'waiting'}</span></div>
          <p class="tiny muted" style="margin-top:6px">12 mixed questions, same for everyone today. ${dailyCount()} dailies completed so far.</p>
          <button class="btn primary sm" style="margin-top:10px" data-nav="#/daily">${done ? 'Replay today' : 'Claim today’s XP'}</button>
        </div>
        <div class="card">
          <div class="between"><h3>🎯 Weak-area radar</h3><span class="pill cyan">${Object.values(P().facts).filter(f => f.w > 0).length} weak facts</span></div>
          <p class="tiny muted" style="margin-top:6px">Your misses are tracked per NCERT sentence. The radar builds a custom drill from them.</p>
          <button class="btn sm" style="margin-top:10px" data-nav="#/radar">Open radar</button>
        </div>
        <div class="card">
          <div class="between"><h3>📅 Mastery plan</h3><span class="pill">30 / 45 days</span></div>
          <p class="tiny muted" style="margin-top:6px">A day-by-day route from Soil Beginner to Geography God.</p>
          <button class="btn sm" style="margin-top:10px" data-nav="#/plan">See the schedule</button>
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:18px">
      <div class="between"><h3>🎖️ Rank ladder</h3><span class="pill">${p.xp.toLocaleString()} XP</span></div>
      <div style="display:flex;gap:8px;overflow:auto;margin-top:12px;padding-bottom:4px">
        ${RANKS.map(rk => `<div class="badge ${p.xp >= rk.xp ? 'on' : ''}" style="min-width:120px">
          <div class="b-ic">${rk.icon}</div><b>${esc(rk.name)}</b><span>${rk.xp.toLocaleString()} XP</span></div>`).join('')}
      </div>
    </div>
  </div>`;

  app.querySelectorAll('[data-quick]').forEach(b => b.onclick = () => playGame(b.dataset.quick, lastCh.id));
}

/* ============================================================
   CHAPTERS LIST
   ============================================================ */
function screenChapters() {
  const cov = globalCoverage(CHAPTERS);
  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">THE FULL BOOK</span><h1 style="margin-top:6px">Seven chapters. Every sentence.</h1></div>
      <div class="pill lime">${cov.mastered}/${cov.total} facts mastered</div>
    </div>
    <div class="chapter-grid">${CHAPTERS.map(chapterPill).join('')}</div>
    <div class="card">
      <h3>🗺️ Official CBSE map-work list</h3>
      <p class="tiny muted">All map items the board can ask, mapped to chapters. The Map Arena drills these until the pins live in your head.</p>
      <div class="map-legend" style="margin-top:10px">
        ${CBSE_MAP_LIST.map(m => `<span class="pill cyan">Ch ${m.ch} · ${esc(m.item)}</span>`).join('')}
      </div>
      <div class="btn-row"><button class="btn primary sm" data-nav="#/map">Enter Map Arena</button><button class="btn sm" data-nav="#/arcade">See all 18 game formats</button></div>
    </div>
  </div>`;
}

/* ============================================================
   CHAPTER HUB
   ============================================================ */
function screenChapter(id) {
  const ch = byChapter[id];
  if (!ch) return go('#/chapters');
  localStorage.setItem('gq.last', id);
  const cov = coverageOf(ch);
  const rec = P().chapters[ch.id] || { plays: 0, best: {}, bossCleared: false };
  const games = gamesFor(ch);
  const bossLocked = cov.pct < 90;

  app.innerHTML = `<div class="screen stack">
    <div class="game-top">
      <button class="back" data-nav="#/chapters">← All chapters</button>
      <span class="pill lime">Chapter ${ch.n}</span>
      <span class="pill ${cov.pct >= 90 ? 'lime' : cov.pct >= 50 ? 'cyan' : 'amber'}">${cov.pct}% mastered</span>
      ${rec.bossCleared ? '<span class="pill lime">👑 boss cleared</span>' : ''}
      <button class="pill ${isHard() ? 'amber' : ''}" data-hard style="cursor:pointer" title="Hard mode cuts every timer by 40% and boosts speed XP">${isHard() ? '⚡ HARD MODE ON' : '⚡ Hard mode off'}</button>
    </div>

    <div class="hero" style="--ch-hue:${ch.hue}">
      <span class="kicker">${ch.emoji} ${esc(ch.tag)}</span>
      <h1 style="font-size:clamp(26px,4vw,40px)">${esc(ch.title)}</h1>
      <p>${esc(ch.blurb)}</p>
      <div class="hero-stats">
        <div class="hero-stat"><b>${cov.mastered}/${cov.total}</b><span>facts mastered</span></div>
        <div class="hero-stat"><b>${ch.mcq.length}</b><span>board-style MCQs</span></div>
        <div class="hero-stat"><b>${ch.mapItems.length}</b><span>map pins</span></div>
        <div class="hero-stat"><b>${rec.plays}</b><span>sessions played</span></div>
      </div>
      <div class="progress-track" style="margin-top:16px"><i style="width:${cov.pct}%"></i></div>
      <div class="btn-row">
        <button class="btn primary" data-play="sniper">🎯 Start Sentence Sniper</button>
        <button class="btn" data-play="map">🗺️ Map Blitz</button>
        <button class="btn" data-play="rapid">⚡ Rapid Fire</button>
      </div>
    </div>

    <div class="section-title"><h2>Game formats in this chapter</h2><span class="line"></span><span class="tiny muted">${games.filter(g => g.availableHere).length} unlocked</span></div>
    <div class="game-grid">
      ${games.map(g => {
        const locked = !g.availableHere;
        const best = rec.best[g.id];
        return `<button class="game-tile" ${locked ? 'disabled style="opacity:.45"' : `data-play="${g.id}"`}>
          ${best >= 90 ? '<span class="ribbon">MASTERED</span>' : ''}
          <span class="gt-emoji">${g.emoji}</span>
          <h4>${esc(g.name)}</h4>
          <p>${esc(locked ? (WHY_LOCKED[g.id] || 'Not available in this chapter.') : g.blurb)}</p>
          <div class="gt-meta"><span class="pill">${esc(g.tag || 'Mixed')}</span>${best != null ? `<span class="pill lime">best ${best}%</span>` : ''}${locked ? '<span class="pill">🔒</span>' : ''}</div>
        </button>`;
      }).join('')}
    </div>

    <div class="card" style="border-color:${bossLocked ? 'var(--line)' : 'rgba(184,255,92,.5)'}">
      <div class="between">
        <div>
          <h3>👑 Chapter Boss Fight — ${esc(ch.title)}</h3>
          <p class="tiny muted">18 questions · 25 s each · MCQ + definition + true/false + exact blanks. Requires 90% coverage to unlock, 95% to clear.</p>
        </div>
        <button class="btn ${bossLocked ? '' : 'primary'}" ${bossLocked ? 'disabled' : 'data-play="boss"'}>${bossLocked ? `🔒 ${cov.pct}% / 90%` : 'Fight the boss'}</button>
      </div>
    </div>

    <div class="card">
      <div class="between"><h3>📖 Sentence Coverage — this chapter</h3><span class="pill">${cov.seenPct}% seen · ${cov.pct}% mastered</span></div>
      <div class="stack" style="margin-top:10px;gap:6px">
        ${ch.sections.map(s => {
          const fs = ch.facts.filter(f => f.s === s);
          const m = fs.filter(f => factStat(f.id).st >= 2).length;
          const seen = fs.filter(f => factStat(f.id).s).length;
          const p = fs.length ? Math.round((m / fs.length) * 100) : 0;
          return `<div class="radar-row">
            <div><div style="font-size:12.5px">${esc(s)}</div><div class="tiny muted">${seen}/${fs.length} seen</div></div>
            <div class="bar"><i style="width:${p}%;background:${p > 66 ? 'var(--green)' : p > 33 ? 'var(--amber)' : 'var(--red)'}"></i></div>
            <div class="tiny" style="text-align:right">${p}%</div>
          </div>`;
        }).join('')}
      </div>
    </div>
  </div>`;

  app.querySelectorAll('[data-play]').forEach(b => b.onclick = () => playGame(b.dataset.play, ch.id));
  const hardBtn = app.querySelector('[data-hard]');
  if (hardBtn) hardBtn.onclick = () => {
    const p = P();
    p.settings = Object.assign({}, p.settings, { hard: !isHard() });
    save();
    toast(isHard() ? '⚡ Hard mode ON — timers cut by 40%, speed XP up.' : 'Hard mode off.', isHard() ? 'good' : '');
    screenChapter(ch.id);
  };
}

/* ============================================================
   GAME LAUNCH
   ============================================================ */
function fakeChapterFromPins(pins, title) {
  return { id: 'mapmix', n: 0, title, facts: [], sections: ['Map work'], mapItems: pins, mapCats: {
    soil: { label: 'Soil' }, land: { label: 'Land' }, park: { label: 'Parks' }, comm: { label: 'Community' },
    plant: { label: 'Plant' }, threat: { label: 'Threat' }, dam: { label: 'Dams' }, harvest: { label: 'Harvest' },
    dispute: { label: 'Disputes' }, crop: { label: 'Crops' }, iron: { label: 'Iron' }, mineral: { label: 'Minerals' },
    energy: { label: 'Energy' }, renew: { label: 'Renewables' }, textile: { label: 'Textiles' }, steel: { label: 'Steel' },
    metal: { label: 'Aluminium' }, it: { label: 'IT' }, road: { label: 'Corridors' }, port: { label: 'Ports' },
    water: { label: 'Waterways' }, air: { label: 'Airports' }
  } };
}

function playGame(gameId, chId, opts = {}) {
  const game = byId[gameId] || GAMES.find(g => g.id === gameId);
  if (!game) return toast('Unknown game', 'bad');
  const chapter = chId ? byChapter[chId] : (opts.chapter || null);

  if (gameId === 'boss' && chapter) {
    const c = coverageOf(chapter);
    if (c.pct < 90) { toast(`Boss locked: ${c.pct}% mastered. Reach 90% first.`, 'bad'); return; }
  }

  const ctx = {
    chapter, chapters: CHAPTERS, mount: app, hard: isHard(),
    quit: () => go(chId ? `#/ch/${chId}` : '#/home'),
    restart: () => playGame(gameId, chId, opts),
    rematch: items => runDrill(items, chapter, chId)
  };
  app.innerHTML = '';
  try { game.start(ctx); }
  catch (e) {
    console.error(e);
    app.innerHTML = `<div class="empty">This game hit a snag. <button class="btn sm" data-nav="#/ch/${chId || 'ch1'}">Back to chapter</button></div>`;
  }
  document.querySelectorAll('#tabbar .tab').forEach(t => t.classList.toggle('active', false));
}

function fixedQuiz({ id, name, emoji, questions, timePerQ = 0, onComplete, tag = 'Drill', base = 10, forceRematch }) {
  return makeMcqGame({
    id, name, emoji, tag, count: questions.length, timePerQ,
    forceRematch: forceRematch !== undefined ? forceRematch : timePerQ === 0,
    base, build: () => questions, onComplete
  });
}

function runDrill(items, chapter, chId) {
  const questions = items.filter(i => Array.isArray(i.options)).map(i => ({
    kind: 'mcq', q: i.q, options: i.options, answer: i.answer,
    why: i.why || i.quote, quote: i.quote, ref: i.ref2 || i.ref, factId: i.factId
  }));
  if (!questions.length) return toast('Nothing to rematch here — replay the game.', 'bad');
  const g = fixedQuiz({ id: 'drill', name: 'Micro-Rematch Drill', emoji: '🔁', questions, tag: 'Correction', base: 8 });
  const ctx = {
    chapter, chapters: CHAPTERS, mount: app, hard: isHard(),
    quit: () => go(chId ? `#/ch/${chId}` : '#/home'),
    restart: () => runDrill(items, chapter, chId)
  };
  app.innerHTML = '';
  g.start(ctx);
}

/* ============================================================
   MAP ARENA
   ============================================================ */
function screenMap() {
  const pins = ALL_MAP_PINS.length;
  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">CBSE MAP WORK</span><h1 style="margin-top:6px">Map Blitz Arena</h1></div>
      <span class="pill lime">${pins} pins loaded</span>
    </div>
    <div class="card">
      <h3>🎯 How the arena works</h3>
      <p class="tiny muted">Alternating rounds: <b>find the pin</b> (locator) and <b>name the glowing pin</b> (identifier). Wrong clicks cost nothing but pride — and force a fix before you move on. Every correct pin feeds the SRS.</p>
    </div>
    <div class="game-grid">
      <button class="game-tile" data-map="mix"><span class="gt-emoji">🌏</span><h4>All-India Mixed Blitz</h4><p>Pins from all 7 chapters, shuffled. The real test.</p><div class="gt-meta"><span class="pill lime">10 rounds</span></div></button>
      ${CHAPTERS.map(ch => `<button class="game-tile" data-map="${ch.id}"><span class="gt-emoji">${ch.emoji}</span><h4>${esc(ch.title)}</h4><p>${ch.mapItems.length} pins · ${esc(Object.values(ch.mapCats || {}).map(c => c.label).join(' · '))}</p><div class="gt-meta"><span class="pill">${esc(ch.tag)}</span></div></button>`).join('')}
    </div>
    <div class="card">
      <h3>📋 Official list being drilled</h3>
      <div class="map-legend" style="margin-top:10px">${CBSE_MAP_LIST.map(m => `<span class="pill">Ch ${m.ch} · ${esc(m.item)}</span>`).join('')}</div>
    </div>
  </div>`;

  app.querySelectorAll('[data-map]').forEach(b => b.onclick = () => {
    const id = b.dataset.map;
    if (id === 'mix') {
      const ch = fakeChapterFromPins(ALL_MAP_PINS, 'All-India Mixed Map');
      const g = buildMapGame({ id: 'map', name: 'All-India Mixed Map Blitz', emoji: '🌏', rounds: 10 });
      const ctx = { chapter: ch, chapters: CHAPTERS, mount: app, quit: () => go('#/map'), restart: () => screenMap(), rematch: null };
      app.innerHTML = '';
      g.start(ctx);
    } else {
      const ch = byChapter[id];
      const ctx = { chapter: ch, chapters: CHAPTERS, mount: app, quit: () => go('#/map'), restart: () => screenMap(), rematch: null };
      app.innerHTML = '';
      mapBlitz.start(ctx);
    }
  });
}

/* ============================================================
   DAILY CHALLENGE
   ============================================================ */
function screenDaily() {
  const done = dailyDone();
  const todays = P().dailies[todayKey()];
  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">SEEDED · SAME FOR EVERYONE TODAY</span><h1 style="margin-top:6px">Daily Challenge</h1></div>
      <span class="pill ${done ? 'lime' : 'amber'}">${done ? `best ${todays?.score ?? 0}/${todays?.total ?? 12}` : 'not attempted'}</span>
    </div>
    <div class="hero">
      <span class="kicker">🎁 ${new Date().toDateString()}</span>
      <h1 style="font-size:clamp(24px,3.6vw,34px)">12 questions. All 7 chapters. One shot at the bonus.</h1>
      <p>Mixed MCQ, true/false and exact-blank questions, generated deterministically from today’s date. Score 10+/12 for a <b>+50 XP</b> daily bonus and a streak tick.</p>
      <div class="btn-row"><button class="btn primary" data-start>${done ? 'Replay for practice' : 'Start today’s challenge'}</button></div>
      <div class="hero-stats"><div class="hero-stat"><b>${dailyCount()}</b><span>dailies completed</span></div><div class="hero-stat"><b>${P().streak}</b><span>current streak</span></div></div>
    </div>
    <div class="card" style="border-color:rgba(255,95,162,.4)">
      <div class="between">
        <div><h3>👹 Weekly Boss Fight</h3><p class="tiny muted">25 questions across all seven chapters, seeded for the week starting ${esc(weekKey())}. 20 seconds each. 80%+ earns a +80 XP boss bounty.</p></div>
        <span class="pill pink">${P().weekly?.[weekKey()]?.best != null ? `best ${P().weekly[weekKey()].best}/25` : 'not attempted'}</span>
      </div>
      <button class="btn danger sm" style="margin-top:10px" data-weekly>Fight this week’s boss</button>
    </div>
    <div class="card"><h3>Why this works</h3><p class="tiny muted">Interleaving chapters feels harder than blocking one chapter — and that difficulty is exactly what makes the recall stick. Do the daily even when you planned to study something else.</p></div>
  </div>`;

  app.querySelector('[data-start]').onclick = () => {
    const qs = dailyQuestions(CHAPTERS, 12, todayKey());
    const g = fixedQuiz({
      id: 'daily', name: 'Daily Challenge', emoji: '🎁', questions: qs, timePerQ: 20, base: 11, tag: 'Daily',
      onComplete: frame => {
        const prev = P().dailies[todayKey()];
        const bestScore = Math.max(frame.correct, prev?.score || 0);
        markDaily({ score: bestScore, total: qs.length });
        if (frame.correct >= 10) { addXP(50); toast('🎁 Daily bonus +50 XP', 'good'); confetti(40); }
        save();
      }
    });
    const ctx = { chapter: null, chapters: CHAPTERS, mount: app, quit: () => go('#/daily'), restart: () => screenDaily(), rematch: items => runDrill(items, null, null) };
    app.innerHTML = '';
    g.start(ctx);
  };

  app.querySelector('[data-weekly]').onclick = () => {
    const qs = dailyQuestions(CHAPTERS, 25, 'week-' + weekKey());
    const g = fixedQuiz({
      id: 'weekly', name: 'Weekly Boss Fight', emoji: '👹', questions: qs, timePerQ: 20, base: 14, tag: 'Weekly boss',
      onComplete: frame => {
        const p = P();
        p.weekly = p.weekly || {};
        const prev = p.weekly[weekKey()]?.best || 0;
        p.weekly[weekKey()] = { best: Math.max(prev, frame.correct), total: qs.length };
        save();
        if (frame.correct >= 20) { addXP(80); toast('👹 Weekly boss bounty +80 XP', 'good'); confetti(60); }
      }
    });
    const ctx = { chapter: null, chapters: CHAPTERS, mount: app, hard: isHard(), quit: () => go('#/daily'), restart: () => screenDaily(), rematch: items => runDrill(items, null, null) };
    app.innerHTML = '';
    g.start(ctx);
  };
}

/* ============================================================
   GAME LIBRARY (all 18 formats, fully documented)
   ============================================================ */
function screenArcade() {
  const p = P();
  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">SYSTEM ARCHITECTURE</span><h1 style="margin-top:6px">The 18 Game Engines</h1></div>
      <span class="pill lime">${p.xp.toLocaleString()} XP · ${RANKS.filter(r => p.xp >= r.xp).length}/10 ranks</span>
    </div>
    <div class="card">
      <h3>The loop that produces 100/100</h3>
      <p class="tiny muted" style="margin-top:6px">Every NCERT sentence is a <b>fact object</b> with an id. Games read from that same fact bank, so a fact you miss in Map Blitz reappears in Rapid Fire, and a fact you nail twice is marked <b>mastered</b>. Each answer updates a spaced-repetition record (ease, interval, next-due date). Coverage % = mastered facts ÷ 383.</p>
      <div class="row" style="margin-top:10px">
        <span class="pill">383 facts</span><span class="pill">126 board MCQs</span><span class="pill">121 map pins</span>
        <span class="pill">7 chapters</span><span class="pill">18 formats</span><span class="pill">10 ranks</span>
      </div>
    </div>
    ${GAMES.map((g, i) => {
      const r = RULES[g.id] || { rules: [], scoring: '', feedback: '' };
      const ch = g.id === 'water' ? 'ch3' : g.id === 'crop' ? 'ch4' : g.id === 'guardian' ? 'ch2' : g.id === 'industry' ? 'ch6' : g.id === 'lifelines' ? 'ch7' : g.id === 'god' ? null : 'ch1';
      return `<div class="card">
        <div class="between">
          <div style="display:flex;gap:12px;align-items:center">
            <div style="font-size:26px">${g.emoji}</div>
            <div>
              <h3 style="font-size:17px">${String(i + 1).padStart(2, '0')} · ${esc(g.name)}</h3>
              <span class="tiny muted">${esc(g.tag || 'Mixed')}</span>
            </div>
          </div>
          ${ch ? `<button class="btn sm" data-nav="#/ch/${ch}">Play in Ch ${byChapter[ch].n}</button>` : '<button class="btn sm" data-nav="#/exam">Play</button>'}
        </div>
        <p class="tiny" style="margin-top:8px;color:#c3d1f0">${esc(g.blurb)}</p>
        <div class="stack" style="margin-top:10px;gap:5px">
          ${r.rules.map(x => `<div class="tiny" style="color:#a9b6d4">→ ${esc(x)}</div>`).join('')}
        </div>
        <div class="row" style="margin-top:10px">
          <span class="pill lime">SCORING · ${esc(r.scoring)}</span>
        </div>
        <div class="quote" style="margin-top:10px;font-size:12.5px">${esc(r.feedback)}</div>
      </div>`;
    }).join('')}
  </div>`;
}

/* ============================================================
   GOD EXAM
   ============================================================ */
function screenExam() {
  const cov = globalCoverage(CHAPTERS);
  const cleared = CHAPTERS.filter(c => (P().chapters[c.id]?.bossCleared)).length;
  app.innerHTML = `<div class="screen stack">
    <div class="hero" style="background:radial-gradient(700px 300px at 100% 0%,rgba(255,107,107,.18),transparent 70%),linear-gradient(140deg,#1a1230,#0b0b16)">
      <span class="kicker" style="color:#ff9c9c">FINAL BOSS · FULL SYLLABUS</span>
      <h1>Ultimate Geography God Challenge</h1>
      <p>30 questions across all seven chapters, 30 seconds each, in board-paper conditions. No rematch. No hints. Only the book in your head.</p>
      <div class="hero-stats">
        <div class="hero-stat"><b>${cov.pct}%</b><span>book mastery</span></div>
        <div class="hero-stat"><b>${cleared}/7</b><span>chapter bosses cleared</span></div>
        <div class="hero-stat"><b>90%</b><span>to earn the badge</span></div>
      </div>
      <div class="btn-row"><button class="btn danger" data-start>☠️ Enter the exam</button><button class="btn ghost" data-nav="#/radar">Check weak areas first</button></div>
      ${cleared < 7 ? '<p class="tiny" style="margin-top:12px;color:#ffb3b3">Warning: you have not cleared every chapter boss. The exam will find that out publicly.</p>' : ''}
    </div>
    <div class="card"><h3>Exam rules</h3><div class="stack tiny" style="margin-top:8px;color:var(--muted)">
      <div>· 30 questions · mixed MCQ, definitions, true/false and exact NCERT blanks.</div>
      <div>· 30 seconds per question — the board gives you more, but speed exposes fake knowledge.</div>
      <div>· Score 90%+ to unlock the <b>Geography God</b> badge.</div>
      <div>· Every wrong answer is logged to your SRS and comes back in the micro-rematch drill.</div>
    </div></div>
  </div>`;

  app.querySelector('[data-start]').onclick = () => playGame('god', null, {});
}

/* ============================================================
   RADAR
   ============================================================ */
function screenRadar() {
  const rows = CHAPTERS.map(ch => {
    const c = coverageOf(ch);
    const weak = weakFacts(ch, 50);
    const due = dueFacts(ch, 999);
    return { ch, c, weak, due };
  });
  const allWeak = rows.flatMap(r => r.weak.map(f => ({ f, ch: r.ch })));

  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">ADAPTIVE ENGINE</span><h1 style="margin-top:6px">Weak-Area Radar</h1></div>
      <span class="pill red">${allWeak.length} weak facts</span>
    </div>
    <div class="card">
      <h3>How the radar decides</h3>
      <p class="tiny muted">Every answer updates a per-fact record: streak, ease factor and next-due date (SM-2 style). Red bars = facts you keep missing. Amber = shaky. Green = mastered (two correct in a row).</p>
    </div>
    ${rows.map(({ ch, c, weak, due }) => `<div class="card">
      <div class="between">
        <div style="display:flex;gap:10px;align-items:center">
          <span style="font-size:22px">${ch.emoji}</span>
          <div><h3 style="font-size:16px">${esc(ch.title)}</h3><span class="tiny muted">${c.mastered}/${c.total} mastered · ${due.length} due for revision</span></div>
        </div>
        <div class="row">
          <button class="btn sm" data-drill="${ch.id}">🎯 Drill weak facts</button>
          <button class="btn sm ghost" data-nav="#/ch/${ch.id}">Open chapter</button>
        </div>
      </div>
      <div class="radar-row" style="margin-top:8px;border:0">
        <div class="bar" style="height:10px"><i style="width:${c.pct}%;background:${c.pct > 70 ? 'var(--green)' : c.pct > 40 ? 'var(--amber)' : 'var(--red)'}"></i></div>
        <div class="tiny">${c.pct}%</div><div></div>
      </div>
      ${weak.length ? `<div style="margin-top:8px" class="stack">
        ${weak.slice(0, 3).map(f => `<div style="font-size:12.5px;color:#c3d1f0">• ${esc(f.t.length > 140 ? f.t.slice(0, 140) + '…' : f.t)} <span class="ref">${esc(f.ref)}</span></div>`).join('')}
      </div>` : '<p class="tiny muted" style="margin-top:8px">No weak facts logged yet — play a game to generate data.</p>'}
    </div>`).join('')}
  </div>`;

  app.querySelectorAll('[data-drill]').forEach(b => b.onclick = () => weakDrill(b.dataset.drill));
}

function weakDrill(chId) {
  const ch = byChapter[chId];
  const weak = new Set(weakFacts(ch, 30).map(f => f.id));
  const due = new Set(dueFacts(ch, 30).map(f => f.id));
  let pool = [
    ...clozeQuestions(ch, 30),
    ...trueFalseQuestions(ch, 14),
    ...mcqQuestions(ch, 14)
  ];
  let targeted = pool.filter(q => weak.has(q.factId) || due.has(q.factId));
  if (targeted.length < 6) targeted = [...targeted, ...shuffle(pool).slice(0, 8)];
  const qs = shuffle(targeted).slice(0, 10);
  if (!qs.length) return toast('Not enough data yet — play a chapter game first.', 'bad');
  const g = fixedQuiz({ id: 'drill', name: `Weak-Spot Drill · ${ch.title}`, emoji: '🎯', questions: qs, tag: 'Targeted', base: 12 });
  const ctx = { chapter: ch, chapters: CHAPTERS, mount: app, hard: isHard(), quit: () => go('#/radar'), restart: () => weakDrill(chId), rematch: items => runDrill(items, ch, chId) };
  app.innerHTML = '';
  g.start(ctx);
}

/* ============================================================
   COVERAGE TRACKER
   ============================================================ */
function screenCoverage() {
  const cov = globalCoverage(CHAPTERS);
  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">SENTENCE COVERAGE TRACKER</span><h1 style="margin-top:6px">${cov.pct}% of the book is in your head</h1></div>
      <span class="pill lime">${cov.mastered} / ${cov.total} facts</span>
    </div>
    <div class="card">
      <div class="progress-track" style="height:14px"><i style="width:${cov.pct}%"></i></div>
      <div class="row tiny muted" style="margin-top:10px">
        <span class="pill">${cov.seenPct}% seen at least once</span>
        <span class="pill">${cov.pct}% mastered (2+ correct)</span>
        <span class="pill">${cov.total - cov.seen} never tested</span>
      </div>
      <p class="tiny muted" style="margin-top:10px">${BOOK.editionNote}</p>
    </div>
    ${CHAPTERS.map(ch => {
      const c = coverageOf(ch);
      return `<div class="card">
        <div class="between">
          <div style="display:flex;gap:10px;align-items:center">
            <span style="font-size:22px">${ch.emoji}</span>
            <div><h3 style="font-size:16px">Ch ${ch.n} · ${esc(ch.title)}</h3><span class="tiny muted">${c.mastered}/${c.total} · ${c.pct}%</span></div>
          </div>
          <span class="pill ${c.pct >= 90 ? 'lime' : c.pct >= 50 ? 'cyan' : 'amber'}">${c.pct}%</span>
        </div>
        <div class="mini-bar" style="margin:10px 0 12px"><i style="width:${c.pct}%"></i></div>
        ${ch.sections.map(s => {
          const fs = ch.facts.filter(f => f.s === s);
          const m = fs.filter(f => factStat(f.id).st >= 2).length;
          return `<details style="margin-bottom:6px">
            <summary style="cursor:pointer;font-size:13px;padding:6px 0">
              ${esc(s)} <span class="muted tiny">· ${m}/${fs.length} mastered</span>
            </summary>
            <div class="stack" style="gap:5px;margin:6px 0 10px 12px">
              ${fs.map(f => {
                const st = factStat(f.id);
                const icon = st.st >= 2 ? '✅' : st.s ? (st.w ? '🔴' : '🟡') : '⬜';
                return `<div style="font-size:12.3px;line-height:1.45;color:${st.st >= 2 ? '#cfe9c8' : '#a9b6d4'}">${icon} ${esc(f.t)}</div>`;
              }).join('')}
            </div>
          </details>`;
        }).join('')}
      </div>`;
    }).join('')}
  </div>`;
}

/* ============================================================
   PROFILE
   ============================================================ */
function screenProfile() {
  const p = P();
  const r = rankOf(p.xp);
  const nr = nextRank(p.xp);
  const cov = globalCoverage(CHAPTERS);
  const acc = p.totals.q ? Math.round((p.totals.correct / p.totals.q) * 100) : 0;
  app.innerHTML = `<div class="screen stack">
    <div class="hero">
      <span class="kicker">PLAYER PROFILE</span>
      <h1>${r.icon} ${esc(r.name)}</h1>
      <p>${esc(BOOK.subtitle)} · ${p.xp.toLocaleString()} XP earned · ${acc}% lifetime accuracy.</p>
      ${nr ? `<div style="max-width:520px;margin-top:10px">
        <div class="between tiny muted"><span>${esc(r.name)}</span><span>next: ${esc(nr.name)} (${nr.xp.toLocaleString()} XP)</span></div>
        <div class="progress-track" style="margin-top:6px"><i style="width:${Math.min(100, ((p.xp - r.xp) / (nr.xp - r.xp)) * 100)}%"></i></div>
      </div>` : ''}
      <div class="hero-stats">
        <div class="hero-stat"><b>${p.totals.games}</b><span>games played</span></div>
        <div class="hero-stat"><b>${p.totals.q}</b><span>questions answered</span></div>
        <div class="hero-stat"><b>${p.totals.mapPins}</b><span>map pins nailed</span></div>
        <div class="hero-stat"><b>Lv ${levelProgress(p.xp).level}</b><span>level (${levelProgress(p.xp).toNext} XP to next)</span></div>
      </div>
    </div>

    <div class="card">
      <div class="between"><h3>🎖️ Badges</h3><span class="pill">${Object.keys(p.badges).length}/${BADGES.length}</span></div>
      <div class="badge-grid" style="margin-top:12px">
        ${BADGES.map(b => `<div class="badge ${p.badges[b.id] ? 'on' : ''}">
          <div class="b-ic">${b.ic}</div><b>${esc(b.name)}</b><span>${esc(b.desc)}</span>
        </div>`).join('')}
      </div>
    </div>

    <div class="card">
      <div class="between"><h3>📊 Chapter mastery</h3><span class="pill cyan">${p.bestStreak} best streak</span></div>
      <div class="stack" style="margin-top:10px">
        ${CHAPTERS.map(ch => {
          const c = coverageOf(ch);
          return `<div class="radar-row">
            <div>${ch.emoji} ${esc(ch.title)} ${P().chapters[ch.id]?.bossCleared ? '👑' : ''}</div>
            <div class="bar"><i style="width:${c.pct}%;background:${c.pct > 70 ? 'var(--green)' : c.pct > 40 ? 'var(--amber)' : 'var(--red)'}"></i></div>
            <div class="tiny" style="text-align:right">${c.pct}%</div>
          </div>`;
        }).join('')}
      </div>
    </div>

    <div class="card">
      <h3>⚙️ Settings</h3>
      <div class="row" style="margin-top:12px">
        <button class="btn sm" data-sound>${p.sound === false ? '🔇 Sound off' : '🔊 Sound on'}</button>
        <button class="btn sm" data-nav="#/plan">📅 Mastery plan</button>
        <button class="btn sm" data-nav="#/arcade">🎮 Game library</button>
        <button class="btn sm danger" data-reset>Reset all progress</button>
      </div>
      <p class="tiny muted" style="margin-top:10px">Progress is stored locally in your browser. Nothing leaves this device.</p>
    </div>
  </div>`;

  app.querySelector('[data-sound]').onclick = () => {
    const on = toggleSound();
    setSound(on);
    $('#btn-sound').textContent = on ? '🔊' : '🔇';
    $('#btn-sound').classList.toggle('off', !on);
    screenProfile();
  };
  app.querySelector('[data-reset]').onclick = () => {
    modal(`<h2>Reset everything?</h2><p class="muted" style="margin-top:8px">XP, badges, streaks and all SRS memory will be wiped. There is no undo. The book will not remember you.</p>
      <div class="btn-row"><button class="btn danger" data-yes>Yes, wipe it</button><button class="btn ghost" onclick="document.getElementById('modal').hidden=true">Cancel</button></div>`);
    $('#modal-body [data-yes]').onclick = () => {
      resetProfile(); closeModal(); syncHUD(); screenProfile(); toast('Progress reset. Fresh start.', 'good');
    };
  };
}

/* ============================================================
   PLAN
   ============================================================ */
const PLAN_30 = [
  { days: '1–4', ch: 'ch1', focus: 'Resources & Development', missions: ['Rapid Fire ×2', 'Sentence Sniper + Classification Battle', 'Soil Detective until 90%', 'Boss Fight attempt'] },
  { days: '5–7', ch: 'ch2', focus: 'Forest & Wildlife', missions: ['Guardian Quest', 'Spot the Error ×2', 'Map Blitz on parks', 'Boss Fight'] },
  { days: '8–11', ch: 'ch3', focus: 'Water Resources', missions: ['Water Scarcity Survival', 'Definition Duel', 'Map Blitz on dams', 'Boss Fight'] },
  { days: '12–16', ch: 'ch4', focus: 'Agriculture', missions: ['Crop Command Center', 'Rapid Fire on crops', 'Map Blitz on crop belts', 'Boss Fight'] },
  { days: '17–20', ch: 'ch5', focus: 'Minerals & Energy', missions: ['Mineral Hunt', 'Memory Palace (coal grades)', 'Map Blitz on mines', 'Boss Fight'] },
  { days: '21–24', ch: 'ch6', focus: 'Manufacturing', missions: ['Industry Location Architect', 'Long Answer Arena', 'Map Blitz on steel plants', 'Boss Fight'] },
  { days: '25–28', ch: 'ch7', focus: 'Lifelines', missions: ['Lifelines Network Builder', 'Map Blitz on ports', 'Rapid Fire ×3', 'Boss Fight'] },
  { days: '29', ch: null, focus: 'Map marathon', missions: ['All-India mixed map ×3', 'CBSE map list self-test'] },
  { days: '30', ch: null, focus: 'Geography God Exam', missions: ['Weak radar drill', 'Full 30-question exam', 'Re-drill every miss'] }
];
const PLAN_45 = PLAN_30.map((row, i) => ({ ...row, days: ['1–6','7–12','13–18','19–26','27–32','33–38','39–43','44','45'][i] }));

let planMode = 30;
function screenPlan() {
  const plan = planMode === 30 ? PLAN_30 : PLAN_45;
  app.innerHTML = `<div class="screen stack">
    <div class="between">
      <div><span class="kicker">FROM SOIL BEGINNER TO GEOGRAPHY GOD</span><h1 style="margin-top:6px">The Mastery Plan</h1></div>
      <div class="row">
        <button class="btn sm ${planMode === 30 ? 'primary' : ''}" data-mode="30">30 days</button>
        <button class="btn sm ${planMode === 45 ? 'primary' : ''}" data-mode="45">45 days</button>
      </div>
    </div>
    <div class="card">
      <h3>Daily template (20–30 minutes)</h3>
      <div class="stack tiny" style="margin-top:8px;color:var(--muted)">
        <div>1. <b>Warm-up (4 min)</b> — Rapid Fire or the Daily Challenge.</div>
        <div>2. <b>Deep game (10 min)</b> — the chapter’s signature format (Sniper / Detective / Simulator).</div>
        <div>3. <b>Map (4 min)</b> — Map Blitz, that chapter’s pins only.</div>
        <div>4. <b>Defend (8 min)</b> — Boss Fight once coverage crosses 90%, or the weak-spot drill if not.</div>
      </div>
    </div>
    ${plan.map(p => `<div class="card">
      <div class="between">
        <div style="display:flex;gap:12px;align-items:center">
          <div class="pill lime" style="min-width:78px;justify-content:center">Day ${p.days}</div>
          <div>
            <h3 style="font-size:16px">${esc(p.focus)}</h3>
            <span class="tiny muted">${p.ch ? `Ch ${byChapter[p.ch].n} · ${p.ch}` : 'Full syllabus'}</span>
          </div>
        </div>
        ${p.ch ? `<button class="btn sm" data-nav="#/ch/${p.ch}">Open</button>` : `<button class="btn sm" data-nav="#/coverage">Tracker</button>`}
      </div>
      <div class="row" style="margin-top:10px">${p.missions.map(m => `<span class="pill">${esc(m)}</span>`).join('')}</div>
    </div>`).join('')}
  </div>`;
  app.querySelectorAll('[data-mode]').forEach(b => b.onclick = () => { planMode = +b.dataset.mode; screenPlan(); });
}

/* ============================================================
   ROUTER
   ============================================================ */
function route() {
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);
  const root = parts[0] || 'home';

  document.querySelectorAll('#tabbar .tab').forEach(t => {
    const nav = t.dataset.nav || '';
    const active = (root === 'home' && nav === '#/home') || (root === 'chapters' && nav === '#/chapters') ||
      (root === 'map' && nav === '#/map') || (root === 'daily' && nav === '#/daily') || (root === 'exam' && nav === '#/exam') ||
      (root === 'ch' && nav === '#/chapters') || (root === 'play' && nav === '#/chapters');
    t.classList.toggle('active', active);
  });

  switch (root) {
    case 'ch': return screenChapter(parts[1] || 'ch1');
    case 'play': {
      const gid = parts[1];
      const chId = parts[2] || null;
      return playGame(gid, chId);
    }
    case 'chapters': return screenChapters();
    case 'map': return screenMap();
    case 'daily': return screenDaily();
    case 'exam': return screenExam();
    case 'profile': return screenProfile();
    case 'radar': return screenRadar();
    case 'coverage': return screenCoverage();
    case 'plan': return screenPlan();
    case 'arcade': return screenArcade();
    default: return screenHome();
  }
}

/* delegated navigation */
document.addEventListener('click', e => {
  const nav = e.target.closest('[data-nav]');
  if (nav) { e.preventDefault(); go(nav.dataset.nav); }
});

window.addEventListener('hashchange', () => { closeModal(); route(); syncHUD(); window.scrollTo({ top: 0 }); });

/* HUD reactions */
import { bus } from './core.js';
bus.addEventListener('xp', () => syncHUD());
bus.addEventListener('badge', e => {
  const b = e.detail;
  toast(`${b.ic} Badge unlocked: <b>${b.name}</b>`, 'good', 4200);
  confetti(30);
});
bus.addEventListener('rankup', e => {
  sfx.level();
  modal(`<div class="center">
    <div style="font-size:46px">${e.detail.rank.icon}</div>
    <h2 style="margin-top:8px">Rank up</h2>
    <div class="pill lime" style="margin-top:8px">${esc(e.detail.rank.name)}</div>
    <p class="muted" style="margin-top:12px">${e.detail.rank.xp.toLocaleString()} XP crossed. The examiner can feel it.</p>
    <div class="btn-row" style="justify-content:center"><button class="btn primary" onclick="document.getElementById('modal').hidden=true">Keep going</button></div>
  </div>`);
});
bus.addEventListener('levelup', e => toast(`⬆️ Level ${e.detail.level} reached`, 'good'));
bus.addEventListener('game:end', () => syncHUD());

/* sound toggle */
const soundBtn = $('#btn-sound');
soundBtn.textContent = P().sound === false ? '🔇' : '🔊';
soundBtn.classList.toggle('off', P().sound === false);
soundBtn.onclick = () => {
  const on = toggleSound();
  setSound(on);
  soundBtn.textContent = on ? '🔊' : '🔇';
  soundBtn.classList.toggle('off', !on);
};

/* boot */
if (!location.hash) location.hash = '#/home';
syncHUD();
route();
