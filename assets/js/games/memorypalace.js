/* ============================================================
   16 · MEMORY PALACE BUILDER — order the list, build the room
   ============================================================ */
import { GameFrame } from './base.js';
import { esc, shuffle, sfx } from '../ui.js';
import { factForSection } from '../engine.js';
import { addXP } from '../core.js';

const PALACES = {
  ch1: [
    { title: 'Three steps of resource planning', items: ['Identification & inventory of resources', 'Planning structure with technology, skill and institutions', 'Matching with national development plans'] },
    { title: 'Land use: highest to lowest share', items: ['Net sown area (45.5%)', 'Forest (21.7%)', 'Land under non-agricultural use (7.9%)', 'Barren & unculturable waste (7.0%)', 'Current fallow (4.6%)'] },
    { title: 'Soil formation forces (NCERT order)', items: ['Relief', 'Parent rock', 'Climate', 'Vegetation', 'Other forms of life', 'Time'] }
  ],
  ch2: [
    { title: 'Species decline ladder (least to most severe)', items: ['Normal', 'Rare', 'Vulnerable', 'Endangered', 'Extinct'] },
    { title: 'Forest ownership by share (largest first)', items: ['Reserved forests', 'Protected forests', 'Unclassed forests'] },
    { title: 'Chapter timeline', items: ['Wildlife Protection Act (1972)', 'Project Tiger (1973)', 'First JFM resolution, Odisha (1988)'] }
  ],
  ch3: [
    { title: 'Dam types by height (low to high)', items: ['Low dam', 'Medium dam', 'High dam'] },
    { title: 'Rainwater harvesting chain', items: ['Capture rooftop rain', 'Discard the first spell', 'Filter and store in tanka', 'Recharge groundwater'] },
    { title: 'Chapter timeline', items: ['Damodar Valley Corporation (1948)', 'Narmada Bachao Andolan (against Sardar Sarovar)', 'Tamil Nadu makes rooftop harvesting compulsory'] }
  ],
  ch4: [
    { title: 'Cropping calendar (as the year runs)', items: ['Kharif sowing (June–July)', 'Kharif harvest (Sept–Oct)', 'Rabi sowing (Oct–Dec)', 'Rabi harvest (April–June)', 'Zaid (short season)'] },
    { title: 'Revolutions', items: ['Green — foodgrains', 'White — milk', 'Blue — fish', 'Yellow — oilseeds'] },
    { title: 'Rice: conditions to yield', items: ['High temperature', 'High humidity', 'Rainfall above 100 cm', 'Alluvial soil', 'Transplanted paddy'] }
  ],
  ch5: [
    { title: 'Coal grades by carbon content (low to high)', items: ['Peat', 'Lignite', 'Bituminous', 'Anthracite'] },
    { title: 'Iron ore by iron content (high to low)', items: ['Magnetite (up to 70%)', 'Haematite (50–60%)', 'Limonite', 'Siderite'] },
    { title: 'Iron ore belts (north-east to south-west)', items: ['Odisha–Jharkhand belt', 'Durg–Bastar–Chandrapur belt', 'Ballari–Chitradurga–Chikmagalur–Tumakuru belt', 'Maharashtra–Goa belt'] }
  ],
  ch6: [
    { title: 'Textile value chain', items: ['Fibre', 'Yarn', 'Fabric', 'Garment', 'Retail'] },
    { title: 'Steel plant inputs', items: ['Iron ore', 'Coking coal', 'Limestone', 'Dolomite', 'Manganese'] },
    { title: 'Industrial pollution categories', items: ['Air', 'Water', 'Land', 'Noise'] }
  ],
  ch7: [
    { title: 'Corridor lengths (shortest to longest)', items: ['NW3 West Coast Canal (205 km)', 'NW2 Brahmaputra (891 km)', 'NW1 Ganga (1,620 km)', 'East–West corridor (3,300 km)', 'North–South corridor (4,000 km)', 'Golden Quadrilateral (5,846 km)'] },
    { title: 'Golden Quadrilateral, clockwise from Delhi', items: ['Delhi', 'Kolkata', 'Chennai', 'Mumbai'] },
    { title: 'Pipeline economics', items: ['High initial laying cost', 'Minimal running cost', 'No trans-shipment losses', 'No delays'] }
  ]
};

export default {
  id: 'palace',
  name: 'Memory Palace Builder',
  emoji: '🏛️',
  tag: 'Recall',
  blurb: 'Build a room where the list lives forever. Tap the items in the correct NCERT order.',
  count: 3,
  available: ch => !!PALACES[ch.id],

  start(ctx) {
    const ch = ctx.chapter;
    const rooms = shuffle(PALACES[ch.id] || []).slice(0, 3);
    const frame = new GameFrame({ ctx, id: 'palace', title: 'Memory Palace Builder', emoji: '🏛️', total: rooms.length });
    let r = 0, totalXP = 0;

    const render = () => {
      if (r >= rooms.length) return finish();
      const room = rooms[r];
      const correct = room.items;
      const pool = shuffle(correct);
      const placed = [];
      let failures = 0;
      frame.setProgress(r);

      frame.body(`
        <div class="qcard">
          <div class="qtag">ROOM ${r + 1} · ${esc(ch.title)}</div>
          <div class="qtext small">${esc(room.title)}</div>
          <div class="qhint">Tap items in the correct order. A wrong tap shakes the room and costs XP.</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(66px,1fr));gap:8px;margin:18px 0" data-slots>
            ${correct.map((_, k) => `<div class="bin" style="min-height:74px;display:grid;place-items:center;padding:8px" data-slot="${k}">
              <span class="muted" style="font-size:20px;font-family:var(--display)">${k + 1}</span>
            </div>`).join('')}
          </div>
          <div class="token-pool" data-pool style="min-height:70px">
            ${pool.map(t => `<button class="token" data-t="${esc(t)}">${esc(t)}</button>`).join('')}
          </div>
          <div class="row" style="margin-top:12px">
            <button class="btn sm" data-hint>💡 Reveal first item (−4 XP)</button>
            <span class="pill amber" data-status>Room stability: 100%</span>
          </div>
        </div>
        <div data-fb></div>`);

      const poolEl = frame.q('[data-pool]');
      const statusEl = frame.q('[data-status]');

      poolEl.querySelectorAll('[data-t]').forEach(btn => {
        btn.onclick = ev => {
          const val = btn.dataset.t;
          const expected = correct[placed.length];
          if (val === expected) {
            placed.push(val);
            const slot = frame.q(`[data-slot="${placed.length - 1}"]`);
            slot.innerHTML = `<div style="font-size:11.5px;text-align:center;color:var(--lime)">${esc(val)}</div>`;
            slot.style.borderColor = 'var(--green)';
            slot.style.background = 'rgba(61,220,151,.1)';
            btn.remove();
            sfx.good();
            addXP(8); totalXP += 8;
            const xp = 8;
            frame.floatXP(xp, ev);
            if (placed.length === correct.length) {
              sfx.great();
              frame.record(true, { factId: factForSection(ch, ch.sections[0]), base: 18, difficulty: 3 });
              const fb = frame.q('[data-fb]');
              fb.innerHTML = frame.feedbackHTML({
                ok: true, head: 'Room complete. You just built a permanent memory hook.',
                body: `<b>${esc(room.title)}:</b><br>${correct.map((c, k) => `${k + 1}. ${esc(c)}`).join('<br>')}`,
                ref: `Ch ${ch.n}`
              }) + `<div class="btn-row"><button class="btn primary" data-next>Next room →</button></div>`;
              fb.querySelector('[data-next]').onclick = () => { r++; render(); };
            }
          } else {
            failures++;
            btn.classList.add('bad');
            setTimeout(() => btn.classList.remove('bad'), 420);
            statusEl.textContent = `Room stability: ${Math.max(20, 100 - failures * 15)}%`;
            statusEl.className = `pill ${failures > 2 ? 'red' : 'amber'}`;
            sfx.bad();
            btn.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-6px)' }, { transform: 'translateX(6px)' }, { transform: 'translateX(0)' }], { duration: 300 });
            const fb = frame.q('[data-fb]');
            fb.innerHTML = frame.feedbackHTML({
              ok: false,
              head: failures > 2 ? 'The room is crumbling. Slow down and think.' : 'Wrong order — that item belongs later (or earlier).',
              body: `You have placed ${placed.length} of ${correct.length}. The next item must start with “${esc(correct[placed.length].slice(0, 18))}…”.`,
              ref: `Ch ${ch.n}`
            });
          }
        };
      });

      frame.q('[data-hint]').onclick = () => {
        const first = correct[0];
        const btn = poolEl.querySelector(`[data-t="${CSS.escape(first)}"]`);
        if (btn) { btn.style.outline = '2px solid var(--lime)'; }
        frame.q('[data-hint]').disabled = true;
        addXP(-4);
        frame.floatXP(-4);
      };
    };

    function finish() {
      frame.finish({ retry: true, title: 'Memory Palace Builder', subtitle: 'Three rooms built. Walk through them tonight.' });
    }
    render();
  }
};
