/* ============================================================
   GeoQuest map engine — simplified India outline + lat/lon pins
   Equirectangular projection, viewBox 0 0 600 660
   ============================================================ */
export const W = 600, H = 660;
export const project = (lat, lon) => ({ x: +( (lon - 67.2) * 20 ).toFixed(1), y: +( (37.6 - lat) * 20 ).toFixed(1) });

/* [lat, lon] mainland outline, clockwise from Kashmir */
const OUTLINE = [
  [34.6,73.9],[35.5,74.6],[35.9,76.0],[35.5,77.8],[34.8,78.6],[33.5,79.2],[32.0,79.0],[31.0,79.0],
  [30.4,81.0],[30.4,82.5],[30.0,83.5],[29.0,84.2],[28.4,85.2],[28.0,86.2],[27.9,87.0],[27.6,88.0],
  [27.2,88.9],[27.3,89.6],[28.0,90.6],[28.1,91.7],[27.9,92.5],[28.2,93.8],[28.6,95.2],[28.2,96.3],
  [27.8,97.2],[26.9,96.9],[26.0,96.0],[25.4,95.2],[24.3,94.4],[23.7,93.5],[23.0,93.2],[22.5,92.9],
  [22.0,92.4],[21.8,91.5],[22.3,90.8],[21.8,89.9],[21.6,89.0],[21.9,88.0],[21.5,87.0],[20.9,86.5],
  [20.2,86.9],[19.6,85.9],[18.9,85.0],[18.0,84.0],[17.2,82.9],[16.5,82.2],[16.0,81.3],[15.4,80.9],
  [14.5,80.2],[13.7,80.3],[12.9,80.2],[12.0,79.9],[11.2,79.8],[10.3,79.4],[9.6,79.1],[8.9,78.2],
  [8.3,77.9],[8.08,77.55],[8.4,77.0],[9.0,76.5],[9.8,76.2],[10.8,75.9],[11.8,75.4],[12.8,74.8],
  [13.8,74.6],[14.8,74.1],[15.6,73.8],[16.6,73.4],[17.8,73.1],[18.9,72.8],[19.6,72.7],[20.4,72.8],
  [21.0,72.6],[21.4,72.2],[21.6,71.5],[21.1,70.9],[20.9,70.3],[21.2,69.6],[22.0,69.1],[22.6,68.9],
  [23.2,68.5],[23.9,68.4],[24.4,68.9],[24.2,70.0],[24.6,71.0],[25.2,70.9],[25.8,70.5],[26.6,70.2],
  [27.3,70.5],[27.9,71.2],[28.4,72.2],[29.2,73.2],[29.9,73.9],[30.6,74.4],[31.6,74.6],[32.6,74.6],
  [33.5,74.3],[34.6,73.9]
];

const pathFrom = pts => 'M' + pts.map(([la,lo]) => { const p = project(la,lo); return `${p.x},${p.y}`; }).join(' L') + ' Z';

export const INDIA_PATH = pathFrom(OUTLINE);
/* Andaman & Nicobar */
export const ISLANDS = [
  pathFrom([[13.6,92.9],[13.0,93.0],[12.4,92.9],[11.6,92.6],[11.0,92.6],[11.7,92.8],[12.5,93.1],[13.2,93.2]]),
  pathFrom([[9.2,92.8],[8.6,93.1],[7.2,93.6],[6.7,93.8],[7.4,93.9],[8.8,93.5],[9.3,93.1]]),
  pathFrom([[10.5,72.6],[10.1,72.9],[9.7,73.0],[10.0,72.6]])
];

const graticules = () => {
  let s = '';
  for (const lat of [10,15,20,25,30,35]) {
    const y = project(lat, 67.2).y;
    s += `<line class="graticule" x1="0" y1="${y}" x2="${W}" y2="${y}"/>`;
  }
  for (const lon of [70,75,80,85,90,95]) {
    const x = project(20, lon).x;
    s += `<line class="graticule" x1="${x}" y1="0" x2="${x}" y2="${H}"/>`;
  }
  return s;
};

/**
 * Renders India as an SVG string.
 * pins: [{name, lat, lon, id, cls, label, showLabel}]
 */
export function indiaSVG({ pins = [], showLabels = false, legend = true } = {}) {
  const pinMarkup = pins.map((p, i) => {
    const { x, y } = project(p.lat, p.lon);
    const cls = ['pin', p.cls || ''].join(' ').trim();
    const label = p.label || (showLabels ? p.name : '');
    const anchor = x > W - 90 ? 'end' : (x < 70 ? 'start' : 'middle');
    const dx = anchor === 'end' ? -10 : anchor === 'start' ? 10 : 0;
    return `<g class="${cls}" data-pin="${i}" data-id="${p.id ?? i}" transform="translate(${x},${y})" role="button" tabindex="0" aria-label="${esc(p.name)}">
      ${p.halo ? `<circle class="halo" r="13" fill="rgba(255,196,77,.18)"/>` : ''}
      <circle class="dot" r="5.5"/>
      ${label ? `<text x="${dx}" y="${y > H - 40 ? -10 : -10}" text-anchor="${anchor}">${esc(label)}</text>` : ''}
    </g>`;
  }).join('');

  return `<svg class="map-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Map of India">
    <defs>
      <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#1b2c4d"/><stop offset="100%" stop-color="#122038"/>
      </linearGradient>
      <filter id="glow"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    ${graticules()}
    <path class="land" d="${INDIA_PATH}" fill="url(#landGrad)"/>
    ${ISLANDS.map(d => `<path class="land" d="${d}" fill="url(#landGrad)" stroke-width="1.1"/>`).join('')}
    ${pinMarkup}
  </svg>${legend ? `<div class="map-legend"><span class="pill cyan">Click a glowing pin</span><span class="pill">Lat/long accurate · simplified outline</span></div>` : ''}`;
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' }[c]));

/* Rough state label anchors for orientation (optional layer) */
export const STATE_DOTS = [
  { name:'Rajasthan', lat:26.6, lon:73.8 },{ name:'Gujarat', lat:22.3, lon:71.6 },
  { name:'Maharashtra', lat:19.4, lon:76.0 },{ name:'MP', lat:23.5, lon:78.5 },
  { name:'UP', lat:27.0, lon:80.5 },{ name:'Bihar', lat:25.6, lon:85.9 },
  { name:'WB', lat:23.4, lon:87.8 },{ name:'Odisha', lat:20.3, lon:84.5 },
  { name:'Chhattisgarh', lat:21.3, lon:82.1 },{ name:'Jharkhand', lat:23.6, lon:85.3 },
  { name:'Karnataka', lat:14.7, lon:76.3 },{ name:'TN', lat:10.9, lon:78.4 },
  { name:'Kerala', lat:10.0, lon:76.6 },{ name:'Telangana', lat:17.7, lon:79.0 },
  { name:'AP', lat:15.5, lon:79.9 },{ name:'Punjab', lat:31.0, lon:75.4 },
  { name:'Haryana', lat:29.2, lon:76.3 },{ name:'Assam', lat:26.4, lon:92.8 },
  { name:'J&K', lat:33.4, lon:75.2 }
];
