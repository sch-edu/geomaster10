/* ============================================================
   02 · MAP BLITZ ARENA (and the Lifelines map variant)
   ============================================================ */
import { GameFrame } from './base.js';
import { indiaSVG, STATE_DOTS } from '../map.js';
import { esc, shuffle, sfx, pct } from '../ui.js';
import { factForSection } from '../engine.js';
import { recordAnswer, addXP } from '../core.js';

export function buildMapGame(opts = {}) {
  const {
    id = 'map', name = 'Map Blitz Arena', emoji = '🗺️', rounds = 8,
    catFilter = null, blurb = 'Blank India. Pins appear. You click. Board exam reflexes, built.'
  } = opts;

  return {
    id, name, emoji, tag: 'Map', blurb, count: rounds,
    available: ch => (ch.mapItems || []).length >= 6,

    start(ctx) {
      const ch = ctx.chapter;
      let pool = (ch.mapItems || []).filter(m => !catFilter || catFilter.includes(m.cat));
      if (pool.length < 6) pool = ch.mapItems;
      const set = shuffle(pool).slice(0, Math.min(rounds, pool.length));
      const frame = new GameFrame({ ctx, id, title: name, emoji, total: set.length });
      let i = 0, hits = 0;

      const render = () => {
        if (i >= set.length) return finish();
        const t = set[i];
        const findMode = i % 2 === 0;
        frame._modeLocked = false;
        frame.setProgress(i);

        const pins = set.map((m, k) => ({
          name: m.name, lat: m.lat, lon: m.lon, id: k,
          cls: findMode ? '' : (k === i ? 'target' : ''),
          label: '', halo: !findMode && k === i
        }));

        const opts = shuffle(set.map(m => m.name).filter(n => n !== t.name)).slice(0, 3);
        const choices = shuffle([t.name, ...opts]);

        frame.body(`
          <div class="qcard" style="padding:16px">
            <div class="between" style="margin-bottom:8px">
              <div>
                <div class="qtag" style="margin:0">${findMode ? 'FIND IT' : 'NAME IT'} · ROUND ${i + 1}/${set.length}</div>
                <div class="qtext small" style="margin:6px 0 0">${findMode
                  ? `Where is <span style="color:var(--amber)">${esc(t.name)}</span>? Click its pin.`
                  : `Which place is glowing gold?`}</div>
              </div>
              <span class="pill ${findMode ? 'amber' : 'cyan'}">${findMode ? '🎯 locator' : '🏷️ identifier'}</span>
            </div>
            <div class="map-wrap">
              ${indiaSVG({ pins, showLabels: false, legend: false })}
              <div style="position:absolute;left:10px;top:8px;font-size:10px;color:#6d80a8">simplified outline · pins not to scale</div>
            </div>
            ${findMode ? '' : `<div class="options" style="margin-top:12px">
              ${choices.map((c, k) => `<button class="opt" data-c="${k}"><span class="key">${'ABCD'[k]}</span><span>${esc(c)}</span></button>`).join('')}
            </div>`}
            <div class="row" style="margin-top:10px">
              <span class="pill cyan">🏆 ${hits}/${i} hit</span>
              <span class="pill">${esc(ch.mapCats?.[t.cat]?.label || t.cat)}</span>
              <button class="pill" data-states style="cursor:pointer">👁 toggle state names</button>
            </div>
          </div>
          <div data-fb></div>`);

        let stateOn = false;
        frame.q('[data-states]').onclick = e => {
          stateOn = !stateOn;
          e.target.classList.toggle('lime', stateOn);
          const svg = frame.q('.map-svg');
          if (!svg) return;
          let layer = svg.querySelector('.statelayer');
          if (stateOn) {
            if (!layer) {
              layer = document.createElementNS('http://www.w3.org/2000/svg', 'g');
              layer.setAttribute('class', 'statelayer');
              const mod = STATE_DOTS;
              layer.innerHTML = mod.map(s => {
                const x = (s.lon - 67.2) * 20, y = (37.6 - s.lat) * 20;
                return `<text x="${x}" y="${y}" text-anchor="middle" font-size="8" fill="#5f7398" font-family="sans-serif">${s.name}</text>`;
              }).join('');
              svg.appendChild(layer);
            }
          } else layer?.remove();
        };

        const done = (ok, chosenName, ev) => {
          const fid = factForSection(ch, ch.sections[0]);
          frame.record(ok, { factId: fid, base: 18, difficulty: 3, mapPin: true });
          if (ok) { hits++; sfx.good(); } else sfx.bad();

          // reveal all labels
          const svg = frame.q('.map-svg');
          svg.querySelectorAll('[data-pin]').forEach(g => {
            const k = +g.dataset.id;
            if (k === i) { g.classList.add('correct'); g.querySelector('.dot')?.setAttribute('r', 7); }
          });

          const fb = frame.q('[data-fb]');
          if (ok) {
            fb.innerHTML = frame.feedbackHTML({
              ok: true,
              head: 'Coordinates locked. That is a board-exam 3-marker in your pocket.',
              body: `<b>${esc(t.name)}</b> — ${esc(t.why)}`,
              ref: `Ch ${ch.n} · map work`
            }) + `<div class="btn-row"><button class="btn primary" data-next>Next location →</button></div>`;
            fb.querySelector('[data-next]').onclick = () => { i++; render(); };
          } else {
            fb.innerHTML = frame.feedbackHTML({
              ok: false,
              head: chosenName ? `You clicked ${esc(chosenName)}. Not it.` : 'Missed the map. Classic.',
              body: `The gold pin was <b>${esc(t.name)}</b>. ${esc(t.why)}<br><span class="muted">Hit <b>I found it</b> below to lock the location in — no skipping the map.</span>`,
              ref: `Ch ${ch.n} · map work`
            }) + `<div class="btn-row"><button class="btn primary" data-fixpin>I found it — fix my memory</button><button class="btn ghost" data-skip>Skip</button></div>`;
            // highlight target
            svg.querySelectorAll('[data-pin]').forEach(g => { if (+g.dataset.id === i) g.classList.add('target'); });
            fb.querySelector('[data-fixpin]').onclick = () => {
              recordAnswer(fid, true);
              addXP(2);
              const lbl = svg.querySelector(`[data-pin="${i}"]`);
              if (lbl) {
                const { x, y } = { x: 0, y: 0 };
                lbl.classList.remove('target');
                const txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                txt.setAttribute('text-anchor', 'middle'); txt.setAttribute('y', '-10');
                txt.setAttribute('font-size', '9'); txt.setAttribute('fill', '#b8ff5c');
                txt.textContent = t.name;
                lbl.appendChild(txt);
              }
              fb.innerHTML = frame.feedbackHTML({ ok: true, head: 'Fixed. Go again.', body: `<b>${esc(t.name)}</b> — ${esc(t.why)}`, ref: `Ch ${ch.n} · map work` })
                + `<div class="btn-row"><button class="btn primary" data-next>Next location →</button></div>`;
              fb.querySelector('[data-next]').onclick = () => { i++; render(); };
            };
            fb.querySelector('[data-skip]').onclick = () => { i++; render(); };
          }
        };

        // pin clicks
        frame.bodyEl.querySelectorAll('[data-pin]').forEach(g => {
          g.addEventListener('click', ev => {
            if (!findMode) return;
            const k = +g.dataset.id;
            const ok = k === i;
            g.classList.add(ok ? 'correct' : 'wrong');
            if (!ok) g.classList.add('dim');
            done(ok, ok ? t.name : set[k].name, ev);
            frame.bodyEl.querySelectorAll('[data-pin]').forEach(x => x.style.pointerEvents = 'none');
          });
        });

        // name-mode choices
        frame.bodyEl.querySelectorAll('[data-c]').forEach(b => {
          b.addEventListener('click', ev => {
            if (frame._modeLocked) return;
            frame._modeLocked = true;
            const k = +b.dataset.c;
            const ok = choices[k] === t.name;
            frame.bodyEl.querySelectorAll('[data-c]').forEach(x => {
              x.classList.add('locked');
              if (x.textContent.includes(t.name)) x.classList.add('correct');
              else if (x === b) x.classList.add('wrong');
            });
            done(ok, choices[k], ev);
          });
        });
      };

      function finish() {
        const p = pct(hits, set.length);
        frame.finish({
          retry: true,
          title: name,
          subtitle: p >= 90 ? 'Certified cartographer.' : p >= 60 ? 'Map is forming. Keep drilling.' : 'Map blitz again — this is where 3 marks live.'
        });
      }

      render();
    }
  };
}

const mapBlitz = buildMapGame({});
export default mapBlitz;
