/* ============================================================
   CHAPTER 2 — Forest and Wildlife Resources
   ============================================================ */
const S = {
  bio: 'Biodiversity of India',
  iucn: 'IUCN Categories of Species',
  dep: 'Causes of Depletion',
  yew: 'Case Study — The Himalayan Yew',
  law: 'Wildlife Protection Act & Projects',
  tiger: 'Project Tiger',
  type: 'Types of Forests & Wildlife',
  comm: 'Community & Conservation'
};

export default {
  id: 'ch2',
  n: 2,
  title: 'Forest and Wildlife Resources',
  tag: 'The Green Vault',
  emoji: '🐅',
  hue: 132,
  blurb: 'Species lists, colonial forestry and the communities who saved India’s biodiversity.',
  sections: Object.values(S),

  facts: [
    { t: 'India is one of the richest countries in the world in terms of biological diversity.', s: S.bio, k: 'rich biodiversity' },
    { t: 'India has more than 81,000 species of fauna and 47,000 species of flora.', s: S.bio, k: '81000 fauna 47000 flora' },
    { t: 'At least 10 per cent of India’s recorded wild flora and 20 per cent of its mammals are on the threatened list.', s: S.bio, k: '10 per cent flora 20 per cent mammals' },
    { t: 'Vertebrate species such as the black buck, the crocodile, the Indian wild ass and the Indian rhinoceros are endangered in India.', s: S.bio, k: 'endangered examples' },
    { t: 'A normal species is one whose population is adequate for its survival, e.g. cattle, sal and pine.', s: S.iucn, k: 'normal species' },
    { t: 'Endangered species are those whose population has declined so much that they are in danger of extinction, e.g. black buck, crocodile, Indian wild ass, Indian rhinoceros, lion-tailed macaque and sangai.', s: S.iucn, k: 'endangered' },
    { t: 'Vulnerable species are those whose population has declined to levels from where it is likely to move into the endangered category, e.g. blue sheep, Asiatic elephant and Gangetic dolphin.', s: S.iucn, k: 'vulnerable blue sheep elephant dolphin' },
    { t: 'Rare species are those with a small population which may move into the vulnerable or endangered category, e.g. Himalayan brown bear, wild Asiatic buffalo, desert fox and hornbill.', s: S.iucn, k: 'rare brown bear hornbill' },
    { t: 'Endemic species are those found only in a particular area, isolated by natural or geographical barriers, e.g. Andaman teal, Nicobar pigeon, Andaman wild pig and mithun in Arunachal Pradesh.', s: S.iucn, k: 'endemic Andaman mithun' },
    { t: 'Extinct species are those which are not found after searches of known or likely areas where they may occur, e.g. Asiatic cheetah and pink-headed duck.', s: S.iucn, k: 'extinct cheetah pink-headed duck' },
    { t: 'The greatest damage to Indian forests was inflicted during the colonial period due to the expansion of railways, agriculture, commercial and scientific forestry and mining activities.', s: S.dep, k: 'colonial railways' },
    { t: 'Even after independence, agricultural expansion has continued to be one of the major causes of depletion of forest resources.', s: S.dep, k: 'agricultural expansion' },
    { t: 'Between 1951 and 1980, over 26,200 sq km of forest area was converted into agricultural land, according to the Forest Survey of India.', s: S.dep, k: '26200 sq km 1951 1980' },
    { t: 'Substantial parts of the tribal belts, especially in north-eastern and central India, have been deforested or degraded by shifting cultivation (jhum), a type of slash-and-burn agriculture.', s: S.dep, k: 'jhum shifting cultivation' },
    { t: 'Large-scale development projects have contributed significantly to the loss of forests; since 1951, over 5,000 sq km of forest was cleared for river valley projects.', s: S.dep, k: '5000 sq km river valley' },
    { t: 'The Narmada Sagar Project in Gujarat would inundate 40,000 hectares of forest area.', s: S.dep, k: 'Narmada Sagar 40000 hectares' },
    { t: 'Mining is another important factor behind deforestation.', s: S.dep, k: 'mining deforestation' },
    { t: 'The Buxa Tiger Reserve in West Bengal is seriously threatened by ongoing dolomite mining, which has disturbed habitats and blocked the migration route of the great Indian elephant.', s: S.dep, k: 'Buxa dolomite elephant' },
    { t: 'The Himalayan Yew is a medicinal plant found in Himachal Pradesh and Arunachal Pradesh.', s: S.yew, k: 'Himalayan Yew location' },
    { t: 'A chemical compound called taxol is extracted from the bark, needles, twigs and roots of the Himalayan Yew and is used to treat some cancers.', s: S.yew, k: 'taxol cancer' },
    { t: 'The Himalayan Yew is in danger of becoming extinct due to excessive exploitation.', s: S.yew, k: 'yew extinct exploitation' },
    { t: 'Habitat destruction, hunting, poaching, over-exploitation, environmental pollution, poisoning and forest fires have led to the decline in India’s biodiversity.', s: S.dep, k: 'biodiversity decline factors' },
    { t: 'The Indian Wildlife (Protection) Act was implemented in 1972, with various provisions for protecting habitats.', s: S.law, k: 'Wildlife Protection Act 1972' },
    { t: 'An all-India list of protected species was published, and the programme focused on banning hunting, giving legal protection to habitats and restricting trade in wildlife.', s: S.law, k: 'protected species ban hunting' },
    { t: 'The central government announced projects for gravely threatened animals — the tiger, the one-horned rhinoceros, the Kashmir stag or hangul, three types of crocodiles and the Asiatic lion.', s: S.law, k: 'project animals hangul gharial' },
    { t: 'The Indian elephant, black buck (chinkara), the great Indian bustard (godawan) and the snow leopard have been given full or partial legal protection against hunting and trade throughout India.', s: S.law, k: 'chinkara godawan snow leopard' },
    { t: 'Project Tiger was launched in 1973 after authorities realised the tiger population had dwindled to 1,827 from an estimated 55,000 at the turn of the century.', s: S.tiger, k: 'Project Tiger 1973 1827 55000' },
    { t: 'The tiger is one of the key wildlife species in the faunal web.', s: S.tiger, k: 'key species faunal web' },
    { t: 'Threats to the tiger include poaching for trade, shrinking habitat, depletion of prey base species and a growing human population.', s: S.tiger, k: 'tiger threats poaching prey' },
    { t: 'Trade in tiger skins and the use of tiger bones in traditional medicines, especially in Asian countries, left the tiger on the verge of extinction.', s: S.tiger, k: 'tiger skin bones' },
    { t: 'Forests and wildlife are classified on the basis of ownership into reserved forests, protected forests and unclassed forests.', s: S.type, k: 'reserved protected unclassed' },
    { t: 'More than half of the total forest land has been declared reserved forests, which are regarded as the most valuable for conservation.', s: S.type, k: 'reserved forests half' },
    { t: 'Almost one-third of the total forest area is protected forest, as declared by the Forest Department.', s: S.type, k: 'protected forest one third' },
    { t: 'Unclassed forests include other forests and wastelands belonging to both government and private individuals and communities.', s: S.type, k: 'unclassed forests' },
    { t: 'Reserved and protected forests are also called permanent forest estates, maintained for producing timber and other forest produce and for protective reasons.', s: S.type, k: 'permanent forest estate' },
    { t: 'Madhya Pradesh has the largest area under permanent forests, constituting 75 per cent of its total forest area.', s: S.type, k: 'Madhya Pradesh 75 per cent' },
    { t: 'Sacred groves — patches of forest protected by local communities — survive in many parts of India because of community protection.', s: S.comm, k: 'sacred groves' },
    { t: 'The Mundas and Santhals of Chhota Nagpur worship the mahua and kadamba trees.', s: S.comm, k: 'Munda Santhal mahua kadamba' },
    { t: 'In Sariska Tiger Reserve, Rajasthan, villagers have fought against mining by citing the Wildlife Protection Act.', s: S.comm, k: 'Sariska mining villagers' },
    { t: 'The inhabitants of five villages in Alwar district, Rajasthan, have declared 1,200 hectares of forest as the Bhairodev Dakav Sonchuri, with their own rules banning hunting.', s: S.comm, k: 'Bhairodev Dakav Sonchuri 1200 hectares Alwar' },
    { t: 'The Chipko movement in the Himalayas resisted deforestation and showed that community afforestation with indigenous species can be successful.', s: S.comm, k: 'Chipko movement' },
    { t: 'Farmers’ and citizens’ groups like the Beej Bachao Andolan in Tehri and Navdanya have shown that diversified crop production without synthetic chemicals is possible and economically viable.', s: S.comm, k: 'Beej Bachao Andolan Navdanya' },
    { t: 'The Joint Forest Management programme involves local communities in the management and restoration of degraded forests.', s: S.comm, k: 'JFM' },
    { t: 'JFM has been in formal existence since 1988, when Odisha passed the first resolution for joint forest management.', s: S.comm, k: 'JFM 1988 Odisha' },
    { t: 'JFM depends on local village institutions that protect degraded forest land managed by the Forest Department, and members get intermediary benefits like non-timber forest produce and shares in timber produce.', s: S.comm, k: 'JFM benefits NTFP' },
    { t: 'The clear lesson of wildlife conservation in India is that the involvement of local communities is a must.', s: S.comm, k: 'local communities must' },
    { t: 'The one-horned rhinoceros is found in Assam, and the Asiatic lion in the Gir forest of Gujarat.', s: S.law, k: 'rhino Assam lion Gir' }
  ],

  paragraphs: [
    { s: S.iucn, text: [
      'A normal species is one whose population is adequate for its survival, for example cattle, sal and pine.',
      'Endangered species are those whose population has declined so much that they are in danger of extinction, for example the black buck and the Indian wild ass.',
      'Vulnerable species are those whose population has declined to levels from where it is likely to move into the endangered category, for example the blue sheep and the Gangetic dolphin.'
    ], q: 'Snipe the sentence that defines a VULNERABLE species (the one CBSE loves).', a: 2 },

    { s: S.comm, text: [
      'The inhabitants of five villages in Alwar district of Rajasthan have declared 1,200 hectares of forest as the Bhairodev Dakav Sonchuri.',
      'They have their own set of rules and regulations which do not allow hunting.',
      'They are protecting the wildlife against any outside encroachments.'
    ], q: 'Snipe the sentence that gives the exact area and name of the community-protected forest.', a: 0 },

    { s: S.comm, text: [
      'Joint Forest Management has been in formal existence since 1988.',
      'The state of Odisha passed the first resolution for joint forest management.',
      'JFM depends on the formation of local village institutions that undertake protection of degraded forest land managed by the Forest Department.',
      'In return, members are entitled to intermediary benefits like non-timber forest produce and shares in timber produce.'
    ], q: 'Snipe the sentence that names the state and year of the FIRST JFM resolution.', a: 1 },

    { s: S.tiger, text: [
      'The tiger is one of the key wildlife species in the faunal web.',
      'In 1973 the authorities realised that the tiger population had dwindled to 1,827 from an estimated 55,000 at the turn of the century.',
      'Trade of tiger skins and use of their bones in traditional medicines left the tiger on the verge of extinction.'
    ], q: 'Snipe the sentence containing BOTH tiger population figures.', a: 1 },

    { s: S.dep, text: [
      'The greatest damage inflicted on Indian forests was during the colonial period due to the expansion of railways, agriculture, commercial and scientific forestry and mining.',
      'Between 1951 and 1980, over 26,200 sq km of forest area was converted into agricultural land.',
      'The Narmada Sagar Project in Gujarat would inundate 40,000 hectares of forest area.'
    ], q: 'Snipe the sentence giving the forest area lost to agriculture between 1951 and 1980.', a: 1 }
  ],

  defs: [
    { term: 'Endangered species', s: S.iucn, correct: 'Species whose population has declined so much that they are in danger of extinction, e.g. black buck, Indian wild ass and Indian rhinoceros.', traps: [
      'Species with a small population that may move into the vulnerable category.',
      'Species found only in one particular area isolated by geographical barriers.',
      'Species whose population is adequate for survival, such as cattle and sal.'
    ] },
    { term: 'Endemic species', s: S.iucn, correct: 'Species found only in a particular area, isolated by natural or geographical barriers, e.g. Andaman teal and Nicobar pigeon.', traps: [
      'Species that have disappeared completely from all known areas.',
      'Species whose numbers have fallen and may become endangered soon.',
      'Species that migrate between two continents every year.'
    ] },
    { term: 'Vulnerable species', s: S.iucn, correct: 'Species whose population has declined to a level from where it is likely to move into the endangered category, e.g. blue sheep and Gangetic dolphin.', traps: [
      'Species already extinct in the wild.',
      'Species whose population is stable and adequate for survival.',
      'Species found only in the Andaman and Nicobar Islands.'
    ] },
    { term: 'Reserved forests', s: S.type, correct: 'Forests declared reserved — more than half of total forest land — regarded as the most valuable for conservation.', traps: [
      'Forests owned privately by individuals and communities.',
      'Forests and wastelands that are neither reserved nor protected.',
      'Forests declared protected by the Forest Department, covering one-third of forest area.'
    ] },
    { term: 'Joint Forest Management', s: S.comm, correct: 'A programme since 1988 in which local village institutions protect degraded forest land managed by the Forest Department and receive non-timber forest produce and shares in timber.', traps: [
      'A government scheme to nationalise all forest land and evict villagers.',
      'A programme started in 1973 to protect only the tiger.',
      'A private company model of plantation forestry for timber export.'
    ] },
    { term: 'Sacred groves', s: S.comm, correct: 'Patches of forest protected by local communities because of religious belief, which survive due to community protection.', traps: [
      'Forests reserved by the government for timber production.',
      'Plantations raised by the Forest Department after clear-felling.',
      'Areas declared as national parks under the Wildlife Protection Act.'
    ] },
    { term: 'Permanent forest estates', s: S.type, correct: 'Reserved and protected forests maintained for producing timber and other forest produce and for protective reasons.', traps: [
      'Forests that can never be used by anyone for any purpose.',
      'Private plantations registered under the Forest Department.',
      'All forests that have been cleared for river valley projects.'
    ] },
    { term: 'Biodiversity', s: S.bio, correct: 'The variety of flora and fauna in a region — India has over 81,000 species of fauna and 47,000 species of flora.', traps: [
      'The total forest cover of a country measured in square kilometres.',
      'Only the number of endangered mammals in a region.',
      'The number of national parks and sanctuaries in a country.'
    ] }
  ],

  mcq: [
    { q: 'Which of these is an ENDEMIC species of India?', o: ['Blue sheep', 'Andaman teal', 'Black buck', 'Himalayan brown bear'], a: 1, why: 'Andaman teal, Nicobar pigeon, Andaman wild pig and mithun are endemic — found only in isolated areas.', s: S.iucn, d: 2 },
    { q: 'The Gangetic dolphin is classified as:', o: ['Extinct', 'Rare', 'Vulnerable', 'Normal'], a: 2, why: 'Vulnerable species: blue sheep, Asiatic elephant, Gangetic dolphin.', s: S.iucn, d: 1 },
    { q: 'The Asiatic cheetah and the pink-headed duck are examples of:', o: ['Endemic species', 'Extinct species', 'Rare species', 'Vulnerable species'], a: 1, why: 'They are not found after searches of known or likely areas — extinct species.', s: S.iucn, d: 1 },
    { q: 'The Himalayan Yew is threatened because:', o: ['Its habitat is flooded by dams', 'Taxol is extracted from its bark, needles, twigs and roots for cancer drugs', 'It is cut for railway sleepers', 'It is eaten by the Gangetic dolphin'], a: 1, why: 'Excessive exploitation for taxol, the largest selling anti-cancer drug, is pushing it to extinction.', s: S.yew, d: 1 },
    { q: 'The Indian Wildlife (Protection) Act was implemented in:', o: ['1952', '1972', '1980', '1988'], a: 1, why: '1972 — with provisions for protecting habitats and an all-India list of protected species.', s: S.law, d: 1 },
    { q: 'Project Tiger was launched in:', o: ['1970', '1972', '1973', '1988'], a: 2, why: '1973, after the tiger population fell to 1,827 from an estimated 55,000.', s: S.tiger, d: 1 },
    { q: 'The tiger population at the turn of the century was estimated at:', o: ['1,827', '5,000', '40,000', '55,000'], a: 3, why: 'About 55,000 at the turn of the century, down to 1,827 by 1973.', s: S.tiger, d: 2 },
    { q: 'The Buxa Tiger Reserve is threatened by:', o: ['Dolomite mining', 'River valley projects', 'Shifting cultivation', 'Poaching of rhinos'], a: 0, why: 'Ongoing dolomite mining in West Bengal has disturbed habitats and blocked elephant migration routes.', s: S.dep, d: 2 },
    { q: 'Which project would inundate 40,000 hectares of forest area?', o: ['Bhakra Nangal', 'Narmada Sagar Project', 'Tehri Dam', 'Hirakud'], a: 1, why: 'The Narmada Sagar Project in Gujarat would submerge 40,000 hectares of forest.', s: S.dep, d: 2 },
    { q: 'How much forest area was converted into agricultural land between 1951 and 1980?', o: ['2,620 sq km', '5,000 sq km', '26,200 sq km', '40,000 sq km'], a: 2, why: 'Over 26,200 sq km, according to the Forest Survey of India.', s: S.dep, d: 2 },
    { q: 'Which statement about reserved forests is correct?', o: ['They cover almost one-third of forest area', 'More than half of total forest land is reserved', 'They are privately owned', 'They are wastelands belonging to communities'], a: 1, why: 'More than half the forest land is reserved; one-third is protected forest.', s: S.type, d: 2 },
    { q: 'Madhya Pradesh has what share of its forest area under permanent forests?', o: ['25 per cent', '50 per cent', '75 per cent', '90 per cent'], a: 2, why: 'MP has the largest area under permanent forests — 75% of its total forest area.', s: S.type, d: 2 },
    { q: 'The Joint Forest Management programme formally began in 1988 when which state passed the first resolution?', o: ['Madhya Pradesh', 'Odisha', 'Rajasthan', 'Uttarakhand'], a: 1, why: 'Odisha passed the first JFM resolution in 1988.', s: S.comm, d: 2 },
    { q: 'The Bhairodev Dakav Sonchuri, 1,200 hectares protected by five villages, is in:', o: ['Alwar, Rajasthan', 'Sariska, Rajasthan', 'Buxa, West Bengal', 'Chhota Nagpur, Jharkhand'], a: 0, why: 'Five villages of Alwar district declared 1,200 hectares as the Bhairodev Dakav Sonchuri.', s: S.comm, d: 2 },
    { q: 'Which movement successfully resisted deforestation in the Himalayas?', o: ['Narmada Bachao Andolan', 'Chipko movement', 'Beej Bachao Andolan', 'Navdanya'], a: 1, why: 'Chipko also proved community afforestation with indigenous species can work.', s: S.comm, d: 1 },
    { q: 'The Mundas and Santhals of Chhota Nagpur worship which trees?', o: ['Tamarind and mango', 'Mahua and kadamba', 'Sal and teak', 'Neem and banyan'], a: 1, why: 'Mahua and kadamba. Tribals of Odisha and Bihar worship tamarind and mango during weddings.', s: S.comm, d: 3 },
    { q: 'Which is NOT a cause of biodiversity decline listed in NCERT?', o: ['Habitat destruction', 'Poaching and hunting', 'Environmental pollution', 'Rainwater harvesting'], a: 3, why: 'Rainwater harvesting conserves water; it does not reduce biodiversity.', s: S.dep, d: 1 },
    { q: 'The Kashmir stag is also known as:', o: ['Sangai', 'Hangul', 'Chinkara', 'Godawan'], a: 1, why: 'Hangul — one of the species for which special protection projects were announced.', s: S.law, d: 2 }
  ],

  errors: [
    { stmt: 'Endangered species are those whose population is adequate for survival.', ok: false, fix: 'That is a NORMAL species (cattle, sal, pine). Endangered species are in danger of extinction — black buck, crocodile, wild ass, rhino.', s: S.iucn },
    { stmt: 'The Indian Wildlife (Protection) Act was passed in 1980.', ok: false, fix: 'It was implemented in 1972, with provisions to protect habitats and restrict trade in wildlife.', s: S.law },
    { stmt: 'Project Tiger was launched in 1988.', ok: false, fix: 'Project Tiger began in 1973. 1988 is the year of the first Joint Forest Management resolution (Odisha).', s: S.tiger },
    { stmt: 'More than half of India’s forest land is protected forest.', ok: false, fix: 'More than half is RESERVED forest; almost one-third is protected forest.', s: S.type },
    { stmt: 'The Buxa Tiger Reserve is threatened by river valley projects.', ok: false, fix: 'Buxa (West Bengal) is threatened by ongoing DOLOMITE MINING, which blocks elephant migration routes.', s: S.dep },
    { stmt: 'The Himalayan Yew is exploited for a drug called quinine.', ok: false, fix: 'It yields TAXOL, extracted from bark, needles, twigs and roots, used to treat some cancers.', s: S.yew },
    { stmt: 'JFM gives villagers complete ownership of reserved forest land.', ok: false, fix: 'JFM makes village institutions protect degraded forest land MANAGED BY the Forest Department; members get non-timber forest produce and shares in timber.', s: S.comm },
    { stmt: 'The Chipko movement was led by the government to increase timber production.', ok: false, fix: 'Chipko was a community movement in the Himalayas that resisted deforestation and proved community afforestation with indigenous species can succeed.', s: S.comm },
    { stmt: 'The greatest damage to Indian forests happened after independence due to tourism.', ok: false, fix: 'The greatest damage was during the COLONIAL period — railways, agriculture, commercial and scientific forestry, and mining.', s: S.dep },
    { stmt: 'Asiatic lion is found in Assam and one-horned rhinoceros in Gujarat.', ok: false, fix: 'It is the reverse: one-horned rhinoceros in Assam (Kaziranga), Asiatic lion in Gir, Gujarat.', s: S.law },
    { stmt: 'A sacred grove is a forest patch protected by a local community because of religious belief.', ok: true, fix: 'Correct — patches such as sarna and devrai survive because communities protect them.', s: S.comm }
  ],

  sortSets: [
    { title: 'Sort the species by IUCN category', s: S.iucn, bins: [
      { name: 'Endangered', items: ['Black buck', 'Crocodile', 'Indian wild ass', 'Indian rhinoceros', 'Lion-tailed macaque', 'Sangai'] },
      { name: 'Vulnerable', items: ['Blue sheep', 'Asiatic elephant', 'Gangetic dolphin'] },
      { name: 'Rare', items: ['Himalayan brown bear', 'Wild Asiatic buffalo', 'Desert fox', 'Hornbill'] },
      { name: 'Endemic', items: ['Andaman teal', 'Nicobar pigeon', 'Andaman wild pig', 'Mithun'] },
      { name: 'Extinct', items: ['Asiatic cheetah', 'Pink-headed duck'] }
    ] },
    { title: 'Forest ownership types', s: S.type, bins: [
      { name: 'Reserved', items: ['More than half of forest land', 'Most valuable for conservation'] },
      { name: 'Protected', items: ['Almost one-third of forest area', 'Declared by Forest Department'] },
      { name: 'Unclassed', items: ['Wastelands', 'Private and community forests'] }
    ] },
    { title: 'Cause of depletion or conservation effort?', s: S.dep, bins: [
      { name: 'Causes of depletion', items: ['Colonial railways', 'Jhum cultivation', 'Dolomite mining in Buxa', 'River valley projects', 'Poaching'] },
      { name: 'Conservation efforts', items: ['Wildlife Protection Act 1972', 'Project Tiger', 'Joint Forest Management', 'Chipko movement', 'Sacred groves'] }
    ] },
    { title: 'Match the community example', s: S.comm, bins: [
      { name: 'Rajasthan', items: ['Bhairodev Dakav Sonchuri', 'Sariska villagers vs mining'] },
      { name: 'Himalayas', items: ['Chipko movement'] },
      { name: 'Chhota Nagpur', items: ['Mundas and Santhals worship mahua and kadamba'] },
      { name: 'Uttarakhand', items: ['Beej Bachao Andolan in Tehri', 'Navdanya'] }
    ] }
  ],

  mapItems: [
    { name: 'Kaziranga — one-horned rhino', lat: 26.6, lon: 93.4, cat: 'park', why: 'Assam hosts the one-horned rhinoceros; a species given a special protection project.' },
    { name: 'Gir — Asiatic lion', lat: 21.1, lon: 70.8, cat: 'park', why: 'The Asiatic lion survives in the Gir forest of Gujarat.' },
    { name: 'Buxa Tiger Reserve', lat: 26.7, lon: 89.5, cat: 'park', why: 'West Bengal reserve threatened by dolomite mining; elephant migration route blocked.' },
    { name: 'Sariska Tiger Reserve', lat: 27.3, lon: 76.4, cat: 'park', why: 'Villagers fought mining here by citing the Wildlife Protection Act.' },
    { name: 'Alwar — Bhairodev Dakav Sonchuri', lat: 27.6, lon: 76.6, cat: 'comm', why: 'Five villages declared 1,200 hectares protected forest with their own hunting ban.' },
    { name: 'Corbett National Park', lat: 29.5, lon: 78.8, cat: 'park', why: 'India’s oldest national park, in Uttarakhand — core tiger habitat.' },
    { name: 'Kanha National Park', lat: 22.3, lon: 80.6, cat: 'park', why: 'Madhya Pradesh has the largest area under permanent forests — 75% of its forest area.' },
    { name: 'Sundarbans', lat: 21.9, lon: 88.9, cat: 'park', why: 'Mangrove tiger habitat in the Ganga-Brahmaputra delta.' },
    { name: 'Periyar', lat: 9.5, lon: 77.2, cat: 'park', why: 'Kerala sanctuary, elephant habitat of the Western Ghats.' },
    { name: 'Nilgiri Biosphere Reserve', lat: 11.4, lon: 76.8, cat: 'park', why: 'India’s first biosphere reserve — lion-tailed macaque and Nilgiri tahr country.' },
    { name: 'Himalayan Yew — Himachal', lat: 31.6, lon: 77.5, cat: 'plant', why: 'Source of taxol, the anti-cancer drug; threatened by excessive exploitation.' },
    { name: 'Narmada Sagar Project', lat: 22.3, lon: 76.5, cat: 'threat', why: 'Would inundate 40,000 hectares of forest in Gujarat.' },
    { name: 'Chhota Nagpur — sacred groves', lat: 23.4, lon: 85.4, cat: 'comm', why: 'Mundas and Santhals worship mahua and kadamba; sarna groves protected by communities.' },
    { name: 'Jhum cultivation belt — NE India', lat: 25.5, lon: 94.0, cat: 'threat', why: 'Shifting cultivation has degraded tribal forest belts of north-eastern and central India.' }
  ],
  mapCats: { park: { label: 'Parks & reserves', color: '#3ddc97' }, comm: { label: 'Community conservation', color: '#b8ff5c' }, plant: { label: 'Medicinal plant', color: '#a78bfa' }, threat: { label: 'Threat zones', color: '#ff6b6b' } },

  detective: [
    { name: 'Himalayan Yew', clues: ['I am a medicinal plant of Himachal Pradesh and Arunachal Pradesh.', 'A compound called taxol is extracted from my bark, needles, twigs and roots.', 'Taxol is used to treat some cancers.', 'Excessive exploitation is pushing me to extinction.'], crops: '—', why: 'The Himalayan Yew case study shows biodiversity loss can be driven by global pharmaceutical demand.' },
    { name: 'Buxa Tiger Reserve', clues: ['I am a tiger reserve in West Bengal.', 'Dolomite mining is seriously threatening me.', 'My elephant migration route has been blocked.'], crops: '—', why: 'Mining near Buxa disturbs habitats and blocks the great Indian elephant’s migration.' },
    { name: 'Gir forest', clues: ['I am in Gujarat.', 'I shelter the last Asiatic lions of India.'], crops: '—', why: 'Asiatic lion conservation is one of the special projects announced by the central government.' },
    { name: 'Bhairodev Dakav Sonchuri', clues: ['Five villages in Alwar district declared me.', 'I cover 1,200 hectares.', 'Hunting is banned here by the villagers’ own rules.'], crops: '—', why: 'A textbook example of community-led conservation independent of government machinery.' }
  ],

  longQ: [
    { q: 'Explain any three factors responsible for the depletion of flora and fauna in India.', marks: 3, s: S.dep, points: [
      { t: 'Colonial forestry — expansion of railways, agriculture, commercial/scientific forestry and mining caused the greatest damage.', kw: ['colonial', 'railways', 'commercial forestry', 'mining'] },
      { t: 'Agricultural expansion and shifting cultivation (jhum) in tribal belts; 26,200 sq km lost between 1951 and 1980.', kw: ['agricultural expansion', 'jhum', 'shifting cultivation', '26,200'] },
      { t: 'Large development projects and mining — 5,000 sq km cleared for river valley projects, Narmada Sagar, Buxa.', kw: ['river valley', 'Narmada Sagar', 'Buxa', 'dolomite', 'mining'] },
      { t: 'Habitat destruction, hunting, poaching, over-exploitation, pollution, poisoning and forest fires.', kw: ['poaching', 'hunting', 'pollution', 'forest fires'] }
    ], model: '1. Colonial period damage: expansion of railways, agriculture, commercial and scientific forestry, and mining.\n2. Agricultural expansion and shifting cultivation (jhum): over 26,200 sq km of forest became farmland between 1951 and 1980.\n3. Development projects and mining: over 5,000 sq km cleared for river valley projects (Narmada Sagar would inundate 40,000 ha); dolomite mining threatens Buxa Tiger Reserve.\n(Also: habitat destruction, hunting, poaching, over-exploitation, pollution, poisoning and forest fires.)' },
    { q: 'Describe the IUCN categories of species with one example each (any four).', marks: 4, s: S.iucn, points: [
      { t: 'Normal — population adequate for survival, e.g. cattle, sal, pine.', kw: ['normal', 'cattle', 'sal'] },
      { t: 'Endangered — in danger of extinction, e.g. black buck, Indian wild ass.', kw: ['endangered', 'black buck', 'wild ass'] },
      { t: 'Vulnerable — likely to move into endangered, e.g. blue sheep, Gangetic dolphin.', kw: ['vulnerable', 'blue sheep', 'dolphin'] },
      { t: 'Rare — small population, e.g. Himalayan brown bear, hornbill.', kw: ['rare', 'brown bear', 'hornbill'] },
      { t: 'Endemic — found only in an isolated area, e.g. Andaman teal, mithun.', kw: ['endemic', 'Andaman teal', 'mithun'] },
      { t: 'Extinct — not found after searches, e.g. Asiatic cheetah, pink-headed duck.', kw: ['extinct', 'cheetah', 'pink-headed duck'] }
    ], model: 'Normal: cattle, sal, pine. Endangered: black buck, crocodile, Indian wild ass, rhino. Vulnerable: blue sheep, Asiatic elephant, Gangetic dolphin. Rare: Himalayan brown bear, wild Asiatic buffalo, desert fox, hornbill. Endemic: Andaman teal, Nicobar pigeon, mithun. Extinct: Asiatic cheetah, pink-headed duck.' },
    { q: 'Why is the involvement of local communities essential for forest conservation? Give three examples.', marks: 5, s: S.comm, points: [
      { t: 'Sacred groves survive because communities protect them; Mundas and Santhals worship mahua and kadamba.', kw: ['sacred groves', 'Munda', 'Santhal', 'mahua'] },
      { t: 'Sariska villagers fought mining citing the Wildlife Protection Act; Alwar’s five villages declared 1,200 ha as Bhairodev Dakav Sonchuri with a hunting ban.', kw: ['Sariska', 'Alwar', 'Bhairodev', '1200'] },
      { t: 'Chipko movement resisted deforestation and proved community afforestation with indigenous species works.', kw: ['Chipko', 'indigenous'] },
      { t: 'JFM (since 1988, Odisha first) involves village institutions in protecting degraded forest and sharing benefits.', kw: ['JFM', '1988', 'Odisha', 'non-timber'] },
      { t: 'Beej Bachao Andolan (Tehri) and Navdanya showed chemical-free diversified farming is viable.', kw: ['Beej Bachao', 'Navdanya', 'Tehri'] }
    ], model: 'Local communities protect habitats that the state cannot police:\n1. Sacred groves survive due to community belief — Mundas and Santhals worship mahua and kadamba.\n2. Sariska villagers fought mining citing the Wildlife Protection Act; five Alwar villages declared 1,200 ha as Bhairodev Dakav Sonchuri with their own hunting ban.\n3. The Chipko movement resisted deforestation and proved community afforestation with indigenous species.\n4. JFM (1988, Odisha first) makes village institutions protect degraded forest in return for non-timber produce and timber shares.\n5. Beej Bachao Andolan and Navdanya revived chemical-free, diversified farming.\nHence the clear lesson: involvement of local communities is a must.' },
    { q: 'What is Joint Forest Management? Explain its working and benefits.', marks: 3, s: S.comm, points: [
      { t: 'JFM involves local communities in management and restoration of degraded forests; formally since 1988, Odisha first.', kw: ['1988', 'Odisha', 'degraded'] },
      { t: 'Local village institutions protect forest land managed by the Forest Department.', kw: ['village institutions', 'forest department'] },
      { t: 'Members get intermediary benefits like non-timber forest produce and shares in timber produce.', kw: ['non-timber', 'timber', 'benefits'] }
    ], model: 'JFM is a programme for involving local communities in the management and restoration of degraded forests. It has existed formally since 1988, when Odisha passed the first resolution. Village institutions protect degraded forest land managed by the Forest Department and, in return, receive intermediary benefits such as non-timber forest produce and shares in timber produce.' },
    { q: '“The conservation of forests and wildlife is not the responsibility of the government alone.” Justify.', marks: 3, s: S.comm, points: [
      { t: 'Community institutions protect sacred groves and village forests.', kw: ['sacred grove', 'community'] },
      { t: 'Local resistance stopped destructive mining (Sariska) and deforestation (Chipko).', kw: ['Sariska', 'Chipko'] },
      { t: 'JFM shares both protection duties and benefits with villagers.', kw: ['JFM', 'benefits'] }
    ], model: 'Communities have repeatedly proved essential: sacred groves survive through local belief; Sariska villagers used the Wildlife Protection Act to fight mining; Alwar villages declared their own 1,200-ha Sonchuri; Chipko resisted Himalayan deforestation; and JFM formally shares protection duties and benefits with village institutions. Conservation therefore requires government plus community partnership.' }
  ],

  scenarios: [
    { title: 'The Buxa Dilemma', text: 'You are the field director of Buxa Tiger Reserve, West Bengal. A dolomite mine adjacent to the reserve wants a 10-year lease extension. Elephants use the corridor every November.', opts: [
      { t: 'Refuse the extension and notify the corridor as inviolate, citing habitat disturbance and blocked elephant migration.', ok: true, why: 'NCERT specifically names Buxa: dolomite mining disturbed habitats and blocked the migration route of the great Indian elephant.' },
      { t: 'Approve it — mining brings revenue and the tigers are elsewhere.', ok: false, why: 'This is exactly the case study of habitat destruction and blocked migration. Revenue does not cancel ecological damage.' },
      { t: 'Approve mining but ask the company to plant eucalyptus on the boundary.', ok: false, why: 'Monoculture plantation does not restore a migration corridor; the book stresses habitat protection, not cosmetic planting.' }
    ] },
    { title: 'Five Villages, One Forest', text: 'Five villages in Alwar district want to protect 1,200 hectares of forest themselves and ban hunting. The forest department is unsure.', opts: [
      { t: 'Support them — declare it the Bhairodev Dakav Sonchuri and let their rules govern protection.', ok: true, why: 'Community-led protection with locally made rules is precisely the NCERT example; local involvement is a must.' },
      { t: 'Take over the area and post guards instead.', ok: false, why: 'The lesson of the chapter is the opposite: community involvement, not exclusion, makes conservation work.' },
      { t: 'Convert the forest to farmland since villagers need income.', ok: false, why: 'Agricultural expansion is a stated major cause of forest depletion.' }
    ] },
    { title: 'Project Tiger, 1973', text: 'The tiger count has fallen to 1,827 from an estimated 55,000. You have a small budget. What do you fund first?', opts: [
      { t: 'Protect habitats and prey base, ban hunting and restrict trade in tiger skins and bones.', ok: true, why: 'Threats named in NCERT: poaching for trade, shrinking habitat, depletion of prey base, growing human population.' },
      { t: 'Build a tiger safari park for tourism revenue.', ok: false, why: 'Tourism does not address poaching, habitat shrinkage or prey depletion.' },
      { t: 'Pay a bounty for every tiger skin submitted.', ok: false, why: 'That would accelerate the trade in skins and bones that pushed the tiger to the verge of extinction.' }
    ] },
    { title: 'The Himalayan Yew', text: 'A pharmaceutical firm wants to harvest Himalayan Yew bark at scale for taxol. Villagers depend on the forest.', opts: [
      { t: 'Permit only sustainable, regulated extraction with replanting and community benefit-sharing.', ok: true, why: 'The Yew is threatened by excessive exploitation; sustainable use protects both biodiversity and livelihoods.' },
      { t: 'Allow clear-felling for maximum taxol output.', ok: false, why: 'The book states the Yew is in danger of extinction due to excessive exploitation — clear-felling is the disaster scenario.' },
      { t: 'Ban all use and ignore the cancer drug demand.', ok: false, why: 'The chapter advocates conservation with community involvement, not absolute prohibition that ignores needs.' }
    ] }
  ],

  tables: [
    { title: 'Who owns India’s forests?', head: ['Category', 'Share', 'Note'], rows: [
      ['Reserved forests', 'More than half', 'Most valuable for conservation'],
      ['Protected forests', 'Almost one-third', 'Declared by the Forest Department'],
      ['Unclassed forests', 'Remaining', 'Government, private and community wastelands']
    ], note: 'MP has the largest area under permanent forests — 75% of its forest area.' }
  ]
};
