/* ============================================================
   08 · MINERAL HUNT & ENERGY EMPIRE — dig the right tile
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';
import { recordAnswer, addXP } from '../core.js';

const mask = (text, name) => {
  const bits = name.split(/[—–\-(),]/).map(s => s.trim()).filter(s => s.length > 4);
  let out = text;
  // mask the full name and its distinctive words
  out = out.replace(new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), 'this place');
  bits.forEach(b => {
    if (b.length > 5) out = out.replace(new RegExp(b.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), '…');
  });
  return out;
};

export default {
  id: 'hunt',
  name: 'Mineral Hunt',
  emoji: '💎',
  tag: 'Map + Recall',
  blurb: 'A riddle, a 12-tile grid, one buried site. Dig wrong and the desert charges you XP.',
  count: 6,
  available: ch => (ch.mapItems || []).length >= 8,

  start(ctx) {
    const ch = ctx.chapter;
    const picks = shuffle(ch.mapItems).slice(0, 7);
    const targets = picks.slice(0, 6);
    const distractors = shuffle(ch.mapItems.filter(m => !targets.includes(m))).slice(0, 6);
    const tiles = shuffle([...targets, ...distractors]).map((m, idx) => ({ ...m, tile: idx }));
    const frame = new GameFrame({ ctx, id: 'hunt', title: ch.id === 'ch5' ? 'Mineral Hunt' : 'Treasure Hunt', emoji: '💎', total: 6 });
    let i = 0, found = 0, digs = 0;

    const render = () => {
      if (i >= targets.length) return finish();
      const t = targets[i];
      frame.setProgress(i);
      const clueText = mask(t.why || '', t.name);
      frame.body(`
        <div class="qcard" style="padding:16px">
          <div class="qtag">EXPEDITION ${i + 1}/6 · ${esc(ch.mapCats?.[t.cat]?.label || 'site')}</div>
          <div class="qtext small">“${esc(clueText || 'Find the site described by NCERT.')}”</div>
          <div class="qhint" style="margin:8px 0 14px">Dig the tile with the correct site. Wrong digs cost 2 XP and reveal what was there.</div>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px" data-grid>
            ${tiles.map((m, k) => `<button class="token" data-dig="${k}" style="min-height:62px;font-size:11.5px;line-height:1.25;display:grid;place-items:center;text-align:center;${m.revealed ? 'opacity:.45' : ''}">${esc(m.name)}</button>`).join('')}
          </div>
          <div class="row" style="margin-top:14px">
            <span class="pill cyan">⛏️ Digs: ${digs}</span>
            <span class="pill lime">💎 Found: ${found}</span>
            <button class="pill" data-help style="cursor:pointer">📖 shrink the grid (−4 XP)</button>
          </div>
        </div>
        <div data-fb></div>`);

      const grid = frame.q('[data-grid]');
      grid.querySelectorAll('[data-dig]').forEach(b => {
        b.onclick = ev => {
          const k = +b.dataset.dig;
          const m = tiles[k];
          if (m.revealed) return;
          digs++;
          if (m.name === t.name) {
            m.revealed = true;
            found++;
            b.style.background = 'linear-gradient(150deg,rgba(184,255,92,.25),rgba(61,220,151,.15))';
            b.style.borderColor = 'var(--green)';
            b.classList.add('right');
            b.textContent = '💎 ' + m.name;
            sfx.great();
            frame.record(true, { factId: factForSection(ch, ch.sections[2] || ch.sections[0]), base: 18, difficulty: 3, mapPin: true });
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok: true, head: 'Strike! The grid gives up its secret.',
              body: `<b>${esc(t.name)}</b> — ${esc(t.why)}`,
              ref: `Ch ${ch.n} · map work`
            }) + `<div class="btn-row"><button class="btn primary" data-next>Next expedition →</button></div>`;
            fb.querySelector('[data-next]').onclick = () => { i++; render(); };
          } else {
            m.revealed = true;
            b.style.opacity = '.4';
            b.classList.add('bad');
            b.disabled = true;
            addXP(-2);
            sfx.bad();
            recordAnswer(factForSection(ch, ch.sections[2] || ch.sections[0]), false, { game: 'hunt' });
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok: false,
              head: `Empty pit. That was ${esc(m.name)}.`,
              body: `Keep digging — the target is still out there. ${esc(m.why || '')}`,
              ref: `Ch ${ch.n} · map work`
            });
          }
        };
      });

      frame.q('[data-help]').onclick = e => {
        if (e.target.disabled) return;
        e.target.disabled = true;
        addXP(-4);
        // reveal the category row: dim 3 wrong tiles
        const wrongs = shuffle(tiles.map((m, k) => ({ m, k })).filter(o => o.m.name !== t.name && !o.m.revealed)).slice(0, 3);
        wrongs.forEach(o => {
          const b = grid.querySelector(`[data-dig="${o.k}"]`);
          if (b) { b.style.opacity = '.25'; b.disabled = true; o.m.revealed = true; }
        });
        frame.floatXP(-4);
      };
    };

    function finish() {
      frame.finish({ retry: true, title: 'Treasure Hunt', subtitle: `${found}/6 sites found in ${digs} digs.` });
    }
    render();
  }
};
