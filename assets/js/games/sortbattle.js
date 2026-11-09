/* ============================================================
   03 · RESOURCE CLASSIFICATION BATTLE
   Drag/tap resources into the right bin. Combos multiply XP.
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';

export default {
  id: 'sort',
  name: 'Classification Battle',
  emoji: '⚔️',
  tag: 'Sorting',
  blurb: 'Biotic, abiotic, renewable, national… sort NCERT examples into the right bins. Combos multiply XP.',
  count: 12,
  available: ch => (ch.sortSets || []).length > 0,

  start(ctx) {
    const ch = ctx.chapter;
    const set = shuffle(ch.sortSets)[0];
    // build items with correct bin
    const items = [];
    set.bins.forEach((b, bi) => b.items.forEach((txt, ii) => items.push({ txt, bin: bi, id: `${bi}-${ii}` })));
    const shuffled = shuffle(items);

    const frame = new GameFrame({ ctx, id: 'sort', title: 'Classification Battle', emoji: '⚔️', total: items.length });
    let placed = new Map();        // tokenId -> binIndex
    let firstTry = new Set();
    let checked = new Set();
    let selected = null;
    let combo = 0;

    frame.body(`
      <div class="qcard" style="padding:16px">
        <div class="qtag">CLASSIFICATION BATTLE · ${esc(set.title)}</div>
        <div class="qhint" style="margin-bottom:10px">Tap a token, then tap a bin. (Or drag.) Get it right first try for full XP.</div>
        <div class="token-pool" data-pool></div>
        <div class="bin-grid" style="margin-top:14px" data-bins></div>
        <div class="row" style="margin-top:14px;align-items:center">
          <button class="btn primary" data-check>Check my sorting</button>
          <span class="pill lime" data-foot>0 / ${items.length} locked</span>
        </div>
      </div>
      <div data-fb></div>`);

    const poolEl = frame.q('[data-pool]');
    const binsEl = frame.q('[data-bins]');
    const foot = frame.q('[data-foot]');

    binsEl.innerHTML = set.bins.map((b, bi) => `
      <div class="bin" data-bin="${bi}">
        <h5>${esc(b.name)} <span class="muted tiny" data-count="${bi}">0</span></h5>
        <div class="drop" data-drop="${bi}"></div>
      </div>`).join('');

    const tokenHTML = it => `<button class="token" draggable="true" data-token="${it.id}">${esc(it.txt)}</button>`;
    poolEl.innerHTML = shuffled.map(tokenHTML).join('');

    const counts = () => {
      set.bins.forEach((_, bi) => {
        const n = [...placed.values()].filter(v => v === bi).length;
        const el = frame.q(`[data-count="${bi}"]`);
        if (el) el.textContent = n;
      });
      const locked = [...placed.keys()].length;
      foot.textContent = `${checked.size} / ${items.length} locked`;
    };
    counts();

    const moveTo = (tokenId, binIndex) => {
      const tok = frame.q(`[data-token="${tokenId}"]`);
      if (!tok) return;
      const drop = frame.q(`[data-drop="${binIndex}"]`);
      drop.appendChild(tok);
      placed.set(tokenId, binIndex);
      tok.classList.remove('selected');
      tok.style.outline = '';
      counts();
      sfx.pin();
    };

    const select = id => {
      selected = selected === id ? null : id;
      frame.bodyEl.querySelectorAll('.token').forEach(t => {
        t.style.outline = t.dataset.token === selected ? '2px solid var(--lime)' : '';
      });
      sfx.click();
    };

    // click interactions
    frame.bodyEl.addEventListener('click', e => {
      const tok = e.target.closest('[data-token]');
      const bin = e.target.closest('[data-bin]');
      if (tok && tok.closest('[data-pool]')) return select(tok.dataset.token);
      if (tok && bin) return; // handled by bin
      if (bin && selected) return moveTo(selected, +bin.dataset.bin);
      if (tok && tok.closest('[data-bin]')) {
        // pull back to pool
        const id = tok.dataset.token;
        if (checked.has(id)) return;
        poolEl.appendChild(tok);
        placed.delete(id);
        counts();
      }
    });
    // bin click (when token is inside bin, closest order matters)
    binsEl.addEventListener('click', e => {
      const bin = e.target.closest('[data-bin]');
      if (!bin || !selected) return;
      if (e.target.closest('[data-token]')) return;
      moveTo(selected, +bin.dataset.bin);
    });

    // drag & drop
    frame.bodyEl.addEventListener('dragstart', e => {
      const tok = e.target.closest('[data-token]');
      if (!tok) return;
      e.dataTransfer.setData('text/plain', tok.dataset.token);
      tok.classList.add('dragging');
    });
    frame.bodyEl.addEventListener('dragend', e => e.target.closest?.('[data-token]')?.classList.remove('dragging'));
    binsEl.addEventListener('dragover', e => { e.preventDefault(); e.target.closest('.bin')?.classList.add('over'); });
    binsEl.addEventListener('dragleave', e => e.target.closest('.bin')?.classList.remove('over'));
    binsEl.addEventListener('drop', e => {
      e.preventDefault();
      const bin = e.target.closest('.bin');
      if (!bin) return;
      bin.classList.remove('over');
      const id = e.dataTransfer.getData('text/plain');
      if (id) { selected = id; moveTo(id, +bin.dataset.bin); selected = null; }
    });

    frame.q('[data-check]').onclick = () => {
      let newlyRight = 0, wrong = 0;
      [...placed.entries()].forEach(([id, bi]) => {
        if (checked.has(id)) return;
        const it = items.find(x => x.id === id);
        const tok = frame.q(`[data-token="${id}"]`);
        if (!tok) return;
        if (it.bin === bi) {
          checked.add(id);
          firstTry.add(id);
          tok.classList.add('right');
          tok.disabled = true;
          combo++;
          newlyRight++;
          recordFor(id, true);
        } else {
          wrong++;
          combo = 0;
          tok.classList.add('bad');
          setTimeout(() => { tok.classList.remove('bad'); poolEl.appendChild(tok); }, 420);
          placed.delete(id);
          recordFor(id, false);
        }
      });
      counts();

      const fb = frame.q('[data-fb]');
      if ([...placed.keys()].length === 0 && (newlyRight || wrong)) {
        // nothing placed
      }
      if (newlyRight && !wrong) {
        sfx.good();
        fb.innerHTML = frame.feedbackHTML({ ok: true, head: combo > 3 ? `🔥 COMBO x${combo}. You are sorting like a machine.` : 'All correct. Bin by bin.', body: `+${newlyRight * 10} XP. ${items.length - checked.size} tokens to go.` });
      } else if (wrong) {
        sfx.bad();
        fb.innerHTML = frame.feedbackHTML({ ok: false, head: `${wrong} token${wrong > 1 ? 's' : ''} bounced back to the pool.`, body: 'Re-read the category definition — each bin is a precise NCERT classification, not a vibe.' });
      } else {
        fb.innerHTML = frame.feedbackHTML({ ok: false, head: 'Place some tokens first, legend.', body: 'Tap a token, then tap a bin.' });
      }

      if (checked.size === items.length) {
        sfx.great();
        setTimeout(() => frame.finish({ retry: true, title: 'Classification Battle', subtitle: 'Every token in its NCERT home.' }), 700);
      }
    };

    function recordFor(id, ok) {
      const it = items.find(x => x.id === id);
      const section = ch.sortSets.find(s => s.title === set.title)?.s || ch.sections[0];
      const fid = factForSection(ch, section) ;
      // re-use the frame recorder so totals & SRS stay consistent
      if (!frame._recordedIds) frame._recordedIds = new Set();
      if (frame._recordedIds.has(id)) return;
      frame._recordedIds.add(id);
      frame.record(ok, { factId: fid, base: 8, difficulty: 2, silent: true });
    }

    // initial "answered" count is 0 — the frame's total is items.length
  }
};
