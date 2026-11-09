/* ============================================================
   11 · DEFINITION DUEL — exact NCERT wording, then recall by typing
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';
import { recordAnswer, addXP } from '../core.js';

function lev(a, b) {
  a = a.toLowerCase(); b = b.toLowerCase();
  const m = a.length, n = b.length;
  if (!m || !n) return Math.max(m, n);
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}
const similar = (a, b) => {
  const x = a.toLowerCase().replace(/[^a-z ]/g, '').trim();
  const y = b.toLowerCase().replace(/[^a-z ]/g, '').trim();
  if (x === y || x.includes(y) || y.includes(x)) return true;
  const d = lev(x, y);
  return d <= Math.max(2, Math.floor(y.length * 0.22));
};

export default {
  id: 'defduel',
  name: 'Definition Duel',
  emoji: '⚖️',
  tag: 'Wording',
  blurb: 'Two definitions enter. Only one is NCERT-exact. Then the duel turns into blind recall.',
  count: 6,
  available: ch => (ch.defs || []).length >= 4,

  start(ctx) {
    const ch = ctx.chapter;
    const list = shuffle(ch.defs).slice(0, 6);
    const frame = new GameFrame({ ctx, id: 'defduel', title: 'Definition Duel', emoji: '⚖️', total: list.length });
    let i = 0;

    const render = () => {
      if (i >= list.length) return finish();
      const d = list[i];
      const typing = i >= 4;          // last two rounds: type the term
      frame.setProgress(i);
      const fid = factForSection(ch, d.s);

      let answered = false;
      if (!typing) {
        const duel = shuffle([d.correct, d.traps[0] || d.traps[Math.floor(Math.random() * d.traps.length)]]);
        frame.body(`
          <div class="qcard">
            <div class="qtag">DUEL ${i + 1} · exact wording only</div>
            <div class="qtext">Which is the exact NCERT definition of <span style="color:var(--lime)">${esc(d.term)}</span>?</div>
            <div class="options">
              ${duel.map((o, k) => `<button class="opt" data-d="${k}"><span class="key">${'AB'[k]}</span><span>${esc(o)}</span></button>`).join('')}
            </div>
          </div>
          <div data-fb></div>`);
        frame.bodyEl.querySelectorAll('[data-d]').forEach(b => {
          b.onclick = ev => {
            if (answered) return;
            answered = true;
            const k = +b.dataset.d;
            const ok = duel[k] === d.correct;
            frame.bodyEl.querySelectorAll('[data-d]').forEach(x => {
              x.classList.add('locked');
              if (x.textContent.includes(d.correct.slice(0, 40))) x.classList.add('correct');
              else if (x === b) x.classList.add('wrong');
            });
            frame.record(ok, { factId: fid, base: 12, difficulty: 2 });
            ok ? sfx.good() : sfx.bad();
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok,
              head: ok ? 'Exact match. Words are marks.' : 'That is the trap version. Almost identical — which is why CBSE loves it.',
              body: `<b>NCERT:</b> ${esc(d.correct)}`,
              ref: `Ch ${ch.n} · ${d.s}`
            }) + `<div class="btn-row"><button class="btn primary" data-next>${ok ? 'Next duel →' : 'I have read it — next'}</button></div>`;
            fb.querySelector('[data-next]').onclick = () => { i++; render(); };
          };
        });
      } else {
        frame.body(`
          <div class="qcard">
            <div class="qtag">BLIND RECALL · type the term</div>
            <div class="qtext small">Which term is defined as:</div>
            <div class="quote" style="font-size:14px">“${esc(d.correct)}”</div>
            <input class="answer" data-inp style="min-height:0;padding:14px;font-size:16px" placeholder="Type the exact term…" autocomplete="off" />
            <div class="btn-row"><button class="btn primary" data-submit>Submit</button><span class="pill" data-hint>first letter: ${esc(d.term[0])}</span></div>
          </div>
          <div data-fb></div>`);
        const inp = frame.q('[data-inp]');
        inp.focus();
        const submit = ev => {
          if (answered) return;
          const val = inp.value.trim();
          if (!val) return;
          answered = true;
          const ok = similar(val, d.term);
          frame.record(ok, { factId: fid, base: 18, difficulty: 3 });
          ok ? sfx.good() : sfx.bad();
          const fb = frame.q('[data-fb]');
          fb.innerHTML = frame.feedbackHTML({
            ok,
            head: ok ? 'Typed from memory. That is board-ready.' : `The term was “${d.term}”.`,
            body: ok ? 'Exact recall is a different skill from recognition — and it is the one that scores in the exam.' : `You wrote “${esc(val)}”. Now write the correct term twice in your head and move on.`,
            quote: d.correct,
            ref: `Ch ${ch.n} · ${d.s}`
          }) + `<div class="btn-row">${ok ? '' : '<button class="btn" data-retry>🔁 Type it correctly</button>'}<button class="btn primary" data-next>Continue →</button></div>`;
          fb.querySelector('[data-retry]')?.addEventListener('click', () => {
            recordAnswer(fid, true);
            addXP(2);
            fb.innerHTML = frame.feedbackHTML({ ok: true, head: `Correct: ${d.term}`, body: esc(d.correct), ref: `Ch ${ch.n} · ${d.s}` })
              + `<div class="btn-row"><button class="btn primary" data-next>Continue →</button></div>`;
            fb.querySelector('[data-next]').onclick = () => { i++; render(); };
          });
          fb.querySelector('[data-next]').onclick = () => { i++; render(); };
          inp.disabled = true;
        };
        frame.q('[data-submit]').onclick = submit;
        inp.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
        frame.q('[data-hint]').onclick = () => {
          const e = frame.q('[data-hint]');
          e.textContent = `${d.term.length} letters · starts with “${d.term[0]}” · ends with “${d.term.slice(-2)}”`;
        };
      }
    };

    function finish() {
      frame.finish({ retry: true, title: 'Definition Duel', subtitle: 'Exact wording, typed from memory.' });
    }
    render();
  }
};
