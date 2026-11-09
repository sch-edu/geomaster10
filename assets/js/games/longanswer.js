/* ============================================================
   13 · LONG ANSWER ARENA — write it, get marked like CBSE
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';
import { addXP } from '../core.js';

const norm = s => s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ');
const hasKw = (text, kw) => {
  const t = norm(text);
  return kw.some(k => {
    const kk = norm(k).trim();
    if (!kk) return false;
    if (t.includes(kk)) return true;
    // tolerate plural / suffix
    return t.includes(kk.replace(/s$/, '')) && kk.replace(/s$/, '').length > 4;
  });
};

export default {
  id: 'long',
  name: 'Long Answer Arena',
  emoji: '✍️',
  tag: 'Writing',
  blurb: 'A real 3- or 5-marker. You write. The marking scheme marks. Then you meet the model answer.',
  count: 1,
  available: ch => (ch.longQ || []).length > 0,

  start(ctx) {
    const ch = ctx.chapter;
    const qs = shuffle(ch.longQ).slice(0, 3);
    const frame = new GameFrame({ ctx, id: 'long', title: 'Long Answer Arena', emoji: '✍️', total: 1 });
    let picked = null;

    const pickScreen = () => {
      frame.setProgress(0);
      frame.body(`
        <div class="qcard">
          <div class="qtag">CHOOSE YOUR BOARD QUESTION · ${esc(ch.title)}</div>
          <div class="qtext small">Pick the question you want the examiner to mark. More marks = more XP = more pain.</div>
          <div class="options" style="margin-top:16px">
            ${qs.map((q, k) => `<button class="opt" data-q="${k}">
              <span class="key">${k + 1}</span>
              <span><b>${q.marks} marks</b> · ${esc(q.q)}</span>
            </button>`).join('')}
          </div>
          <div class="qhint" style="margin-top:12px">Marking is keyword-based against the NCERT scheme. Write full sentences, not keywords — the board wants both.</div>
        </div>`);
      frame.bodyEl.querySelectorAll('[data-q]').forEach(b => {
        b.onclick = () => { picked = qs[+b.dataset.q]; writeScreen(); };
      });
    };

    const writeScreen = () => {
      const q = picked;
      const started = Date.now();
      frame.body(`
        <div class="qcard">
          <div class="qtag">${q.marks} MARKS · ${esc(ch.title)}</div>
          <div class="qtext small">${esc(q.q)}</div>
          <div class="row" style="margin:10px 0">
            <span class="pill cyan" data-words>0 words</span>
            <span class="pill">Target: ${q.marks * 30}–${q.marks * 45} words</span>
            <span class="pill amber" data-kw>Keywords hit: 0 / ${q.points.length}</span>
          </div>
          <textarea class="answer" data-ans placeholder="Structure it: opening statement → 3–5 developed points → closing line. Use NCERT terms, not vibes."></textarea>
          <div class="row" style="margin-top:12px">
            <button class="btn primary" data-submit>Submit to the examiner</button>
            <button class="btn ghost" data-hintbtn>💡 Show one hint</button>
          </div>
          <div data-hint></div>
        </div>`);
      const ta = frame.q('[data-ans]');
      ta.focus();
      const update = () => {
        const words = ta.value.trim().split(/\s+/).filter(Boolean).length;
        frame.q('[data-words]').textContent = `${words} words`;
        const hit = q.points.filter(p => hasKw(ta.value, p.kw)).length;
        frame.q('[data-kw]').textContent = `Keywords hit: ${hit} / ${q.points.length}`;
        frame.q('[data-kw]').className = `pill ${hit === q.points.length ? 'lime' : hit > 1 ? 'cyan' : 'amber'}`;
      };
      ta.addEventListener('input', update);

      let hintsShown = 0;
      frame.q('[data-hintbtn]').onclick = () => {
        if (hintsShown >= q.points.length) return;
        const p = q.points[hintsShown];
        hintsShown++;
        frame.q('[data-hint]').innerHTML += `<div class="card tight" style="margin-top:8px"><span class="tiny muted">POINT ${hintsShown}</span><div style="font-size:13px">${esc(p.t)}</div></div>`;
        addXP(-2);
      };

      let submitted = false;
      frame.q('[data-submit]').onclick = () => {
        if (submitted) return;
        const text = ta.value.trim();
        const words = text.split(/\s+/).filter(Boolean).length;
        if (words < 12) { ta.style.borderColor = 'var(--red)'; ta.placeholder = 'That is not an answer. Write at least a few full sentences.'; return; }
        submitted = true;
        const seconds = Math.round((Date.now() - started) / 1000);
        evaluate(text, words, seconds);
      };
    };

    const evaluate = (text, words, seconds) => {
      const q = picked;
      const scored = q.points.map(p => ({ ...p, hit: hasKw(text, p.kw) }));
      const hits = scored.filter(s => s.hit).length;
      // marks: distribute equally; cap at q.marks
      const per = q.marks / q.points.length;
      const raw = hits * per;
      const marksAwarded = Math.min(q.marks, Math.round(raw * 2) / 2);
      const pct = Math.round((marksAwarded / q.marks) * 100);
      const xp = Math.max(6, Math.round(q.marks * 6 * (pct / 100) + 10));
      addXP(xp);
      const fid = factForSection(ch, q.s);
      // record each missed point as an SRS miss
      frame.record(pct >= 60, { factId: fid, base: xp, difficulty: 3 });

      const good = pct >= 80;
      if (good) { sfx.great(); } else sfx.bad();

      frame.body(`
        <div class="qcard">
          <div class="between">
            <div>
              <div class="qtag">EXAMINER'S REPORT · ${esc(ch.title)}</div>
              <div class="qtext small">${esc(q.q)}</div>
            </div>
            <div class="center">
              <div class="big-score" style="font-size:54px">${marksAwarded}<span style="font-size:26px;color:var(--muted)">/${q.marks}</span></div>
              <div class="pill ${good ? 'lime' : 'amber'}">${pct}%</div>
            </div>
          </div>

          <div class="table-wrap" style="margin-top:16px">
            <table>
              <thead><tr><th>Marking point</th><th style="width:70px">Marks</th><th style="width:90px">Status</th></tr></thead>
              <tbody>
                ${scored.map(s => `<tr>
                  <td>${esc(s.t)}</td>
                  <td>${per.toFixed(1)}</td>
                  <td class="${s.hit ? 'win' : ''}">${s.hit ? '✓ awarded' : '✗ missed'}</td>
                </tr>`).join('')}
                <tr><td><b>Total</b></td><td colspan="2"><b>${marksAwarded} / ${q.marks}</b></td></tr>
              </tbody>
            </table>
          </div>

          <div style="margin-top:14px">
            <div class="tiny muted" style="margin-bottom:6px">KEYWORDS THE EXAMINER LOOKED FOR</div>
            ${q.points.flatMap(p => p.kw).map(k => {
              const hit = hasKw(text, [k]);
              return `<span class="${hit ? 'kw-hit' : 'kw-miss'}">${hit ? '✓' : '✗'} ${esc(k)}</span>`;
            }).join('')}
          </div>

          <div style="margin-top:18px">
            <div class="between"><h3 style="font-size:16px">📘 Model answer (NCERT)</h3><span class="pill">${words} words written · ${Math.floor(seconds / 60)}m ${seconds % 60}s</span></div>
            <div class="quote model-answer" style="margin-top:10px;border-left-color:var(--lime);color:#dff3c8">${esc(q.model)}</div>
          </div>
        </div>

        <div class="card">
          <h3>How to convert this to full marks</h3>
          <div class="stack" style="margin-top:10px;font-size:13.5px;line-height:1.6">
            <div>1. <b>Open with a definition or a direct statement</b> — examiners award the first point quickly.</div>
            <div>2. <b>Number your points.</b> ${q.marks} marks ⇒ ${q.marks} distinct, developed points. Never write one long paragraph.</div>
            <div>3. <b>Use the exact NCERT term</b> (${esc(q.points[0]?.kw?.[0] || 'the keyword')}), then explain it in your own sentence.</div>
            <div>4. ${q.marks >= 5 ? '<b>Add a closing line</b> linking the answer to sustainable development or national need.' : '<b>Stop writing.</b> Extra irrelevant sentences do not earn marks and waste time.'}</div>
          </div>
        </div>

        <div class="btn-row">
          <button class="btn primary" data-again>Try another question</button>
          <button class="btn" data-back>Back to chapter</button>
        </div>`);

      frame.root.querySelector('[data-again]').onclick = () => frame.ctx.restart();
      frame.root.querySelector('[data-back]').onclick = () => frame.ctx.quit();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    pickScreen();
  }
};
