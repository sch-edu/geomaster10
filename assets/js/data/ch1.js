/* ============================================================
   CHAPTER 1 — Resources and Development
   NCERT Contemporary India II (rationalised). Section refs, not page
   numbers, because pagination shifts between reprints.
   ============================================================ */
const S = {
  cls: 'Classification of Resources',
  dev: 'Development of Resources',
  sus: 'Sustainable Development & Agenda 21',
  plan: 'Resource Planning',
  land: 'Land Resources & Land Use',
  degr: 'Land Degradation & Conservation',
  soil: 'Soil as a Resource',
  types: 'Classification of Soils',
  eros: 'Soil Erosion & Conservation'
};

export default {
  id: 'ch1',
  n: 1,
  title: 'Resources and Development',
  tag: 'The Foundation Vault',
  emoji: '🧱',
  hue: 18,
  blurb: 'Resources, land, soil — the chapter that quietly feeds half the board paper.',
  sections: Object.values(S),

  facts: [
    { t: "Everything available in our environment which can be used to satisfy our needs, provided it is technologically accessible, economically feasible and culturally acceptable, can be termed as a 'Resource'.", s: S.cls, k: 'resource definition' },
    { t: 'Resources are a function of human activities.', s: S.cls, k: 'function of human activities' },
    { t: 'Human beings interact with nature through technology and create institutions to accelerate their economic development.', s: S.cls, k: 'technology institutions' },
    { t: 'On the basis of origin, resources are classified into biotic and abiotic resources.', s: S.cls, k: 'origin biotic abiotic' },
    { t: 'Biotic resources are obtained from the biosphere and have life, such as human beings, flora and fauna, fisheries and livestock.', s: S.cls, k: 'biotic' },
    { t: 'Abiotic resources are composed of non-living things, such as rocks and metals.', s: S.cls, k: 'abiotic' },
    { t: 'Renewable resources can be renewed or reproduced by physical, chemical or mechanical processes, for example solar and wind energy, water, forests and wildlife.', s: S.cls, k: 'renewable' },
    { t: 'Non-renewable resources develop over a long period of time and cannot be renewed easily, for example minerals and fossil fuels.', s: S.cls, k: 'non-renewable' },
    { t: 'Some renewable resources such as solar and wind energy are not affected by human activities, whereas others like forests, wildlife, water and soil are affected.', s: S.cls, k: 'renewable affected' },
    { t: 'Non-renewable resources can further be divided into recyclable and non-recyclable resources.', s: S.cls, k: 'recyclable' },
    { t: 'Metals are recyclable, but fossil fuels and minerals like coal, petroleum and natural gas, once exhausted, cannot be replaced.', s: S.cls, k: 'metals recyclable fossil fuels' },
    { t: 'On the basis of ownership, resources are classified as individual, community, national and international resources.', s: S.cls, k: 'ownership' },
    { t: 'Individual resources are owned by individuals, for example plots, houses and other property.', s: S.cls, k: 'individual' },
    { t: 'Community owned resources are accessible to all the members of the community, for example grazing grounds, burial grounds, ponds and village wells.', s: S.cls, k: 'community' },
    { t: 'All the resources within the political boundaries and the oceanic area up to 12 nautical miles (19.2 km) of the coast, termed territorial water, belong to the nation.', s: S.cls, k: '12 nautical miles territorial water' },
    { t: 'Oceanic areas beyond 200 nautical miles are termed international resources, called the exclusive economic zone, and no individual country can utilise these without the permission of international institutions.', s: S.cls, k: '200 nautical miles EEZ' },
    { t: 'On the basis of the status of development, resources are classified as potential, developed, stock and reserves.', s: S.cls, k: 'development status' },
    { t: 'Potential resources are those found in a region but not utilised so far; Rajasthan and Gujarat have enormous potential for wind and solar energy.', s: S.cls, k: 'potential Rajasthan Gujarat' },
    { t: 'Developed resources are those which are surveyed and whose quality and quantity have been determined for utilisation.', s: S.cls, k: 'developed surveyed' },
    { t: 'Stock includes materials in the environment which can satisfy human needs but which we do not have the appropriate technology to access; water is a compound of hydrogen and oxygen but we cannot separate them.', s: S.cls, k: 'stock technology hydrogen' },
    { t: 'Reserves are the subset of stock which can be put into use with existing technical know-how but whose use has not been started, for example water in dams and forests.', s: S.cls, k: 'reserves subset stock' },

    { t: 'The history of colonisation reveals that rich resources in colonies were the main attraction for foreign invaders.', s: S.dev, k: 'colonisation' },
    { t: 'Resource development means the development of resources and their utilisation in a way that they are not depleted and do not harm the environment.', s: S.dev, k: 'resource development definition' },
    { t: 'Indiscriminate use of resources has led to depletion of resources, accumulation of resources in a few hands and global ecological crises.', s: S.dev, k: 'indiscriminate use problems' },
    { t: 'Accumulation of resources in a few hands has divided society into rich and poor.', s: S.dev, k: 'rich and poor' },
    { t: 'Global ecological crises include the greenhouse effect, ozone layer depletion and land degradation.', s: S.dev, k: 'greenhouse ozone land degradation' },

    { t: 'Sustainable development means development without damaging the environment and without compromising the needs of future generations.', s: S.sus, k: 'sustainable development definition' },
    { t: 'The Brundtland Commission Report (1987), titled Our Common Future, defined sustainable development as development that meets the needs of the present without compromising the ability of future generations to meet their own needs.', s: S.sus, k: 'Brundtland 1987' },
    { t: 'Agenda 21 was signed at the United Nations Conference on Environment and Development (UNCED) held at Rio de Janeiro, Brazil, in 1992.', s: S.sus, k: 'Agenda 21 Rio 1992' },
    { t: 'Agenda 21 aims to combat environmental damage, poverty and disease through global cooperation on common interests, mutual needs and shared responsibilities.', s: S.sus, k: 'Agenda 21 aims' },
    { t: 'One major objective of Agenda 21 is that every local government should draw its own local Agenda 21.', s: S.sus, k: 'local Agenda 21' },

    { t: 'Resource planning is essential for the balanced development of a country and for ensuring equitable distribution of resources.', s: S.plan, k: 'resource planning need' },
    { t: 'The first step of resource planning is identification and inventory of resources through surveying, mapping and qualitative and quantitative estimation and measurement.', s: S.plan, k: 'identification inventory surveying' },
    { t: 'The second step of resource planning is making a planning structure endowed with appropriate technology, skill and institutional set-up.', s: S.plan, k: 'planning structure technology skill' },
    { t: 'The third step of resource planning is matching the resource development plans with overall national development plans.', s: S.plan, k: 'matching national plans' },
    { t: "Since independence, resource conservation and utilisation have been part of India's Five Year Plans.", s: S.plan, k: 'five year plans' },

    { t: "India's total geographical area is 3.28 million square kilometres.", s: S.land, k: '3.28 million' },
    { t: 'About 43 per cent of the land area is plain, 30 per cent mountains and 27 per cent plateaus.', s: S.land, k: '43 30 27' },
    { t: 'Plains provide facilities for agriculture and industry, mountains ensure the perennial flow of rivers, and plateaus possess rich reserves of minerals, fossil fuels and forests.', s: S.land, k: 'relief features uses' },
    { t: 'Land is a finite resource, so land-use planning is essential.', s: S.land, k: 'land finite' },
    { t: 'Land use data is available only for 93 per cent of the total geographical area.', s: S.land, k: '93 per cent data' },
    { t: 'Forest area in the country is far lower than the desired 33 per cent of the geographical area outlined in the National Forest Policy (1952).', s: S.land, k: '33 per cent forest policy 1952' },
    { t: 'Net sown area is about 45.5 per cent of the total geographical area, while forest cover is about 21.7 per cent.', s: S.land, k: '45.5 net sown 21.7 forest' },
    { t: 'Net sown area is more than 80 per cent in Punjab and Haryana and less than 10 per cent in Arunachal Pradesh, Mizoram, Manipur and the Andaman and Nicobar Islands.', s: S.land, k: 'Punjab Haryana 80 per cent' },
    { t: 'Land put to non-agricultural uses is increasing because of urbanisation and industrialisation.', s: S.land, k: 'non-agricultural uses increasing' },
    { t: 'Barren and waste land, culturable waste land and fallow land have decreased marginally due to increasing demand for land.', s: S.land, k: 'waste land fallow decreased' },

    { t: 'Land degradation is caused by deforestation, overgrazing, mining and quarrying, over-irrigation, industrial effluents and alkalinisation.', s: S.degr, k: 'land degradation causes' },
    { t: 'Overgrazing is one of the main reasons for land degradation in Gujarat, Rajasthan, Madhya Pradesh and Maharashtra.', s: S.degr, k: 'overgrazing states' },
    { t: 'Over-irrigation is responsible for land degradation in Punjab, Haryana and western Uttar Pradesh because of water-logging and alkalinity.', s: S.degr, k: 'over-irrigation water logging alkalinity' },
    { t: 'Mining and quarrying cause land degradation in mineral-rich states such as Jharkhand, Chhattisgarh and Odisha.', s: S.degr, k: 'mining states' },
    { t: 'In the Chambal basin, land has become unfit for cultivation and is called badland or ravines.', s: S.degr, k: 'Chambal ravines badland' },

    { t: 'Soil is the most important renewable natural resource.', s: S.soil, k: 'soil renewable resource' },
    { t: 'Soil is the medium of plant growth and supports different types of living organisms on the earth.', s: S.soil, k: 'medium of plant growth' },
    { t: 'Soil formation is influenced by relief, parent rock or bed rock, climate, vegetation, other forms of life and time.', s: S.soil, k: 'soil formation factors' },
    { t: 'Change in temperature, the action of running water, wind and glaciers, and the activities of decomposers contribute to the formation of soil.', s: S.soil, k: 'soil formation forces' },

    { t: 'Alluvial soil is the most widely spread and important soil of India.', s: S.types, k: 'alluvial most widespread' },
    { t: 'Alluvial soils are rich in potash, phosphoric acid and lime but deficient in humus and nitrogen.', s: S.types, k: 'alluvial potash phosphoric lime humus nitrogen' },
    { t: 'Khadar is new alluvium, sandy and more fertile, while bhangar is old alluvium, clayey and contains kankar nodules.', s: S.types, k: 'khadar bhangar' },
    { t: 'Black soil is also known as regur soil or black cotton soil and is ideal for growing cotton.', s: S.types, k: 'regur black cotton' },
    { t: 'Black soil is made up of very fine clayey material and is formed from the lava flows of the Deccan trap.', s: S.types, k: 'deccan trap lava' },
    { t: 'Black soil is rich in calcium carbonate, magnesium, potash and lime but poor in phosphoric acid.', s: S.types, k: 'black soil nutrients' },
    { t: 'Black soil retains moisture and develops deep cracks in hot weather, which helps in proper aeration.', s: S.types, k: 'black soil cracks aeration' },
    { t: 'Red and yellow soils develop on crystalline igneous rocks in areas of low rainfall in the eastern and southern parts of the Deccan plateau.', s: S.types, k: 'red yellow igneous' },
    { t: 'Red soil is red because of the diffusion of iron, and it looks yellow when it occurs in a hydrated form.', s: S.types, k: 'red iron hydrated yellow' },
    { t: 'Laterite soils develop in areas of high temperature and heavy rainfall with alternate wet and dry periods.', s: S.types, k: 'laterite high temperature heavy rainfall' },
    { t: 'Laterite soil is the result of intense leaching due to heavy rain and has low humus content because decomposers are destroyed by high temperature.', s: S.types, k: 'leaching humus decomposers' },
    { t: 'Laterite soil is suitable for tea, coffee, cashew and rubber and is found in Kerala, Tamil Nadu, Madhya Pradesh and the hilly areas of Odisha and Assam.', s: S.types, k: 'laterite crops Kerala' },
    { t: 'Arid soil ranges from red to brown, is sandy and saline, and has a kankar layer in the lower horizons that restricts infiltration of water.', s: S.types, k: 'arid saline kankar infiltration' },
    { t: 'Forest soil is loamy and silty in valley sides and coarse grained on the upper slopes.', s: S.types, k: 'forest soil loamy silty' },

    { t: 'Sheet erosion, gully erosion and wind erosion are the main types of soil erosion.', s: S.eros, k: 'erosion types' },
    { t: 'Deforestation, overgrazing, construction and mining are responsible for soil erosion.', s: S.eros, k: 'erosion causes' },
    { t: 'Contour ploughing, terrace farming, strip cropping and shelter belts check soil erosion.', s: S.eros, k: 'conservation methods' }
  ],

  paragraphs: [
    { s: S.cls, text: [
      "Everything available in our environment which can be used to satisfy our needs, provided it is technologically accessible, economically feasible and culturally acceptable, can be termed as a 'Resource'.",
      'Resources are a function of human activities.',
      'Human beings interact with nature through technology and create institutions to accelerate their economic development.'
    ], q: 'Snipe the sentence that gives the THREE conditions a thing must satisfy before it becomes a resource.', a: 0 },

    { s: S.cls, text: [
      'Individual resources are owned by individuals, for example plots, houses and other property.',
      'Community owned resources are accessible to all the members of the community, for example grazing grounds, burial grounds, ponds and village wells.',
      'All the resources within the political boundaries and the oceanic area up to 12 nautical miles of the coast, termed territorial water, belong to the nation.',
      'Oceanic areas beyond 200 nautical miles are termed international resources, called the exclusive economic zone.'
    ], q: 'Snipe the sentence that fixes the exact limit of territorial water that belongs to a nation.', a: 2 },

    { s: S.types, text: [
      'Black soil is also known as regur soil or black cotton soil and is ideal for growing cotton.',
      'It is made up of very fine clayey material and is formed from the lava flows of the Deccan trap.',
      'It is rich in calcium carbonate, magnesium, potash and lime but poor in phosphoric acid.',
      'It retains moisture and develops deep cracks in hot weather, which helps in proper aeration.'
    ], q: 'Snipe the sentence that explains WHY the deep cracks matter (the reason examiners want).', a: 3 },

    { s: S.land, text: [
      'Land is a finite resource, so land-use planning is essential.',
      'Forest area in the country is far lower than the desired 33 per cent outlined in the National Forest Policy (1952).',
      'Net sown area is more than 80 per cent in Punjab and Haryana and less than 10 per cent in Arunachal Pradesh, Mizoram, Manipur and the Andaman and Nicobar Islands.'
    ], q: 'Snipe the sentence that names the policy AND its desired forest-cover percentage.', a: 1 },

    { s: S.eros, text: [
      'Deforestation, overgrazing, construction and mining are responsible for soil erosion.',
      'Contour ploughing, terrace farming, strip cropping and shelter belts are methods of soil conservation.',
      'In the Chambal basin, land has become unfit for cultivation and is called badland or ravines.'
    ], q: 'Snipe the sentence that lists the four soil-conservation methods.', a: 1 },

    { s: S.sus, text: [
      'Agenda 21 was signed at UNCED held in Rio de Janeiro, Brazil, in 1992.',
      'It aims to combat environmental damage, poverty and disease through global cooperation.',
      'One major objective is that every local government should draw its own local Agenda 21.'
    ], q: 'Snipe the sentence containing the city, country and year of the Earth Summit.', a: 0 }
  ],

  defs: [
    { term: 'Resource', s: S.cls, correct: 'Anything in our environment which can be used to satisfy our needs, provided it is technologically accessible, economically feasible and culturally acceptable.', traps: [
      'Anything in our environment which is natural, unlimited and free for all human beings to use.',
      'Anything produced by humans in factories that can be sold in the market for a profit.',
      'Anything in our environment which is technologically accessible, even if it is economically unviable.'
    ] },
    { term: 'Sustainable development', s: S.sus, correct: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.', traps: [
      'Development that stops all use of natural resources so that they remain untouched for the future.',
      'Development that meets the needs of future generations before meeting present needs.',
      'Development of resources at maximum speed so that the economy grows fastest.'
    ] },
    { term: 'Agenda 21', s: S.sus, correct: 'A global programme signed at the Rio Earth Summit (UNCED) in 1992 to combat environmental damage, poverty and disease through global cooperation.', traps: [
      'A 21-point plan signed at the Brundtland Commission in 1987 to increase industrial output.',
      'A treaty signed in Kyoto in 1997 to reduce the use of fossil fuels only.',
      'A national programme of the Indian government to plant 21 trees per person.'
    ] },
    { term: 'Potential resource', s: S.cls, correct: 'A resource found in a region which has not been utilised so far — for example, wind and solar energy in Rajasthan and Gujarat.', traps: [
      'A resource whose quality and quantity have been surveyed and determined for utilisation.',
      'A resource which we do not have the technology to access at all.',
      'A resource that has been fully used up and can never be used again.'
    ] },
    { term: 'Stock', s: S.cls, correct: 'Materials in the environment which can satisfy human needs but which we do not have the appropriate technology to access.', traps: [
      'The part of a resource that can be used with existing technology but has not been used yet.',
      'The total quantity of a resource that a country has already consumed.',
      'Resources owned by the community, such as grazing grounds and ponds.'
    ] },
    { term: 'Reserves', s: S.cls, correct: 'A subset of stock which can be put into use with existing technical know-how, but whose use has not been started — e.g. water in dams.', traps: [
      'All the resources present in a region, whether or not they have been surveyed.',
      'Resources for which we have no technology at all, such as hydrogen from water.',
      'Resources lying beyond 200 nautical miles of the coast.'
    ] },
    { term: 'Badland / Ravines', s: S.degr, correct: 'Land which has become unfit for cultivation due to gully erosion, as in the Chambal basin.', traps: [
      'Land left uncultivated for one or two agricultural seasons.',
      'Land used for grazing by the whole community.',
      'Land with a high kankar content that restricts water infiltration.'
    ] },
    { term: 'Khadar', s: S.types, correct: 'New alluvium which is sandy, more fertile and renewed every year by floods.', traps: [
      'Old alluvium which is clayey and contains kankar nodules.',
      'Black clayey soil formed from lava flows of the Deccan trap.',
      'Sandy and saline soil of western Rajasthan.'
    ] },
    { term: 'Bhangar', s: S.types, correct: 'Old alluvium which is clayey and contains kankar nodules in the lower horizons.', traps: [
      'New alluvium deposited by rivers every year during floods.',
      'Soil formed by intense leaching in areas of heavy rainfall.',
      'Coarse-grained soil found on the upper slopes of mountains.'
    ] },
    { term: 'Regur soil', s: S.types, correct: 'Black cotton soil formed from Deccan trap lava, clayey, moisture-retentive and ideal for cotton.', traps: [
      'Red soil formed from crystalline igneous rocks in low rainfall areas.',
      'Laterite soil formed by intense leaching in high rainfall areas.',
      'Alluvial soil rich in potash, phosphoric acid and lime.'
    ] },
    { term: 'Territorial water', s: S.cls, correct: 'The oceanic area up to 12 nautical miles (19.2 km) from the coast, which belongs to the nation.', traps: [
      'The oceanic area up to 200 nautical miles from the coast.',
      'The area beyond 200 nautical miles, called the exclusive economic zone.',
      'All water bodies, including rivers and lakes, inside a country.'
    ] },
    { term: 'Shelter belt', s: S.eros, correct: 'Rows of trees planted to break the force of wind and check wind erosion.', traps: [
      'Ploughing along the contour lines to slow down the flow of water.',
      'Growing crops in alternate strips to check wind erosion.',
      'Cutting steps on steep slopes to grow crops.'
    ] }
  ],

  mcq: [
    { q: 'Which one of the following is a community owned resource?', o: ['A plot of land owned by a farmer', 'Grazing grounds and village ponds', 'A railway line', 'Oceanic waters beyond 200 nautical miles'], a: 1, why: 'Grazing grounds, burial grounds, ponds and village wells are accessible to all members of the community.', s: S.cls, d: 1 },
    { q: 'Resources which are surveyed and whose quality and quantity have been determined for utilisation are called:', o: ['Potential resources', 'Stock', 'Developed resources', 'Reserves'], a: 2, why: 'Developed resources are surveyed and measured; potential ones are not yet utilised.', s: S.cls, d: 1 },
    { q: 'Water in a dam can be used for irrigation with existing technology, but its use has not started. It is an example of:', o: ['Stock', 'Reserve', 'Potential resource', 'International resource'], a: 1, why: 'Reserves are a subset of stock usable with existing know-how but not yet in use — water in dams, forests.', s: S.cls, d: 2 },
    { q: 'The exclusive economic zone extends up to:', o: ['12 nautical miles', '24 nautical miles', '100 nautical miles', '200 nautical miles'], a: 3, why: 'Beyond 200 nautical miles lies international resource territory; up to 12 nm is territorial water.', s: S.cls, d: 2 },
    { q: 'Which report defined sustainable development as development that meets present needs without compromising future generations?', o: ['Agenda 21, 1992', 'Brundtland Commission Report, 1987', 'National Forest Policy, 1952', 'Rio+20, 2012'], a: 1, why: "The Brundtland Commission Report (1987), 'Our Common Future', gave this definition.", s: S.sus, d: 1 },
    { q: 'Agenda 21 was signed at:', o: ['Kyoto, Japan, 1997', 'Rio de Janeiro, Brazil, 1992', 'Stockholm, Sweden, 1972', 'Paris, France, 2015'], a: 1, why: 'It was signed at the United Nations Conference on Environment and Development (UNCED), Rio de Janeiro, 1992.', s: S.sus, d: 1 },
    { q: 'Which is the correct order of the three steps of resource planning?', o: ['Planning structure → inventory → matching with national plans', 'Inventory → planning structure → matching with national plans', 'Matching with national plans → inventory → planning structure', 'Inventory → matching with national plans → planning structure'], a: 1, why: 'Identify and inventory → build a planning structure with technology, skill and institutions → match with national development plans.', s: S.plan, d: 2 },
    { q: 'What percentage of India’s total geographical area is plain?', o: ['27 per cent', '30 per cent', '43 per cent', '57 per cent'], a: 2, why: 'About 43% plain, 30% mountains, 27% plateaus.', s: S.land, d: 1 },
    { q: 'The National Forest Policy (1952) desired forest cover of:', o: ['21.7 per cent', '25 per cent', '33 per cent', '45.5 per cent'], a: 2, why: '33% of the geographical area was desired; actual forest cover is about 21.7%.', s: S.land, d: 1 },
    { q: 'Net sown area is more than 80 per cent in:', o: ['Punjab and Haryana', 'Arunachal Pradesh and Mizoram', 'Kerala and Tamil Nadu', 'Odisha and Chhattisgarh'], a: 0, why: 'Punjab and Haryana exceed 80%; Arunachal, Mizoram, Manipur and A&N Islands are below 10%.', s: S.land, d: 1 },
    { q: 'Land degradation in Punjab, Haryana and western Uttar Pradesh is mainly due to:', o: ['Overgrazing', 'Mining and quarrying', 'Over-irrigation causing water-logging and alkalinity', 'Deforestation'], a: 2, why: 'Excess irrigation leads to water-logging and alkalinity in these areas.', s: S.degr, d: 2 },
    { q: 'Black soil is poor in which nutrient?', o: ['Potash', 'Lime', 'Magnesium', 'Phosphoric acid'], a: 3, why: 'Black soil is rich in calcium carbonate, magnesium, potash and lime — but poor in phosphoric acid.', s: S.types, d: 2 },
    { q: 'Which soil develops due to intense leaching in areas of heavy rainfall with alternate wet and dry spells?', o: ['Alluvial', 'Laterite', 'Black', 'Arid'], a: 1, why: 'Laterite soil is a leaching product; decomposers are destroyed by high temperature so humus is low.', s: S.types, d: 2 },
    { q: 'Laterite soil is most suitable for which group of crops?', o: ['Cotton and wheat', 'Tea, coffee, cashew and rubber', 'Rice and jute', 'Millets and gram'], a: 1, why: 'Tea, coffee, cashew and rubber do well on laterite soil of Kerala, Tamil Nadu, MP and hilly Odisha/Assam.', s: S.types, d: 1 },
    { q: 'The kankar layer in arid soil is a problem because it:', o: ['Increases humus content', 'Restricts infiltration of water', 'Makes the soil acidic', 'Removes salinity'], a: 1, why: 'The kankar layer in the lower horizon restricts the infiltration of water; the soil is sandy and saline.', s: S.types, d: 2 },
    { q: 'Which of these is NOT a method of soil conservation?', o: ['Contour ploughing', 'Terrace farming', 'Strip cropping', 'Over-irrigation'], a: 3, why: 'Over-irrigation causes water-logging and alkalinity — it degrades soil instead of conserving it.', s: S.eros, d: 1 },
    { q: 'Ravines (badland) are typically found in the:', o: ['Chambal basin', 'Sundarbans', 'Thar desert', 'Nilgiri hills'], a: 0, why: 'In the Chambal basin, gully erosion has made land unfit for cultivation — these are ravines.', s: S.degr, d: 1 },
    { q: 'Which statement about alluvial soil is INCORRECT?', o: ['It is the most widely spread soil of India', 'It is rich in potash, phosphoric acid and lime', 'It is rich in humus and nitrogen', 'Khadar is more fertile than bhangar'], a: 2, why: 'Alluvial soil is deficient in humus and nitrogen, though rich in potash, phosphoric acid and lime.', s: S.types, d: 3 }
  ],

  errors: [
    { stmt: 'Potential resources are those whose quality and quantity have already been surveyed and determined.', ok: false, fix: 'That describes DEVELOPED resources. Potential resources are found in a region but have not been utilised — e.g. wind and solar energy in Rajasthan and Gujarat.', s: S.cls },
    { stmt: 'Territorial water extends up to 200 nautical miles from the coast.', ok: false, fix: 'Territorial water extends only up to 12 nautical miles (19.2 km). The 200-nautical-mile zone is the exclusive economic zone, i.e. international resources.', s: S.cls },
    { stmt: 'Agenda 21 was signed in 1987 at the Brundtland Commission.', ok: false, fix: 'Agenda 21 was signed at UNCED, Rio de Janeiro, Brazil, in 1992. 1987 is the Brundtland Commission Report.', s: S.sus },
    { stmt: 'Land use data is available for the entire geographical area of India.', ok: false, fix: 'Land use data is available only for 93 per cent of the total geographical area.', s: S.land },
    { stmt: 'Black soil is rich in phosphoric acid.', ok: false, fix: 'Black soil is POOR in phosphoric acid; it is rich in calcium carbonate, magnesium, potash and lime.', s: S.types },
    { stmt: 'Laterite soil is suitable for cotton.', ok: false, fix: 'Cotton thrives on black (regur) soil. Laterite is suitable for tea, coffee, cashew and rubber.', s: S.types },
    { stmt: 'Over-irrigation improves soil fertility in Punjab and Haryana.', ok: false, fix: 'Over-irrigation causes water-logging and alkalinity, and is a major cause of land degradation there.', s: S.degr },
    { stmt: 'Forest cover in India is about 33 per cent of the geographical area.', ok: false, fix: 'Actual forest cover is about 21.7 per cent. 33 per cent was only the DESIRED level of the National Forest Policy, 1952.', s: S.land },
    { stmt: 'Community resources are owned by the government and used by officials.', ok: false, fix: 'Community resources are accessible to all members of the community — grazing grounds, burial grounds, ponds, village wells.', s: S.cls },
    { stmt: 'Contour ploughing is the cutting of steps on steep slopes.', ok: false, fix: 'Cutting steps on slopes is terrace farming. Contour ploughing is ploughing along the contour lines to slow water flow.', s: S.eros },
    { stmt: 'The three problems created by indiscriminate resource use are depletion, concentration of resources in a few hands, and global ecological crises.', ok: true, fix: 'Correct — depletion, accumulation in few hands (rich/poor divide), and ecological crises such as greenhouse effect, ozone depletion and land degradation.', s: S.dev },
    { stmt: 'Khadar soil is old alluvium containing kankar nodules.', ok: false, fix: 'That is bhangar. Khadar is NEW alluvium — sandy, more fertile and renewed every year.', s: S.types }
  ],

  sortSets: [
    { title: 'Sort by origin and exhaustibility', s: S.cls, bins: [
      { name: 'Biotic', items: ['Plants', 'Animals', 'Fish', 'Livestock', 'Human beings'] },
      { name: 'Abiotic', items: ['Rocks', 'Metals', 'Minerals'] },
      { name: 'Renewable', items: ['Solar energy', 'Wind energy', 'Water', 'Forests', 'Wildlife'] },
      { name: 'Non-renewable', items: ['Coal', 'Petroleum', 'Natural gas', 'Fossil fuels'] }
    ] },
    { title: 'Sort by ownership', s: S.cls, bins: [
      { name: 'Individual', items: ['Your house', 'A private plot', 'Personal property'] },
      { name: 'Community', items: ['Grazing grounds', 'Burial grounds', 'Village pond', 'Village well'] },
      { name: 'National', items: ['Railways', 'Roads', 'Canals', 'Territorial water up to 12 nm'] },
      { name: 'International', items: ['Exclusive economic zone', 'Ocean beyond 200 nm', 'Antarctica'] }
    ] },
    { title: 'Sort by development status', s: S.cls, bins: [
      { name: 'Potential', items: ['Wind energy in Rajasthan', 'Solar energy in Gujarat', 'Untapped coal basin'] },
      { name: 'Developed', items: ['Water in a functioning canal', 'Surveyed iron ore mine in use'] },
      { name: 'Stock', items: ['Hydrogen in water', 'Minerals we cannot extract yet'] },
      { name: 'Reserves', items: ['Water in dams', 'Forests', 'Unused surveyed ore reserves'] }
    ] },
    { title: 'Match the soil to its signature property', s: S.types, bins: [
      { name: 'Alluvial', items: ['Rich in potash, phosphoric acid and lime', 'Khadar and bhangar', 'Northern plains and deltas'] },
      { name: 'Black / Regur', items: ['Deccan trap lava', 'Ideal for cotton', 'Deep cracks in hot weather'] },
      { name: 'Laterite', items: ['Intense leaching', 'Suitable for tea and coffee', 'Low humus, acidic'] },
      { name: 'Arid', items: ['Sandy and saline', 'Kankar layer restricts infiltration', 'Red to brown'] }
    ] },
    { title: 'Conservation or degradation?', s: S.degr, bins: [
      { name: 'Soil conservation', items: ['Contour ploughing', 'Terrace farming', 'Strip cropping', 'Shelter belts'] },
      { name: 'Causes of degradation', items: ['Overgrazing', 'Mining and quarrying', 'Over-irrigation', 'Deforestation'] }
    ] }
  ],

  mapItems: [
    { name: 'Alluvial soil — Ganga plain', lat: 26.2, lon: 82.0, cat: 'soil', why: 'Widespread in the northern plains; rich in potash, phosphoric acid and lime, deficient in humus and nitrogen.' },
    { name: 'Alluvial soil — Punjab', lat: 30.9, lon: 75.5, cat: 'soil', why: 'Net sown area here is more than 80 per cent of the geographical area.' },
    { name: 'Black (regur) soil — Maharashtra', lat: 19.6, lon: 75.6, cat: 'soil', why: 'Deccan trap lava region; ideal for cotton, retains moisture, deep cracks in hot weather.' },
    { name: 'Black soil — Malwa plateau', lat: 23.2, lon: 76.0, cat: 'soil', why: 'Part of the Deccan trap belt, rich in calcium carbonate, magnesium, potash and lime.' },
    { name: 'Red and yellow soil — Tamil Nadu', lat: 11.2, lon: 78.4, cat: 'soil', why: 'Develops on crystalline igneous rocks in low-rainfall eastern and southern Deccan.' },
    { name: 'Laterite soil — Kerala', lat: 10.3, lon: 76.4, cat: 'soil', why: 'High temperature, heavy rainfall and alternate wet–dry periods cause intense leaching.' },
    { name: 'Arid soil — Rajasthan', lat: 27.0, lon: 72.6, cat: 'soil', why: 'Sandy, saline, red to brown; kankar layer restricts infiltration; becomes cultivable with irrigation.' },
    { name: 'Forest soil — Himachal Himalaya', lat: 31.8, lon: 77.3, cat: 'soil', why: 'Loamy and silty in valleys, coarse on upper slopes, acidic with low humus in snow-covered areas.' },
    { name: 'Laterite — hilly Odisha', lat: 20.4, lon: 84.6, cat: 'soil', why: 'Laterite also occurs in the hilly areas of Odisha and Assam, and in Madhya Pradesh.' },
    { name: 'Chambal ravines (badland)', lat: 26.6, lon: 78.3, cat: 'land', why: 'Gully erosion has made land unfit for cultivation — this is badland or ravines.' },
    { name: 'Thar Desert — overgrazing belt', lat: 27.4, lon: 71.4, cat: 'land', why: 'Rajasthan is one of the states where overgrazing is a main reason for land degradation.' },
    { name: 'Jharkhand — mining degradation', lat: 23.6, lon: 85.3, cat: 'land', why: 'Mining and quarrying cause land degradation in Jharkhand, Chhattisgarh and Odisha.' },
    { name: 'Punjab — over-irrigation', lat: 30.8, lon: 75.2, cat: 'land', why: 'Over-irrigation causes water-logging and alkalinity; net sown area is over 80% here.' },
    { name: 'Deccan Trap', lat: 18.6, lon: 75.4, cat: 'land', why: 'Lava flows of the Deccan trap are the parent material of black soil.' }
  ],
  mapCats: { soil: { label: 'Soil regions', color: '#ffc44d' }, land: { label: 'Land degradation', color: '#ff8a3d' } },

  detective: [
    { name: 'Black soil (regur)', clues: ['I am made of very fine clayey material.', 'I was born from lava flows of the Deccan trap.', 'I am rich in calcium carbonate, magnesium, potash and lime but poor in phosphoric acid.', 'I retain moisture and crack deeply in hot weather, which aerates me.'], crops: 'Cotton', why: 'All four clues are the NCERT signature of black/regur or black cotton soil.' },
    { name: 'Alluvial soil', clues: ['I am the most widely spread soil of India.', 'I am rich in potash, phosphoric acid and lime but poor in humus and nitrogen.', 'My newer version is sandy and more fertile; my older version is clayey with kankar nodules.'], crops: 'Wheat, rice, sugarcane, jute', why: 'Khadar (new) and bhangar (old) alluvium — the northern plains and deltas.' },
    { name: 'Laterite soil', clues: ['I form where temperature is high and rainfall is heavy with alternate wet and dry spells.', 'Intense leaching has washed my nutrients away.', 'High temperature destroys my decomposers, so my humus is low.', 'Tea, coffee, cashew and rubber love me.'], crops: 'Tea, coffee, cashew, rubber', why: 'Laterite soils of Kerala, Tamil Nadu, MP and hilly Odisha/Assam; also used as building bricks.' },
    { name: 'Arid soil', clues: ['I range from red to brown.', 'I am sandy and saline in nature.', 'My lower horizon has a kankar layer that blocks water.', 'With irrigation I can become cultivable, as in western Rajasthan.'], crops: 'Bajra, pulses (with irrigation)', why: 'Dry climate and fast evaporation leave me lacking humus and moisture.' },
    { name: 'Red and yellow soil', clues: ['I develop on crystalline igneous rocks.', 'I occur in low rainfall areas of the eastern and southern Deccan plateau.', 'I am red because of iron diffusion, and yellow when hydrated.', 'I am poor in nitrogen, phosphoric acid and humus.'], crops: 'Rice, wheat, sugarcane, pulses', why: 'Red and yellow soils of the Deccan — colour comes from iron, hydrated form is yellow.' },
    { name: 'Forest soil', clues: ['I am found in hilly and mountainous areas with sufficient rain forests.', 'I am loamy and silty on valley sides but coarse-grained on upper slopes.', 'In snow-covered Himalayan areas I am acidic with low humus.'], crops: 'Tea, spices, horticulture', why: 'Forest soils are fertile in the lower valley parts and denuded on upper slopes.' }
  ],

  longQ: [
    { q: 'Explain any three problems created by the indiscriminate use of resources.', marks: 3, s: S.dev, points: [
      { t: 'Depletion of resources for satisfying the greed of a few individuals.', kw: ['depletion', 'greed'] },
      { t: 'Accumulation of resources in a few hands, dividing society into rich and poor.', kw: ['accumulation', 'few hands', 'rich', 'poor'] },
      { t: 'Global ecological crises — greenhouse effect, ozone layer depletion, land degradation.', kw: ['greenhouse', 'ozone', 'land degradation', 'ecological'] }
    ], model: 'Indiscriminate use of resources has led to three major problems:\n1. Depletion of resources for satisfying the greed of a few individuals.\n2. Accumulation of resources in a few hands, which has divided society into rich and poor.\n3. Global ecological crises such as the greenhouse effect, ozone layer depletion and land degradation.' },
    { q: '“Resource planning is essential for a sustainable existence.” Support the statement with three arguments.', marks: 3, s: S.plan, points: [
      { t: 'Resources are unevenly distributed across regions, so planning is needed for balanced development.', kw: ['uneven', 'balanced', 'regional'] },
      { t: 'Planning ensures equitable distribution of resources and reduces the rich–poor gap.', kw: ['equitable', 'distribution', 'rich', 'poor'] },
      { t: 'It prevents over-exploitation, wastage and depletion, conserving resources for future generations.', kw: ['over-exploit', 'wastage', 'depletion', 'future'] },
      { t: 'It links resource development with national development plans and appropriate technology.', kw: ['national development', 'technology', 'five year'] }
    ], model: 'Resource planning is essential because:\n1. Resources are unevenly distributed; planning ensures balanced regional development.\n2. It ensures equitable distribution of resources and reduces the gap between rich and poor.\n3. It prevents over-exploitation and wastage, conserving resources for future generations and matching resource development with national development plans.' },
    { q: 'Distinguish between khadar and bhangar soils.', marks: 3, s: S.types, points: [
      { t: 'Khadar is new alluvium; bhangar is old alluvium.', kw: ['new alluvium', 'old alluvium'] },
      { t: 'Khadar is sandy and more fertile; bhangar is clayey and less fertile.', kw: ['sandy', 'clayey', 'fertile'] },
      { t: 'Khadar is renewed every year by floods; bhangar contains kankar nodules in lower horizons.', kw: ['every year', 'flood', 'kankar'] }
    ], model: 'Khadar: new alluvium, sandy and more fertile, found in the lower parts of the plains and renewed every year by floods.\nBhangar: old alluvium, clayey, contains kankar nodules in the lower horizons and is comparatively less fertile.' },
    { q: 'Explain the factors responsible for land degradation in India and suggest any two measures to conserve land.', marks: 5, s: S.degr, points: [
      { t: 'Deforestation and overgrazing remove vegetation cover and expose soil.', kw: ['deforestation', 'overgrazing'] },
      { t: 'Overgrazing is a main cause in Gujarat, Rajasthan, Madhya Pradesh and Maharashtra.', kw: ['Gujarat', 'Rajasthan', 'Madhya Pradesh', 'Maharashtra'] },
      { t: 'Mining and quarrying degrade land in Jharkhand, Chhattisgarh and Odisha.', kw: ['mining', 'quarrying', 'Jharkhand', 'Chhattisgarh', 'Odisha'] },
      { t: 'Over-irrigation causes water-logging and alkalinity in Punjab, Haryana and western UP.', kw: ['over-irrigation', 'water-logging', 'alkalinity', 'Punjab', 'Haryana'] },
      { t: 'Industrial effluents and alkalinisation also degrade land; conservation measures include afforestation, control of mining, proper irrigation and terrace/contour farming.', kw: ['effluents', 'afforestation', 'terrace', 'contour', 'shelter belt'] }
    ], model: 'Causes:\n• Deforestation and overgrazing — overgrazing is a main cause in Gujarat, Rajasthan, Madhya Pradesh and Maharashtra.\n• Mining and quarrying — in Jharkhand, Chhattisgarh and Odisha.\n• Over-irrigation — causes water-logging and alkalinity in Punjab, Haryana and western Uttar Pradesh.\n• Industrial effluents and alkalinisation.\nMeasures:\n1. Afforestation and control of overgrazing.\n2. Contour ploughing, terrace farming, strip cropping and shelter belts; proper irrigation instead of over-irrigation.' },
    { q: 'Describe any three characteristics of black soil.', marks: 3, s: S.types, points: [
      { t: 'Made of very fine clayey material, formed from Deccan trap lava flows.', kw: ['clayey', 'deccan trap', 'lava'] },
      { t: 'Rich in calcium carbonate, magnesium, potash and lime, poor in phosphoric acid.', kw: ['calcium carbonate', 'magnesium', 'potash', 'phosphoric'] },
      { t: 'Retains moisture and develops deep cracks in hot weather, helping aeration; ideal for cotton.', kw: ['moisture', 'cracks', 'aeration', 'cotton'] }
    ], model: '1. Black soil is made up of very fine clayey material and is formed from the lava flows of the Deccan trap.\n2. It is rich in calcium carbonate, magnesium, potash and lime but poor in phosphoric acid.\n3. It retains moisture and develops deep cracks in hot weather, which helps in proper aeration; it is ideal for growing cotton.' },
    { q: 'Why is soil considered an important resource? Give any three reasons.', marks: 3, s: S.soil, points: [
      { t: 'Soil is the most important renewable natural resource.', kw: ['renewable'] },
      { t: 'It is the medium of plant growth.', kw: ['medium', 'plant growth'] },
      { t: 'It supports different types of living organisms on the earth.', kw: ['organisms', 'living'] }
    ], model: '1. Soil is the most important renewable natural resource.\n2. It is the medium of plant growth.\n3. It supports different types of living organisms on the earth.' }
  ],

  scenarios: [
    { title: 'The Jharkhand Mining Expansion', text: 'A mining company wants to expand an open-cast iron ore mine near a forest village in Jharkhand. The panchayat says the land is already degrading. You are the district resource planner.', opts: [
      { t: 'Allow expansion, but mandate afforestation of twice the mined area, check-dams and land reclamation.', ok: true, why: 'Mining and quarrying are stated causes of land degradation in Jharkhand, Chhattisgarh and Odisha. Reclamation + afforestation matches the NCERT conservation approach.' },
      { t: 'Reject the mine completely and declare the area a no-development zone.', ok: false, why: 'Too extreme — resources must be developed for national needs, but sustainably. The book demands development without depletion or environmental harm.' },
      { t: 'Allow expansion with no conditions, because minerals are national resources.', ok: false, why: 'National ownership does not permit indiscriminate use — that produces depletion and ecological crises.' }
    ] },
    { title: 'Punjab’s Falling Water Table', text: 'A Punjab farmer floods his fields with canal water for paddy. Neighbours report white patches on the soil surface and standing water in low areas. Diagnose the problem.', opts: [
      { t: 'Over-irrigation has caused water-logging and alkalinity — switch to controlled irrigation and suitable crops.', ok: true, why: 'Exactly the NCERT line: over-irrigation is responsible for land degradation in Punjab, Haryana and western UP because of water-logging and alkalinity.' },
      { t: 'This is sheet erosion; plant shelter belts.', ok: false, why: 'Shelter belts check WIND erosion. White patches + standing water point to salinity/alkalinity from over-irrigation.' },
      { t: 'The soil is laterite and low in humus; add lime.', ok: false, why: 'Laterite belongs to high-rainfall areas (Kerala, TN, MP, Odisha, Assam), not the Punjab plains.' }
    ] },
    { title: 'Rio, 1992 — You Are in the Room', text: 'You are drafting a global action plan to fight environmental damage, poverty and disease. A delegate asks what local bodies should do.', opts: [
      { t: 'Every local government should draw up its own local Agenda 21.', ok: true, why: 'That is the major stated objective of Agenda 21 signed at UNCED, Rio de Janeiro, 1992.' },
      { t: 'Only national governments should act; local bodies have no role.', ok: false, why: 'Agenda 21 explicitly wants local Agenda 21 for every local government.' },
      { t: 'Focus only on industrial pollution, not poverty or disease.', ok: false, why: 'Agenda 21 links environmental damage, poverty and disease through global cooperation.' }
    ] }
  ],

  tables: [
    { title: 'Land use pattern in India (NCERT figures)', head: ['Category', 'Share of geographical area'], rows: [
      ['Forest', '21.7%'], ['Land under non-agricultural uses', '7.9%'], ['Barren & unculturable waste land', '7.0%'],
      ['Permanent pastures', '3.4%'], ['Culturable waste land', '4.4%'], ['Fallow other than current fallow', '3.9%'],
      ['Current fallow', '4.6%'], ['Net sown area', '45.5%']
    ], note: 'Total geographical area = 3.28 million sq km. Data available for only 93% of the area.' }
  ]
};
