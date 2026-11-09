/* ============================================================
   CHAPTER 6 — Manufacturing Industries
   ============================================================ */
const S = {
  imp: 'Importance of Manufacturing',
  loc: 'Location of Industries',
  textile: 'Textile Industries',
  steel: 'Iron & Steel',
  other: 'Aluminium, Chemical, Cement, IT',
  poll: 'Industrial Pollution & Control'
};

export default {
  id: 'ch6',
  n: 6,
  title: 'Manufacturing Industries',
  tag: 'The Forge',
  emoji: '🏭',
  hue: 350,
  blurb: 'Why factories sit where they sit, and how every industry pollutes.',
  sections: Object.values(S),

  facts: [
    { t: 'Manufacturing is considered the backbone of economic development.', s: S.imp, k: 'backbone economic development' },
    { t: 'Manufacturing is the secondary sector, which transforms raw material into finished goods.', s: S.imp, k: 'secondary sector transforms' },
    { t: 'Manufacturing helps in modernising agriculture and forms the backbone of our economy.', s: S.imp, k: 'modernising agriculture' },
    { t: 'The manufacturing sector accounts for about 17 per cent of India’s GDP.', s: S.imp, k: '17 per cent GDP' },
    { t: 'Agriculture and industry are not exclusive of each other; they move hand in hand.', s: S.imp, k: 'agriculture industry hand in hand' },
    { t: 'Industrial location is influenced by raw materials, labour, capital, power, market, government policies, transport and agglomeration economies.', s: S.loc, k: 'location factors' },
    { t: 'Agglomeration economies are the benefits that firms obtain by locating near each other — cities provide markets and services.', s: S.loc, k: 'agglomeration economies' },
    { t: 'Industries are classified on the basis of source of raw materials, their main role, capital investment, ownership and the bulk and weight of raw material and finished goods.', s: S.loc, k: 'classification of industries' },
    { t: 'Agro-based industries use agricultural raw materials, while mineral-based industries use minerals.', s: S.loc, k: 'agro-based mineral-based' },
    { t: 'Heavy industries use bulky raw materials and produce heavy goods, while light industries use light raw materials.', s: S.loc, k: 'heavy light industries' },
    { t: 'The textile industry is the only industry in the country which is self-reliant and complete in the value chain.', s: S.textile, k: 'textile self-reliant value chain' },
    { t: 'The first successful cotton textile mill was set up in Mumbai in 1854.', s: S.textile, k: '1854 Mumbai first mill' },
    { t: 'Mumbai is known as Cottonopolis because of its cotton textile industry.', s: S.textile, k: 'Cottonopolis Mumbai' },
    { t: 'Ahmedabad is called the Manchester of India.', s: S.textile, k: 'Ahmedabad Manchester' },
    { t: 'The cotton textile industry is concentrated in Maharashtra, Gujarat, Tamil Nadu, Uttar Pradesh and Karnataka.', s: S.textile, k: 'cotton textile states' },
    { t: 'The first jute mill was set up in 1855 at Rishra near Kolkata.', s: S.textile, k: 'jute 1855 Rishra' },
    { t: 'The jute industry is concentrated along the Hugli river in West Bengal, which is the leading producer.', s: S.textile, k: 'jute Hugli West Bengal' },
    { t: 'Jute is used for gunny bags, mats, ropes and carpets, and the National Jute Policy was announced in 2005.', s: S.textile, k: 'jute uses policy 2005' },
    { t: 'The sugar industry is the second largest agro-based industry in India, concentrated in Uttar Pradesh and Maharashtra.', s: S.textile, k: 'sugar second agro-based' },
    { t: 'India is the second largest producer of sugar after Brazil.', s: S.textile, k: 'sugar second Brazil' },
    { t: 'The iron and steel industry is the basic industry, as all other industries depend on it.', s: S.steel, k: 'basic industry' },
    { t: 'The iron and steel industry is a heavy industry because all its raw materials are bulky and heavy, and its products are also heavy.', s: S.steel, k: 'heavy bulky' },
    { t: 'Iron and steel plants require iron ore, coking coal, limestone, dolomite, manganese and water.', s: S.steel, k: 'steel raw materials' },
    { t: 'TISCO was set up in 1907 at Sakchi, which later became Jamshedpur.', s: S.steel, k: 'TISCO 1907 Sakchi' },
    { t: 'Integrated steel plants include TISCO Jamshedpur, IISCO Burnpur, VISL Bhadravati and the SAIL plants at Bhilai, Durgapur, Rourkela and Bokaro.', s: S.steel, k: 'steel plants list' },
    { t: 'India is one of the largest producers of crude steel in the world.', s: S.steel, k: 'crude steel producer' },
    { t: 'Aluminium smelting is the second most important metallurgical industry in India.', s: S.other, k: 'aluminium second metallurgical' },
    { t: 'Aluminium is light, resistant to corrosion, a good conductor of heat and electricity, and malleable.', s: S.other, k: 'aluminium properties' },
    { t: 'Bauxite is the raw material for aluminium, and major plants are at Hirakud (Odisha), Korba (Chhattisgarh), Renukoot (Uttar Pradesh) and Nagpur (Maharashtra).', s: S.other, k: 'aluminium plants Hirakud Korba Renukoot' },
    { t: 'The chemical industry in India is one of the fastest growing and diversifying industries and contributes about 3 per cent of GDP.', s: S.other, k: 'chemical 3 per cent GDP' },
    { t: 'The fertiliser industry produces nitrogenous fertilisers (urea), phosphatic fertilisers and complex fertilisers.', s: S.other, k: 'fertiliser nitrogenous phosphatic complex' },
    { t: 'The Green Revolution led to the expansion of the fertiliser industry in India.', s: S.other, k: 'Green Revolution fertiliser' },
    { t: 'The cement industry requires bulky raw materials such as limestone, silica, alumina and gypsum, and is located near limestone deposits.', s: S.other, k: 'cement limestone silica gypsum' },
    { t: 'The first cement plant was set up in Chennai in 1904.', s: S.other, k: 'cement Chennai 1904' },
    { t: 'Bengaluru has emerged as the electronic capital of India.', s: S.other, k: 'Bengaluru electronic capital' },
    { t: 'Software Technology Parks of India (STPI) have been set up to promote the IT industry.', s: S.other, k: 'STPI' },
    { t: 'Major IT hubs include Mumbai, Delhi, Hyderabad, Pune, Chennai, Kolkata, Noida and Kochi.', s: S.other, k: 'IT hubs' },
    { t: 'The IT industry is a major earner of foreign exchange and provides high-value employment.', s: S.other, k: 'IT foreign exchange' },
    { t: 'Industries are responsible for four types of pollution: air, water, land and noise.', s: S.poll, k: 'four types pollution' },
    { t: 'Air pollution is caused by the emission of smoke, dust and gases from burning fossil fuels.', s: S.poll, k: 'air pollution smoke dust' },
    { t: 'Water pollution is caused by organic and inorganic industrial wastes, plastics and thermal pollution.', s: S.poll, k: 'water pollution thermal' },
    { t: 'Land pollution occurs due to dumping of wastes such as glass, harmful chemicals, industrial effluents, packaging, salts and garbage.', s: S.poll, k: 'land pollution dumping' },
    { t: 'Noise pollution results from industrial machines, drills, saws, sirens and construction activity.', s: S.poll, k: 'noise pollution machines' },
    { t: 'Air pollution can be controlled by fitting electrostatic precipitators, fabric filters and scrubbers, and by using oil or gas instead of coal.', s: S.poll, k: 'electrostatic precipitators scrubbers' },
    { t: 'Water pollution can be controlled by minimising water use, reusing and recycling water, and rainwater harvesting.', s: S.poll, k: 'water reuse recycle harvest' },
    { t: 'Noise pollution can be reduced by using silencers and personal protective equipment.', s: S.poll, k: 'silencers protective equipment' },
    { t: 'Sustainable development requires minimising waste, recycling and reusing materials.', s: S.poll, k: 'sustainable recycle reuse' },
    { t: 'Industrialisation and urbanisation go hand in hand.', s: S.imp, k: 'industrialisation urbanisation' },
    { t: 'Manufacturing industries reduce dependence on agriculture and help in the development of agriculture.', s: S.imp, k: 'reduce dependence agriculture' }
  ],

  paragraphs: [
    { s: S.imp, text: [
      'Manufacturing is considered the backbone of economic development.',
      'It is the secondary sector, which transforms raw material into finished goods.',
      'It helps in modernising agriculture and forms the backbone of our economy.',
      'The manufacturing sector accounts for about 17 per cent of India’s GDP.'
    ], q: 'Snipe the sentence with the 17 per cent figure.', a: 3 },

    { s: S.steel, text: [
      'The iron and steel industry is the basic industry, as all other industries depend on it.',
      'It is a heavy industry because all its raw materials are bulky and heavy.',
      'TISCO was set up in 1907 at Sakchi, which later became Jamshedpur.',
      'Integrated steel plants also include the SAIL plants at Bhilai, Durgapur, Rourkela and Bokaro.'
    ], q: 'Snipe the sentence that explains WHY steel is called the basic industry.', a: 0 },

    { s: S.textile, text: [
      'The textile industry is the only industry in the country which is self-reliant and complete in the value chain.',
      'The first successful cotton textile mill was set up in Mumbai in 1854.',
      'Mumbai is known as Cottonopolis.',
      'Ahmedabad is called the Manchester of India.'
    ], q: 'Snipe the sentence that gives the value-chain reason for textiles being special.', a: 0 },

    { s: S.poll, text: [
      'Industries are responsible for four types of pollution: air, water, land and noise.',
      'Air pollution is caused by the emission of smoke, dust and gases from burning fossil fuels.',
      'Water pollution is caused by organic and inorganic industrial wastes, plastics and thermal pollution.',
      'Noise pollution results from industrial machines, drills, saws and sirens.'
    ], q: 'Snipe the sentence listing the FOUR types of industrial pollution.', a: 0 },

    { s: S.loc, text: [
      'Industrial location is influenced by raw materials, labour, capital, power, market and government policies.',
      'Agglomeration economies are the benefits firms obtain by locating near each other.',
      'Cities provide markets and services that attract industries.'
    ], q: 'Snipe the sentence that defines agglomeration economies.', a: 1 }
  ],

  defs: [
    { term: 'Manufacturing', s: S.imp, correct: 'The secondary sector activity that transforms raw material into finished goods, considered the backbone of economic development.', traps: [
      'The primary sector activity of extracting minerals from the earth.',
      'The service sector activity of selling goods to consumers.',
      'The activity of growing crops and rearing livestock.'
    ] },
    { term: 'Agglomeration economies', s: S.loc, correct: 'The benefits that firms obtain by locating near each other, since cities provide markets and services.', traps: [
      'The losses suffered when industries close down in a city.',
      'The tax concessions given to industries in backward areas.',
      'The cost of transporting bulky raw materials to a factory.'
    ] },
    { term: 'Basic industry', s: S.steel, correct: 'An industry on which all other industries depend — the iron and steel industry.', traps: [
      'An industry that produces consumer goods directly for households.',
      'An industry that uses only agricultural raw materials.',
      'An industry located in a rural area near its raw material.'
    ] },
    { term: 'Heavy industry', s: S.loc, correct: 'An industry that uses bulky raw materials and produces heavy goods, such as iron and steel.', traps: [
      'An industry that uses light raw materials and produces light goods.',
      'An industry that employs the largest number of workers.',
      'An industry that earns the most foreign exchange.'
    ] },
    { term: 'Cottonopolis', s: S.textile, correct: 'Mumbai, known by this name because of its cotton textile industry.', traps: [
      'Ahmedabad, known as the Manchester of India.',
      'Kanpur, known for its leather industry.',
      'Coimbatore, known for its textile machinery.'
    ] },
    { term: 'Value chain', s: S.textile, correct: 'The full sequence from raw material to the highest value-added finished product — textiles are complete in this chain.', traps: [
      'The price difference between raw material and finished goods.',
      'The chain of retail shops that sell a product.',
      'The transport network used to move goods to market.'
    ] },
    { term: 'Thermal pollution', s: S.poll, correct: 'Pollution of water by hot water discharged from industries, which harms aquatic life.', traps: [
      'Pollution of air by smoke and dust from factories.',
      'Pollution of land by dumping solid waste.',
      'Pollution caused by loud industrial machines.'
    ] },
    { term: 'Electrostatic precipitator', s: S.poll, correct: 'A device fitted in factory chimneys to remove particulate matter from smoke and reduce air pollution.', traps: [
      'A machine used to recycle water in a factory.',
      'A silencer used to reduce industrial noise.',
      'A filter used to purify drinking water at home.'
    ] }
  ],

  mcq: [
    { q: 'The manufacturing sector accounts for about what share of India’s GDP?', o: ['7 per cent', '17 per cent', '27 per cent', '37 per cent'], a: 1, why: 'About 17 per cent, as per NCERT.', s: S.imp, d: 2 },
    { q: 'Manufacturing belongs to which sector?', o: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'], a: 1, why: 'It is the secondary sector — it transforms raw material into finished goods.', s: S.imp, d: 1 },
    { q: 'Which of these is NOT a factor influencing industrial location?', o: ['Raw material', 'Power', 'Market', 'Population of the owner’s village'], a: 3, why: 'Location depends on raw materials, labour, capital, power, market, government policies, transport and agglomeration economies.', s: S.loc, d: 1 },
    { q: 'The first successful cotton textile mill in India was set up in:', o: ['Ahmedabad in 1854', 'Mumbai in 1854', 'Kolkata in 1855', 'Kanpur in 1860'], a: 1, why: 'Mumbai, 1854 — which is why Mumbai is called Cottonopolis.', s: S.textile, d: 2 },
    { q: 'Ahmedabad is called the:', o: ['Manchester of India', 'Cottonopolis', 'Electronic capital', 'City of Steel'], a: 0, why: 'Ahmedabad = Manchester of India; Mumbai = Cottonopolis; Bengaluru = electronic capital.', s: S.textile, d: 1 },
    { q: 'The first jute mill was set up in 1855 at:', o: ['Rishra near Kolkata', 'Mumbai', 'Ahmedabad', 'Kanpur'], a: 0, why: 'Rishra, near Kolkata; the jute industry is concentrated along the Hugli.', s: S.textile, d: 2 },
    { q: 'The second largest agro-based industry in India is:', o: ['Cotton textiles', 'Sugar', 'Jute', 'Cement'], a: 1, why: 'Sugar, concentrated in UP and Maharashtra; India is second after Brazil.', s: S.textile, d: 2 },
    { q: 'Why is iron and steel called a basic industry?', o: ['It produces consumer goods', 'All other industries depend on it', 'It is the oldest industry', 'It employs the most workers'], a: 1, why: 'Machine tools, transport, defence, buildings — all need steel.', s: S.steel, d: 1 },
    { q: 'TISCO was set up in 1907 at:', o: ['Bhilai', 'Sakchi (Jamshedpur)', 'Rourkela', 'Burnpur'], a: 1, why: 'TISCO at Sakchi, which became Jamshedpur.', s: S.steel, d: 1 },
    { q: 'Which is NOT a raw material for the iron and steel industry?', o: ['Iron ore', 'Coking coal', 'Limestone', 'Bauxite'], a: 3, why: 'Bauxite is for aluminium. Steel needs iron ore, coking coal, limestone, dolomite, manganese and water.', s: S.steel, d: 2 },
    { q: 'Aluminium smelting is India’s:', o: ['Basic industry', 'Second most important metallurgical industry', 'Largest employer', 'Only mineral-based industry'], a: 1, why: 'Second most important metallurgical industry after iron and steel.', s: S.other, d: 2 },
    { q: 'Renukoot aluminium plant is in:', o: ['Uttar Pradesh', 'Odisha', 'Chhattisgarh', 'Maharashtra'], a: 0, why: 'Renukoot (UP), Hirakud (Odisha), Korba (Chhattisgarh), Nagpur (Maharashtra).', s: S.other, d: 2 },
    { q: 'The chemical industry contributes about what share of GDP?', o: ['1 per cent', '3 per cent', '7 per cent', '17 per cent'], a: 1, why: 'About 3 per cent, and it is one of the fastest growing industries.', s: S.other, d: 2 },
    { q: 'The first cement plant was set up in:', o: ['Chennai in 1904', 'Mumbai in 1854', 'Kolkata in 1855', 'Delhi in 1911'], a: 0, why: 'Chennai, 1904; cement plants sit near limestone deposits.', s: S.other, d: 2 },
    { q: 'The electronic capital of India is:', o: ['Hyderabad', 'Pune', 'Bengaluru', 'Noida'], a: 2, why: 'Bengaluru; STPI has promoted IT parks across many cities.', s: S.other, d: 1 },
    { q: 'Which of these is NOT one of the four types of industrial pollution?', o: ['Air', 'Water', 'Noise', 'Thermal'], a: 3, why: 'Thermal pollution is a TYPE of water pollution; the four categories are air, water, land and noise.', s: S.poll, d: 3 },
    { q: 'Particulate matter in factory smoke is reduced by:', o: ['Silencers', 'Electrostatic precipitators', 'Rainwater harvesting', 'Recycling water'], a: 1, why: 'Electrostatic precipitators, fabric filters and scrubbers reduce particulate emissions.', s: S.poll, d: 2 },
    { q: 'Industrial noise pollution is controlled by:', o: ['Scrubbers', 'Silencers and personal protective equipment', 'Settling tanks', 'Fabric filters'], a: 1, why: 'Silencers and PPE; scrubbers and filters are for air, tanks for water.', s: S.poll, d: 1 }
  ],

  errors: [
    { stmt: 'Cottonopolis is the nickname of Ahmedabad.', ok: false, fix: 'Cottonopolis is MUMBAI. Ahmedabad is called the Manchester of India.', s: S.textile },
    { stmt: 'The first jute mill was set up in Mumbai in 1855.', ok: false, fix: 'The first jute mill was at Rishra near Kolkata in 1855; Mumbai’s first cotton mill was 1854.', s: S.textile },
    { stmt: 'The sugar industry is India’s largest agro-based industry.', ok: false, fix: 'Sugar is the SECOND largest agro-based industry; cotton textiles is the largest.', s: S.textile },
    { stmt: 'Bauxite is the main raw material of the iron and steel industry.', ok: false, fix: 'Bauxite is for ALUMINIUM. Steel needs iron ore, coking coal, limestone, dolomite and manganese.', s: S.steel },
    { stmt: 'Aluminium smelting is the most important metallurgical industry in India.', ok: false, fix: 'It is the SECOND most important; iron and steel is the basic industry.', s: S.other },
    { stmt: 'The first cement plant was set up in Kolkata in 1904.', ok: false, fix: 'It was set up in CHENNAI in 1904.', s: S.other },
    { stmt: 'Bengaluru is the Manchester of India.', ok: false, fix: 'Bengaluru is the electronic capital of India. Manchester of India = Ahmedabad.', s: S.other },
    { stmt: 'Thermal pollution is one of the four main types of industrial pollution.', ok: false, fix: 'The four types are air, water, land and noise. Thermal pollution is a form of WATER pollution.', s: S.poll },
    { stmt: 'Agglomeration economies are losses suffered by industries located close together.', ok: false, fix: 'They are BENEFITS — cities provide markets and services to firms located near each other.', s: S.loc },
    { stmt: 'Iron and steel is a light industry.', ok: false, fix: 'It is a HEAVY industry: raw materials are bulky and heavy, and the finished goods are heavy too.', s: S.steel },
    { stmt: 'The textile industry is the only industry complete in the value chain, from raw material to finished product.', ok: true, fix: 'Correct — a favourite one-liner in board answers.', s: S.textile }
  ],

  sortSets: [
    { title: 'Which industry is it?', s: S.textile, bins: [
      { name: 'Cotton textile', items: ['Mumbai — Cottonopolis', 'Ahmedabad — Manchester of India', 'First mill 1854', 'Coimbatore'] },
      { name: 'Jute', items: ['Hugli river', 'Rishra 1855', 'Golden fibre', 'Gunny bags'] },
      { name: 'Sugar', items: ['Second largest agro-based industry', 'UP and Maharashtra', 'Gur and khandsari'] },
      { name: 'Iron & steel', items: ['Basic industry', 'TISCO 1907', 'Bhilai and Rourkela', 'Coking coal'] }
    ] },
    { title: 'Sort the pollution controls', s: S.poll, bins: [
      { name: 'Air', items: ['Electrostatic precipitator', 'Fabric filter', 'Scrubber', 'Use oil/gas instead of coal'] },
      { name: 'Water', items: ['Reuse and recycle water', 'Rainwater harvesting', 'Settling tanks'] },
      { name: 'Noise', items: ['Silencers', 'Personal protective equipment'] },
      { name: 'Land', items: ['Reduce, reuse, recycle waste', 'Safe dumping of solids'] }
    ] },
    { title: 'Agro-based or mineral-based?', s: S.loc, bins: [
      { name: 'Agro-based', items: ['Cotton textile', 'Jute', 'Sugar', 'Vegetable oil'] },
      { name: 'Mineral-based', items: ['Iron and steel', 'Aluminium', 'Cement', 'Fertiliser'] }
    ] }
  ],

  mapItems: [
    { name: 'Mumbai — cotton textile', lat: 19.1, lon: 72.9, cat: 'textile', why: 'Cottonopolis; first successful cotton mill in 1854.' },
    { name: 'Ahmedabad — cotton textile', lat: 23.0, lon: 72.6, cat: 'textile', why: 'The Manchester of India.' },
    { name: 'Coimbatore — cotton textile', lat: 11.0, lon: 77.0, cat: 'textile', why: 'Major cotton textile centre of Tamil Nadu.' },
    { name: 'Kanpur — textiles & leather', lat: 26.5, lon: 80.3, cat: 'textile', why: 'Historic industrial city of Uttar Pradesh.' },
    { name: 'Rishra/Hugli — jute', lat: 22.7, lon: 88.3, cat: 'textile', why: 'First jute mill (1855); jute belt along the Hugli in West Bengal.' },
    { name: 'Jamshedpur — TISCO', lat: 22.8, lon: 86.2, cat: 'steel', why: 'TISCO set up in 1907 at Sakchi.' },
    { name: 'Bhilai — steel', lat: 21.2, lon: 81.4, cat: 'steel', why: 'SAIL integrated steel plant in Chhattisgarh.' },
    { name: 'Rourkela — steel', lat: 22.2, lon: 84.9, cat: 'steel', why: 'SAIL plant in Odisha; near iron ore and coal.' },
    { name: 'Durgapur — steel', lat: 23.5, lon: 87.3, cat: 'steel', why: 'SAIL plant in West Bengal, in the Damodar valley.' },
    { name: 'Bokaro — steel', lat: 23.7, lon: 86.2, cat: 'steel', why: 'SAIL plant in Jharkhand; coking coal nearby.' },
    { name: 'Vishakhapatnam — steel', lat: 17.7, lon: 83.3, cat: 'steel', why: 'Coastal steel plant of Andhra Pradesh.' },
    { name: 'Hirakud — aluminium', lat: 21.5, lon: 83.9, cat: 'metal', why: 'Aluminium smelter near cheap hydel power in Odisha.' },
    { name: 'Korba — aluminium', lat: 22.3, lon: 82.7, cat: 'metal', why: 'Chhattisgarh smelter near power.' },
    { name: 'Renukoot — aluminium', lat: 24.2, lon: 83.0, cat: 'metal', why: 'Uttar Pradesh smelter.' },
    { name: 'Bengaluru — IT/electronics', lat: 12.9, lon: 77.6, cat: 'it', why: 'Electronic capital of India; STPI hub.' },
    { name: 'Hyderabad — IT', lat: 17.4, lon: 78.5, cat: 'it', why: 'Major IT hub along with Mumbai, Delhi, Pune, Chennai, Kolkata, Noida, Kochi.' },
    { name: 'Chennai — cement & auto', lat: 13.1, lon: 80.2, cat: 'it', why: 'First cement plant in India, 1904.' }
  ],
  mapCats: { textile: { label: 'Textiles', color: '#ff5fa2' }, steel: { label: 'Iron & steel', color: '#ff8a3d' }, metal: { label: 'Aluminium', color: '#a78bfa' }, it: { label: 'IT & cement', color: '#4ee7ff' } },

  detective: [
    { name: 'Cotton textile industry', clues: ['I was set up first in Mumbai in 1854.', 'Mumbai is called Cottonopolis because of me.', 'Ahmedabad, the Manchester of India, is my hub.', 'I am concentrated in Maharashtra, Gujarat and Tamil Nadu.'], crops: '—', why: 'Cotton textiles: the oldest modern industry and the only one complete in the value chain.' },
    { name: 'Iron and steel industry', clues: ['I am called the basic industry.', 'All my raw materials are bulky and heavy.', 'TISCO at Jamshedpur belongs to me.', 'I depend on coking coal, limestone and manganese.'], crops: '—', why: 'Steel is heavy and basic — every other industry depends on it.' },
    { name: 'Jute industry', clues: ['My first mill was at Rishra near Kolkata in 1855.', 'I am concentrated along the Hugli river.', 'I make gunny bags, mats, ropes and carpets.'], crops: '—', why: 'Jute: the Hugli belt of West Bengal.' },
    { name: 'Aluminium smelting', clues: ['I am the second most important metallurgical industry.', 'My raw material is bauxite.', 'Hirakud, Korba and Renukoot are my plants.', 'My metal is light, corrosion-resistant and malleable.'], crops: '—', why: 'Aluminium smelting depends on cheap, continuous power.' },
    { name: 'IT industry', clues: ['Bengaluru is my electronic capital.', 'STPI promotes me.', 'I earn foreign exchange and provide high-value jobs.', 'Hyderabad, Pune, Noida and Kochi are my hubs.'], crops: '—', why: 'IT and electronics: the new, footloose industry of India.' }
  ],

  longQ: [
    { q: 'Why is manufacturing considered the backbone of economic development? Give three reasons.', marks: 3, s: S.imp, points: [
      { t: 'It modernises agriculture and reduces dependence on agriculture.', kw: ['modernise', 'agriculture', 'dependence'] },
      { t: 'It provides employment and raises income, and accounts for about 17% of GDP.', kw: ['employment', 'income', '17'] },
      { t: 'It earns foreign exchange through exports and supports the service sector.', kw: ['foreign exchange', 'exports', 'service'] }
    ], model: '1. Manufacturing modernises agriculture and reduces dependence on it by providing inputs like fertilisers and machinery.\n2. It creates employment, raises incomes and accounts for about 17 per cent of GDP.\n3. It earns foreign exchange through exports and supports the growth of services and transport.' },
    { q: 'Explain any four factors influencing the location of industries.', marks: 4, s: S.loc, points: [
      { t: 'Raw materials — bulky or perishable raw materials pull industry to the source.', kw: ['raw material', 'bulky'] },
      { t: 'Power and labour — cheap, continuous power and skilled labour.', kw: ['power', 'labour'] },
      { t: 'Market and transport — near markets reduces transport cost.', kw: ['market', 'transport'] },
      { t: 'Government policies and agglomeration economies — incentives and city services.', kw: ['government', 'agglomeration', 'incentives'] },
      { t: 'Capital is also needed for machinery and infrastructure.', kw: ['capital'] }
    ], model: '1. Raw materials — industries using bulky or weight-losing raw materials locate near the source.\n2. Power and labour — cheap continuous power and skilled, cheap labour attract industry.\n3. Market and transport — locating near markets reduces transport costs.\n4. Government policies (incentives, industrial estates) and agglomeration economies (cities provide markets and services).\nCapital availability is also essential.' },
    { q: 'Why is the iron and steel industry called a basic and heavy industry?', marks: 3, s: S.steel, points: [
      { t: 'Basic: all other industries depend on steel.', kw: ['basic', 'depend'] },
      { t: 'Heavy: raw materials are bulky and heavy, and finished goods are heavy.', kw: ['heavy', 'bulky'] },
      { t: 'It needs iron ore, coking coal, limestone, dolomite, manganese and water.', kw: ['iron ore', 'coking coal', 'limestone', 'manganese'] }
    ], model: 'It is a basic industry because all other industries — machine tools, transport, defence, construction — depend on steel. It is a heavy industry because its raw materials (iron ore, coking coal, limestone, dolomite, manganese) are bulky and heavy, and the finished products are heavy too. It also needs large quantities of water.' },
    { q: 'Describe the four types of industrial pollution and one control measure for each.', marks: 5, s: S.poll, points: [
      { t: 'Air pollution from smoke, dust and gases — control with electrostatic precipitators, fabric filters, scrubbers.', kw: ['air', 'smoke', 'electrostatic', 'scrubber'] },
      { t: 'Water pollution from organic and inorganic wastes, plastics and thermal discharge — reuse, recycle, treat.', kw: ['water', 'wastes', 'thermal', 'recycle'] },
      { t: 'Land pollution from dumping glass, chemicals, effluents and garbage — reduce, reuse, recycle, safe disposal.', kw: ['land', 'dumping', 'reduce'] },
      { t: 'Noise pollution from machines, drills, saws and sirens — silencers and PPE.', kw: ['noise', 'silencer', 'protective'] },
      { t: 'Sustainable development: minimising waste and using cleaner fuels.', kw: ['sustainable', 'cleaner', 'waste'] }
    ], model: '1. Air — smoke, dust and gases from fossil fuels; control with electrostatic precipitators, fabric filters, scrubbers, and by using oil or gas instead of coal.\n2. Water — organic and inorganic wastes, plastics and thermal pollution; control by minimising water use, reusing and recycling water, and rainwater harvesting.\n3. Land — dumping of glass, chemicals, effluents and garbage; control through reduce–reuse–recycle and safe disposal.\n4. Noise — machines, drills, saws, sirens; control with silencers and personal protective equipment.' },
    { q: 'Why is the textile industry unique in India? Explain with examples.', marks: 3, s: S.textile, points: [
      { t: 'It is the only industry self-reliant and complete in the value chain, from raw material to value-added products.', kw: ['self-reliant', 'value chain'] },
      { t: 'It has a long history — first cotton mill in Mumbai 1854, first jute mill at Rishra 1855.', kw: ['1854', 'Mumbai', 'Rishra', '1855'] },
      { t: 'It provides employment and earns foreign exchange; centres include Mumbai, Ahmedabad, Coimbatore and the Hugli belt.', kw: ['employment', 'Mumbai', 'Ahmedabad', 'Hugli'] }
    ], model: 'The textile industry is the only industry in the country which is self-reliant and complete in the value chain — from raw material to the highest value-added products. Its cotton wing began in Mumbai in 1854 (Cottonopolis), with Ahmedabad as the Manchester of India and Coimbatore as a southern hub; its jute wing began at Rishra near Kolkata in 1855 and runs along the Hugli. It provides large-scale employment and earns foreign exchange.' }
  ],

  scenarios: [
    { title: 'Where Do You Build the Steel Plant?', text: 'You have iron ore in Bastar, coking coal in Jharia, and a port 300 km away. Land is available near the ore. Where do you locate?', opts: [
      { t: 'Near the iron ore — it is bulky and weight-losing, so locating at the raw material saves transport cost.', ok: true, why: 'Weight-losing bulky raw materials pull heavy industry to the source; NCERT lists raw material as a key location factor.' },
      { t: 'In the biggest city, for agglomeration economies only.', ok: false, why: 'Agglomeration helps, but for a heavy, weight-losing industry raw material proximity dominates.' },
      { t: 'At the port only, because exports matter.', ok: false, why: 'Only if the plant is export-oriented; here the ore and coal are inland.' }
    ] },
    { title: 'Hugli Jute Mill, 2025', text: 'A jute mill on the Hugli faces competition from synthetic packaging. The National Jute Policy (2005) wants better productivity and quality.', opts: [
      { t: 'Diversify into geo-textiles, carpets and value-added products, and improve worker productivity.', ok: true, why: 'The 2005 policy targets productivity, quality and diversification of jute products.' },
      { t: 'Shift entirely to cotton textiles.', ok: false, why: 'Jute’s location advantage (Hugli, water, cheap labour, flood-plain raw material) would be wasted.' },
      { t: 'Close the mill and import gunny bags.', ok: false, why: 'That destroys a major employer and an agro-based industry with a natural raw-material base.' }
    ] },
    { title: 'The Chimney Audit', text: 'A factory emits heavy particulate matter and discharges hot water into a river. You have one budget line.', opts: [
      { t: 'Fit electrostatic precipitators/scrubbers and install a cooling-cum-recycling system for water.', ok: true, why: 'Precipitators handle particulates; cooling/recycling addresses thermal and water pollution.' },
      { t: 'Build a taller chimney so the smoke spreads further.', ok: false, why: 'Dilution is not control — particulate matter still enters the air.' },
      { t: 'Plant trees around the factory and do nothing else.', ok: false, why: 'Green belts help but do not treat particulate emissions or thermal discharge.' }
    ] }
  ],

  tables: [
    { title: 'Industry → signature fact', head: ['Industry', 'Must-know fact'], rows: [
      ['Cotton textile', 'Only industry complete in the value chain; Mumbai 1854; Ahmedabad = Manchester of India'],
      ['Jute', 'First mill Rishra 1855; Hugli belt; National Jute Policy 2005'],
      ['Sugar', 'Second largest agro-based industry; UP and Maharashtra'],
      ['Iron & steel', 'Basic + heavy; TISCO 1907; Bhilai, Rourkela, Durgapur, Bokaro'],
      ['Aluminium', 'Second most important metallurgical industry; Hirakud, Korba, Renukoot'],
      ['Cement', 'Limestone-based; first plant Chennai 1904'],
      ['IT', 'Bengaluru electronic capital; STPI; major foreign-exchange earner']
    ], note: 'Manufacturing ≈ 17% of GDP; chemical industry ≈ 3%.' }
  ]
};
