/* ============================================================
   CHAPTER 7 — Lifelines of National Economy
   ============================================================ */
const S = {
  roads: 'Roadways',
  rail: 'Railways',
  pipe: 'Pipelines',
  water: 'Waterways & Sea Ports',
  air: 'Airways',
  comm: 'Communication',
  trade: 'Foreign Trade & Tourism'
};

export default {
  id: 'ch7',
  n: 7,
  title: 'Lifelines of National Economy',
  tag: 'The Nerve Centre',
  emoji: '🚢',
  hue: 216,
  blurb: 'Highways, corridors, ports and trade — the map-work chapter with the most marks.',
  sections: Object.values(S),

  facts: [
    { t: 'Transport, communication and trade are the lifelines of a nation’s economy.', s: S.roads, k: 'lifelines triad' },
    { t: 'Modern means of transport and communication are called the lifelines of the nation’s economy.', s: S.roads, k: 'lifelines definition' },
    { t: 'India has one of the largest road networks in the world.', s: S.roads, k: 'largest road networks' },
    { t: 'Roads can traverse hilly terrain, cross rivers and are cheaper than railways for short distances.', s: S.roads, k: 'road advantages' },
    { t: 'The Golden Quadrilateral is a 5,846 km long road connecting Delhi, Mumbai, Chennai and Kolkata.', s: S.roads, k: 'Golden Quadrilateral 5846' },
    { t: 'The North–South corridor is 4,000 km long and connects Srinagar in Jammu and Kashmir to Kanniyakumari in Tamil Nadu.', s: S.roads, k: 'NS corridor 4000 Srinagar Kanniyakumari' },
    { t: 'The East–West corridor is 3,300 km long and connects Silchar in Assam to Porbandar in Gujarat.', s: S.roads, k: 'EW corridor 3300 Silchar Porbandar' },
    { t: 'National Highways are the primary road systems that connect state capitals, major cities and ports.', s: S.roads, k: 'national highways' },
    { t: 'National Highways constitute only about 2 per cent of the total road length but carry about 40 per cent of the road traffic.', s: S.roads, k: '2 per cent 40 per cent' },
    { t: 'The National Highways Authority of India (NHAI) was set up in 1988 to develop, maintain and operate the national highways.', s: S.roads, k: 'NHAI 1988' },
    { t: 'The Border Roads Organisation (BRO) was established in 1960 for the development of roads of strategic importance in the northern and north-eastern border areas.', s: S.roads, k: 'BRO 1960 strategic' },
    { t: 'Roads are classified as Golden Quadrilateral and border roads, national highways, state highways, district roads and other roads.', s: S.roads, k: 'road classification' },
    { t: 'Railways are the principal mode of transportation for freight and passengers in India.', s: S.rail, k: 'railways principal mode' },
    { t: 'Indian Railways is one of the largest public sector undertakings and railway networks in the world.', s: S.rail, k: 'largest PSU' },
    { t: 'The distribution pattern of the railway network is largely influenced by physiographic, economic and administrative factors.', s: S.rail, k: 'railway distribution factors' },
    { t: 'The northern plains provided the most favourable conditions for railway growth — vast level land, high population density and rich agricultural resources.', s: S.rail, k: 'northern plains favourable' },
    { t: 'A large number of rivers requiring bridges posed obstacles to railway construction in the northern plains.', s: S.rail, k: 'rivers bridges obstacles' },
    { t: 'In the hilly terrain of the peninsular region, railway tracks are laid through low hills, gaps or tunnels.', s: S.rail, k: 'hilly terrain gaps tunnels' },
    { t: 'The Himalayan mountains hindered the construction of railway lines.', s: S.rail, k: 'Himalaya hindered' },
    { t: 'The Konkan Railway is 760 km long and connects Roha in Maharashtra to Mangaluru in Karnataka.', s: S.rail, k: 'Konkan 760 Roha Mangaluru' },
    { t: 'Pipeline transport carries crude oil, petroleum products and natural gas, and solids when converted into slurry.', s: S.pipe, k: 'pipeline slurry' },
    { t: 'The initial cost of laying pipelines is high, but subsequent running costs are minimal.', s: S.pipe, k: 'pipeline initial cost high' },
    { t: 'Pipelines rule out trans-shipment losses or delays.', s: S.pipe, k: 'trans-shipment losses' },
    { t: 'One pipeline network runs from the oil fields of upper Assam to Kanpur in Uttar Pradesh.', s: S.pipe, k: 'Assam Kanpur pipeline' },
    { t: 'Another pipeline runs from Salaya in Gujarat to Jalandhar in Punjab.', s: S.pipe, k: 'Salaya Jalandhar' },
    { t: 'The Hazira–Vijaipur–Jagdishpur (HVJ) gas pipeline carries natural gas from Hazira in Gujarat to Jagdishpur in Uttar Pradesh.', s: S.pipe, k: 'HVJ Hazira Jagdishpur' },
    { t: 'Waterways are the cheapest means of transport and are most suitable for carrying heavy and bulky goods.', s: S.water, k: 'waterways cheapest bulky' },
    { t: 'Waterways are fuel-efficient and environment friendly.', s: S.water, k: 'waterways fuel efficient' },
    { t: 'National Waterway 1 is the Ganga waterway from Prayagraj to Haldia, 1,620 km long.', s: S.water, k: 'NW1 Ganga 1620' },
    { t: 'National Waterway 2 is the Brahmaputra waterway from Sadiya to Dhubri, 891 km long.', s: S.water, k: 'NW2 Brahmaputra 891' },
    { t: 'National Waterway 3 is the West Coast Canal from Kottapuram to Kollam, 205 km long.', s: S.water, k: 'NW3 West Coast Canal 205' },
    { t: 'The Inland Waterways Authority of India (IWAI) develops and regulates inland waterways.', s: S.water, k: 'IWAI' },
    { t: 'India has 12 major ports and about 200 notified non-major ports.', s: S.water, k: '12 major ports' },
    { t: 'Kandla in Gujarat is a tidal port.', s: S.water, k: 'Kandla tidal' },
    { t: 'Jawaharlal Nehru Port (Nhava Sheva) is the largest container port of India.', s: S.water, k: 'JNPT container' },
    { t: 'Visakhapatnam is the deepest landlocked port in India.', s: S.water, k: 'Visakhapatnam deepest' },
    { t: 'Mormagao port is used for the export of iron ore.', s: S.water, k: 'Mormagao iron ore' },
    { t: 'Kolkata is a riverine port on the Hugli.', s: S.water, k: 'Kolkata riverine' },
    { t: 'Other major ports include Mumbai, New Mangalore, Kochi, Tuticorin, Chennai, Ennore and Paradip.', s: S.water, k: 'major ports list' },
    { t: 'Air transport is the fastest and most comfortable mode of transport.', s: S.air, k: 'air fastest' },
    { t: 'Air travel is expensive, so it is preferred for long distances and for carrying high-value, light goods.', s: S.air, k: 'air expensive high value' },
    { t: 'Pawan Hans Helicopters Ltd provides helicopter services to inaccessible areas and the oil and gas sector.', s: S.air, k: 'Pawan Hans helicopter' },
    { t: 'Major airports include Delhi, Mumbai, Chennai, Kolkata, Bengaluru and Hyderabad.', s: S.air, k: 'major airports' },
    { t: 'India Post has the largest postal network in the world.', s: S.comm, k: 'largest postal network' },
    { t: 'The PIN code is a six-digit code that helps in sorting and delivering mail.', s: S.comm, k: 'PIN six digit' },
    { t: 'All India Radio (Akashvani) and Doordarshan are the public service broadcasters of India.', s: S.comm, k: 'Akashvani Doordarshan' },
    { t: 'India has one of the largest telecom networks in Asia.', s: S.comm, k: 'telecom Asia' },
    { t: 'The Indian film industry is the largest in the world in terms of the number of films produced.', s: S.comm, k: 'film industry largest' },
    { t: 'Trade is the exchange of goods and services between people, states and countries.', s: S.trade, k: 'trade definition' },
    { t: 'The balance of trade is favourable when the value of exports exceeds the value of imports.', s: S.trade, k: 'favourable balance exports' },
    { t: 'The balance of trade is unfavourable when the value of imports exceeds the value of exports.', s: S.trade, k: 'unfavourable imports' },
    { t: 'India’s major exports include gems and jewellery, readymade garments, chemicals and agricultural products.', s: S.trade, k: 'exports list' },
    { t: 'India’s major imports include petroleum, machinery and fertilisers.', s: S.trade, k: 'imports list' },
    { t: 'India’s main trading partners include the USA, China, UAE, Saudi Arabia, Hong Kong, Iraq and Singapore.', s: S.trade, k: 'trading partners' },
    { t: 'Tourism is an important part of the economy, and more than 15 million people are directly engaged in the tourism industry.', s: S.trade, k: 'tourism 15 million' },
    { t: 'Tourism promotes national integration and supports handicrafts and cultural pursuits.', s: S.trade, k: 'tourism integration culture' },
    { t: 'Foreign tourists visit India for heritage, adventure, cultural, medical and eco-tourism.', s: S.trade, k: 'tourism types' }
  ],

  paragraphs: [
    { s: S.roads, text: [
      'The Golden Quadrilateral is a 5,846 km long road connecting Delhi, Mumbai, Chennai and Kolkata.',
      'The North–South corridor is 4,000 km long and connects Srinagar to Kanniyakumari.',
      'The East–West corridor is 3,300 km long and connects Silchar to Porbandar.',
      'National Highways constitute only about 2 per cent of the total road length but carry about 40 per cent of the road traffic.'
    ], q: 'Snipe the sentence with the 5,846 km figure.', a: 0 },

    { s: S.pipe, text: [
      'Pipeline transport carries crude oil, petroleum products and natural gas.',
      'The initial cost of laying pipelines is high, but subsequent running costs are minimal.',
      'Pipelines rule out trans-shipment losses or delays.',
      'The Hazira–Vijaipur–Jagdishpur pipeline carries natural gas from Gujarat to Uttar Pradesh.'
    ], q: 'Snipe the sentence that states the economic logic of pipelines.', a: 1 },

    { s: S.water, text: [
      'Waterways are the cheapest means of transport.',
      'They are most suitable for carrying heavy and bulky goods.',
      'National Waterway 1 is the Ganga waterway from Prayagraj to Haldia, 1,620 km long.',
      'The Inland Waterways Authority of India develops and regulates inland waterways.'
    ], q: 'Snipe the sentence naming the length and terminals of NW1.', a: 2 },

    { s: S.rail, text: [
      'Railways are the principal mode of transportation for freight and passengers in India.',
      'The northern plains provided the most favourable conditions for railway growth.',
      'The Himalayan mountains hindered the construction of railway lines.',
      'The Konkan Railway is 760 km long and connects Roha to Mangaluru.'
    ], q: 'Snipe the sentence giving the Konkan Railway’s length and terminals.', a: 3 },

    { s: S.trade, text: [
      'The balance of trade is favourable when the value of exports exceeds the value of imports.',
      'The balance of trade is unfavourable when imports exceed exports.',
      'India’s major imports include petroleum, machinery and fertilisers.'
    ], q: 'Snipe the sentence defining a FAVOURABLE balance of trade.', a: 0 }
  ],

  defs: [
    { term: 'Balance of trade', s: S.trade, correct: 'The difference between the value of a country’s exports and imports; favourable when exports exceed imports, unfavourable when imports exceed exports.', traps: [
      'The total value of a country’s exports in a year.',
      'The difference between government income and expenditure.',
      'The total amount of foreign currency held by a country.'
    ] },
    { term: 'Golden Quadrilateral', s: S.roads, correct: 'A 5,846 km road network connecting Delhi, Mumbai, Chennai and Kolkata.', traps: [
      'A 4,000 km corridor connecting Srinagar to Kanniyakumari.',
      'A 3,300 km corridor connecting Silchar to Porbandar.',
      'A railway network connecting the four metropolitan cities.'
    ] },
    { term: 'National Waterway 1', s: S.water, correct: 'The Ganga waterway from Prayagraj to Haldia, 1,620 km long.', traps: [
      'The Brahmaputra waterway from Sadiya to Dhubri, 891 km.',
      'The West Coast Canal from Kottapuram to Kollam, 205 km.',
      'The Godavari–Krishna waterway.'
    ] },
    { term: 'Tidal port', s: S.water, correct: 'A port where the water level depends on tides — Kandla in Gujarat is India’s tidal port.', traps: [
      'A port on a river, such as Kolkata.',
      'A port that never dries up, such as Mumbai.',
      'The deepest landlocked port, Visakhapatnam.'
    ] },
    { term: 'Pipelines', s: S.pipe, correct: 'A transport mode for crude oil, petroleum products, natural gas and solids as slurry; high initial cost but minimal running cost and no trans-shipment losses.', traps: [
      'A mode of transport used only for water supply in cities.',
      'The cheapest mode for carrying heavy and bulky goods over long distances.',
      'A network of roads connecting border areas.'
    ] },
    { term: 'Border Roads Organisation', s: S.roads, correct: 'An organisation established in 1960 to develop roads of strategic importance in the northern and north-eastern border areas.', traps: [
      'An authority set up in 1988 to operate national highways.',
      'A body that regulates inland waterways.',
      'An organisation that manages major ports.'
    ] },
    { term: 'PIN code', s: S.comm, correct: 'A six-digit code used by India Post to sort and deliver mail.', traps: [
      'A ten-digit mobile number used for banking.',
      'A code issued by NHAI for highway tolls.',
      'A four-digit postal code used only in metros.'
    ] },
    { term: 'Tourism', s: S.trade, correct: 'A service industry engaging more than 15 million people directly, promoting national integration and supporting handicrafts and culture.', traps: [
      'A primary activity involving the extraction of minerals.',
      'The export of readymade garments and gems.',
      'A manufacturing industry producing transport equipment.'
    ] }
  ],

  mcq: [
    { q: 'The Golden Quadrilateral connects:', o: ['Delhi, Mumbai, Chennai, Kolkata', 'Srinagar, Delhi, Kolkata, Kanniyakumari', 'Silchar, Porbandar, Delhi, Mumbai', 'Delhi, Jaipur, Ahmedabad, Pune'], a: 0, why: 'A 5,846 km network linking the four metros.', s: S.roads, d: 1 },
    { q: 'The North–South corridor runs from:', o: ['Silchar to Porbandar', 'Srinagar to Kanniyakumari', 'Delhi to Mumbai', 'Roha to Mangaluru'], a: 1, why: '4,000 km, Srinagar (J&K) to Kanniyakumari (TN).', s: S.roads, d: 1 },
    { q: 'The East–West corridor connects:', o: ['Silchar to Porbandar', 'Delhi to Kolkata', 'Mumbai to Chennai', 'Kandla to Kolkata'], a: 0, why: '3,300 km from Silchar (Assam) to Porbandar (Gujarat).', s: S.roads, d: 1 },
    { q: 'National Highways carry about what share of road traffic?', o: ['2 per cent', '10 per cent', '40 per cent', '80 per cent'], a: 2, why: 'They are only ~2% of road length but carry ~40% of traffic.', s: S.roads, d: 2 },
    { q: 'NHAI was set up in:', o: ['1948', '1960', '1988', '2000'], a: 2, why: '1988 — to develop, maintain and operate national highways. BRO was 1960.', s: S.roads, d: 2 },
    { q: 'Which organisation builds strategic roads in border areas?', o: ['NHAI', 'BRO', 'IWAI', 'STPI'], a: 1, why: 'Border Roads Organisation, established 1960.', s: S.roads, d: 1 },
    { q: 'The Konkan Railway connects:', o: ['Roha to Mangaluru', 'Mumbai to Goa only', 'Kottapuram to Kollam', 'Sadiya to Dhubri'], a: 0, why: '760 km from Roha (Maharashtra) to Mangaluru (Karnataka).', s: S.rail, d: 2 },
    { q: 'The northern plains were most favourable for railways because of:', o: ['Hilly terrain and sparse population', 'Level land, high population density and rich agriculture', 'Dense forests and heavy rainfall', 'Mineral deposits and ports'], a: 1, why: 'Vast level land, high population density and rich agricultural resources.', s: S.rail, d: 1 },
    { q: 'Pipelines are preferred because they:', o: ['Have low initial cost', 'Rule out trans-shipment losses and delays', 'Are the fastest mode', 'Carry only solids'], a: 1, why: 'High initial cost but minimal running cost and no trans-shipment losses or delays.', s: S.pipe, d: 2 },
    { q: 'The HVJ gas pipeline runs from:', o: ['Hazira to Jagdishpur', 'Salaya to Jalandhar', 'Assam to Kanpur', 'Kandla to Delhi'], a: 0, why: 'Hazira–Vijaipur–Jagdishpur; Salaya–Jalandhar is a petroleum pipeline.', s: S.pipe, d: 2 },
    { q: 'National Waterway 1 is on the:', o: ['Brahmaputra', 'Ganga', 'Godavari', 'Mahanadi'], a: 1, why: 'Ganga, Prayagraj to Haldia, 1,620 km.', s: S.water, d: 1 },
    { q: 'NW2 (Brahmaputra) runs between:', o: ['Sadiya and Dhubri', 'Prayagraj and Haldia', 'Kottapuram and Kollam', 'Roha and Mangaluru'], a: 0, why: '891 km from Sadiya to Dhubri.', s: S.water, d: 2 },
    { q: 'The largest container port of India is:', o: ['Mumbai', 'Jawaharlal Nehru Port (Nhava Sheva)', 'Kandla', 'Visakhapatnam'], a: 1, why: 'JNPT/Nhava Sheva handles the largest container traffic.', s: S.water, d: 2 },
    { q: 'Which port is a tidal port?', o: ['Kandla', 'Mumbai', 'Kochi', 'Chennai'], a: 0, why: 'Kandla in Gujarat is India’s tidal port; Mumbai is a natural harbour.', s: S.water, d: 2 },
    { q: 'The deepest landlocked port of India is:', o: ['Paradip', 'Visakhapatnam', 'Tuticorin', 'Ennore'], a: 1, why: 'Visakhapatnam; Mormagao exports iron ore.', s: S.water, d: 2 },
    { q: 'India Post has:', o: ['The largest postal network in the world', 'The second largest network', 'No rural presence', 'Only urban branches'], a: 0, why: 'The largest postal network in the world, using six-digit PIN codes.', s: S.comm, d: 1 },
    { q: 'A favourable balance of trade means:', o: ['Imports exceed exports', 'Exports exceed imports', 'Exports equal imports', 'No trade at all'], a: 1, why: 'Exports > imports = favourable; imports > exports = unfavourable.', s: S.trade, d: 1 },
    { q: 'How many people are directly engaged in India’s tourism industry?', o: ['1.5 million', '5 million', '15 million', '50 million'], a: 2, why: 'More than 15 million, and tourism supports handicrafts and culture.', s: S.trade, d: 2 }
  ],

  errors: [
    { stmt: 'The Golden Quadrilateral is 4,000 km long.', ok: false, fix: 'It is 5,846 km long, connecting Delhi, Mumbai, Chennai and Kolkata. The North–South corridor is 4,000 km.', s: S.roads },
    { stmt: 'The East–West corridor connects Srinagar to Kanniyakumari.', ok: false, fix: 'That is the North–South corridor. East–West is Silchar to Porbandar, 3,300 km.', s: S.roads },
    { stmt: 'National Highways form 40 per cent of road length.', ok: false, fix: 'They are only about 2 per cent of road length but carry about 40 per cent of traffic.', s: S.roads },
    { stmt: 'The Border Roads Organisation was set up in 1988.', ok: false, fix: 'BRO was set up in 1960. NHAI was set up in 1988.', s: S.roads },
    { stmt: 'Pipelines have very low initial cost.', ok: false, fix: 'Initial laying cost is HIGH; running costs are minimal and there are no trans-shipment losses.', s: S.pipe },
    { stmt: 'Waterways are the fastest means of transport.', ok: false, fix: 'Air is fastest. Waterways are the CHEAPEST and best for heavy, bulky goods.', s: S.water },
    { stmt: 'NW1 is the Brahmaputra waterway from Sadiya to Dhubri.', ok: false, fix: 'NW1 is the Ganga (Prayagraj–Haldia, 1,620 km). Sadiya–Dhubri is NW2, 891 km.', s: S.water },
    { stmt: 'Kandla is a natural harbour.', ok: false, fix: 'Kandla is a TIDAL port. Mumbai is the natural harbour; JNPT is the largest container port.', s: S.water },
    { stmt: 'An unfavourable balance of trade means exports exceed imports.', ok: false, fix: 'Unfavourable means IMPORTS exceed exports. Exports > imports is favourable.', s: S.trade },
    { stmt: 'India Post uses a four-digit PIN code.', ok: false, fix: 'The PIN code is six digits and helps sort and deliver mail.', s: S.comm },
    { stmt: 'The Indian film industry is the largest in the world by number of films produced.', ok: true, fix: 'Correct — a frequently asked fact in the communication section.', s: S.comm }
  ],

  sortSets: [
    { title: 'Sort the transport mode facts', s: S.roads, bins: [
      { name: 'Roadways', items: ['Golden Quadrilateral', 'NHAI 1988', 'BRO 1960', 'Door-to-door service'] },
      { name: 'Railways', items: ['Konkan Railway 760 km', 'Northern plains favourable', 'Principal mode for freight'] },
      { name: 'Pipelines', items: ['HVJ gas pipeline', 'Slurry transport', 'No trans-shipment losses'] },
      { name: 'Waterways', items: ['NW1 Ganga', 'Cheapest for bulky goods', 'IWAI'] },
      { name: 'Airways', items: ['Fastest mode', 'Pawan Hans', 'Expensive, high-value goods'] }
    ] },
    { title: 'Ports and their speciality', s: S.water, bins: [
      { name: 'Tidal', items: ['Kandla'] },
      { name: 'Largest container port', items: ['Jawaharlal Nehru Port'] },
      { name: 'Deepest landlocked', items: ['Visakhapatnam'] },
      { name: 'Iron ore export', items: ['Mormagao'] },
      { name: 'Riverine', items: ['Kolkata'] },
      { name: 'Natural harbour', items: ['Mumbai'] }
    ] },
    { title: 'Exports or imports?', s: S.trade, bins: [
      { name: 'Exports', items: ['Gems and jewellery', 'Readymade garments', 'Chemicals', 'Agricultural products'] },
      { name: 'Imports', items: ['Petroleum', 'Machinery', 'Fertilisers'] }
    ] }
  ],

  mapItems: [
    { name: 'Delhi — GQ node', lat: 28.6, lon: 77.2, cat: 'road', why: 'One of the four Golden Quadrilateral metros.' },
    { name: 'Mumbai — GQ node', lat: 19.1, lon: 72.9, cat: 'road', why: 'Golden Quadrilateral metro and major port.' },
    { name: 'Chennai — GQ node', lat: 13.1, lon: 80.2, cat: 'road', why: 'Golden Quadrilateral metro and major port.' },
    { name: 'Kolkata — GQ node', lat: 22.6, lon: 88.4, cat: 'road', why: 'Golden Quadrilateral metro and riverine port.' },
    { name: 'Srinagar — NS corridor', lat: 34.1, lon: 74.8, cat: 'road', why: 'Northern end of the 4,000 km North–South corridor.' },
    { name: 'Kanniyakumari — NS corridor', lat: 8.1, lon: 77.5, cat: 'road', why: 'Southern end of the North–South corridor.' },
    { name: 'Silchar — EW corridor', lat: 24.8, lon: 92.8, cat: 'road', why: 'Eastern end of the 3,300 km East–West corridor.' },
    { name: 'Porbandar — EW corridor', lat: 21.6, lon: 69.6, cat: 'road', why: 'Western end of the East–West corridor.' },
    { name: 'Kandla (Deendayal) — tidal port', lat: 23.0, lon: 70.2, cat: 'port', why: 'India’s tidal port, in Gujarat.' },
    { name: 'JNPT / Nhava Sheva', lat: 18.9, lon: 72.9, cat: 'port', why: 'Largest container port of India.' },
    { name: 'Mormagao — iron ore', lat: 15.4, lon: 73.8, cat: 'port', why: 'Goa’s port, used for iron ore export.' },
    { name: 'New Mangalore', lat: 12.9, lon: 74.8, cat: 'port', why: 'Major port of Karnataka.' },
    { name: 'Kochi', lat: 9.9, lon: 76.3, cat: 'port', why: 'Major port of Kerala.' },
    { name: 'Tuticorin', lat: 8.8, lon: 78.1, cat: 'port', why: 'Major port of Tamil Nadu.' },
    { name: 'Visakhapatnam', lat: 17.7, lon: 83.3, cat: 'port', why: 'Deepest landlocked port of India.' },
    { name: 'Paradip', lat: 20.3, lon: 86.6, cat: 'port', why: 'Major port of Odisha.' },
    { name: 'Haldia — NW1 terminal', lat: 22.1, lon: 88.1, cat: 'port', why: 'Eastern terminal of National Waterway 1 (Ganga).' },
    { name: 'Prayagraj — NW1 start', lat: 25.4, lon: 81.9, cat: 'water', why: 'Western start of NW1, 1,620 km to Haldia.' },
    { name: 'Sadiya — NW2', lat: 27.8, lon: 95.9, cat: 'water', why: 'Start of NW2 on the Brahmaputra, 891 km to Dhubri.' },
    { name: 'Dhubri — NW2', lat: 26.0, lon: 89.9, cat: 'water', why: 'End of NW2 on the Brahmaputra.' },
    { name: 'Bengaluru — airport', lat: 13.0, lon: 77.6, cat: 'air', why: 'Major airport and IT hub.' },
    { name: 'Hyderabad — airport', lat: 17.4, lon: 78.5, cat: 'air', why: 'Major airport and IT hub.' }
  ],
  mapCats: { road: { label: 'Corridors & metros', color: '#4ee7ff' }, port: { label: 'Ports', color: '#ffc44d' }, water: { label: 'National waterways', color: '#3ddc97' }, air: { label: 'Airports', color: '#ff5fa2' } },

  detective: [
    { name: 'Golden Quadrilateral', clues: ['I am 5,846 km long.', 'I connect Delhi, Mumbai, Chennai and Kolkata.', 'I am a road network.'], crops: '—', why: 'The Golden Quadrilateral is the most-asked highway fact.' },
    { name: 'Jawaharlal Nehru Port', clues: ['I lie near Mumbai.', 'I am also called Nhava Sheva.', 'I am the largest container port of India.'], crops: '—', why: 'JNPT/Nhava Sheva handles the biggest container traffic.' },
    { name: 'Konkan Railway', clues: ['I am 760 km long.', 'I connect Roha in Maharashtra to Mangaluru in Karnataka.', 'I am one of the biggest railway projects of recent times.'], crops: '—', why: 'Konkan Railway is the coastal railway marvel.' },
    { name: 'Kandla', clues: ['I am in Gujarat.', 'I am a tidal port.', 'My water level depends on the tides.'], crops: '—', why: 'Kandla (Deendayal) is India’s tidal port.' },
    { name: 'Hazira–Vijaipur–Jagdishpur', clues: ['I am a pipeline.', 'I carry natural gas.', 'I run from Gujarat to Uttar Pradesh.'], crops: '—', why: 'The HVJ pipeline is the classic gas pipeline example.' }
  ],

  longQ: [
    { q: 'Why are roads more suitable than railways in hilly terrain? Give three reasons.', marks: 3, s: S.roads, points: [
      { t: 'Roads can traverse hilly terrain with steep gradients and sharp turns.', kw: ['hilly', 'gradient', 'turns'] },
      { t: 'Roads can cross rivers and reach remote settlements not connected by rail.', kw: ['rivers', 'remote', 'settlements'] },
      { t: 'Roads are cheaper to construct for short distances and provide door-to-door service.', kw: ['cheaper', 'door-to-door', 'short distances'] }
    ], model: '1. Roads can negotiate steep gradients, sharp turns and undulating hilly terrain where railway tracks would require costly tunnels and bridges.\n2. Roads can cross rivers and reach remote settlements, providing connectivity where rail lines do not exist.\n3. Roads are cheaper to build for short distances and offer door-to-door service.' },
    { q: 'Explain the importance of pipelines as a mode of transport.', marks: 3, s: S.pipe, points: [
      { t: 'They carry crude oil, petroleum products and natural gas, and solids as slurry.', kw: ['crude oil', 'natural gas', 'slurry'] },
      { t: 'Initial cost is high but running costs are minimal.', kw: ['initial', 'running'] },
      { t: 'They rule out trans-shipment losses and delays; HVJ, Salaya–Jalandhar and Assam–Kanpur are examples.', kw: ['trans-shipment', 'HVJ', 'Salaya'] }
    ], model: 'Pipelines transport crude oil, petroleum products and natural gas, and can carry solids converted into slurry. Their initial laying cost is high, but running costs are minimal, and they rule out trans-shipment losses and delays. Examples: upper Assam to Kanpur, Salaya (Gujarat) to Jalandhar, and the Hazira–Vijaipur–Jagdishpur gas pipeline.' },
    { q: 'Describe the Golden Quadrilateral and the two corridors with their lengths.', marks: 3, s: S.roads, points: [
      { t: 'Golden Quadrilateral — 5,846 km, Delhi, Mumbai, Chennai, Kolkata.', kw: ['5846', 'Delhi', 'Mumbai', 'Chennai', 'Kolkata'] },
      { t: 'North–South corridor — 4,000 km, Srinagar to Kanniyakumari.', kw: ['4000', 'Srinagar', 'Kanniyakumari'] },
      { t: 'East–West corridor — 3,300 km, Silchar to Porbandar.', kw: ['3300', 'Silchar', 'Porbandar'] }
    ], model: 'Golden Quadrilateral: 5,846 km, connecting Delhi, Mumbai, Chennai and Kolkata.\nNorth–South corridor: 4,000 km, connecting Srinagar (J&K) to Kanniyakumari (TN).\nEast–West corridor: 3,300 km, connecting Silchar (Assam) to Porbandar (Gujarat).' },
    { q: '“Waterways are the cheapest means of transport.” Justify with three points and name two national waterways.', marks: 5, s: S.water, points: [
      { t: 'Waterways need no expensive construction of tracks or roads; rivers are natural highways.', kw: ['no construction', 'natural'] },
      { t: 'They are most suitable for heavy and bulky goods, and are fuel-efficient and environment friendly.', kw: ['bulky', 'fuel-efficient', 'environment'] },
      { t: 'NW1 Ganga (Prayagraj–Haldia, 1,620 km) and NW2 Brahmaputra (Sadiya–Dhubri, 891 km).', kw: ['NW1', 'Ganga', '1620', 'Brahmaputra', '891'] },
      { t: 'IWAI develops and regulates inland waterways; NW3 is the West Coast Canal (205 km).', kw: ['IWAI', 'West Coast Canal', '205'] }
    ], model: 'Waterways are cheap because rivers are natural highways needing no track or road construction; they are ideal for heavy, bulky goods and are fuel-efficient and environment friendly. NW1 is the Ganga waterway from Prayagraj to Haldia (1,620 km); NW2 is the Brahmaputra from Sadiya to Dhubri (891 km); NW3 is the West Coast Canal from Kottapuram to Kollam (205 km). IWAI develops and regulates them.' },
    { q: 'Distinguish between favourable and unfavourable balance of trade, with examples of India’s exports and imports.', marks: 3, s: S.trade, points: [
      { t: 'Favourable: exports exceed imports. Unfavourable: imports exceed exports.', kw: ['favourable', 'exports', 'imports'] },
      { t: 'Exports: gems and jewellery, readymade garments, chemicals, agricultural products.', kw: ['gems', 'garments', 'chemicals'] },
      { t: 'Imports: petroleum, machinery, fertilisers.', kw: ['petroleum', 'machinery', 'fertilisers'] }
    ], model: 'The balance of trade is the difference between exports and imports. It is favourable when exports exceed imports and unfavourable when imports exceed exports. India exports gems and jewellery, readymade garments, chemicals and agricultural products, and imports petroleum, machinery and fertilisers.' }
  ],

  scenarios: [
    { title: 'Build the Corridor', text: 'You must connect a port in Gujarat to a landlocked state in the north-east with the cheapest possible heavy-goods link. Budget is tight.', opts: [
      { t: 'Use the East–West corridor road link and develop NW1/NW2 waterway stretches for bulk cargo.', ok: true, why: 'EW corridor (Silchar–Porbandar, 3,300 km) does exactly this; waterways are the cheapest for bulky goods.' },
      { t: 'Build a new airline route.', ok: false, why: 'Air is the fastest but most expensive, and unsuitable for heavy bulky cargo.' },
      { t: 'Lay a slurry pipeline across the whole country.', ok: false, why: 'Pipelines are high-cost initially and used for specific fluids/slurries, not general cargo.' }
    ] },
    { title: 'Port Upgrade', text: 'A Gujarat port has huge container traffic but limited draft. Which port project do you prioritise?', opts: [
      { t: 'Expand container handling at JNPT/Nhava Sheva and improve Kandla’s tidal operations.', ok: true, why: 'JNPT is India’s largest container port; Kandla is the tidal port of Gujarat.' },
      { t: 'Convert Kandla into a riverine port.', ok: false, why: 'Kolkata is the riverine port on the Hugli; Kandla is tidal.' },
      { t: 'Shift all container traffic to Visakhapatnam.', ok: false, why: 'Visakhapatnam is the deepest landlocked port, not the container hub.' }
    ] },
    { title: 'The Village Post Office', text: 'A hill village has no internet. You must deliver government documents and money orders reliably.', opts: [
      { t: 'Use India Post — the largest postal network in the world — with six-digit PIN sorting.', ok: true, why: 'India Post’s network and PIN codes are the NCERT example of communication reach.' },
      { t: 'Use only private couriers in the district headquarters.', ok: false, why: 'Private couriers rarely reach remote villages; the postal network is the universal service.' },
      { t: 'Wait for fibre optic cable to reach the village.', ok: false, why: 'That leaves the village unserved; the question is about reliable delivery now.' }
    ] }
  ],

  tables: [
    { title: 'Map-work master table', head: ['Feature', 'Detail'], rows: [
      ['Golden Quadrilateral', '5,846 km — Delhi, Mumbai, Chennai, Kolkata'],
      ['North–South corridor', '4,000 km — Srinagar to Kanniyakumari'],
      ['East–West corridor', '3,300 km — Silchar to Porbandar'],
      ['NW1', 'Ganga, Prayagraj–Haldia, 1,620 km'],
      ['NW2', 'Brahmaputra, Sadiya–Dhubri, 891 km'],
      ['NW3', 'West Coast Canal, Kottapuram–Kollam, 205 km'],
      ['Largest container port', 'Jawaharlal Nehru Port (Nhava Sheva)'],
      ['Tidal port', 'Kandla'],
      ['Deepest landlocked port', 'Visakhapatnam'],
      ['Iron ore export port', 'Mormagao']
    ], note: '12 major ports and about 200 notified non-major ports.' }
  ]
};
