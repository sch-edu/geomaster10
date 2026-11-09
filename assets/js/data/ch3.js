/* ============================================================
   CHAPTER 3 — Water Resources
   ============================================================ */
const S = {
  scarce: 'Water Scarcity',
  proj: 'Multipurpose River Projects',
  dams: 'Dams — Benefits & Costs',
  disp: 'Inter-state Disputes',
  harv: 'Rainwater Harvesting',
  trad: 'Traditional Harvesting Systems'
};

export default {
  id: 'ch3',
  n: 3,
  title: 'Water Resources',
  tag: 'The Blue Vault',
  emoji: '💧',
  hue: 196,
  blurb: 'Dams, disputes, tankas and khadins — the chapter where engineering meets ecology.',
  sections: Object.values(S),

  facts: [
    { t: 'Three-fourth of the earth’s surface is covered with water, but only 2.5 per cent of it is freshwater and only 0.3 per cent of that is available for human use.', s: S.scarce, k: '2.5 per cent 0.3 per cent' },
    { t: 'Water is a renewable resource, but over-use and pollution have made it scarce.', s: S.scarce, k: 'renewable over-use pollution' },
    { t: 'Water scarcity may be an outcome of a large and growing population and consequent greater demands for water, and unequal access to it.', s: S.scarce, k: 'population unequal access' },
    { t: 'A large population requires more water not only for domestic use but also to produce more food.', s: S.scarce, k: 'domestic food' },
    { t: 'Intensive industrialisation and urbanisation have increased the demand for water.', s: S.scarce, k: 'industrialisation urbanisation' },
    { t: 'Water scarcity in most cases is caused by over-exploitation, excessive use and unequal access to water among different social groups.', s: S.scarce, k: 'over-exploitation excessive use unequal access' },
    { t: 'More and more water is being used for irrigation, and groundwater is being over-exploited, particularly in the western and southern parts of India.', s: S.scarce, k: 'groundwater irrigation west south' },
    { t: 'Industrial effluents, chemicals, pesticides and fertilisers pollute water bodies and make freshwater scarce.', s: S.scarce, k: 'effluents pesticides fertilisers' },
    { t: 'The availability of water resources varies over space and time, mainly due to variations in seasonal and annual precipitation.', s: S.scarce, k: 'precipitation variation' },
    { t: 'India receives nearly 4 per cent of the global precipitation.', s: S.scarce, k: '4 per cent precipitation' },
    { t: 'India ranks 133rd in the world in terms of water availability per person per annum.', s: S.scarce, k: '133rd rank' },
    { t: 'By 2025, large parts of India are predicted to join regions having absolute water scarcity.', s: S.scarce, k: '2025 absolute scarcity' },
    { t: 'Multipurpose river projects were started after independence to integrate irrigation, electricity generation, flood control, water supply, recreation and inland navigation.', s: S.proj, k: 'multipurpose integration' },
    { t: 'Jawaharlal Nehru proudly proclaimed dams as the ‘temples of modern India’.', s: S.proj, k: 'temples of modern India Nehru' },
    { t: 'A dam is a barrier across flowing water that obstructs, directs or retards the flow, often creating a reservoir, lake or impoundment.', s: S.dams, k: 'dam definition' },
    { t: 'Dams are classified on the basis of structure and material as timber dams, embankment dams or masonry dams.', s: S.dams, k: 'timber embankment masonry' },
    { t: 'According to height, dams are categorised as low, medium and high dams.', s: S.dams, k: 'low medium high height' },
    { t: 'Multipurpose projects serve irrigation, electricity generation, flood control, water supply, recreation, inland navigation and fish breeding.', s: S.proj, k: 'benefits list' },
    { t: 'Large dams have led to displacement of people, loss of livelihood, fragmentation of land holdings and inadequate compensation.', s: S.dams, k: 'displacement livelihood compensation' },
    { t: 'Large dams have also caused sedimentation, water-borne diseases, pollution, deforestation and loss of biodiversity.', s: S.dams, k: 'sedimentation diseases deforestation' },
    { t: 'Dams have been the cause of inter-state water disputes.', s: S.disp, k: 'inter-state disputes' },
    { t: 'Tehri Dam, on the Bhagirathi river, is the tallest dam in India at 260.5 metres.', s: S.dams, k: 'Tehri 260.5 Bhagirathi tallest' },
    { t: 'Hirakud, on the Mahanadi, is one of the longest dams in India.', s: S.dams, k: 'Hirakud Mahanadi longest' },
    { t: 'The Damodar Valley Corporation, set up in 1948, was India’s first multipurpose river valley project, modelled on the Tennessee Valley Authority of the USA.', s: S.proj, k: 'DVC 1948 TVA' },
    { t: 'Bhakra Nangal is a multipurpose project on the Sutlej.', s: S.proj, k: 'Bhakra Sutlej' },
    { t: 'Sardar Sarovar Dam is built on the Narmada river.', s: S.dams, k: 'Sardar Sarovar Narmada' },
    { t: 'The Narmada Bachao Andolan mobilised tribal people, farmers, environmentalists and human rights activists against the Sardar Sarovar Dam.', s: S.dams, k: 'NBA Sardar Sarovar' },
    { t: 'The Andolan questioned the benefits of the dam while relocating people.', s: S.dams, k: 'questioned benefits' },
    { t: 'In Gujarat, farmers of the Sabarmati basin agitated over the higher priority given to urban water supply, particularly during droughts.', s: S.disp, k: 'Sabarmati basin farmers' },
    { t: 'Inter-state disagreements over the sharing of the Cauvery, Krishna, Godavari and Yamuna waters have become a big issue.', s: S.disp, k: 'Cauvery Krishna Godavari Yamuna' },
    { t: 'Rainwater harvesting is a technique of increasing the recharge of groundwater by capturing and storing rainwater.', s: S.harv, k: 'rainwater harvesting definition' },
    { t: 'In hill and mountainous regions, people built diversion channels like the ‘guls’ and ‘kuls’ of the Western Himalayas for agriculture.', s: S.trad, k: 'guls kuls Western Himalayas' },
    { t: 'Rooftop rainwater harvesting was commonly practised to store drinking water, particularly in Rajasthan.', s: S.trad, k: 'rooftop Rajasthan' },
    { t: 'In the flood plains of Bengal, people developed inundation channels to irrigate their fields.', s: S.trad, k: 'inundation channels Bengal' },
    { t: 'In arid and semi-arid regions, agricultural fields were converted into rain-fed storage structures, like the ‘khadins’ in Jaisalmer and ‘johads’ in other parts of Rajasthan.', s: S.trad, k: 'khadins johads Jaisalmer' },
    { t: 'In Rajasthan, rainwater is stored in an underground tank called a tanka, built inside the main house or the courtyard.', s: S.trad, k: 'tanka underground' },
    { t: 'The tanka could be as large as a big room, and is part of a well-developed rooftop rainwater harvesting system.', s: S.trad, k: 'tanka big room' },
    { t: 'The first spell of rain is usually not collected, as it cleans the roofs and the pipes.', s: S.harv, k: 'first spell not collected' },
    { t: 'In Shillong, nearly 55 per cent of the households use rooftop rainwater harvesting.', s: S.harv, k: 'Shillong 55 per cent' },
    { t: 'Tamil Nadu is the first state to make rooftop rainwater harvesting compulsory for all houses across the state.', s: S.harv, k: 'Tamil Nadu first compulsory' },
    { t: 'Rainwater harvesting helps recharge groundwater, checks soil erosion and flooding, and provides water during dry periods.', s: S.harv, k: 'harvesting benefits' },
    { t: 'Multipurpose projects, while generating power and irrigating fields, also submerge existing vegetation and soil.', s: S.dams, k: 'submerge vegetation' },
    { t: 'Water is a renewable resource, yet freshwater availability is limited and unevenly distributed.', s: S.scarce, k: 'freshwater limited' },
    { t: 'The Narmada Bachao Andolan is a non-governmental organisation.', s: S.dams, k: 'NBA NGO' }
  ],

  paragraphs: [
    { s: S.scarce, text: [
      'Three-fourth of the earth’s surface is covered with water, but only 2.5 per cent of it is freshwater and only 0.3 per cent of that is available for human use.',
      'Water is a renewable resource, but over-use and pollution have made it scarce.',
      'Water scarcity in most cases is caused by over-exploitation, excessive use and unequal access to water among different social groups.'
    ], q: 'Snipe the sentence containing the 2.5 per cent and 0.3 per cent figures.', a: 0 },

    { s: S.dams, text: [
      'A dam is a barrier across flowing water that obstructs, directs or retards the flow, creating a reservoir, lake or impoundment.',
      'Dams are classified by structure and material as timber dams, embankment dams or masonry dams.',
      'According to height, dams are categorised as low, medium and high dams.',
      'Tehri Dam, on the Bhagirathi, is the tallest dam in India at 260.5 metres.'
    ], q: 'Snipe the sentence that gives the exact NCERT definition of a dam.', a: 0 },

    { s: S.dams, text: [
      'Large dams have led to displacement of people, loss of livelihood, fragmentation of land holdings and inadequate compensation.',
      'They have also caused sedimentation, water-borne diseases, pollution, deforestation and loss of biodiversity.',
      'The Narmada Bachao Andolan mobilised tribal people, farmers, environmentalists and human rights activists against the Sardar Sarovar Dam.'
    ], q: 'Snipe the sentence listing the SOCIAL costs of large dams.', a: 0 },

    { s: S.trad, text: [
      'In the hill and mountainous regions, people built diversion channels like the guls and kuls of the Western Himalayas.',
      'In the flood plains of Bengal, people developed inundation channels to irrigate their fields.',
      'In arid and semi-arid regions, fields were converted into rain-fed storage structures like the khadins in Jaisalmer and johads in other parts of Rajasthan.'
    ], q: 'Snipe the sentence naming the khadins and johads.', a: 2 },

    { s: S.harv, text: [
      'The first spell of rain is usually not collected as it cleans the roofs and the pipes.',
      'In Shillong, nearly 55 per cent of the households use rooftop rainwater harvesting.',
      'Tamil Nadu is the first state to make rooftop rainwater harvesting compulsory for all houses.'
    ], q: 'Snipe the sentence with Shillong’s exact percentage.', a: 1 }
  ],

  defs: [
    { term: 'Dam', s: S.dams, correct: 'A barrier across flowing water that obstructs, directs or retards the flow, often creating a reservoir, lake or impoundment.', traps: [
      'A canal dug to carry river water to agricultural fields.',
      'An underground tank built inside a house to store rainwater.',
      'A wall built along a coast to stop sea water from entering fields.'
    ] },
    { term: 'Rainwater harvesting', s: S.harv, correct: 'A technique of increasing the recharge of groundwater by capturing and storing rainwater.', traps: [
      'The building of large dams across rivers to generate hydel power.',
      'The pumping of groundwater for irrigation during the dry season.',
      'The diversion of river water through canals to arid regions.'
    ] },
    { term: 'Multipurpose river project', s: S.proj, correct: 'A project that integrates irrigation, electricity generation, flood control, water supply, recreation and inland navigation.', traps: [
      'A project that supplies water only for drinking purposes.',
      'A project that generates electricity only from nuclear fuel.',
      'A project that builds canals only for navigation.'
    ] },
    { term: 'Tanka', s: S.trad, correct: 'An underground tank in Rajasthan, built inside the main house or courtyard, used to store rooftop rainwater.', traps: [
      'A diversion channel of the Western Himalayas used for agriculture.',
      'A rain-fed storage structure built in agricultural fields in Jaisalmer.',
      'An inundation channel of the Bengal flood plains.'
    ] },
    { term: 'Khadin', s: S.trad, correct: 'A rain-fed storage structure of the arid and semi-arid region, as in Jaisalmer, that allows water to stand and moisten the soil.', traps: [
      'An underground storage tank inside a Rajasthani house.',
      'A masonry dam built across the Mahanadi.',
      'A channel built in the Bengal flood plains for irrigation.'
    ] },
    { term: 'Guls and kuls', s: S.trad, correct: 'Diversion channels built in the hill and mountainous regions of the Western Himalayas for agriculture.', traps: [
      'Underground tanks built in Rajasthan for rooftop rainwater.',
      'Inundation channels of the Bengal flood plains.',
      'Tidal channels built in the Gulf of Khambhat.'
    ] },
    { term: 'Narmada Bachao Andolan', s: S.dams, correct: 'A non-governmental organisation that mobilised tribal people, farmers, environmentalists and human rights activists against the Sardar Sarovar Dam on the Narmada.', traps: [
      'A government project to build dams on the Narmada for irrigation.',
      'A movement to make rooftop rainwater harvesting compulsory.',
      'An inter-state water dispute over the Cauvery.'
    ] },
    { term: 'Sedimentation', s: S.dams, correct: 'The deposition of silt in a reservoir, which reduces its storage capacity over time — a cost of large dams.', traps: [
      'The evaporation of water from a reservoir during summer.',
      'The leaching of salts into groundwater near a canal.',
      'The flooding of land downstream of a dam.'
    ] }
  ],

  mcq: [
    { q: 'What percentage of the earth’s water is freshwater?', o: ['0.3 per cent', '2.5 per cent', '25 per cent', '75 per cent'], a: 1, why: 'Only 2.5% is freshwater, and only 0.3% of that is available for human use.', s: S.scarce, d: 1 },
    { q: 'Water scarcity is mainly caused by:', o: ['Over-exploitation, excessive use and unequal access', 'Too much rainfall', 'Afforestation', 'Rainwater harvesting'], a: 0, why: 'NCERT’s exact diagnosis: over-exploitation, excessive use and unequal access among social groups.', s: S.scarce, d: 1 },
    { q: 'India ranks ___ in the world in water availability per person per annum.', o: ['33rd', '73rd', '133rd', '203rd'], a: 2, why: '133rd, despite receiving nearly 4% of global precipitation.', s: S.scarce, d: 2 },
    { q: 'Who called dams the “temples of modern India”?', o: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Indira Gandhi'], a: 1, why: 'Nehru proclaimed dams the temples of modern India.', s: S.proj, d: 1 },
    { q: 'India’s first multipurpose river valley project, set up in 1948, was:', o: ['Bhakra Nangal', 'Damodar Valley Corporation', 'Hirakud', 'Tehri'], a: 1, why: 'DVC (1948) was modelled on the Tennessee Valley Authority of the USA.', s: S.proj, d: 2 },
    { q: 'The tallest dam in India is:', o: ['Bhakra Dam', 'Hirakud Dam', 'Tehri Dam', 'Sardar Sarovar'], a: 2, why: 'Tehri Dam on the Bhagirathi is 260.5 m tall.', s: S.dams, d: 1 },
    { q: 'Hirakud dam is built on the:', o: ['Mahanadi', 'Godavari', 'Krishna', 'Narmada'], a: 0, why: 'Hirakud on the Mahanadi is one of the longest dams in India.', s: S.dams, d: 2 },
    { q: 'The Narmada Bachao Andolan is primarily associated with:', o: ['Chipko movement', 'Sardar Sarovar Dam', 'Tehri Dam', 'Hirakud Dam'], a: 1, why: 'The NBA mobilised tribals, farmers, environmentalists and activists against the Sardar Sarovar Dam.', s: S.dams, d: 1 },
    { q: 'Which of these is NOT a cost of large dams?', o: ['Displacement of people', 'Sedimentation of reservoirs', 'Water-borne diseases', 'Increased groundwater recharge'], a: 3, why: 'Groundwater recharge is a benefit of rainwater harvesting, not a cost of dams.', s: S.dams, d: 1 },
    { q: 'Farmers of which basin agitated over priority to urban water supply during droughts?', o: ['Sabarmati', 'Cauvery', 'Mahanadi', 'Krishna'], a: 0, why: 'The Sabarmati basin in Gujarat — the dispute was between farmers and urban users.', s: S.disp, d: 3 },
    { q: '“Guls” and “kuls” are diversion channels of the:', o: ['Western Ghats', 'Western Himalayas', 'Eastern Himalayas', 'Aravalli hills'], a: 1, why: 'They are traditional irrigation channels of the Western Himalayas.', s: S.trad, d: 2 },
    { q: 'Khadins are found in:', o: ['Jaisalmer', 'Shillong', 'Kerala', 'Bengal'], a: 0, why: 'Khadins are rain-fed storage structures of Jaisalmer; johads are found elsewhere in Rajasthan.', s: S.trad, d: 2 },
    { q: 'An underground tank in a Rajasthani house for storing rooftop rainwater is called:', o: ['Tanka', 'Johad', 'Khadin', 'Kul'], a: 0, why: 'The tanka can be as large as a big room and sits inside the house or courtyard.', s: S.trad, d: 1 },
    { q: 'Why is the first spell of rain not collected in rooftop harvesting?', o: ['It is too salty', 'It cleans the roofs and pipes', 'It evaporates immediately', 'It is collected separately for animals'], a: 1, why: 'The first spell washes the roof and pipes, so it is discarded.', s: S.harv, d: 2 },
    { q: 'Nearly 55 per cent of households use rooftop rainwater harvesting in:', o: ['Shillong', 'Jaisalmer', 'Chennai', 'Kochi'], a: 0, why: 'Shillong, the northeastern hill station, is the NCERT example.', s: S.harv, d: 2 },
    { q: 'Which state first made rooftop rainwater harvesting compulsory for all houses?', o: ['Rajasthan', 'Karnataka', 'Tamil Nadu', 'Maharashtra'], a: 2, why: 'Tamil Nadu was the first state to make it compulsory across the state.', s: S.harv, d: 2 },
    { q: 'Multipurpose projects do NOT provide:', o: ['Flood control', 'Hydel power', 'Inland navigation', 'Permanent increase in forest cover'], a: 3, why: 'They actually submerge vegetation; deforestation and loss of biodiversity are listed costs.', s: S.proj, d: 1 },
    { q: 'Which is an inter-state water dispute named in NCERT?', o: ['Cauvery', 'Yamuna only', 'Ganga with Nepal', 'Indus with China'], a: 0, why: 'Cauvery, Krishna, Godavari and Yamuna disputes are named.', s: S.disp, d: 1 }
  ],

  errors: [
    { stmt: 'Only 25 per cent of the earth’s water is freshwater.', ok: false, fix: 'Only 2.5 per cent is freshwater, and just 0.3 per cent of that is available for human use.', s: S.scarce },
    { stmt: 'India receives about 40 per cent of global precipitation.', ok: false, fix: 'India receives nearly 4 per cent of global precipitation, and ranks 133rd in per-capita water availability.', s: S.scarce },
    { stmt: 'The Damodar Valley Corporation was modelled on the Bhakra Nangal project.', ok: false, fix: 'DVC (1948) was modelled on the Tennessee Valley Authority (TVA) of the USA and was India’s first multipurpose river valley project.', s: S.proj },
    { stmt: 'Tehri Dam is built on the Mahanadi.', ok: false, fix: 'Tehri is on the Bhagirathi (tallest, 260.5 m); Hirakud is on the Mahanadi.', s: S.dams },
    { stmt: 'Khadins are underground tanks built inside Rajasthani houses.', ok: false, fix: 'Khadins are rain-fed storage structures in fields (Jaisalmer). The underground tank inside a house is a tanka.', s: S.trad },
    { stmt: 'Guls and kuls are found in the Western Ghats.', ok: false, fix: 'They are diversion channels of the Western Himalayas.', s: S.trad },
    { stmt: 'The Narmada Bachao Andolan supported the Sardar Sarovar Dam unconditionally.', ok: false, fix: 'It mobilised tribals, farmers and activists AGAINST the dam, questioning its benefits while relocating people.', s: S.dams },
    { stmt: 'The first spell of rain is the most valuable and is always collected.', ok: false, fix: 'The first spell is usually NOT collected because it cleans the roofs and pipes.', s: S.harv },
    { stmt: 'Dams have never caused any inter-state dispute in India.', ok: false, fix: 'Dams have been the cause of inter-state water disputes, e.g. Cauvery, Krishna, Godavari and Yamuna.', s: S.disp },
    { stmt: 'Multipurpose projects only generate electricity.', ok: false, fix: 'They integrate irrigation, electricity, flood control, water supply, recreation and inland navigation.', s: S.proj },
    { stmt: 'Rainwater harvesting increases groundwater recharge by capturing and storing rainwater.', ok: true, fix: 'Correct — that is the NCERT definition, and it also checks soil erosion and flooding.', s: S.harv }
  ],

  sortSets: [
    { title: 'Benefits vs costs of large dams', s: S.dams, bins: [
      { name: 'Benefits', items: ['Irrigation', 'Hydel power', 'Flood control', 'Inland navigation', 'Fish breeding', 'Water supply'] },
      { name: 'Costs', items: ['Displacement of people', 'Sedimentation', 'Water-borne diseases', 'Deforestation', 'Loss of biodiversity', 'Inadequate compensation'] }
    ] },
    { title: 'Traditional harvesting systems', s: S.trad, bins: [
      { name: 'Western Himalayas', items: ['Guls', 'Kuls'] },
      { name: 'Rajasthan', items: ['Tanka', 'Khadin', 'Johad'] },
      { name: 'Bengal flood plains', items: ['Inundation channels'] },
      { name: 'Modern / statewide', items: ['Rooftop rainwater harvesting', 'Tamil Nadu compulsory rule'] }
    ] },
    { title: 'Cause of scarcity or solution?', s: S.scarce, bins: [
      { name: 'Causes of scarcity', items: ['Over-exploitation', 'Excessive use', 'Unequal access', 'Industrial effluents', 'Growing population'] },
      { name: 'Solutions', items: ['Rainwater harvesting', 'Tanka', 'Khadin', 'Rooftop harvesting', 'Recharging groundwater'] }
    ] }
  ],

  mapItems: [
    { name: 'Tehri Dam — Bhagirathi', lat: 30.4, lon: 78.5, cat: 'dam', why: 'Tallest dam in India, 260.5 m, on the Bhagirathi.' },
    { name: 'Bhakra Nangal — Sutlej', lat: 31.4, lon: 76.4, cat: 'dam', why: 'Multipurpose project on the Sutlej in the Himalayan foothills.' },
    { name: 'Hirakud — Mahanadi', lat: 21.5, lon: 83.9, cat: 'dam', why: 'One of the longest dams in India, on the Mahanadi in Odisha.' },
    { name: 'Sardar Sarovar — Narmada', lat: 21.8, lon: 73.7, cat: 'dam', why: 'Opposed by the Narmada Bachao Andolan; on the Narmada.' },
    { name: 'Damodar Valley Corporation', lat: 23.7, lon: 86.8, cat: 'dam', why: 'India’s first multipurpose river valley project (1948), modelled on the TVA.' },
    { name: 'Nagarjuna Sagar — Krishna', lat: 16.6, lon: 79.3, cat: 'dam', why: 'Major multipurpose project on the Krishna; inter-state dispute river.' },
    { name: 'Rana Pratap Sagar — Chambal', lat: 24.9, lon: 75.6, cat: 'dam', why: 'Dam on the Chambal, a river also linked to ravines.' },
    { name: 'Mettur — Cauvery', lat: 11.8, lon: 77.8, cat: 'dam', why: 'Cauvery is one of the biggest inter-state water disputes.' },
    { name: 'Jaisalmer — khadins', lat: 26.9, lon: 70.9, cat: 'harvest', why: 'Khadins are rain-fed storage structures of the arid zone.' },
    { name: 'Shillong — rooftop harvesting', lat: 25.6, lon: 91.9, cat: 'harvest', why: 'Nearly 55% of households use rooftop rainwater harvesting.' },
    { name: 'Tamil Nadu — compulsory rooftop', lat: 11.0, lon: 78.2, cat: 'harvest', why: 'First state to make rooftop rainwater harvesting compulsory for all houses.' },
    { name: 'Sabarmati basin', lat: 23.0, lon: 72.6, cat: 'dispute', why: 'Farmers agitated over priority to urban water supply during droughts.' },
    { name: 'Guls and kuls — Western Himalaya', lat: 32.2, lon: 77.2, cat: 'harvest', why: 'Diversion channels built in hill regions for agriculture.' }
  ],
  mapCats: { dam: { label: 'Dams & projects', color: '#4ee7ff' }, harvest: { label: 'Harvesting systems', color: '#3ddc97' }, dispute: { label: 'Water disputes', color: '#ff6b6b' } },

  detective: [
    { name: 'Tehri Dam', clues: ['I am the tallest dam in India.', 'I stand 260.5 metres high.', 'I am built on the Bhagirathi river.'], crops: '—', why: 'Tehri on the Bhagirathi is the tallest dam in India.' },
    { name: 'Sardar Sarovar', clues: ['I am built on the Narmada.', 'A non-governmental organisation mobilised tribals, farmers and activists against me.', 'I am in Gujarat.'], crops: '—', why: 'The Narmada Bachao Andolan questioned the benefits of this dam while relocating people.' },
    { name: 'Tanka', clues: ['I am underground.', 'I am built inside the main house or courtyard.', 'I store rooftop rainwater in Rajasthan.', 'I can be as large as a big room.'], crops: '—', why: 'The tanka is the classic Rajasthani rooftop harvesting structure.' },
    { name: 'Khadin', clues: ['I am a rain-fed storage structure.', 'I am found in Jaisalmer.', 'I let water stand and moisten the soil.'], crops: '—', why: 'Khadins are traditional water-harvesting fields of arid Rajasthan.' },
    { name: 'Damodar Valley Corporation', clues: ['I was set up in 1948.', 'I was India’s first multipurpose river valley project.', 'I was modelled on the Tennessee Valley Authority.'], crops: '—', why: 'DVC is the TVA-inspired first multipurpose project of India.' }
  ],

  longQ: [
    { q: 'Explain any three causes of water scarcity in India.', marks: 3, s: S.scarce, points: [
      { t: 'Growing population and greater demand for domestic use and food production.', kw: ['population', 'domestic', 'food'] },
      { t: 'Over-exploitation and excessive use of water, especially groundwater for irrigation.', kw: ['over-exploitation', 'excessive', 'groundwater', 'irrigation'] },
      { t: 'Unequal access to water among different social groups.', kw: ['unequal access', 'social groups'] },
      { t: 'Pollution of water bodies by industrial effluents, chemicals, pesticides and fertilisers.', kw: ['pollution', 'effluents', 'pesticides', 'fertilisers'] }
    ], model: '1. Large and growing population increasing demand for domestic water and food.\n2. Over-exploitation and excessive use — groundwater is being depleted, especially in western and southern India.\n3. Unequal access to water among different social groups.\n4. Pollution by industrial effluents, chemicals, pesticides and fertilisers.' },
    { q: '“Multipurpose river projects are a boon and a curse.” Explain with examples.', marks: 5, s: S.dams, points: [
      { t: 'Benefits: irrigation, electricity, flood control, water supply, recreation, inland navigation and fish breeding.', kw: ['irrigation', 'electricity', 'flood control', 'navigation'] },
      { t: 'Nehru called dams the temples of modern India.', kw: ['temples', 'Nehru'] },
      { t: 'Costs: displacement, loss of livelihood, fragmentation of holdings, inadequate compensation.', kw: ['displacement', 'livelihood', 'compensation'] },
      { t: 'Ecological costs: sedimentation, water-borne diseases, pollution, deforestation, loss of biodiversity.', kw: ['sedimentation', 'diseases', 'deforestation', 'biodiversity'] },
      { t: 'Inter-state disputes and movements such as the Narmada Bachao Andolan against Sardar Sarovar.', kw: ['dispute', 'Narmada Bachao', 'Sardar Sarovar'] }
    ], model: 'Boons: multipurpose projects irrigate fields, generate hydel power, control floods, supply water, support navigation, recreation and fish breeding — Nehru called dams the temples of modern India.\nCurses: large dams displace people, destroy livelihoods, fragment land holdings, give inadequate compensation, cause sedimentation, water-borne diseases, pollution, deforestation and loss of biodiversity. They also trigger inter-state disputes over Cauvery, Krishna, Godavari and Yamuna, and movements like the Narmada Bachao Andolan against the Sardar Sarovar Dam.' },
    { q: 'Describe any three traditional methods of rainwater harvesting practised in India.', marks: 3, s: S.trad, points: [
      { t: 'Guls and kuls — diversion channels of the Western Himalayas.', kw: ['guls', 'kuls', 'Western Himalayas'] },
      { t: 'Khadins in Jaisalmer and johads in other parts of Rajasthan — rain-fed storage structures in fields.', kw: ['khadin', 'johad', 'Jaisalmer'] },
      { t: 'Tankas — underground tanks inside houses in Rajasthan for rooftop rainwater.', kw: ['tanka', 'underground', 'Rajasthan'] },
      { t: 'Inundation channels of the Bengal flood plains.', kw: ['inundation', 'Bengal'] }
    ], model: '1. In hill regions, diversion channels called guls and kuls of the Western Himalayas.\n2. In arid/semi-arid regions, fields converted into rain-fed storage structures — khadins of Jaisalmer, johads elsewhere in Rajasthan.\n3. In Rajasthan, underground tankas inside houses store rooftop rainwater.\n4. In the Bengal flood plains, inundation channels irrigate fields.' },
    { q: 'Why is rainwater harvesting important? Give three reasons.', marks: 3, s: S.harv, points: [
      { t: 'It recharges groundwater and provides water in dry periods.', kw: ['recharge', 'groundwater', 'dry'] },
      { t: 'It checks soil erosion and flooding.', kw: ['erosion', 'flooding'] },
      { t: 'It is a low-cost, decentralised solution that reduces pressure on rivers and dams.', kw: ['low-cost', 'decentralised', 'pressure'] }
    ], model: '1. It increases groundwater recharge and provides water during dry periods.\n2. It checks soil erosion and flooding.\n3. It is a low-cost, decentralised way to reduce dependence on dams and rivers; Tamil Nadu made rooftop harvesting compulsory for all houses.' },
    { q: 'What is a multipurpose river project? Name any two and state two benefits.', marks: 3, s: S.proj, points: [
      { t: 'A project integrating irrigation, electricity, flood control, water supply, recreation and navigation.', kw: ['integrates', 'irrigation', 'electricity'] },
      { t: 'Examples: Bhakra Nangal on the Sutlej, Damodar Valley Corporation, Hirakud, Nagarjuna Sagar, Tehri.', kw: ['Bhakra', 'Damodar', 'Hirakud', 'Tehri', 'Nagarjuna'] },
      { t: 'Benefits: irrigation and hydel power, plus flood control.', kw: ['flood control', 'power', 'irrigation'] }
    ], model: 'A multipurpose river project integrates irrigation, electricity generation, flood control, water supply, recreation and inland navigation. Examples: Bhakra Nangal on the Sutlej and the Damodar Valley Corporation (India’s first, 1948, modelled on the TVA). Benefits include assured irrigation, hydel power and flood control.' }
  ],

  scenarios: [
    { title: 'Sardar Sarovar, 1990s', text: 'You are on the review committee for a large dam on the Narmada. Farmers downstream want water; 40,000 people face displacement; activists say compensation is inadequate.', opts: [
      { t: 'Approve with a legally binding rehabilitation package, environmental flows and independent monitoring.', ok: true, why: 'NCERT lists displacement, inadequate compensation and ecological costs as the core problems; conditional approval addresses them.' },
      { t: 'Approve immediately — dams are temples of modern India, so benefits outweigh everything.', ok: false, why: 'The chapter balances Nehru’s enthusiasm against displacement, sedimentation and loss of biodiversity. "Benefits only" is a one-sided answer.' },
      { t: 'Cancel the project and let the river flow free.', ok: false, why: 'Also one-sided: multipurpose projects provide irrigation, power and flood control. The book wants sustainable, negotiated development.' }
    ] },
    { title: 'Jaisalmer, 3rd Drought Year', text: 'A desert village has no canal. Groundwater is 60 m deep. What do you build with a small budget?', opts: [
      { t: 'Khadins and johads to capture rain and recharge groundwater; tankas for drinking water.', ok: true, why: 'These are the textbook arid-zone structures: khadins in Jaisalmer, johads elsewhere in Rajasthan, tankas for rooftop storage.' },
      { t: 'A 100 m masonry dam across the seasonal river.', ok: false, why: 'Arid zones have erratic rainfall; large dams evaporate and silt up. Decentralised harvesting is the NCERT solution.' },
      { t: 'Deep tube wells to pump groundwater faster.', ok: false, why: 'That is over-exploitation — a stated cause of water scarcity and falling water tables.' }
    ] },
    { title: 'Chennai Housing Society', text: 'A 200-flat society in Chennai wants to cut its water bill. The corporation insists on rooftop rainwater harvesting.', opts: [
      { t: 'Install rooftop harvesting with filtration, storage and recharge pits; discard the first spell of rain.', ok: true, why: 'Tamil Nadu was the first state to make rooftop harvesting compulsory; the first spell is discarded to clean roofs and pipes.' },
      { t: 'Collect all rain including the first spell into the drinking tank.', ok: false, why: 'The first spell cleans the roof and pipes, so it is not collected for drinking.' },
      { t: 'Dig a borewell and pump more groundwater.', ok: false, why: 'That worsens groundwater depletion rather than recharging it.' }
    ] }
  ],

  tables: [
    { title: 'Dams you must be able to place on a map', head: ['Dam / project', 'River', 'State'], rows: [
      ['Tehri (tallest, 260.5 m)', 'Bhagirathi', 'Uttarakhand'],
      ['Bhakra Nangal', 'Sutlej', 'Himachal Pradesh / Punjab'],
      ['Hirakud', 'Mahanadi', 'Odisha'],
      ['Sardar Sarovar', 'Narmada', 'Gujarat'],
      ['Nagarjuna Sagar', 'Krishna', 'Telangana / Andhra Pradesh'],
      ['Damodar Valley Corporation', 'Damodar', 'Jharkhand / West Bengal'],
      ['Mettur', 'Cauvery', 'Tamil Nadu'],
      ['Rana Pratap Sagar', 'Chambal', 'Rajasthan']
    ], note: 'DVC (1948) was India’s first multipurpose river valley project — modelled on the TVA of the USA.' }
  ]
};
