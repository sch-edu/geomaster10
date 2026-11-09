/* ============================================================
   CHAPTER 4 — Agriculture
   ============================================================ */
const S = {
  types: 'Types of Farming',
  seasons: 'Cropping Seasons',
  food: 'Food Crops',
  cash: 'Cash Crops & Plantation',
  fibre: 'Fibre Crops',
  reform: 'Technological & Institutional Reforms'
};

const crop = (name, season, temp, rain, soil, states, note, icon) => ({ name, season, temp, rain, soil, states, note, icon });

export default {
  id: 'ch4',
  n: 4,
  title: 'Agriculture',
  tag: 'The Grain Vault',
  emoji: '🌾',
  hue: 46,
  blurb: 'Rabi, kharif, zaid, every crop’s exact rainfall figure and the states that grow them.',
  sections: Object.values(S),

  facts: [
    { t: 'Agriculture has been the backbone of the Indian economy, but its share in the Gross Domestic Product has declined.', s: S.types, k: 'backbone GDP declining' },
    { t: 'Two-thirds of India’s population is still dependent on agriculture.', s: S.types, k: 'two-thirds population' },
    { t: 'Primitive subsistence farming is practised on small patches of land with primitive tools like hoe, dao and digging sticks, using family or community labour.', s: S.types, k: 'primitive subsistence tools' },
    { t: 'Primitive subsistence farming depends on monsoon, natural fertility of the soil and suitability of other environmental conditions.', s: S.types, k: 'depends on monsoon' },
    { t: 'Primitive subsistence farming is slash-and-burn agriculture: when soil fertility decreases, farmers shift to a new patch of land.', s: S.types, k: 'slash and burn shift' },
    { t: 'Slash-and-burn agriculture is called jhumming in the north-eastern states, bewar or dahiya in Madhya Pradesh, poddu in Andhra Pradesh, pamlou in Manipur and deepa in Odisha.', s: S.types, k: 'jhumming bewar poddu pamlou deepa' },
    { t: 'Intensive subsistence farming is practised in areas of high population pressure on land.', s: S.types, k: 'intensive high population' },
    { t: 'Intensive subsistence farming is labour intensive, with high doses of biochemical inputs and irrigation for higher production.', s: S.types, k: 'labour intensive biochemical' },
    { t: 'Commercial farming uses higher doses of modern inputs such as HYV seeds, chemical fertilisers, insecticides and pesticides.', s: S.types, k: 'commercial HYV' },
    { t: 'The degree of commercialisation varies: rice is a commercial crop in Haryana and Punjab, but in Odisha it is a subsistence crop.', s: S.types, k: 'rice commercial Haryana Odisha' },
    { t: 'Plantation is a type of commercial farming in which a single crop is grown over a large area; it is capital intensive and uses a migrant labour force.', s: S.types, k: 'plantation single crop capital' },
    { t: 'Tea, coffee, rubber, sugarcane and banana are plantation crops.', s: S.types, k: 'plantation crops' },
    { t: 'Rabi crops are sown in winter from October to December and harvested in summer from April to June.', s: S.seasons, k: 'rabi October April' },
    { t: 'Important rabi crops are wheat, barley, peas, gram and mustard.', s: S.seasons, k: 'rabi crops list' },
    { t: 'Kharif crops are sown with the onset of the monsoon in June–July and harvested in September–October.', s: S.seasons, k: 'kharif June September' },
    { t: 'Important kharif crops are paddy, maize, jowar, bajra, tur, moong, urad, cotton, jute, groundnut and soyabean.', s: S.seasons, k: 'kharif crops list' },
    { t: 'Zaid is a short season between rabi and kharif in which watermelon, muskmelon, cucumber, vegetables and fodder crops are grown.', s: S.seasons, k: 'zaid watermelon' },
    { t: 'Sugarcane takes almost a year to grow.', s: S.seasons, k: 'sugarcane one year' },
    { t: 'Rice is the staple food crop of a majority of the people in India, and India is the second largest producer of rice after China.', s: S.food, k: 'rice staple second China' },
    { t: 'Rice is a kharif crop which requires high temperature, high humidity and rainfall above 100 cm.', s: S.food, k: 'rice 100 cm' },
    { t: 'Wheat is the second most important cereal crop and the main food crop of north and north-western India.', s: S.food, k: 'wheat second cereal' },
    { t: 'Wheat is a rabi crop that requires 50–75 cm of rainfall and bright sunshine at the time of ripening.', s: S.food, k: 'wheat 50 75 sunshine' },
    { t: 'Major wheat-producing states are Punjab, Haryana, Uttar Pradesh, Madhya Pradesh and Rajasthan.', s: S.food, k: 'wheat states' },
    { t: 'Jowar, bajra and ragi are the important millets grown in India; they are known as coarse grains but have very high nutritional value.', s: S.food, k: 'millets coarse grains' },
    { t: 'Ragi is very rich in iron, calcium, other micronutrients and roughage.', s: S.food, k: 'ragi iron calcium' },
    { t: 'Jowar is the third most important food crop with respect to area and production; it is a rain-fed crop mostly grown in moist areas, and Maharashtra is its largest producer.', s: S.food, k: 'jowar third Maharashtra' },
    { t: 'Bajra is grown on sandy and shallow black soils, and Rajasthan is its largest producer.', s: S.food, k: 'bajra Rajasthan sandy' },
    { t: 'Maize is a kharif crop used both as food and fodder; it requires a temperature of 21–27°C and old alluvial soil.', s: S.food, k: 'maize 21 27 fodder' },
    { t: 'Maize is grown in Karnataka, Madhya Pradesh, Bihar, Andhra Pradesh and Telangana.', s: S.food, k: 'maize states' },
    { t: 'Pulses are the major source of protein in a vegetarian diet.', s: S.food, k: 'pulses protein' },
    { t: 'India is the largest producer as well as the consumer of pulses in the world.', s: S.food, k: 'largest pulses' },
    { t: 'Major pulses are tur (arhar), urad, moong, masur, peas and gram.', s: S.food, k: 'pulses list' },
    { t: 'Being leguminous crops, pulses help in restoring soil fertility by fixing nitrogen from the air, so they are mostly grown in rotation with other crops.', s: S.food, k: 'leguminous nitrogen rotation' },
    { t: 'Sugarcane is a tropical as well as subtropical crop requiring a hot and humid climate with a temperature of 21–27°C and rainfall of 75–100 cm.', s: S.cash, k: 'sugarcane 21 27 75 100' },
    { t: 'India is the second largest producer of sugarcane after Brazil.', s: S.cash, k: 'sugarcane second Brazil' },
    { t: 'Sugarcane is grown in Uttar Pradesh, Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh and Bihar.', s: S.cash, k: 'sugarcane states' },
    { t: 'Sugarcane is the main source of sugar, gur, khandsari and molasses.', s: S.cash, k: 'sugar gur khandsari molasses' },
    { t: 'Major oilseeds are groundnut, mustard, coconut, sesamum, soyabean, castor seeds, cotton seeds, linseed and sunflower.', s: S.cash, k: 'oilseeds list' },
    { t: 'Groundnut is a kharif crop and accounts for about half of the major oilseeds produced in the country.', s: S.cash, k: 'groundnut half oilseeds' },
    { t: 'Linseed and mustard are rabi crops, while sesamum is a kharif crop in the north and a rabi crop in the south.', s: S.cash, k: 'linseed mustard rabi sesamum' },
    { t: 'Castor seed is grown both as a rabi and a kharif crop.', s: S.cash, k: 'castor both seasons' },
    { t: 'Tea cultivation is an example of plantation agriculture and is a labour-intensive industry.', s: S.cash, k: 'tea plantation labour' },
    { t: 'Tea grows well on tropical and subtropical climates, on deep fertile well-drained soil rich in humus and organic matter, and on hill slopes.', s: S.cash, k: 'tea soil hill slopes' },
    { t: 'Major tea-producing states are Assam, the Darjeeling and Jalpaiguri districts of West Bengal, Tamil Nadu and Kerala.', s: S.cash, k: 'tea Assam Darjeeling Nilgiri' },
    { t: 'Indian coffee is known for its good quality, and the Arabica variety is grown on the Baba Budan hills and the Nilgiri hills.', s: S.cash, k: 'coffee Arabica Baba Budan' },
    { t: 'Karnataka accounts for over half of India’s coffee production.', s: S.cash, k: 'Karnataka coffee half' },
    { t: 'India is the largest producer of fruits and vegetables in the world.', s: S.cash, k: 'largest fruits vegetables' },
    { t: 'Cotton, jute, hemp and natural silk are the four major fibre crops grown in India.', s: S.fibre, k: 'four fibre crops' },
    { t: 'Cotton is a kharif crop requiring 6 to 8 months to mature, high temperature, light rainfall or irrigation, 210 frost-free days and bright sunshine.', s: S.fibre, k: 'cotton 6 8 months 210 frost free' },
    { t: 'Black soil is ideal for cotton, and the main cotton-producing states are Maharashtra, Gujarat, Madhya Pradesh, Karnataka, Andhra Pradesh, Telangana, Tamil Nadu, Punjab and Haryana.', s: S.fibre, k: 'cotton black soil states' },
    { t: 'Jute is known as the golden fibre and is grown on well-drained fertile soils in the flood plains.', s: S.fibre, k: 'jute golden fibre flood plains' },
    { t: 'West Bengal is the leading producer of jute, followed by Bihar, Assam, Odisha and Meghalaya.', s: S.fibre, k: 'jute West Bengal' },
    { t: 'Jute is used for gunny bags, mats, ropes, carpets and other artefacts.', s: S.fibre, k: 'jute uses' },
    { t: 'The Green Revolution introduced HYV seeds, chemical fertilisers, pesticides and better irrigation, raising foodgrain output sharply.', s: S.reform, k: 'Green Revolution HYV' },
    { t: 'The White Revolution (Operation Flood) transformed milk production in India.', s: S.reform, k: 'White Revolution Operation Flood' },
    { t: 'The Blue Revolution refers to the growth in fish production, and the Yellow Revolution to oilseeds.', s: S.reform, k: 'Blue fish Yellow oilseeds' },
    { t: 'Agriculture provides employment to two-thirds of the population and is central to food security.', s: S.reform, k: 'employment food security' }
  ],

  paragraphs: [
    { s: S.seasons, text: [
      'Rabi crops are sown in winter from October to December and harvested in summer from April to June.',
      'Important rabi crops are wheat, barley, peas, gram and mustard.',
      'Kharif crops are sown with the onset of the monsoon in June–July and harvested in September–October.',
      'Zaid is a short season between rabi and kharif in which watermelon, muskmelon and cucumber are grown.'
    ], q: 'Snipe the sentence giving the exact sowing and harvesting months of rabi crops.', a: 0 },

    { s: S.food, text: [
      'Rice is a kharif crop which requires high temperature, high humidity and rainfall above 100 cm.',
      'Wheat is a rabi crop that requires 50–75 cm of rainfall and bright sunshine at the time of ripening.',
      'Millets such as jowar, bajra and ragi are known as coarse grains but have very high nutritional value.',
      'Ragi is very rich in iron, calcium, other micronutrients and roughage.'
    ], q: 'Snipe the sentence with BOTH wheat’s rainfall range and its sunshine requirement.', a: 1 },

    { s: S.food, text: [
      'Pulses are the major source of protein in a vegetarian diet.',
      'India is the largest producer as well as consumer of pulses in the world.',
      'Being leguminous crops, pulses help in restoring soil fertility by fixing nitrogen from the air.',
      'Therefore they are mostly grown in rotation with other crops.'
    ], q: 'Snipe the sentence explaining WHY pulses are grown in rotation.', a: 2 },

    { s: S.fibre, text: [
      'Cotton is a kharif crop requiring 6 to 8 months to mature.',
      'It needs high temperature, light rainfall or irrigation, 210 frost-free days and bright sunshine.',
      'Black soil is ideal for cotton.',
      'Jute is known as the golden fibre and is grown on well-drained fertile soils in the flood plains.'
    ], q: 'Snipe the sentence giving cotton’s exact frost-free day requirement.', a: 1 },

    { s: S.cash, text: [
      'Tea cultivation is an example of plantation agriculture and is a labour-intensive industry.',
      'Tea grows well on deep fertile well-drained soil rich in humus and organic matter.',
      'Karnataka accounts for over half of India’s coffee production.'
    ], q: 'Snipe the sentence describing the SOIL tea needs.', a: 1 }
  ],

  defs: [
    { term: 'Rabi crop', s: S.seasons, correct: 'A crop sown in winter from October to December and harvested in summer from April to June, e.g. wheat, barley, peas, gram, mustard.', traps: [
      'A crop sown with the onset of the monsoon in June–July and harvested in September–October.',
      'A short season crop grown between rabi and kharif, such as watermelon.',
      'A crop that takes almost a full year to mature, such as sugarcane.'
    ] },
    { term: 'Kharif crop', s: S.seasons, correct: 'A crop sown with the onset of the monsoon in June–July and harvested in September–October, e.g. paddy, maize, cotton, jute.', traps: [
      'A crop sown in October–December and harvested in April–June.',
      'A crop grown only in the zaid season.',
      'A plantation crop grown on hill slopes.'
    ] },
    { term: 'Zaid season', s: S.seasons, correct: 'A short season between rabi and kharif in which watermelon, muskmelon, cucumber, vegetables and fodder crops are grown.', traps: [
      'The main monsoon season for paddy and cotton.',
      'The winter season for wheat and mustard.',
      'The season when sugarcane is harvested after a full year.'
    ] },
    { term: 'Primitive subsistence farming', s: S.types, correct: 'Slash-and-burn farming on small patches with primitive tools such as hoe, dao and digging sticks, using family or community labour and depending on monsoon and natural soil fertility.', traps: [
      'Capital-intensive farming of a single crop over a large area with migrant labour.',
      'Farming in areas of high population pressure using HYV seeds and irrigation.',
      'Farming that uses only chemical fertilisers and pesticides for export.'
    ] },
    { term: 'Plantation agriculture', s: S.types, correct: 'A type of commercial farming where a single crop is grown over a large area, capital intensive, using a migrant labour force — tea, coffee, rubber, sugarcane, banana.', traps: [
      'Growing many crops together on a small plot for family consumption.',
      'Slash-and-burn farming practised by shifting cultivators.',
      'Growing only foodgrains with HYV seeds in areas of high population pressure.'
    ] },
    { term: 'Commercial farming', s: S.types, correct: 'Farming with higher doses of modern inputs such as HYV seeds, chemical fertilisers, insecticides and pesticides, where the degree of commercialisation varies by region.', traps: [
      'Farming with primitive tools for family consumption only.',
      'Farming that depends entirely on monsoon and natural soil fertility.',
      'Farming of a single crop using only organic manure.'
    ] },
    { term: 'Golden fibre', s: S.fibre, correct: 'Jute — grown on well-drained fertile soils of the flood plains, used for gunny bags, mats, ropes and carpets.', traps: [
      'Cotton, grown on black soil with 210 frost-free days.',
      'Silk, produced by sericulture.',
      'Hemp, grown in the Himalayan valleys.'
    ] },
    { term: 'Green Revolution', s: S.reform, correct: 'The introduction of HYV seeds, chemical fertilisers, pesticides and better irrigation that sharply raised foodgrain production.', traps: [
      'The programme that transformed milk production in India.',
      'The growth of fish production through aquaculture.',
      'The expansion of oilseed cultivation across India.'
    ] },
    { term: 'Leguminous crops', s: S.food, correct: 'Crops such as pulses that fix nitrogen from the air and restore soil fertility, so they are grown in rotation.', traps: [
      'Crops that need 210 frost-free days and black soil.',
      'Crops grown only in the zaid season.',
      'Crops that deplete nitrogen from the soil.'
    ] }
  ],

  mcq: [
    { q: 'Which crops are sown in winter and harvested in summer?', o: ['Kharif', 'Rabi', 'Zaid', 'Plantation'], a: 1, why: 'Rabi: sown October–December, harvested April–June — wheat, barley, peas, gram, mustard.', s: S.seasons, d: 1 },
    { q: 'Watermelon and muskmelon are grown in which season?', o: ['Kharif', 'Rabi', 'Zaid', 'Monsoon'], a: 2, why: 'Zaid is the short season between rabi and kharif.', s: S.seasons, d: 1 },
    { q: 'Rice requires rainfall of more than:', o: ['50 cm', '75 cm', '100 cm', '200 cm'], a: 2, why: 'Rice needs high temperature, high humidity and rainfall above 100 cm; it is the staple food crop.', s: S.food, d: 1 },
    { q: 'Wheat requires how much rainfall?', o: ['25–40 cm', '50–75 cm', '100–150 cm', 'Above 200 cm'], a: 1, why: '50–75 cm plus bright sunshine at ripening; it is the second most important cereal.', s: S.food, d: 1 },
    { q: 'Which millet is richest in iron, calcium and roughage?', o: ['Jowar', 'Bajra', 'Ragi', 'Maize'], a: 2, why: 'Ragi is very rich in iron, calcium, micronutrients and roughage.', s: S.food, d: 1 },
    { q: 'The largest producer of jowar is:', o: ['Rajasthan', 'Maharashtra', 'Karnataka', 'Punjab'], a: 1, why: 'Jowar is the third most important food crop by area and production; Maharashtra leads.', s: S.food, d: 2 },
    { q: 'Rajasthan is the largest producer of:', o: ['Bajra', 'Ragi', 'Rice', 'Jute'], a: 0, why: 'Bajra grows on sandy and shallow black soils; Rajasthan leads.', s: S.food, d: 2 },
    { q: 'Pulses restore soil fertility because they:', o: ['Add potash', 'Fix nitrogen from the air', 'Increase salinity', 'Absorb phosphoric acid'], a: 1, why: 'Leguminous crops fix nitrogen, so they are grown in rotation.', s: S.food, d: 2 },
    { q: 'India is the largest producer and consumer of:', o: ['Rice', 'Wheat', 'Pulses', 'Sugarcane'], a: 2, why: 'Pulses — the major protein source in a vegetarian diet.', s: S.food, d: 1 },
    { q: 'Sugarcane requires a temperature of:', o: ['10–15°C', '21–27°C', '30–35°C', '40–45°C'], a: 1, why: '21–27°C with 75–100 cm rainfall; India is the second largest producer after Brazil.', s: S.cash, d: 2 },
    { q: 'Groundnut accounts for about what share of major oilseeds produced in India?', o: ['One-tenth', 'One-fourth', 'One-third', 'One-half'], a: 3, why: 'About half; it is a kharif crop.', s: S.cash, d: 2 },
    { q: 'Karnataka accounts for over half of India’s production of:', o: ['Tea', 'Coffee', 'Jute', 'Cotton'], a: 1, why: 'Arabica coffee on the Baba Budan and Nilgiri hills; Karnataka leads.', s: S.cash, d: 1 },
    { q: 'Cotton needs how many frost-free days?', o: ['100', '150', '180', '210'], a: 3, why: '210 frost-free days, high temperature, light rainfall and bright sunshine; 6–8 months to mature.', s: S.fibre, d: 2 },
    { q: 'Which soil is ideal for cotton?', o: ['Alluvial', 'Black', 'Laterite', 'Arid'], a: 1, why: 'Black (regur) soil retains moisture and is ideal for cotton.', s: S.fibre, d: 1 },
    { q: 'The leading producer of jute is:', o: ['Bihar', 'Assam', 'West Bengal', 'Odisha'], a: 2, why: 'West Bengal leads, followed by Bihar, Assam, Odisha and Meghalaya.', s: S.fibre, d: 1 },
    { q: 'Jhumming, bewar, poddu and pamlou are local names of:', o: ['Plantation farming', 'Slash-and-burn farming', 'Intensive farming', 'Commercial grain farming'], a: 1, why: 'They are regional names for primitive subsistence slash-and-burn agriculture.', s: S.types, d: 2 },
    { q: 'The White Revolution is associated with:', o: ['Oilseeds', 'Milk', 'Fish', 'Wheat'], a: 1, why: 'Operation Flood — milk. Blue = fish, Yellow = oilseeds.', s: S.reform, d: 1 },
    { q: 'Rice is a commercial crop in Punjab but a subsistence crop in:', o: ['Haryana', 'Odisha', 'Punjab', 'West Bengal'], a: 1, why: 'The degree of commercialisation varies — NCERT’s example is rice in Odisha vs Punjab/Haryana.', s: S.types, d: 3 }
  ],

  errors: [
    { stmt: 'Rabi crops are sown in June–July with the onset of the monsoon.', ok: false, fix: 'That is kharif. Rabi crops are sown October–December and harvested April–June.', s: S.seasons },
    { stmt: 'Rice requires only 50–75 cm of rainfall.', ok: false, fix: 'Rice needs above 100 cm (with irrigation where rainfall is less). 50–75 cm is wheat’s requirement.', s: S.food },
    { stmt: 'Ragi is poor in iron and calcium.', ok: false, fix: 'Ragi is VERY RICH in iron, calcium, micronutrients and roughage.', s: S.food },
    { stmt: 'Bajra is the largest produced millet in Maharashtra.', ok: false, fix: 'Rajasthan is the largest producer of bajra; Maharashtra leads in jowar.', s: S.food },
    { stmt: 'India is the largest producer of sugarcane in the world.', ok: false, fix: 'India is the SECOND largest after Brazil.', s: S.cash },
    { stmt: 'Cotton requires 100 frost-free days.', ok: false, fix: 'Cotton requires 210 frost-free days, high temperature, light rainfall and bright sunshine.', s: S.fibre },
    { stmt: 'West Bengal is the leading producer of cotton.', ok: false, fix: 'West Bengal leads in JUTE. Cotton is led by Maharashtra and Gujarat on black soil.', s: S.fibre },
    { stmt: 'Plantation farming grows many crops together on small plots.', ok: false, fix: 'Plantation grows a SINGLE crop over a LARGE area, is capital intensive and uses migrant labour.', s: S.types },
    { stmt: 'Pulses deplete nitrogen from the soil.', ok: false, fix: 'Pulses are leguminous and FIX nitrogen, restoring fertility — hence grown in rotation.', s: S.food },
    { stmt: 'The Blue Revolution refers to oilseed production.', ok: false, fix: 'Blue = fish; Yellow = oilseeds; White = milk; Green = foodgrains.', s: S.reform },
    { stmt: 'Sugarcane takes almost a full year to grow.', ok: true, fix: 'Correct — which is why it does not fit neatly into a single cropping season.', s: S.seasons }
  ],

  sortSets: [
    { title: 'Sort the crops by season', s: S.seasons, bins: [
      { name: 'Rabi', items: ['Wheat', 'Barley', 'Peas', 'Gram', 'Mustard', 'Linseed'] },
      { name: 'Kharif', items: ['Paddy', 'Maize', 'Jowar', 'Bajra', 'Cotton', 'Jute', 'Groundnut', 'Soyabean', 'Tur'] },
      { name: 'Zaid', items: ['Watermelon', 'Muskmelon', 'Cucumber', 'Fodder crops'] }
    ] },
    { title: 'Sort by crop type', s: S.cash, bins: [
      { name: 'Cereal / foodgrain', items: ['Rice', 'Wheat', 'Maize', 'Jowar', 'Bajra', 'Ragi'] },
      { name: 'Pulse', items: ['Tur (arhar)', 'Urad', 'Moong', 'Masur', 'Gram', 'Peas'] },
      { name: 'Oilseed', items: ['Groundnut', 'Mustard', 'Coconut', 'Sesamum', 'Soyabean', 'Castor', 'Linseed', 'Sunflower'] },
      { name: 'Fibre', items: ['Cotton', 'Jute', 'Hemp', 'Natural silk'] },
      { name: 'Plantation', items: ['Tea', 'Coffee', 'Rubber', 'Sugarcane', 'Banana'] }
    ] },
    { title: 'Match the crop to its leading state', s: S.food, bins: [
      { name: 'Rajasthan', items: ['Bajra'] },
      { name: 'Maharashtra', items: ['Jowar', 'Cotton'] },
      { name: 'West Bengal', items: ['Jute', 'Rice'] },
      { name: 'Assam', items: ['Tea'] },
      { name: 'Karnataka', items: ['Coffee', 'Maize', 'Ragi'] },
      { name: 'Punjab / Haryana', items: ['Wheat', 'Commercial rice'] }
    ] },
    { title: 'Revolution match', s: S.reform, bins: [
      { name: 'Green', items: ['Foodgrains', 'HYV seeds'] },
      { name: 'White', items: ['Milk', 'Operation Flood'] },
      { name: 'Blue', items: ['Fish'] },
      { name: 'Yellow', items: ['Oilseeds'] }
    ] }
  ],

  crops: [
    crop('Rice', 'Kharif', 'High temperature, high humidity', 'Above 100 cm', 'Alluvial', ['West Bengal', 'Uttar Pradesh', 'Punjab'], 'Staple food; India is second largest producer after China.', '🌾'),
    crop('Wheat', 'Rabi', 'Cool growing, bright sunshine at ripening', '50–75 cm', 'Alluvial', ['Punjab', 'Haryana', 'Uttar Pradesh', 'Madhya Pradesh', 'Rajasthan'], 'Second most important cereal; main food crop of north-west India.', '🌾'),
    crop('Jowar', 'Kharif', 'Rain-fed, moist areas', 'Moderate', 'Black / loamy', ['Maharashtra'], 'Third most important food crop by area and production.', '🌿'),
    crop('Bajra', 'Kharif', 'Hot and dry', 'Low', 'Sandy / shallow black', ['Rajasthan'], 'Coarse grain with high nutritional value.', '🌾'),
    crop('Ragi', 'Kharif', 'Dry regions', 'Low–moderate', 'Red / sandy', ['Karnataka'], 'Very rich in iron, calcium, micronutrients and roughage.', '🌱'),
    crop('Maize', 'Kharif', '21–27°C', 'Moderate', 'Old alluvial', ['Karnataka', 'Madhya Pradesh', 'Bihar'], 'Used as both food and fodder.', '🌽'),
    crop('Pulses', 'Kharif & Rabi', 'Varied', 'Low–moderate', 'All types', ['Madhya Pradesh', 'Rajasthan', 'Maharashtra'], 'Leguminous; fix nitrogen. India is largest producer and consumer.', '🫘'),
    crop('Sugarcane', 'Takes a year', '21–27°C, hot and humid', '75–100 cm', 'Deep rich loam', ['Uttar Pradesh', 'Maharashtra', 'Karnataka'], 'Source of sugar, gur, khandsari and molasses.', '🎋'),
    crop('Groundnut', 'Kharif', 'Warm', 'Moderate', 'Sandy loam', ['Gujarat'], 'About half of India’s major oilseeds.', '🥜'),
    crop('Cotton', 'Kharif', 'High temperature, 210 frost-free days', 'Light rainfall / irrigation', 'Black soil', ['Maharashtra', 'Gujarat', 'Madhya Pradesh'], '6–8 months to mature; fibre crop.', '☁️'),
    crop('Jute', 'Kharif', 'Warm and humid', 'High', 'Well-drained fertile flood-plain soil', ['West Bengal', 'Bihar', 'Assam'], 'The golden fibre; gunny bags, mats, ropes.', '🧵'),
    crop('Tea', 'Plantation', 'Tropical / subtropical', 'High, well distributed', 'Deep fertile, well-drained, humus-rich', ['Assam', 'West Bengal (Darjeeling, Jalpaiguri)', 'Tamil Nadu', 'Kerala'], 'Labour-intensive plantation crop on hill slopes.', '🍃'),
    crop('Coffee', 'Plantation', 'Warm, shaded', 'High', 'Well-drained loam', ['Karnataka', 'Kerala', 'Tamil Nadu'], 'Arabica on Baba Budan and Nilgiri hills; Karnataka > half.', '☕'),
    crop('Rubber', 'Plantation', 'Hot and humid', 'Above 200 cm', 'Well-drained laterite', ['Kerala'], 'Plantation crop of the humid tropics.', '🌳')
  ],

  mapItems: [
    { name: 'Rice — West Bengal', lat: 22.9, lon: 87.9, cat: 'crop', why: 'West Bengal is a leading rice producer; rice needs above 100 cm rainfall.' },
    { name: 'Wheat — Punjab', lat: 30.9, lon: 75.4, cat: 'crop', why: 'Punjab leads wheat; wheat needs 50–75 cm rain and bright sunshine at ripening.' },
    { name: 'Sugarcane — Uttar Pradesh', lat: 26.8, lon: 80.9, cat: 'crop', why: 'UP is a major sugarcane producer; India is second after Brazil.' },
    { name: 'Cotton — Gujarat', lat: 22.3, lon: 71.6, cat: 'crop', why: 'Black soil + 210 frost-free days make Gujarat a cotton leader.' },
    { name: 'Jute — West Bengal', lat: 23.4, lon: 88.4, cat: 'crop', why: 'The golden fibre grows on well-drained fertile flood-plain soils.' },
    { name: 'Tea — Assam', lat: 26.6, lon: 93.2, cat: 'crop', why: 'Assam is the leading tea state; tea is a labour-intensive plantation crop.' },
    { name: 'Coffee — Karnataka', lat: 13.3, lon: 75.8, cat: 'crop', why: 'Baba Budan hills; Karnataka accounts for over half of coffee production.' },
    { name: 'Bajra — Rajasthan', lat: 26.6, lon: 73.8, cat: 'crop', why: 'Bajra grows on sandy and shallow black soils; Rajasthan leads.' },
    { name: 'Jowar — Maharashtra', lat: 19.0, lon: 76.0, cat: 'crop', why: 'Jowar is the third most important food crop; Maharashtra leads.' },
    { name: 'Ragi — Karnataka', lat: 12.9, lon: 77.5, cat: 'crop', why: 'Ragi is rich in iron, calcium, micronutrients and roughage.' },
    { name: 'Pulses — Madhya Pradesh', lat: 23.5, lon: 78.5, cat: 'crop', why: 'India is the largest producer and consumer of pulses; MP is a leading state.' },
    { name: 'Rubber — Kerala', lat: 10.5, lon: 76.3, cat: 'crop', why: 'Rubber needs hot, humid conditions and above 200 cm rainfall.' },
    { name: 'Rice — Punjab (commercial)', lat: 31.2, lon: 75.0, cat: 'crop', why: 'Rice is a commercial crop in Punjab and Haryana but subsistence in Odisha.' },
    { name: 'Groundnut — Gujarat', lat: 21.7, lon: 70.8, cat: 'crop', why: 'Groundnut is a kharif crop and about half of India’s major oilseeds.' }
  ],
  mapCats: { crop: { label: 'Crop belts', color: '#ffc44d' } },

  detective: [
    { name: 'Rice', clues: ['I am the staple food of a majority of Indians.', 'I need rainfall above 100 cm.', 'I am a kharif crop.', 'India is the second largest producer of me after China.'], crops: 'Rice', why: 'High temperature, high humidity, above 100 cm rainfall — the classic rice profile.' },
    { name: 'Wheat', clues: ['I am the second most important cereal crop.', 'I need 50–75 cm of rainfall.', 'I need bright sunshine at the time of ripening.', 'I am a rabi crop.'], crops: 'Wheat', why: 'Rabi + 50–75 cm + bright sunshine at ripening = wheat.' },
    { name: 'Cotton', clues: ['I take 6 to 8 months to mature.', 'I need 210 frost-free days.', 'Black soil is ideal for me.', 'I am a kharif fibre crop.'], crops: 'Cotton', why: 'Cotton’s 210 frost-free days is a favourite one-mark question.' },
    { name: 'Jute', clues: ['I am called the golden fibre.', 'I grow on well-drained fertile soils in flood plains.', 'West Bengal leads in my production.', 'I am used for gunny bags and ropes.'], crops: 'Jute', why: 'Golden fibre = jute; West Bengal is the leading producer.' },
    { name: 'Tea', clues: ['I am a plantation crop and labour intensive.', 'I need deep fertile well-drained soil rich in humus.', 'I grow on hill slopes.', 'Assam and Darjeeling are famous for me.'], crops: 'Tea', why: 'Tea is the textbook example of plantation agriculture in India.' },
    { name: 'Coffee', clues: ['I am grown on the Baba Budan hills.', 'Karnataka accounts for over half of my production.', 'The Arabica variety is famous.'], crops: 'Coffee', why: 'Arabica coffee on the Baba Budan and Nilgiri hills.' }
  ],

  longQ: [
    { q: 'Describe the three cropping seasons of India with examples.', marks: 3, s: S.seasons, points: [
      { t: 'Rabi — sown October–December, harvested April–June; wheat, barley, peas, gram, mustard.', kw: ['rabi', 'october', 'april', 'wheat', 'mustard'] },
      { t: 'Kharif — sown with the monsoon June–July, harvested September–October; paddy, maize, cotton, jute.', kw: ['kharif', 'june', 'september', 'paddy', 'cotton'] },
      { t: 'Zaid — short season between rabi and kharif; watermelon, muskmelon, cucumber, fodder.', kw: ['zaid', 'watermelon', 'muskmelon'] }
    ], model: 'Rabi: sown October–December, harvested April–June — wheat, barley, peas, gram, mustard.\nKharif: sown June–July with the monsoon, harvested September–October — paddy, maize, jowar, bajra, cotton, jute, groundnut.\nZaid: short season between rabi and kharif — watermelon, muskmelon, cucumber, vegetables and fodder.' },
    { q: 'Explain the geographical conditions required for the cultivation of rice and wheat.', marks: 5, s: S.food, points: [
      { t: 'Rice: kharif, high temperature, high humidity, rainfall above 100 cm (or irrigation).', kw: ['rice', 'kharif', '100 cm', 'humidity'] },
      { t: 'Rice is the staple food crop; India is the second largest producer after China.', kw: ['staple', 'second', 'China'] },
      { t: 'Wheat: rabi, 50–75 cm rainfall, bright sunshine at ripening.', kw: ['wheat', 'rabi', '50', '75', 'sunshine'] },
      { t: 'Wheat is the second most important cereal; grown in Punjab, Haryana, UP, MP, Rajasthan.', kw: ['second cereal', 'Punjab', 'Haryana', 'Rajasthan'] },
      { t: 'Both need fertile alluvial soil and assured water.', kw: ['alluvial', 'fertile'] }
    ], model: 'Rice: a kharif crop needing high temperature, high humidity and rainfall above 100 cm (irrigation where rainfall is less). It is the staple food crop and India is the second largest producer after China.\nWheat: a rabi crop needing 50–75 cm of rainfall and bright sunshine at the time of ripening. It is the second most important cereal crop, grown mainly in Punjab, Haryana, Uttar Pradesh, Madhya Pradesh and Rajasthan. Both thrive on fertile alluvial soil.' },
    { q: 'Why are pulses important in Indian agriculture? Give three reasons.', marks: 3, s: S.food, points: [
      { t: 'Major source of protein in a vegetarian diet.', kw: ['protein', 'vegetarian'] },
      { t: 'India is the largest producer and consumer of pulses.', kw: ['largest producer', 'consumer'] },
      { t: 'Leguminous — fix nitrogen and restore fertility, so grown in rotation.', kw: ['leguminous', 'nitrogen', 'rotation'] }
    ], model: '1. Pulses are the major source of protein in a vegetarian diet.\n2. India is the largest producer as well as consumer of pulses in the world.\n3. They are leguminous and fix nitrogen from the air, restoring soil fertility, so they are grown in rotation with other crops.' },
    { q: 'Explain any three characteristics of plantation agriculture with examples.', marks: 3, s: S.types, points: [
      { t: 'A single crop is grown over a large area.', kw: ['single crop', 'large area'] },
      { t: 'It is capital intensive and uses a migrant labour force.', kw: ['capital intensive', 'migrant labour'] },
      { t: 'Examples: tea, coffee, rubber, sugarcane, banana.', kw: ['tea', 'coffee', 'rubber', 'banana'] }
    ], model: '1. A single crop is grown over a large area.\n2. It is capital intensive and uses a migrant labour force.\n3. Examples include tea, coffee, rubber, sugarcane and banana. Tea is the classic Indian example and is labour intensive.' },
    { q: 'What is the importance of agriculture in the Indian economy?', marks: 3, s: S.reform, points: [
      { t: 'Agriculture is the backbone of the economy; two-thirds of the population depends on it.', kw: ['backbone', 'two-thirds', 'employment'] },
      { t: 'It supplies food and ensures food security.', kw: ['food', 'security', 'staple'] },
      { t: 'It provides raw material to industries such as cotton textiles, sugar and jute.', kw: ['raw material', 'textile', 'sugar', 'jute'] }
    ], model: 'Agriculture is the backbone of the Indian economy: it employs two-thirds of the population, supplies food and ensures food security, and provides raw materials to industries such as cotton textiles, sugar and jute. Its share in GDP is declining, but its employment role remains central.' }
  ],

  scenarios: [
    { title: 'Punjab, 2025: The Water Bill', text: 'A Punjab farmer grows rice every kharif season. The water table has fallen sharply. The state offers a subsidy for crop diversification.', opts: [
      { t: 'Shift part of the area to pulses and maize; pulses fix nitrogen and need less water.', ok: true, why: 'Rice needs above 100 cm of water. Pulses are leguminous, restore fertility and are grown in rotation.' },
      { t: 'Grow more rice — it is a commercial crop in Punjab.', ok: false, why: 'Rice is commercial here, but continuous rice mining of groundwater is exactly what caused the crisis.' },
      { t: 'Switch entirely to jute.', ok: false, why: 'Jute needs well-drained fertile flood-plain soils and a humid climate — not Punjab.' }
    ] },
    { title: 'Darjeeling Hills', text: 'You want a cash crop on steep, well-drained, humus-rich hill slopes with heavy rainfall.', opts: [
      { t: 'Tea — a labour-intensive plantation crop suited to hill slopes and humus-rich soil.', ok: true, why: 'Exactly the NCERT profile for tea: deep fertile well-drained soil rich in humus, on hill slopes.' },
      { t: 'Wheat — it needs bright sunshine at ripening.', ok: false, why: 'Wheat needs 50–75 cm rainfall and is a plains crop of north-west India.' },
      { t: 'Cotton — black soil is ideal.', ok: false, why: 'Cotton needs 210 frost-free days and black soil; hill slopes are unsuitable.' }
    ] },
    { title: 'The Zaid Gap', text: 'Between the rabi harvest and the kharif sowing, a farmer has 70 days and a little irrigation. What gives quick returns?', opts: [
      { t: 'Watermelon, muskmelon, cucumber and vegetables — the zaid season.', ok: true, why: 'Zaid is the short season between rabi and kharif for these crops and fodder.' },
      { t: 'Sugarcane — it takes almost a year.', ok: false, why: 'Sugarcane cannot fit a 70-day window; it takes almost a full year.' },
      { t: 'Wheat — a rabi crop.', ok: false, why: 'Wheat is the rabi crop that has just been harvested.' }
    ] }
  ],

  tables: [
    { title: 'Crop → season → signature condition', head: ['Crop', 'Season', 'Key requirement'], rows: [
      ['Rice', 'Kharif', 'Above 100 cm rainfall, high humidity'],
      ['Wheat', 'Rabi', '50–75 cm rainfall, bright sunshine at ripening'],
      ['Jowar', 'Kharif', 'Rain-fed; Maharashtra largest'],
      ['Bajra', 'Kharif', 'Sandy/shallow black soil; Rajasthan largest'],
      ['Ragi', 'Kharif', 'Rich in iron and calcium'],
      ['Maize', 'Kharif', '21–27°C, old alluvial soil'],
      ['Sugarcane', 'Nearly a year', '21–27°C, 75–100 cm'],
      ['Cotton', 'Kharif', '210 frost-free days, black soil'],
      ['Jute', 'Kharif', 'Golden fibre, flood-plain soil'],
      ['Tea', 'Plantation', 'Humus-rich, well-drained hill slopes']
    ], note: 'India: largest producer of pulses, milk, fruits and vegetables; second in rice and sugarcane.' }
  ]
};
