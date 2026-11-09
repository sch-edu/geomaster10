/* ============================================================
   01 · SENTENCE SNIPER — find the exact NCERT line under fire
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';
import { recordAnswer, addXP } from '../core.js';

export default {
  id: 'sniper',
  name: 'Sentence Sniper',
  emoji: '🎯',
  tag: 'Precision',
  blurb: 'A paragraph from the book. One sentence holds the answer. Snipe it — wrong shots cost you.',
  count: 6,
  available: ch => (ch.paragraphs || []).length >= 3,

  start(ctx) {
    const ch = ctx.chapter;
    const rounds = shuffle(ch.paragraphs).slice(0, 6);
    const frame = new GameFrame({ ctx, id: 'sniper', title: 'Sentence Sniper', emoji: '🎯', total: rounds.length });
    let i = 0, hits = 0, shots = 0;

    const render = () => {
      if (i >= rounds.length) return done();
      const r = rounds[i];
      frame._fired = false;
      frame.setProgress(i);
      frame.body(`
        <div class="qcard">
          <div class="qtag">TARGET LOCKED · Ch ${ch.n} · ${esc(r.s)}</div>
          <div class="qtext small">${esc(r.q)}</div>
          <div class="qhint" style="margin-bottom:6px">Click the ONE sentence that nails it. No partial credit for vibes.</div>
          <div style="display:grid;gap:10px;margin-top:14px">
            ${r.text.map((s, k) => `<button class="opt" data-s="${k}" style="font-size:14px">
              <span class="key">${k + 1}</span><span>${esc(s)}</span></button>`).join('')}
          </div>
          <div class="row" style="margin-top:14px"><span class="pill cyan">🎯 Shots fired: ${shots}</span><span class="pill lime">✅ Hits: ${hits}</span></div>
        </div>
        <div data-fb></div>`);

      const buttons = [...frame.bodyEl.querySelectorAll('[data-s]')];
      buttons.forEach(b => b.addEventListener('click', ev => fire(+b.dataset.s, ev)));
    };

    const fire = (k, ev) => {
      if (frame._fired) return;
      frame._fired = true;
      const r = rounds[i];
      const ok = k === r.a;
      shots++;
      const btns = [...frame.bodyEl.querySelectorAll('[data-s]')];
      btns.forEach(b => {
        b.classList.add('locked');
        if (+b.dataset.s === r.a) b.classList.add('correct');
        else if (+b.dataset.s === k) b.classList.add('wrong');
      });
      const fid = factForSection(ch, r.s);
      const { xp } = frame.record(ok, { factId: fid, base: ok ? 14 : 10, difficulty: 3 });
      frame.floatXP(xp, ev);
      if (ok) { hits++; sfx.good(); } else sfx.bad();

      const fb = frame.q('[data-fb]');
      if (ok) {
        fb.innerHTML = frame.feedbackHTML({
          ok: true,
          head: 'Direct hit. That is the line the examiner wants.',
          body: `The exact sentence: <b>“${esc(r.text[r.a])}”</b>`,
          ref: `Ch ${ch.n} · ${r.s}`
        }) + `<div class="btn-row"><button class="btn primary" data-next>Next paragraph →</button></div>`;
        fb.querySelector('[data-next]').onclick = () => { i++; render(); };
      } else {
        fb.innerHTML = frame.feedbackHTML({
          ok: false,
          head: 'Missed shot. The book is disappointed, not surprised.',
          body: `You aimed at: “${esc(r.text[k])}”<br>The line that actually answers it is highlighted in green above.`,
          quote: r.text[r.a],
          ref: `Ch ${ch.n} · ${r.s}`
        }) + `<div class="btn-row"><button class="btn primary" data-retry>🔁 Take the shot again (required)</button></div>`;
        fb.querySelector('[data-retry]').onclick = () => {
          recordAnswer(fid, true);
          addXP(2);
          fb.innerHTML = frame.feedbackHTML({ ok: true, head: 'Locked in. Now it is yours.', body: esc(r.text[r.a]), ref: `Ch ${ch.n} · ${r.s}` })
            + `<div class="btn-row"><button class="btn primary" data-next>Next paragraph →</button></div>`;
          fb.querySelector('[data-next]').onclick = () => { i++; render(); };
        };
      }
    };

    function done() {
      frame.finish({
        retry: true,
        title: 'Sentence Sniper',
        subtitle: shots <= rounds.length ? 'Sniper elite: no wasted shots.' : 'Accuracy improved under fire.'
      });
    }

    render();
  }
};
