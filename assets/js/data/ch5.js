/* ============================================================
   CHAPTER 5 — Minerals and Energy Resources
   ============================================================ */
const S = {
  mineral: 'What is a Mineral?',
  mode: 'Occurrence & Classification',
  iron: 'Iron Ore',
  other: 'Manganese, Copper, Bauxite, Mica',
  coal: 'Coal & Petroleum',
  energy: 'Conventional vs Non-conventional',
  cons: 'Conservation of Minerals & Energy'
};

export default {
  id: 'ch5',
  n: 5,
  title: 'Minerals and Energy Resources',
  tag: 'The Treasure Vault',
  emoji: '⛏️',
  hue: 268,
  blurb: 'Iron-ore grades, every mine on the map, and the energy transition.',
  sections: Object.values(S),

  facts: [
    { t: 'A mineral is a naturally occurring substance that has a definite chemical composition.', s: S.mineral, k: 'mineral definition' },
    { t: 'Minerals are created by natural processes without any human interference.', s: S.mineral, k: 'natural processes' },
    { t: 'Minerals can be identified on the basis of their physical properties such as colour, density and hardness, and chemical properties such as solubility.', s: S.mineral, k: 'physical chemical properties' },
    { t: 'Minerals are formed in different types of geological environments under varying conditions.', s: S.mineral, k: 'geological environments' },
    { t: 'Minerals are found in igneous and metamorphic rocks in veins and lodes.', s: S.mode, k: 'veins lodes igneous metamorphic' },
    { t: 'In sedimentary rocks, minerals occur in beds and layers, as in coal, iron ore, gypsum and potash.', s: S.mode, k: 'beds layers sedimentary' },
    { t: 'Alluvial deposits, also called placer deposits, contain minerals such as gold, silver, tin and platinum that are not corroded by water.', s: S.mode, k: 'placer deposits gold tin platinum' },
    { t: 'The ocean waters contain common salt, magnesium and bromine, while the ocean beds have manganese nodules.', s: S.mode, k: 'ocean manganese nodules' },
    { t: 'Minerals are classified into metallic and non-metallic minerals.', s: S.mode, k: 'metallic non-metallic' },
    { t: 'Ferrous minerals include iron ore, manganese and chromite; non-ferrous minerals include copper, lead, zinc and aluminium.', s: S.mode, k: 'ferrous non-ferrous' },
    { t: 'Precious minerals include gold, silver and platinum.', s: S.mode, k: 'precious gold platinum' },
    { t: 'Non-metallic minerals include mica, salt, potash, sulphur, granite, limestone, marble and sandstone.', s: S.mode, k: 'non-metallic list' },
    { t: 'Minerals are non-renewable and exhaustible; their formation takes millions of years.', s: S.cons, k: 'non-renewable millions years' },
    { t: 'Iron ore is the backbone of industrial development.', s: S.iron, k: 'backbone industrial' },
    { t: 'India is rich in iron ore, which is found in four types: magnetite, haematite, limonite and siderite.', s: S.iron, k: 'four types iron ore' },
    { t: 'Magnetite is the finest iron ore with a very high iron content of up to 70 per cent and excellent magnetic qualities.', s: S.iron, k: 'magnetite 70 per cent magnetic' },
    { t: 'Haematite is the most important industrial iron ore in terms of quantity used, with 50–60 per cent iron content; it is slightly inferior to magnetite and less magnetic.', s: S.iron, k: 'haematite 50 60 industrial' },
    { t: 'The Odisha–Jharkhand belt of iron ore includes the Badampahar mines of Mayurbhanj and Kendujhar.', s: S.iron, k: 'Odisha Jharkhand Badampahar' },
    { t: 'The Durg–Bastar–Chandrapur belt includes the Bailadila range in Bastar, Chhattisgarh, with very high-grade haematite exported to Japan and South Korea.', s: S.iron, k: 'Bailadila Bastar Japan Korea' },
    { t: 'The Ballari–Chitradurga–Chikmagalur–Tumakuru belt is in Karnataka, and the Kudremukh mines in Chikmagalur district are a 100 per cent export unit.', s: S.iron, k: 'Kudremukh Chikmagalur export' },
    { t: 'The Maharashtra–Goa belt includes iron ore deposits of Ratnagiri and Goa.', s: S.iron, k: 'Maharashtra Goa Ratnagiri' },
    { t: 'Manganese is used in manufacturing steel and ferro-manganese alloys.', s: S.other, k: 'manganese steel alloy' },
    { t: 'Nearly 10 kg of manganese is required to manufacture one tonne of steel.', s: S.other, k: '10 kg manganese one tonne' },
    { t: 'Odisha is the largest producer of manganese in India, followed by Madhya Pradesh and Karnataka.', s: S.other, k: 'manganese Odisha largest' },
    { t: 'Copper is malleable, ductile and a good conductor of heat and electricity, and is used in electrical and electronic goods.', s: S.other, k: 'copper malleable ductile' },
    { t: 'India is critically deficient in the reserve and production of copper.', s: S.other, k: 'copper deficient' },
    { t: 'The Balaghat mines in Madhya Pradesh, Khetri mines in Rajasthan and Singhbhum district of Jharkhand are important copper mines.', s: S.other, k: 'Balaghat Khetri Singhbhum' },
    { t: 'Bauxite is a clay-like substance from which aluminium is obtained.', s: S.other, k: 'bauxite aluminium' },
    { t: 'Odisha is the largest producer of bauxite, and the Panchpatmali deposits in Koraput district are important.', s: S.other, k: 'Panchpatmali Koraput Odisha' },
    { t: 'Mica is made of plates or sheets and has excellent dielectric strength, low power loss factor, insulating properties and resistance to high voltage.', s: S.other, k: 'mica dielectric insulating' },
    { t: 'Mica is used in electric and electronic industries.', s: S.other, k: 'mica electric' },
    { t: 'Mica deposits occur in the Chota Nagpur plateau, with the Koderma–Gaya–Hazaribagh belt of Jharkhand, Ajmer in Rajasthan and Nellore in Andhra Pradesh.', s: S.other, k: 'Koderma Ajmer Nellore' },
    { t: 'Koderma is the leading producer of mica.', s: S.other, k: 'Koderma leading' },
    { t: 'Limestone is the basic raw material for the cement industry and is essential for smelting iron ore in the blast furnace.', s: S.other, k: 'limestone cement smelting' },
    { t: 'Coal is the most abundantly available fossil fuel in India and provides a substantial part of the country’s industrial energy needs.', s: S.coal, k: 'coal abundant fossil fuel' },
    { t: 'Coal is classified into peat, lignite, bituminous and anthracite in increasing order of carbon content.', s: S.coal, k: 'peat lignite bituminous anthracite' },
    { t: 'Peat has low carbon content and high moisture; lignite is brown and low grade; bituminous coal is the most popular and used for commercial purposes; anthracite is the highest quality coal.', s: S.coal, k: 'coal grades details' },
    { t: 'Gondwana coal accounts for 98 per cent of India’s total coal reserves.', s: S.coal, k: 'Gondwana 98 per cent' },
    { t: 'Important Gondwana coalfields are in the Damodar valley — Jharia, Raniganj and Bokaro — and the Godavari, Mahanadi, Son and Wardha valleys.', s: S.coal, k: 'Jharia Raniganj Bokaro Damodar' },
    { t: 'Tertiary coal is found in Meghalaya, Assam, Arunachal Pradesh and Nagaland.', s: S.coal, k: 'tertiary coal northeast' },
    { t: 'Petroleum is the next major energy source after coal and is found in anticlines and fault traps in tertiary rock formations.', s: S.coal, k: 'petroleum anticlines fault traps' },
    { t: 'Mumbai High, Ankleshwar and Kalol in Gujarat, and Digboi, Naharkatia and Moran-Hugrijan in Assam are important petroleum fields.', s: S.coal, k: 'Mumbai High Ankleshwar Digboi' },
    { t: 'Natural gas is found with petroleum deposits and is used both as a source of energy and as industrial raw material in petrochemical industries.', s: S.coal, k: 'natural gas petrochemical' },
    { t: 'India has huge reserves of natural gas in the Krishna–Godavari basin, Mumbai High, the Gulf of Cambay and the Andaman and Nicobar Islands.', s: S.coal, k: 'natural gas reserves Krishna Godavari' },
    { t: 'Conventional energy sources include firewood, cattle dung cake, coal, petroleum, natural gas and electricity.', s: S.energy, k: 'conventional sources' },
    { t: 'Non-conventional sources include solar, wind, tidal, geothermal, biogas and atomic energy.', s: S.energy, k: 'non-conventional sources' },
    { t: 'India is blessed with abundant sunlight, and solar energy has enormous potential in Rajasthan and Gujarat.', s: S.energy, k: 'solar Rajasthan Gujarat' },
    { t: 'The largest wind farm cluster in India is in Tamil Nadu, from Nagarcoil to Madurai.', s: S.energy, k: 'wind Tamil Nadu Nagarcoil Madurai' },
    { t: 'Nagarcoil and Jaisalmer are well known for the effective use of wind energy.', s: S.energy, k: 'Nagarcoil Jaisalmer wind' },
    { t: 'Biogas is an important energy source in rural areas, obtained from shrubs, farm wastes and animal and human wastes.', s: S.energy, k: 'biogas rural' },
    { t: 'Tidal energy can be harnessed in the Gulf of Khambhat, the Gulf of Kachchh and the Sundarbans.', s: S.energy, k: 'tidal Khambhat Kachchh Sundarbans' },
    { t: 'Geothermal energy is harnessed at the Parvati valley near Manikaran in Himachal Pradesh and the Puga valley in Ladakh.', s: S.energy, k: 'geothermal Manikaran Puga' },
    { t: 'Nuclear energy is obtained from uranium and thorium; the monazite sands of Kerala are rich in thorium.', s: S.energy, k: 'nuclear thorium monazite Kerala' },
    { t: 'India’s nuclear power stations include Tarapur (Maharashtra), Rawatbhata (Rajasthan), Kalpakkam (Tamil Nadu), Narora (Uttar Pradesh), Kakrapar (Gujarat), Kaiga (Karnataka) and Kudankulam (Tamil Nadu).', s: S.energy, k: 'nuclear plants list' },
    { t: 'Energy conservation requires the promotion of renewable energy, energy-efficient devices and greater use of public transport.', s: S.cons, k: 'energy conservation measures' },
    { t: 'The rate of consumption of minerals is far greater than the rate of their replenishment.', s: S.cons, k: 'consumption replenishment' },
    { t: 'Minerals are unevenly distributed over space.', s: S.mode, k: 'unevenly distributed' }
  ],

  paragraphs: [
    { s: S.iron, text: [
      'Magnetite is the finest iron ore with a very high iron content of up to 70 per cent.',
      'It has excellent magnetic qualities, especially valuable in the electrical industry.',
      'Haematite is the most important industrial iron ore in terms of quantity used, with 50–60 per cent iron content.',
      'Haematite is slightly inferior to magnetite and is less magnetic.'
    ], q: 'Snipe the sentence that gives magnetite’s exact iron content.', a: 0 },

    { s: S.coal, text: [
      'Coal is the most abundantly available fossil fuel in India.',
      'Gondwana coal accounts for 98 per cent of India’s total coal reserves.',
      'Important Gondwana coalfields are in the Damodar valley — Jharia, Raniganj and Bokaro.',
      'Tertiary coal is found in Meghalaya, Assam, Arunachal Pradesh and Nagaland.'
    ], q: 'Snipe the sentence with the 98 per cent figure.', a: 1 },

    { s: S.coal, text: [
      'Petroleum is the next major energy source after coal.',
      'It is found in anticlines and fault traps in tertiary rock formations.',
      'Mumbai High, Ankleshwar and Kalol, and Digboi, Naharkatia and Moran-Hugrijan are important oil fields.'
    ], q: 'Snipe the sentence explaining WHERE petroleum is trapped geologically.', a: 1 },

    { s: S.other, text: [
      'Nearly 10 kg of manganese is required to manufacture one tonne of steel.',
      'Odisha is the largest producer of manganese in India.',
      'India is critically deficient in the reserve and production of copper.',
      'Bauxite is a clay-like substance from which aluminium is obtained.'
    ], q: 'Snipe the sentence with the exact manganese-to-steel ratio.', a: 0 },

    { s: S.energy, text: [
      'The largest wind farm cluster in India is located in Tamil Nadu from Nagarcoil to Madurai.',
      'Nagarcoil and Jaisalmer are well known for the effective use of wind energy.',
      'Geothermal energy is harnessed at the Parvati valley near Manikaran and the Puga valley in Ladakh.'
    ], q: 'Snipe the sentence naming the largest wind farm cluster.', a: 0 }
  ],

  defs: [
    { term: 'Mineral', s: S.mineral, correct: 'A naturally occurring substance that has a definite chemical composition.', traps: [
      'Any substance dug out of the earth, including soil and water.',
      'A man-made chemical compound used in industry.',
      'A fossil fuel found only in sedimentary rocks.'
    ] },
    { term: 'Placer deposits', s: S.mode, correct: 'Alluvial deposits containing minerals such as gold, silver, tin and platinum that are not corroded by water.', traps: [
      'Minerals found in veins and lodes of igneous rocks.',
      'Minerals occurring in beds and layers of sedimentary rock.',
      'Manganese nodules found on the ocean bed.'
    ] },
    { term: 'Magnetite', s: S.iron, correct: 'The finest iron ore with up to 70 per cent iron content and excellent magnetic qualities.', traps: [
      'The most important industrial iron ore with 50–60 per cent iron content.',
      'A low-grade brown coal with high moisture.',
      'A clay-like substance from which aluminium is extracted.'
    ] },
    { term: 'Haematite', s: S.iron, correct: 'The most important industrial iron ore in terms of quantity used, with 50–60 per cent iron content, slightly inferior to magnetite and less magnetic.', traps: [
      'The finest iron ore with up to 70 per cent iron content.',
      'A precious mineral used in jewellery.',
      'The highest quality coal with the most carbon.'
    ] },
    { term: 'Bituminous coal', s: S.coal, correct: 'The most popular coal used for commercial purposes, with high carbon content between peat and anthracite.', traps: [
      'Brown, low-grade coal with high moisture.',
      'The highest quality coal with the greatest carbon content.',
      'Coal with low carbon and high moisture, the first stage of coal formation.'
    ] },
    { term: 'Anthracite', s: S.coal, correct: 'The highest quality coal with the highest carbon content.', traps: [
      'The lowest grade of coal, brown in colour.',
      'Coal that is the most popular for commercial use.',
      'The first stage of coal formation with high moisture.'
    ] },
    { term: 'Non-conventional energy', s: S.energy, correct: 'Energy from solar, wind, tidal, geothermal, biogas and atomic sources.', traps: [
      'Energy from firewood, cattle dung cake, coal and petroleum.',
      'Energy generated only by large hydel dams.',
      'Energy obtained by burning coal in thermal power stations.'
    ] },
    { term: 'Geothermal energy', s: S.energy, correct: 'Heat energy from the earth, harnessed at Manikaran in Himachal Pradesh and the Puga valley in Ladakh.', traps: [
      'Energy from the tides of the Gulf of Khambhat.',
      'Energy from wind farms at Nagarcoil and Jaisalmer.',
      'Energy from monazite sands rich in thorium.'
    ] },
    { term: 'Manganese nodules', s: S.mode, correct: 'Mineral deposits found on the ocean bed.', traps: [
      'Alluvial deposits of gold and platinum in river beds.',
      'Mica sheets found in the Chota Nagpur plateau.',
      'Thorium-rich sands of Kerala.'
    ] }
  ],

  mcq: [
    { q: 'Which is the finest iron ore with up to 70 per cent iron content?', o: ['Haematite', 'Magnetite', 'Limonite', 'Siderite'], a: 1, why: 'Magnetite has up to 70% iron and excellent magnetic qualities.', s: S.iron, d: 1 },
    { q: 'The most important industrial iron ore in terms of quantity used is:', o: ['Magnetite', 'Haematite', 'Limonite', 'Siderite'], a: 1, why: 'Haematite (50–60% iron) is used in the largest quantity, though it is less magnetic.', s: S.iron, d: 2 },
    { q: 'Bailadila mines are in:', o: ['Bastar, Chhattisgarh', 'Mayurbhanj, Odisha', 'Chikmagalur, Karnataka', 'Ratnagiri, Maharashtra'], a: 0, why: 'Very high-grade haematite from Bailadila is exported to Japan and South Korea.', s: S.iron, d: 2 },
    { q: 'Kudremukh mines are located in:', o: ['Karnataka', 'Odisha', 'Jharkhand', 'Goa'], a: 0, why: 'Chikmagalur district, Karnataka — a 100 per cent export unit.', s: S.iron, d: 2 },
    { q: 'How much manganese is needed to make one tonne of steel?', o: ['1 kg', '5 kg', '10 kg', '50 kg'], a: 2, why: 'Nearly 10 kg of manganese per tonne of steel.', s: S.other, d: 2 },
    { q: 'India is critically deficient in the reserve and production of:', o: ['Iron ore', 'Mica', 'Copper', 'Bauxite'], a: 2, why: 'Copper reserves and production are both deficient; Balaghat, Khetri and Singhbhum are the main mines.', s: S.other, d: 2 },
    { q: 'Panchpatmali deposits in Koraput are of:', o: ['Bauxite', 'Mica', 'Copper', 'Manganese'], a: 0, why: 'Bauxite — the ore from which aluminium is obtained; Odisha is the largest producer.', s: S.other, d: 2 },
    { q: 'Koderma is the leading producer of:', o: ['Mica', 'Coal', 'Iron ore', 'Limestone'], a: 0, why: 'Koderma in Jharkhand — mica is used in electric and electronic industries.', s: S.other, d: 1 },
    { q: 'Gondwana coal accounts for what share of India’s coal reserves?', o: ['50 per cent', '75 per cent', '90 per cent', '98 per cent'], a: 3, why: '98 per cent; major fields are Jharia, Raniganj and Bokaro in the Damodar valley.', s: S.coal, d: 2 },
    { q: 'The highest quality coal is:', o: ['Peat', 'Lignite', 'Bituminous', 'Anthracite'], a: 3, why: 'Order of carbon content: peat → lignite → bituminous → anthracite.', s: S.coal, d: 1 },
    { q: 'Tertiary coal is found in:', o: ['Jharkhand and Odisha', 'Meghalaya, Assam and Nagaland', 'Madhya Pradesh', 'Andhra Pradesh'], a: 1, why: 'Tertiary coal occurs in Meghalaya, Assam, Arunachal Pradesh and Nagaland.', s: S.coal, d: 2 },
    { q: 'Petroleum is found in:', o: ['Anticlines and fault traps in tertiary rocks', 'Alluvial placer deposits', 'Veins in igneous rocks', 'Ocean beds as nodules'], a: 0, why: 'Petroleum occurs in anticlines and fault traps of tertiary formations.', s: S.coal, d: 2 },
    { q: 'The largest wind farm cluster in India is in:', o: ['Gujarat', 'Rajasthan', 'Tamil Nadu', 'Karnataka'], a: 2, why: 'Tamil Nadu, from Nagarcoil to Madurai; Nagarcoil and Jaisalmer are famous for wind energy.', s: S.energy, d: 1 },
    { q: 'Monazite sands of Kerala are rich in:', o: ['Uranium', 'Thorium', 'Copper', 'Manganese'], a: 1, why: 'Thorium — a nuclear fuel; uranium and thorium are the nuclear energy sources.', s: S.energy, d: 2 },
    { q: 'Geothermal energy is harnessed at:', o: ['Puga valley and Manikaran', 'Nagarcoil and Jaisalmer', 'Gulf of Khambhat', 'Koderma'], a: 0, why: 'Puga valley (Ladakh) and Parvati valley near Manikaran (HP).', s: S.energy, d: 2 },
    { q: 'Tidal energy can be harnessed at:', o: ['Gulf of Khambhat and Gulf of Kachchh', 'Puga valley', 'Chota Nagpur plateau', 'Damodar valley'], a: 0, why: 'Also the Sundarbans; tides are strongest in these gulfs.', s: S.energy, d: 1 },
    { q: 'Which is a non-conventional source of energy?', o: ['Coal', 'Petroleum', 'Biogas', 'Natural gas'], a: 2, why: 'Non-conventional: solar, wind, tidal, geothermal, biogas and atomic energy.', s: S.energy, d: 1 },
    { q: 'Which mineral is the basic raw material for the cement industry?', o: ['Mica', 'Limestone', 'Bauxite', 'Manganese'], a: 1, why: 'Limestone is also essential for smelting iron ore in the blast furnace.', s: S.other, d: 1 }
  ],

  errors: [
    { stmt: 'Haematite has the highest iron content of up to 70 per cent.', ok: false, fix: 'That is MAGNETITE (up to 70%, excellent magnetic qualities). Haematite has 50–60% iron.', s: S.iron },
    { stmt: 'Bailadila mines are in Karnataka.', ok: false, fix: 'Bailadila is in Bastar, Chhattisgarh. Kudremukh (Chikmagalur) is the Karnataka mine.', s: S.iron },
    { stmt: 'India has abundant copper reserves.', ok: false, fix: 'India is critically DEFICIENT in copper reserves and production.', s: S.other },
    { stmt: 'Anthracite is low-grade brown coal.', ok: false, fix: 'Lignite is brown and low grade. Anthracite is the highest quality coal.', s: S.coal },
    { stmt: 'Tertiary coal is found in Jharia and Raniganj.', ok: false, fix: 'Jharia and Raniganj are Gondwana coalfields of the Damodar valley. Tertiary coal is in Meghalaya, Assam, Arunachal Pradesh and Nagaland.', s: S.coal },
    { stmt: 'Petroleum is found in alluvial placer deposits.', ok: false, fix: 'Gold, silver, tin and platinum occur in placer deposits. Petroleum occurs in anticlines and fault traps in tertiary rocks.', s: S.coal },
    { stmt: 'Mica is a good conductor of electricity.', ok: false, fix: 'Mica has excellent dielectric strength and insulating properties — that is why it is used in electrical industries.', s: S.other },
    { stmt: 'The largest wind farm cluster is in Gujarat from Nagarcoil to Madurai.', ok: false, fix: 'Nagarcoil to Madurai is in TAMIL NADU. Jaisalmer (Rajasthan) is also famous for wind energy.', s: S.energy },
    { stmt: 'Geothermal energy in India is tapped in the Gulf of Khambhat.', ok: false, fix: 'That is tidal energy. Geothermal is tapped at Manikaran (Parvati valley, HP) and Puga valley (Ladakh).', s: S.energy },
    { stmt: 'Minerals are renewable resources formed quickly.', ok: false, fix: 'Minerals are non-renewable and exhaustible; their formation takes millions of years.', s: S.cons },
    { stmt: 'Gondwana coal accounts for 98 per cent of India’s coal reserves.', ok: true, fix: 'Correct — the Damodar valley fields (Jharia, Raniganj, Bokaro) are part of this.', s: S.coal }
  ],

  sortSets: [
    { title: 'Classify the mineral', s: S.mode, bins: [
      { name: 'Ferrous', items: ['Iron ore', 'Manganese', 'Chromite'] },
      { name: 'Non-ferrous', items: ['Copper', 'Lead', 'Zinc', 'Aluminium (bauxite)'] },
      { name: 'Precious', items: ['Gold', 'Silver', 'Platinum'] },
      { name: 'Non-metallic', items: ['Mica', 'Salt', 'Potash', 'Sulphur', 'Limestone', 'Marble'] }
    ] },
    { title: 'Sort the coal grade by carbon content', s: S.coal, bins: [
      { name: 'Lowest carbon', items: ['Peat'] },
      { name: 'Low grade, brown', items: ['Lignite'] },
      { name: 'Most popular, commercial', items: ['Bituminous'] },
      { name: 'Highest quality', items: ['Anthracite'] }
    ] },
    { title: 'Conventional or non-conventional?', s: S.energy, bins: [
      { name: 'Conventional', items: ['Firewood', 'Cattle dung cake', 'Coal', 'Petroleum', 'Natural gas'] },
      { name: 'Non-conventional', items: ['Solar', 'Wind', 'Tidal', 'Geothermal', 'Biogas', 'Atomic energy'] }
    ] },
    { title: 'Match the mine to the mineral', s: S.other, bins: [
      { name: 'Bauxite', items: ['Panchpatmali, Koraput'] },
      { name: 'Mica', items: ['Koderma', 'Ajmer', 'Nellore'] },
      { name: 'Copper', items: ['Balaghat', 'Khetri', 'Singhbhum'] },
      { name: 'Iron ore', items: ['Bailadila', 'Kudremukh', 'Badampahar'] },
      { name: 'Petroleum', items: ['Mumbai High', 'Ankleshwar', 'Digboi'] }
    ] }
  ],

  mapItems: [
    { name: 'Bailadila — iron ore', lat: 18.9, lon: 81.3, cat: 'iron', why: 'Bastar, Chhattisgarh; very high-grade haematite exported to Japan and South Korea.' },
    { name: 'Kudremukh — iron ore', lat: 13.2, lon: 75.3, cat: 'iron', why: 'Chikmagalur, Karnataka; a 100 per cent export unit.' },
    { name: 'Badampahar — iron ore', lat: 22.2, lon: 86.1, cat: 'iron', why: 'Mayurbhanj/Kendujhar in the Odisha–Jharkhand belt.' },
    { name: 'Panchpatmali — bauxite', lat: 18.9, lon: 82.6, cat: 'mineral', why: 'Koraput, Odisha — Odisha is the largest bauxite producer.' },
    { name: 'Koderma — mica', lat: 24.5, lon: 85.6, cat: 'mineral', why: 'Leading mica producer, in the Chota Nagpur plateau.' },
    { name: 'Khetri — copper', lat: 27.9, lon: 75.8, cat: 'mineral', why: 'Rajasthan copper mine; India is deficient in copper.' },
    { name: 'Balaghat — copper', lat: 21.8, lon: 80.2, cat: 'mineral', why: 'Madhya Pradesh copper mine.' },
    { name: 'Jharia — coal', lat: 23.7, lon: 86.4, cat: 'energy', why: 'Gondwana coalfield in the Damodar valley.' },
    { name: 'Raniganj — coal', lat: 23.6, lon: 87.1, cat: 'energy', why: 'One of the oldest Gondwana coalfields, West Bengal.' },
    { name: 'Digboi — petroleum', lat: 27.4, lon: 95.6, cat: 'energy', why: 'Assam oil field; Naharkatia and Moran-Hugrijan are nearby.' },
    { name: 'Mumbai High — petroleum', lat: 19.4, lon: 71.3, cat: 'energy', why: 'Offshore oil field; also a major natural gas reserve.' },
    { name: 'Ankleshwar — petroleum', lat: 21.6, lon: 73.0, cat: 'energy', why: 'Gujarat oil field along with Kalol.' },
    { name: 'Krishna–Godavari basin — gas', lat: 16.4, lon: 81.8, cat: 'energy', why: 'Huge natural gas reserves; also Mumbai High, Gulf of Cambay and A&N Islands.' },
    { name: 'Manikaran — geothermal', lat: 32.0, lon: 77.3, cat: 'renew', why: 'Parvati valley, Himachal Pradesh — geothermal energy.' },
    { name: 'Puga valley — geothermal', lat: 33.5, lon: 78.2, cat: 'renew', why: 'Ladakh’s geothermal field.' },
    { name: 'Nagarcoil — wind', lat: 8.2, lon: 77.5, cat: 'renew', why: 'Tamil Nadu’s wind farm cluster runs from Nagarcoil to Madurai.' },
    { name: 'Jaisalmer — wind & solar', lat: 26.9, lon: 70.9, cat: 'renew', why: 'Famous for wind energy; Rajasthan also has huge solar potential.' },
    { name: 'Tarapur — nuclear', lat: 19.8, lon: 72.7, cat: 'renew', why: 'Maharashtra nuclear power station.' },
    { name: 'Monazite sands — Kerala', lat: 9.3, lon: 76.4, cat: 'renew', why: 'Rich in thorium, a nuclear fuel.' },
    { name: 'Gulf of Khambhat — tidal', lat: 21.5, lon: 72.5, cat: 'renew', why: 'Tidal energy, along with Gulf of Kachchh and the Sundarbans.' }
  ],
  mapCats: { iron: { label: 'Iron ore', color: '#ff8a3d' }, mineral: { label: 'Other minerals', color: '#a78bfa' }, energy: { label: 'Fossil energy', color: '#ff6b6b' }, renew: { label: 'Non-conventional', color: '#3ddc97' } },

  detective: [
    { name: 'Magnetite', clues: ['I am the finest iron ore.', 'My iron content is up to 70 per cent.', 'I have excellent magnetic qualities.'], crops: '—', why: 'Magnetite: highest iron content, best magnetic qualities.' },
    { name: 'Haematite', clues: ['I am the most important industrial iron ore in terms of quantity used.', 'My iron content is 50–60 per cent.', 'I am slightly inferior to magnetite and less magnetic.'], crops: '—', why: 'Haematite is the workhorse ore of Indian steel.' },
    { name: 'Bauxite', clues: ['I am a clay-like substance.', 'Aluminium is obtained from me.', 'The Panchpatmali deposits in Koraput are famous.'], crops: '—', why: 'Bauxite → aluminium; Odisha is the largest producer.' },
    { name: 'Mica', clues: ['I am made of plates or sheets.', 'I have excellent dielectric strength and insulating properties.', 'Koderma is the leading producer.'], crops: '—', why: 'Mica’s insulating property makes it vital in electrical industries.' },
    { name: 'Anthracite', clues: ['I am coal.', 'I have the highest carbon content.', 'I am the highest quality coal.'], crops: '—', why: 'Coal order: peat < lignite < bituminous < anthracite.' },
    { name: 'Copper', clues: ['I am malleable and ductile.', 'I am a good conductor of heat and electricity.', 'India is critically deficient in my reserves and production.'], crops: '—', why: 'Copper deficiency is a standard NCERT line.' }
  ],

  longQ: [
    { q: 'Distinguish between magnetite and haematite.', marks: 3, s: S.iron, points: [
      { t: 'Magnetite is the finest iron ore with up to 70% iron; haematite has 50–60% iron.', kw: ['magnetite', '70', 'haematite', '50', '60'] },
      { t: 'Magnetite has excellent magnetic qualities; haematite is less magnetic.', kw: ['magnetic'] },
      { t: 'Haematite is the most important industrial iron ore in terms of quantity used.', kw: ['industrial', 'quantity'] }
    ], model: 'Magnetite: the finest iron ore, with up to 70 per cent iron content and excellent magnetic qualities, especially valuable in the electrical industry.\nHaematite: the most important industrial iron ore in terms of quantity used, with 50–60 per cent iron content; it is slightly inferior to magnetite and less magnetic.' },
    { q: 'Explain the classification of minerals with examples.', marks: 5, s: S.mode, points: [
      { t: 'Metallic minerals are divided into ferrous and non-ferrous.', kw: ['metallic', 'ferrous', 'non-ferrous'] },
      { t: 'Ferrous: iron ore, manganese, chromite. Non-ferrous: copper, lead, zinc, aluminium.', kw: ['iron ore', 'manganese', 'copper', 'zinc'] },
      { t: 'Precious minerals: gold, silver, platinum.', kw: ['precious', 'gold', 'silver'] },
      { t: 'Non-metallic: mica, salt, potash, sulphur, limestone, marble.', kw: ['non-metallic', 'mica', 'limestone'] },
      { t: 'Minerals occur in veins and lodes, beds and layers, and placer deposits.', kw: ['veins', 'lodes', 'beds', 'placer'] }
    ], model: 'Minerals are classified into metallic and non-metallic. Metallic minerals are further divided into ferrous (iron ore, manganese, chromite) and non-ferrous (copper, lead, zinc, aluminium). Precious minerals include gold, silver and platinum. Non-metallic minerals include mica, salt, potash, sulphur, limestone, marble and sandstone. They occur in veins and lodes in igneous and metamorphic rocks, in beds and layers in sedimentary rocks, and as alluvial placer deposits.' },
    { q: 'Why is conservation of minerals essential? Suggest any three measures.', marks: 3, s: S.cons, points: [
      { t: 'Minerals are non-renewable and exhaustible; formation takes millions of years.', kw: ['non-renewable', 'exhaustible', 'millions'] },
      { t: 'Consumption far exceeds the rate of replenishment.', kw: ['consumption', 'replenishment'] },
      { t: 'Measures: recycling, reuse, substitution, improved technology and reduced wastage.', kw: ['recycling', 'reuse', 'substitute', 'technology'] }
    ], model: 'Minerals are non-renewable and exhaustible — their formation takes millions of years, and the rate of consumption is far greater than the rate of replenishment. Conservation requires recycling, reuse and substitution of scarce minerals, improved mining technology to reduce wastage, and the use of renewable energy so that fossil fuels last longer.' },
    { q: 'Compare conventional and non-conventional sources of energy with examples.', marks: 5, s: S.energy, points: [
      { t: 'Conventional: firewood, cattle dung cake, coal, petroleum, natural gas, electricity.', kw: ['firewood', 'coal', 'petroleum', 'natural gas'] },
      { t: 'Non-conventional: solar, wind, tidal, geothermal, biogas, atomic energy.', kw: ['solar', 'wind', 'tidal', 'geothermal', 'biogas'] },
      { t: 'Non-conventional sources are renewable and cleaner; conventional fossil fuels are exhaustible and polluting.', kw: ['renewable', 'clean', 'exhaustible', 'polluting'] },
      { t: 'Examples of use: solar in Rajasthan/Gujarat, wind from Nagarcoil to Madurai, geothermal at Manikaran and Puga.', kw: ['Rajasthan', 'Nagarcoil', 'Manikaran', 'Puga'] },
      { t: 'Energy conservation: efficient devices, public transport, renewable promotion.', kw: ['conservation', 'efficient', 'public transport'] }
    ], model: 'Conventional sources — firewood, cattle dung cake, coal, petroleum, natural gas and electricity — are largely exhaustible and polluting, though they still supply most of our energy.\nNon-conventional sources — solar, wind, tidal, geothermal, biogas and atomic energy — are renewable and cleaner. Rajasthan and Gujarat have huge solar potential; the largest wind farm cluster runs from Nagarcoil to Madurai; geothermal energy is tapped at Manikaran and Puga valley; and monazite sands of Kerala are rich in thorium.\nConservation needs renewable promotion, energy-efficient devices and greater public transport use.' },
    { q: 'Describe the distribution of iron ore belts in India.', marks: 3, s: S.iron, points: [
      { t: 'Odisha–Jharkhand belt: Badampahar mines in Mayurbhanj and Kendujhar.', kw: ['Odisha', 'Jharkhand', 'Badampahar'] },
      { t: 'Durg–Bastar–Chandrapur belt: Bailadila range, high-grade haematite exported to Japan and South Korea.', kw: ['Bastar', 'Bailadila', 'Japan'] },
      { t: 'Ballari–Chitradurga–Chikmagalur–Tumakuru belt in Karnataka; Kudremukh is a 100% export unit; Maharashtra–Goa belt includes Ratnagiri.', kw: ['Kudremukh', 'Karnataka', 'Goa', 'Ratnagiri'] }
    ], model: '1. Odisha–Jharkhand belt: Badampahar mines of Mayurbhanj and Kendujhar.\n2. Durg–Bastar–Chandrapur belt: Bailadila range in Bastar with very high-grade haematite exported to Japan and South Korea.\n3. Ballari–Chitradurga–Chikmagalur–Tumakuru belt in Karnataka, where Kudremukh is a 100 per cent export unit.\n4. Maharashtra–Goa belt: Ratnagiri and Goa deposits.' }
  ],

  scenarios: [
    { title: 'Steel Plant Procurement', text: 'A steel plant needs ore with the highest iron content and magnetic separation is available. Which ore do you buy?', opts: [
      { t: 'Magnetite — up to 70% iron and excellent magnetic qualities.', ok: true, why: 'Magnetite is the finest ore; its magnetic property makes beneficiation easy.' },
      { t: 'Haematite — 50–60% iron, less magnetic.', ok: false, why: 'Haematite is used in greater quantity industry-wide, but it is inferior in iron content and magnetism.' },
      { t: 'Lignite — brown and low grade.', ok: false, why: 'Lignite is coal, not iron ore.' }
    ] },
    { title: 'Koderma vs the Village', text: 'Mica mining near Koderma has left trenches and child labour concerns. The district must decide.', opts: [
      { t: 'Regulate mining, enforce safety, reclaim abandoned pits and provide alternative livelihoods.', ok: true, why: 'Minerals are essential but non-renewable; conservation includes reducing wastage and responsible extraction.' },
      { t: 'Ban mica mining forever.', ok: false, why: 'Mica is vital to electrical industries and India leads in it; the answer is regulated, sustainable mining.' },
      { t: 'Ignore regulation — mica is a national resource.', ok: false, why: 'National ownership does not justify unsafe, wasteful extraction.' }
    ] },
    { title: 'Electrifying a Desert District', text: 'Jaisalmer has 300 sunny days and strong winds. The grid is weak. Choose the best energy mix.', opts: [
      { t: 'Solar plus wind with battery storage — both are non-conventional and abundant locally.', ok: true, why: 'Rajasthan has enormous solar potential and Jaisalmer is famous for wind energy.' },
      { t: 'A new coal plant using Gondwana coal.', ok: false, why: 'Coal is exhaustible and polluting; transporting coal to the desert is costly.' },
      { t: 'Tidal energy from the Gulf of Khambhat.', ok: false, why: 'Jaisalmer is inland; tidal energy belongs to Khambhat, Kachchh and the Sundarbans.' }
    ] }
  ],

  tables: [
    { title: 'Mineral → leading producer → use', head: ['Mineral', 'Leading area', 'Key use'], rows: [
      ['Iron ore (haematite)', 'Odisha–Jharkhand, Bastar, Karnataka', 'Steel'],
      ['Manganese', 'Odisha', 'Steel and ferro-manganese alloys'],
      ['Copper', 'Balaghat, Khetri, Singhbhum', 'Electrical goods'],
      ['Bauxite', 'Panchpatmali, Odisha', 'Aluminium'],
      ['Mica', 'Koderma, Jharkhand', 'Electrical insulation'],
      ['Limestone', 'Widely distributed', 'Cement; iron smelting'],
      ['Coal', 'Damodar valley (Jharia, Raniganj, Bokaro)', 'Thermal power, industry'],
      ['Petroleum', 'Mumbai High, Gujarat, Assam', 'Fuel, petrochemicals']
    ], note: 'Minerals are non-renewable; formation takes millions of years.' }
  ]
};
