/* ============================================================
   Shared game frame + generic MCQ engine
   ============================================================ */
import { addXP, recordAnswer, endGame, startGame, P } from '../core.js';
import { xpForCorrect, gradeFor } from '../engine.js';
import { esc, shuffle, sfx, xpFloat, confetti, toast, snark, fmtTime } from '../ui.js';

export class GameFrame {
  constructor({ ctx, id, title, emoji, total = 10, timePerQ = 0, subtitle = '', mode = 'game' }) {
    this.ctx = ctx;
    this.id = id; this.title = title; this.emoji = emoji;
    this.total = total;
    this.timePerQ = (ctx.hard && timePerQ) ? Math.max(5, Math.round(timePerQ * 0.6)) : timePerQ;
    this.mode = mode; this.subtitle = subtitle;
    this.i = 0; this.correct = 0; this.combo = 0; this.bestCombo = 0;
    this.answered = 0; this.xp = 0; this.review = [];
    this.startedAt = Date.now();
    this.root = ctx.mount;
    this.timerId = null;
    this.root.innerHTML = `<div class="game-shell">
      <div class="game-top">
        <button class="back" data-back>← Leave</button>
        <span class="pill lime">${emoji} ${esc(title)}</span>
        ${timePerQ ? '<div class="timer" data-timer>--</div>' : ''}
        <div class="qmeta">
          <span class="pill cyan" data-progress>1 / ${total}</span>
          <span class="combo" data-combo>🔥 x1</span>
        </div>
      </div>
      <div class="progress-track"><i data-bar style="width:0%"></i></div>
      <div data-body></div>
    </div>`;
    this.bodyEl = this.root.querySelector('[data-body]');
    this.root.querySelector('[data-back]').onclick = () => { this.stopTimer(); ctx.quit(); };
    startGame(id, ctx.chapter?.id);
  }

  body(html) { this.bodyEl.innerHTML = html; return this.bodyEl; }
  q(sel) { return this.bodyEl.querySelector(sel); }

  setProgress(i) {
    this.i = i;
    const pr = this.root.querySelector('[data-progress]');
    const bar = this.root.querySelector('[data-bar]');
    if (pr) pr.textContent = `${Math.min(i + 1, this.total)} / ${this.total}`;
    if (bar) bar.style.width = Math.min(100, (i / this.total) * 100) + '%';
  }

  setCombo() {
    const c = this.root.querySelector('[data-combo]');
    if (c) {
      c.textContent = `🔥 x${this.combo}`;
      c.style.color = this.combo >= 5 ? '#b8ff5c' : this.combo >= 3 ? '#ffc44d' : '';
      c.classList.remove('pop'); void c.offsetWidth; c.classList.add('pop');
      setTimeout(() => c.classList.remove('pop'), 500);
    }
  }

  /* countdown for the current question */
  countdown(seconds, onEnd) {
    this.stopTimer();
    const el = this.root.querySelector('[data-timer]');
    const total = seconds;
    let left = seconds;
    if (el) { el.textContent = left; el.classList.remove('warn'); }
    this.timerId = setInterval(() => {
      left--;
      if (el) {
        el.textContent = Math.max(0, left);
        if (left <= 5) el.classList.add('warn');
      }
      if (left <= 0) { this.stopTimer(); onEnd?.(); }
    }, 1000);
    this._lastSeconds = total;
  }
  stopTimer() { if (this.timerId) { clearInterval(this.timerId); this.timerId = null; } }

  /* record an answer exactly once; returns {xp} */
  record(correct, { factId, ms = 0, timeLimit = 0, difficulty = 2, base = 10, silent = false, mapPin = false } = {}) {
    this.answered++;
    let xp = 0;
    if (correct) {
      this.combo++;
      this.bestCombo = Math.max(this.bestCombo, this.combo);
      this.correct++;
      xp = xpForCorrect({ base, combo: this.combo - 1, ms, timeLimit, difficulty });
      this.xp += xp;
      addXP(xp);
      if (this.combo >= 3) sfx.good(); else sfx.click();
    } else {
      this.combo = 0;
      sfx.bad();
    }
    this.setCombo();
    if (factId) recordAnswer(factId, correct, { ms, game: this.id, mapPin });
    return { xp };
  }

  floatXP(xp, ev) {
    if (!xp) return;
    const x = ev?.clientX ?? window.innerWidth / 2;
    const y = ev?.clientY ?? 180;
    xpFloat(xp, x - 20, y - 20);
  }

  feedbackHTML({ ok, body, quote, ref, head }) {
    return `<div class="feedback ${ok ? 'good' : 'bad'}">
      <div class="fb-head">${ok ? '✅' : '❌'} ${esc(head || (ok ? snark(true) : snark(false)))}</div>
      <div class="fb-body">${body || ''}</div>
      ${quote ? `<div class="quote">“${esc(quote)}”</div>` : ''}
      ${ref ? `<span class="ref">📖 ${esc(ref)}</span>` : ''}
    </div>`;
  }

  addReview(item) { this.review.push(item); }

  elapsed() { return Math.round((Date.now() - this.startedAt) / 1000); }

  finish({ title, subtitle, retry, extra = '', gameId } = {}) {
    this.stopTimer();
    const pct = this.total ? Math.max(0, Math.min(100, Math.round((this.correct / this.total) * 100))) : 0;
    const g = gradeFor(pct);
    const secs = this.elapsed();
    const xpTotal = this.xp;
    endGame({ gameId: gameId || this.id, chapterId: this.ctx.chapter?.id, correct: this.correct, total: this.total, xp: xpTotal, seconds: secs, detail: { bestCombo: this.bestCombo, boss: this.mode === 'boss' } });
    if (pct >= 80) { confetti(70); sfx.great(); }

    const wrongs = this.review.filter(r => !r.ok);
    const fixable = wrongs.length > 0 && wrongs.every(w => Array.isArray(w.options));
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.root.innerHTML = `<div class="screen stack">
      <div class="result-hero">
        <div class="tiny muted">${esc(this.emoji)} ${esc(title || this.title)}</div>
        <div class="big-score">${pct}%</div>
        <div class="stars">${'★'.repeat(Math.max(0, Math.min(5, Math.round(pct / 20))))}${'☆'.repeat(Math.max(0, 5 - Math.round(pct / 20)))}</div>
        <h2 style="margin-top:10px">${esc(subtitle || g.label)}</h2>
        <p class="muted" style="margin-top:6px">Grade ${g.grade} · ${this.correct}/${this.total} correct · best combo x${this.bestCombo} · ${fmtTime(secs)}</p>
        <div class="row" style="justify-content:center;margin-top:8px">
          <span class="pill lime">+${xpTotal} XP earned</span>
          <span class="pill cyan">${P().xp.toLocaleString()} XP total</span>
        </div>
        ${pct >= 95 ? '<p style="margin-top:12px;color:var(--lime);font-weight:600">Elite. The examiner is nervous.</p>' : ''}
      </div>

      ${extra}

      ${wrongs.length ? `<div class="card">
        <div class="between"><h3>🎯 Your kill list (${wrongs.length})</h3><span class="pill red">these come back in your SRS</span></div>
        <div class="review-list" style="margin-top:12px">
          ${wrongs.map(r => `<div class="review-item">
            <div class="ri-q">${esc(r.q)}</div>
            <div class="ri-a">✅ ${esc(r.answerText)}</div>
            ${r.quote ? `<div class="quote" style="margin:8px 0 4px">“${esc(r.quote)}”</div>` : ''}
            ${r.ref ? `<span class="ref">📖 ${esc(r.ref)}</span>` : ''}
          </div>`).join('')}
        </div>
      </div>` : `<div class="card center" style="padding:26px"><h3>🧠 Flawless run</h3><p class="muted">No wrong answers. Nothing to rematch. Go collect another chapter.</p></div>`}

      <div class="btn-row">
        ${retry ? `<button class="btn primary" data-again>Play again</button>` : ''}
        ${fixable && retry && this.ctx.rematch ? `<button class="btn" data-fix>🔁 Micro-rematch the ${wrongs.length} wrong one${wrongs.length > 1 ? 's' : ''}</button>` : ''}
        <button class="btn ghost" data-back>Back to chapter</button>
      </div>
    </div>`;

    this.root.querySelector('[data-again]')?.addEventListener('click', () => { this.ctx.restart(); });
    this.root.querySelector('[data-fix]')?.addEventListener('click', () => { this.ctx.rematch(wrongs); });
    this.root.querySelector('[data-back]').onclick = () => this.ctx.quit();
  }
}

/* ============================================================
   Generic MCQ game: used by several formats
   ============================================================ */
export function makeMcqGame(config) {
  const {
    id, name, emoji, blurb, tag = 'Mixed', timePerQ = 0, forceRematch = true,
    build, count = 10, xpLabel = '', subtitleFor, mode = 'game'
  } = config;

  return {
    id, name, emoji, blurb, tag, count, timePerQ, mode,
    start(ctx) {
      let questions = build(ctx.chapter, ctx, count);
      const frame = new GameFrame({ ctx, id, title: name, emoji, total: questions.length, timePerQ, mode });
      let i = 0, fixed = new Set(), locked = false;

      const renderQuestion = () => {
        if (i >= questions.length) return finish();
        locked = false;
        const q = questions[i];
        frame.setProgress(i);
        frame.body(`
          <div class="qcard">
            <div class="qtag">${esc(tag)} · ${i + 1} of ${questions.length}${q.chN ? ` · Ch ${q.chN}` : ''}</div>
            <div class="qtext ${q.q.length > 130 ? 'small' : ''}">${esc(q.q)}</div>
            ${q.hint ? `<div class="qhint">${esc(q.hint)}</div>` : ''}
            <div class="options">
              ${q.options.map((o, k) => `<button class="opt" data-k="${k}">
                <span class="key">${'ABCD'[k]}</span><span>${esc(o)}</span></button>`).join('')}
            </div>
          </div>
          <div data-fb></div>`);

        frame.bodyEl.querySelectorAll('[data-k]').forEach(btn => {
          btn.addEventListener('click', ev => choose(+btn.dataset.k, ev));
        });
        if (frame.timePerQ) {
          frame.countdown(frame.timePerQ, () => { if (!locked) choose(-1, null, true); });
        }
      };

      const choose = (k, ev, timedOut = false) => {
        if (locked) return;
        const q = questions[i];
        const ok = k === q.answer;
        locked = true;
        frame.stopTimer();
        frame.bodyEl.querySelectorAll('[data-k]').forEach(b => {
          b.classList.add('locked');
          const kk = +b.dataset.k;
          if (kk === q.answer) b.classList.add('correct');
          else if (kk === k) b.classList.add('wrong');
          else b.classList.add('faded');
        });

        const { xp } = frame.record(ok, { factId: q.factId, ms: 0, timeLimit: frame.timePerQ, difficulty: q.difficulty || 2, base: config.base || 10 });
        frame.floatXP(xp, ev);
        frame.addReview({
          ok, q: q.q,
          answerText: q.options[q.answer],
          quote: q.why || q.quote,
          ref: q.ref,
          options: q.options, answer: q.answer, why: q.why, factId: q.factId, ref2: q.ref
        });

        const fb = frame.q('[data-fb]');
        fb.innerHTML = frame.feedbackHTML({
          ok,
          body: timedOut ? `Time up. The answer was <b>${esc(q.options[q.answer])}</b>.<br>${esc(q.why || '')}` : (q.why ? esc(q.why) : ''),
          quote: q.quote && q.quote !== q.why ? q.quote : '',
          ref: q.ref,
          head: timedOut ? 'Clock beat you. Rude.' : undefined
        }) + `<div class="btn-row" style="margin-top:12px">
          ${(!ok && forceRematch && !timedOut) ? `<button class="btn primary" data-rematch>🔁 Rematch this question</button>` : `<button class="btn primary" data-next>Continue →</button>`}
        </div>`;

        fb.querySelector('[data-rematch]')?.addEventListener('click', () => {
          // forced micro-rematch: same fact, new question build where possible
          const same = questions[i];
          const rebuilt = build(ctx.chapter, ctx, 1)[0];
          const q2 = rebuilt && rebuilt.factId === same.factId ? rebuilt : same;
          const opts = shuffle(q2.options.map((o, idx) => ({ o, correct: idx === q2.answer })));
          const answer = opts.findIndex(o => o.correct);
          const remount = () => {
            fb.innerHTML = '';
            const card = frame.q('.qcard');
            card.innerHTML = `<div class="qtag">🔁 MICRO-REMATCH · no marks, all memory</div>
              <div class="qtext small">${esc(q2.q)}</div>
              <div class="options">${opts.map((o, k) => `<button class="opt locked ${k === answer ? '' : ''}" data-r="${k}"><span class="key">${'ABCD'[k]}</span><span>${esc(o.o)}</span></button>`).join('')}</div>`;
            card.querySelectorAll('[data-r]').forEach(b => b.addEventListener('click', ev2 => {
              const kk = +b.dataset.r;
              card.querySelectorAll('[data-r]').forEach(x => { x.classList.remove('locked'); x.classList.add(kk === answer ? (x.dataset.r == answer ? 'correct' : '') : (x.dataset.r == kk ? 'wrong' : '')); });
              if (kk === answer) {
                b.classList.add('correct');
                card.querySelectorAll('[data-r]').forEach(x => x.classList.add('locked'));
                recordAnswer(q2.factId, true, { game: id });
                addXP(3);
                frame.floatXP(3, ev2);
                sfx.good();
                fb.innerHTML = frame.feedbackHTML({ ok: true, head: 'Fixed in memory. That is how mastery happens.', body: esc(q2.why || ''), ref: q2.ref })
                  + `<div class="btn-row"><button class="btn primary" data-next>Continue →</button></div>`;
                fb.querySelector('[data-next]').onclick = next;
              } else {
                b.classList.add('wrong');
                sfx.bad();
                card.querySelectorAll('[data-r]').forEach(x => x.classList.add('locked'));
                recordAnswer(q2.factId, false, { game: id });
                fb.innerHTML = frame.feedbackHTML({ ok: false, head: 'Still wrong — read it once, then try again. This is the SRS loop.', body: esc(q2.why || ''), quote: q2.quote, ref: q2.ref })
                  + `<div class="btn-row"><button class="btn primary" data-again2>Try once more</button><button class="btn ghost" data-next>Skip (it will haunt you)</button></div>`;
                fb.querySelector('[data-again2]').onclick = remount;
                fb.querySelector('[data-next]').onclick = next;
              }
            }));
          };
          remount();
        });
        fb.querySelector('[data-next]')?.addEventListener('click', next);
        if (forceRematch && !ok && !timedOut) fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      };

      const next = () => { i++; renderQuestion(); };

      function finish() {
        config.onComplete?.(frame, questions);
        frame.finish({
          retry: true,
          subtitle: subtitleFor ? subtitleFor(frame.correct, questions.length) : undefined
        });
      }

      renderQuestion();
    }
  };
}

/* convenience: shuffle options of a normalised question */
export function scramble(q) {
  const order = shuffle(q.options.map((_, i) => i));
  return {
    ...q,
    options: order.map(i => q.options[i]),
    answer: order.indexOf(q.answer)
  };
}
