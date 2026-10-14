// Run with: node audit/check-data.mjs
// Maintains internal consistency; external scientific-source checking still required.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const detailSource = readFileSync('elements-data.js','utf8');
const indexSource = readFileSync('index.html','utf8');
const detailMatch = detailSource.match(/window\.PERIODIC_ELEMENTS=(\[[^\n]*\]);/);
const tableMatch = indexSource.match(/const elements = (\[[^\n]*\]);/);
assert.ok(detailMatch && tableMatch, 'Could not find embedded element datasets');
const detailed = JSON.parse(detailMatch[1]);
const cells = JSON.parse(tableMatch[1]);
assert.equal(detailed.length,118, 'Detailed table must have 118 elements');
assert.equal(cells.length,118, 'Main table must have 118 elements');
assert.equal(new Set(detailed.map(x=>x.symbol)).size,118, 'All element symbols must be unique');

detailed.forEach((entry,index)=>{
  const z=index+1;
  const cell=cells[index];
  assert.equal(entry.atomicNumber,z,'Detail atomic number mismatch at '+z);
  assert.equal(cell.z,z,'Table atomic number mismatch at '+z);
  assert.equal(entry.symbol,cell.symbol,'Symbol mismatch at '+z);
  assert.ok(entry.name && typeof entry.name==='string','Missing name at '+z);
  assert.ok(['Solid','Gas','Liquid','Expected to be a solid','Expected to be a gas'].includes(entry.standardState) ||
            typeof entry.standardState==='string', 'Invalid state at '+z);
  assert.ok(entry.meltingPoint==null || Number.isFinite(entry.meltingPoint),'Invalid melting point at '+z);
  assert.ok(entry.boilingPoint==null || Number.isFinite(entry.boilingPoint),'Invalid boiling point at '+z);
});

// Source: CIAAW Abridged Standard Atomic Weights 2024.
// These are central *abridged* values; uncertainty is not encoded in these numbers.
const ciaaw2024=[1.0080,4.0026,6.94,9.0122,10.81,12.011,14.007,15.999,18.998,20.180,
                 22.990,24.305,26.982,28.085,30.974,32.06,35.45,39.95,39.098,40.078,
                 44.956,47.867,50.942,51.996,54.938,55.845,58.933,58.693,63.546,65.38,
                 69.723,72.630,74.922,78.971,79.904,83.798,85.468,87.62,88.906,91.222,
                 92.906,95.95,null,101.07,102.91,106.42,107.87,112.41,114.82,118.71,
                 121.76,127.60,126.90,131.29,132.91,137.33,138.91,140.12,140.91,144.24,
                 null,150.36,151.96,157.25,158.93,162.50,164.93,167.26,168.93,173.05,
                 174.97,178.49,180.95,183.84,186.21,190.23,192.22,195.08,196.97,200.59,
                 204.38,207.2,208.98,null,null,null,null,null,null,232.04,
                 231.04,238.03,null,null,null,null,null,null,null,null,
                 null,null,null,null,null,null,null,null,null,
                 null,null,null,null,null,null,null,null];
ciaaw2024.forEach((weight,i)=>{
  assert.equal(detailed[i].atomicMass,weight,'CIAAW detailed atomic weight mismatch '+(i+1));
  assert.equal(cells[i].mass,weight,'CIAAW table atomic weight mismatch '+(i+1));
});

const history={
  111:{year:"1994",by:"GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg"},
  112:{year:"1996",by:"GSI Darmstadt team led by Sigurd Hofmann"},
  113:{year:"2004",by:"RIKEN team led by Kosuke Morita (Japan)"},
  114:{year:"1998",by:"JINR Dubna team led by Yuri Oganessian and Vladimir Utyonkov"},
  115:{year:"2003",by:"JINR Dubna, Lawrence Livermore, and Oak Ridge research collaborations"},
  116:{year:"2000",by:"JINR Dubna and Lawrence Livermore researchers led by Yuri Oganessian, Vladimir Utyonkov, and Kenton Moody"},
  117:{year:"2010",by:"JINR Dubna, Lawrence Livermore, and Oak Ridge research collaborations"},
  118:{year:"2006",by:"JINR Dubna and Lawrence Livermore collaboration"},
  101:{year:"1955",by:"Albert Ghiorso, Bernard Harvey, Gregory Choppin, Stanley Thompson, and Glenn Seaborg"},
  102:{year:"1962–1963",by:"Joint Institute for Nuclear Research (Dubna), team led by Georgy Flerov"},
  103:{year:"1961",by:"Lawrence Berkeley Laboratory team led by Albert Ghiorso"},
  104:{year:"1964–1969",by:"Joint Institute for Nuclear Research (Dubna) and Lawrence Berkeley Laboratory (Berkeley)"},
  105:{year:"1968–1970",by:"Joint Institute for Nuclear Research (Dubna) and Lawrence Berkeley Laboratory (Berkeley)"},
  106:{year:"1974",by:"Lawrence Berkeley Laboratory and Joint Institute for Nuclear Research teams"},
  107:{year:"1981",by:"GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg"},
  108:{year:"1984",by:"GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg"},
  109:{year:"1982",by:"GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg"},
  110:{year:"1994",by:"GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg"},
  91:{year:"1913",by:"Kasimir Fajans and Otto Göhring"},
  92:{year:"1789",by:"Martin Heinrich Klaproth"},
  93:{year:"1940",by:"Edwin McMillan and Philip Abelson"},
  94:{year:"1940",by:"Glenn T. Seaborg, Arthur Wahl, Joseph W. Kennedy, and Edwin McMillan"},
  95:{year:"1944",by:"Glenn T. Seaborg, Ralph A. James, Leon O. Morgan, and Albert Ghiorso"},
  96:{year:"1944",by:"Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso"},
  97:{year:"1949",by:"Stanley G. Thompson, Albert Ghiorso, and Glenn T. Seaborg"},
  98:{year:"1950",by:"Stanley G. Thompson, Kenneth Street Jr., Albert Ghiorso, and Glenn T. Seaborg"},
  99:{year:"1952",by:"Gregory Choppin, Stanley G. Thompson, Albert Ghiorso, and Bernard Harvey"},
  100:{year:"1953",by:"Albert Ghiorso and colleagues (Berkeley, Argonne, and Los Alamos)"},
  81:{year:"1861",by:"William Crookes"},
  82:{year:"Ancient",by:null},
  83:{year:"1753",by:"Claude-François Geoffroy"},
  84:{year:"1898",by:"Marie Curie and Pierre Curie"},
  85:{year:"1940",by:"Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè"},
  86:{year:"1900",by:"Friedrich Ernst Dorn"},
  87:{year:"1939",by:"Marguerite Perey"},
  88:{year:"1898",by:"Marie Curie and Pierre Curie"},
  89:{year:"1899",by:"André Debierne"},
  90:{year:"1829",by:"Jöns Jakob Berzelius"},
  71:{year:"1907",by:"Georges Urbain"},
  72:{year:"1923",by:"Dirk Coster and George de Hevesy"},
  73:{year:"1802",by:"Anders Gustaf Ekeberg"},
  74:{year:"1783",by:"Juan José Elhuyar and Fausto Elhuyar"},
  75:{year:"1925",by:"Walter Noddack, Ida Noddack, and Otto Berg"},
  76:{year:"1803",by:"Smithson Tennant"},
  77:{year:"1803",by:"Smithson Tennant"},
  78:{year:"Ancient",by:null},
  79:{year:"Ancient",by:null},
  80:{year:"Ancient",by:null},
  61:{year:"1945",by:"Jacob A. Marinsky, Lawrence E. Glendenin, and Charles D. Coryell"},
  62:{year:"1879",by:"Paul-Émile Lecoq de Boisbaudran"},
  63:{year:"1901",by:"Eugène-Anatole Demarçay"},
  64:{year:"1880",by:"Jean Charles Galissard de Marignac"},
  65:{year:"1843",by:"Carl Gustaf Mosander"},
  66:{year:"1886",by:"Paul-Émile Lecoq de Boisbaudran"},
  67:{year:"1878",by:"Marc Delafontaine and Louis Soret; independently Per Teodor Cleve"},
  68:{year:"1843",by:"Carl Gustaf Mosander"},
  69:{year:"1879",by:"Per Teodor Cleve"},
  70:{year:"1878",by:"Jean Charles Galissard de Marignac"},
  51:{"year":"Ancient","by":null},
  52:{"year":"1783","by":"Franz Joseph Müller von Reichenstein"},
  53:{"year":"1811","by":"Bernard Courtois"},
  54:{"year":"1898","by":"William Ramsay and Morris Travers"},
  55:{"year":"1860","by":"Robert Bunsen and Gustav Kirchhoff"},
  56:{"year":"1808","by":"Humphry Davy"},
  57:{"year":"1839","by":"Carl Gustaf Mosander"},
  58:{"year":"1803–1804","by":"Jöns Jacob Berzelius and Wilhelm Hisinger; independently Martin Heinrich Klaproth"},
  59:{"year":"1885","by":"Carl Auer von Welsbach"},
  60:{"year":"1885","by":"Carl Auer von Welsbach"},
  41:{"year":"1801","by":"Charles Hatchett"},
  42:{"year":"1778","by":"Carl Wilhelm Scheele"},
  43:{"year":"1937","by":"Carlo Perrier and Emilio Segrè"},
  44:{"year":"1844","by":"Karl Ernst Claus"},
  45:{"year":"1803","by":"William Hyde Wollaston"},
  46:{"year":"1803","by":"William Hyde Wollaston"},
  47:{"year":"Ancient","by":null},
  48:{"year":"1817","by":"Friedrich Stromeyer"},
  49:{"year":"1863","by":"Ferdinand Reich and Hieronymus Richter"},
  50:{"year":"Ancient","by":null},
  12:{year:'1755',by:'Joseph Black'},
  13:{year:'1825',by:'Hans Christian Ørsted'},
  14:{year:'1824',by:'Jöns Jacob Berzelius'},
  18:{year:'1894',by:'Lord Rayleigh and William Ramsay'},
  20:{year:'1808',by:'Humphry Davy'},
  21:{year:'1879',by:'Lars Fredrik Nilson'},
  22:{year:'1791',by:'William Gregor'},
  23:{year:'1801',by:'Andrés Manuel del Río'},
  24:{year:'1797',by:'Louis Nicolas Vauquelin'},
  25:{year:'1774',by:'Johan Gottlieb Gahn'},
  26:{year:'Ancient',by:null},
  27:{year:'1735',by:'Georg Brandt'},
  28:{year:'1751',by:'Axel Fredrik Cronstedt'},
  29:{year:'Ancient',by:null},
  30:{year:'1746',by:'Andreas Sigismund Marggraf'},
  40:{year:'1789',by:'Martin Heinrich Klaproth'},
  39:{year:'1794',by:'Johan Gadolin'},
  38:{year:'1791',by:'Thomas Charles Hope'},
  37:{year:'1861',by:'Robert Bunsen and Gustav Kirchhoff'},
  36:{year:'1898',by:'William Ramsay and Morris Travers'},
  35:{year:'1826',by:'Antoine-Jérôme Balard'},
  34:{year:'1817',by:'Jöns Jacob Berzelius'},
  33:{year:'13th century',by:'Albertus Magnus (attributed)'},
  32:{year:'1886',by:'Clemens Winkler'},
  31:{year:'1875',by:'Paul-Émile Lecoq de Boisbaudran'},
};
for(const [z,expected] of Object.entries(history)){
  const record=detailed[Number(z)-1];
  assert.equal(record.yearDiscovered,expected.year, 'Historical year regression: '+z);
  assert.equal(record.discoveredBy,expected.by, 'Discoverer regression: '+z);
}
// Royal Society of Chemistry element fact boxes (21–30).
// Temperature phase changes in K; density in g/cm^3 (room-temperature reference).
const rsc21to30={
  21:[1814,3109,2.99],22:[1943,3560,4.506],23:[2183,3680,6.0],
  24:[2180,2944,7.15],25:[1519,2334,7.3],26:[1811,3134,7.87],
  27:[1768,3200,8.86],28:[1728,3186,8.90],29:[1357.77,2833,8.96],
  30:[692.677,1180,7.134]
};
for(const [z,values] of Object.entries(rsc21to30)){
  const record=detailed[Number(z)-1];
  assert.equal(record.meltingPoint,values[0],'RSC melting point mismatch: '+z);
  assert.equal(record.boilingPoint,values[1],'RSC boiling point mismatch: '+z);
  assert.equal(record.density,values[2],'RSC density mismatch: '+z);
  assert.equal(record.standardState,'Solid','RSC phase state mismatch: '+z);
}

// Royal Society of Chemistry element fact boxes (31–40): phase data (K), density (g/cm^3).
// Arsenic sublimates near 1 atm; no ordinary-pressure melt/boil point is encoded.
const rsc31to40={
  31:[302.9146,2502,5.91,'Solid'],32:[1211.4,3106,5.3234,'Solid'],
  33:[null,null,5.75,'Solid'],34:[494,958,4.809,'Solid'],
  35:[266,332,3.1028,'Liquid'],36:[115.78,119.735,0.003425,'Gas'],
  37:[312.45,961,1.53,'Solid'],38:[1050,1650,2.64,'Solid'],
  39:[1795,3618,4.47,'Solid'],40:[2127,4679,6.52,'Solid']
};
for(const [z,values] of Object.entries(rsc31to40)){
  const record=detailed[Number(z)-1];
  assert.equal(record.meltingPoint,values[0],'RSC melting point mismatch: '+z);
  assert.equal(record.boilingPoint,values[1],'RSC boiling point mismatch: '+z);
  assert.equal(record.density,values[2],'RSC density mismatch: '+z);
  assert.equal(record.standardState,values[3],'RSC room state mismatch: '+z);
}
assert.equal(detailed[32].sublimationPoint,889,'Gray arsenic sublimation point near 1 atm');
assert.equal(detailed[35].electronegativity,null,'Krypton Pauling electronegativity unknown');
assert.ok(indexSource.includes('x.sublimationPoint!=null'),'Temperature view must handle sublimation');
const elementHtml=readFileSync('element.html','utf8');
assert.ok(elementHtml.includes('Sublimation point (near 1 atm)'),'Details must label arsenic sublimation');
for(let z=31;z<=40;z++){
  assert.ok(elementHtml.includes('  '+z+':"'),'Missing individualized discovery narrative: '+z);
}

// RSC element fact boxes, 41–50: melt/boil temperatures K, density g/cm^3 at room temperature.
const rsc41to50={
  41:[2750,5014,8.57],42:[2895,4912,10.2],43:[2430,4535,11],
  44:[2606,4420,12.1],45:[2236,3968,12.4],46:[1828,3236,12],
  47:[1234.93,2435,10.5],48:[594.219,1040,8.69],
  49:[429.75,2300,7.31],50:[505.078,2859,7.287]
};
for(const [z,values] of Object.entries(rsc41to50)){
 const e=detailed[Number(z)-1];
 assert.equal(e.meltingPoint,values[0],'RSC melting mismatch '+z);
 assert.equal(e.boilingPoint,values[1],'RSC boiling mismatch '+z);
 assert.equal(e.density,values[2],'RSC density mismatch '+z);
 assert.equal(e.standardState,'Solid','RSC state mismatch '+z);
}
assert.equal(detailed[42].atomicMass,null,'Tc has no standard weight (details)');
assert.equal(cells[42].mass,null,'Tc has no standard weight (main)');
assert.equal(detailed[42].referenceMassNumber,98,'Tc reference mass number 98');
assert.equal(detailed[47].namedBy,null,'Cadmium invalid attribution removed');
assert.ok(indexSource.includes('standardWeightText(e)'),'Main UI isotope weight explanation');
const elementHtml41=readFileSync('element.html','utf8');
assert.ok(elementHtml41.includes('Reference isotope mass number (not atomic weight)'),'Detail UI Tc explanation');
for(let z=41;z<=50;z++)assert.ok(elementHtml41.includes('  '+z+':"'),'Discovery story missing '+z);

// RSC fact boxes 51–60: melting/boiling K, room-temperature density g/cm^3 and state.
const rsc51to60={
  51:[903.778,1860,6.68,'Solid'],52:[722.66,1261,6.232,'Solid'],
  53:[386.9,457.6,4.933,'Solid'],54:[161.4,165.051,0.005366,'Gas'],
  55:[301.7,944,1.873,'Solid'],56:[1000,2118,3.62,'Solid'],
  57:[1193,3737,6.15,'Solid'],58:[1072,3716,6.77,'Solid'],
  59:[1204,3793,6.77,'Solid'],60:[1289,3347,7.01,'Solid']
};
for(const [z,vals] of Object.entries(rsc51to60)){
 const e=detailed[Number(z)-1];
 assert.equal(e.meltingPoint,vals[0],'RSC melting 51-60 '+z);
 assert.equal(e.boilingPoint,vals[1],'RSC boiling 51-60 '+z);
 assert.equal(e.density,vals[2],'RSC density 51-60 '+z);
 assert.equal(e.standardState,vals[3],'RSC phase 51-60 '+z);
}
assert.equal(detailed[50].discoveredBy,null,'Antimony: no single known discoverer');
assert.equal(detailed[55].discoveredBy,'Humphry Davy','Barium metal isolation credit');
assert.equal(detailed[51].namedBy,'Martin Heinrich Klaproth','Tellurium naming attribution');
const storyHtml51to60=readFileSync('element.html','utf8');
for(let z=51;z<=60;z++)assert.ok(storyHtml51to60.includes('  '+z+':"'),'Discovery story missing '+z);

// RSC element fact-box values for 61–70: melt/boil K, density at room temp g/cm³, phase, configuration.
const rsc61to70={
  61:[1315,3273,7.26,"Solid","[Xe] 4f5 6s2"],
  62:[1345,2067,7.52,"Solid","[Xe] 4f6 6s2"],
  63:[1095,1802,5.24,"Solid","[Xe] 4f7 6s2"],
  64:[1586,3546,7.9,"Solid","[Xe] 4f7 5d1 6s2"],
  65:[1632,3503,8.23,"Solid","[Xe] 4f9 6s2"],
  66:[1685,2840,8.55,"Solid","[Xe] 4f10 6s2"],
  67:[1745,2973,8.8,"Solid","[Xe] 4f11 6s2"],
  68:[1802,3141,9.07,"Solid","[Xe] 4f12 6s2"],
  69:[1818,2223,9.32,"Solid","[Xe] 4f13 6s2"],
  70:[1097,1469,6.9,"Solid","[Xe] 4f14 6s2"],
};
for(const [z,vals] of Object.entries(rsc61to70)){
 const e=detailed[Number(z)-1];
 assert.equal(e.meltingPoint,vals[0],'RSC melting mismatch '+z);
 assert.equal(e.boilingPoint,vals[1],'RSC boiling mismatch '+z);
 assert.equal(e.density,vals[2],'RSC density mismatch '+z);
 assert.equal(e.standardState,vals[3],'RSC state mismatch '+z);
 assert.equal(e.electronConfiguration,vals[4],'RSC configuration mismatch '+z);
}
assert.equal(detailed[60].atomicMass,null,'Pm standard weight missing');
assert.equal(cells[60].mass,null,'Pm main weight missing');
assert.equal(detailed[60].referenceMassNumber,145,'Pm isotope reference mass number');
assert.equal(detailed[60].namedBy,'Grace Coryell','Promethium naming');
assert.equal(detailed[63].namedBy,'Paul-Émile Lecoq de Boisbaudran','Gadolinium naming');
assert.ok(indexSource.includes('function standardWeightText(e)'),'Generic missing weight helper');
const detailHtml61=readFileSync('element.html','utf8');
for(let z=61;z<=70;z++)assert.ok(detailHtml61.includes('  '+z+':"'),'History story missing '+z);
// RSC element fact-box values for 71–80: K, room-temperature density (g/cm3), state and configuration.
const rsc71to80={
  71:[1936,3675,9.84,"Solid","[Xe] 4f14 5d1 6s2"],
  72:[2506,4873,13.3,"Solid","[Xe] 4f14 5d2 6s2"],
  73:[3290,5728,16.4,"Solid","[Xe] 4f14 5d3 6s2"],
  74:[3687,5828,19.3,"Solid","[Xe] 4f14 5d4 6s2"],
  75:[3458,5863,20.8,"Solid","[Xe] 4f14 5d5 6s2"],
  76:[3306,5281,22.5872,"Solid","[Xe] 4f14 5d6 6s2"],
  77:[2719,4701,22.5622,"Solid","[Xe] 4f14 5d7 6s2"],
  78:[2041.4,4098,21.5,"Solid","[Xe] 4f14 5d9 6s1"],
  79:[1337.33,3109,19.3,"Solid","[Xe] 4f14 5d10 6s1"],
  80:[234.321,629.769,13.5336,"Liquid","[Xe] 4f14 5d10 6s2"],
};
for(const [z,values] of Object.entries(rsc71to80)){
 const e=detailed[Number(z)-1];
 assert.equal(e.meltingPoint,values[0],'RSC melting point mismatch '+z);
 assert.equal(e.boilingPoint,values[1],'RSC boiling point mismatch '+z);
 assert.equal(e.density,values[2],'RSC density mismatch '+z);
 assert.equal(e.standardState,values[3],'RSC standard-state mismatch '+z);
 assert.equal(e.electronConfiguration,values[4],'RSC configuration mismatch '+z);
}
assert.equal(detailed[71].discoveredBy,'Dirk Coster and George de Hevesy','Both hafnium discoverers');
assert.ok(detailed[73].discoveredBy.includes('Elhuyar'),'Tungsten metal-isolation credit');
assert.ok(detailed[74].discoveredBy.includes('Otto Berg'),'Rhenium attribution includes Berg');
for(const z of [78,79,80]){
 assert.equal(detailed[z-1].yearDiscovered,'Ancient','Ancient history year '+z);
 assert.equal(detailed[z-1].discoveredBy,null,'Ancient history has no sole discoverer '+z);
}
const detailHtml71to80=readFileSync('element.html','utf8');
for(let z=71;z<=80;z++) assert.ok(detailHtml71to80.includes('  '+z+':"'),'Element-specific discovery story missing '+z);
// RSC 81–90 fact boxes: Kelvin melting/boiling, density in g/cm³ at room temp, state, configuration.
const rsc81to90={
  81:[577,1746,11.8,"Solid","[Xe] 4f14 5d10 6s2 6p1"],
  82:[600.612,2022,11.3,"Solid","[Xe] 4f14 5d10 6s2 6p2"],
  83:[544.556,1837,9.79,"Solid","[Xe] 4f14 5d10 6s2 6p3"],
  84:[527,1235,9.2,"Solid","[Xe] 4f14 5d10 6s2 6p4"],
  85:[573,623,null,"Solid","[Xe] 4f14 5d10 6s2 6p5"],
  86:[202,211.5,0.009074,"Gas","[Xe] 4f14 5d10 6s2 6p6"],
  87:[294,923,null,"Solid","[Rn] 7s1"],
  88:[969,1773,5,"Solid","[Rn] 7s2"],
  89:[1323,3473,10,"Solid","[Rn] 6d1 7s2"],
  90:[2023,5058,11.7,"Solid","[Rn] 6d2 7s2"],
};
for(const [z,values] of Object.entries(rsc81to90)){
 const e=detailed[Number(z)-1];
 assert.equal(e.meltingPoint,values[0],'RSC melting '+z);
 assert.equal(e.boilingPoint,values[1],'RSC boiling '+z);
 assert.equal(e.density,values[2],'RSC density '+z);
 assert.equal(e.standardState,values[3],'RSC phase '+z);
 assert.equal(e.electronConfiguration,values[4],'RSC configuration '+z);
}
const radioReferences={84:209,85:210,86:222,87:223,88:226,89:227};
for(const [z,massNumber] of Object.entries(radioReferences)){
 const e=detailed[Number(z)-1],cell=cells[Number(z)-1];
 assert.equal(e.atomicMass,null,'Unassigned weight '+z);
 assert.equal(cell.mass,null,'Unassigned grid weight '+z);
 assert.equal(e.referenceMassNumber,massNumber,'Isotope mass number '+z);
}
for(const z of [85,87])assert.equal(detailed[z-1].density,null,'Unknown density '+z);
assert.equal(detailed[89].atomicMass,232.04,'Thorium still has standard atomic weight');
assert.equal(detailed[81].discoveredBy,null,'Lead no named discoverer');
assert.equal(detailed[83].discoveredBy,'Marie Curie and Pierre Curie','Polonium joint credit');
assert.equal(detailed[87].discoveredBy,'Marie Curie and Pierre Curie','Radium joint credit');
assert.equal(detailed[88].discoveredBy,'André Debierne','Actinium 1899 credit');
const newDetailHtml=readFileSync('element.html','utf8');
for(let z=81;z<=90;z++)assert.ok(newDetailHtml.includes('  '+z+':"'),'Discovery story '+z);
assert.ok(indexSource.includes('standardWeightText(e)'),'Generic isotope label on main');
// RSC fact-box data for 91–100: melting/boiling K, density at room temp (g/cm³), state and electron configuration.
const rsc91to100={
  91:[1845,4273,15.4,"Solid","[Rn] 5f2 6d1 7s2"],
  92:[1408,4404,19.1,"Solid","[Rn] 5f3 6d1 7s2"],
  93:[917,4175,20.2,"Solid","[Rn] 5f4 6d1 7s2"],
  94:[913,3501,19.7,"Solid","[Rn] 5f6 7s2"],
  95:[1449,2284,12,"Solid","[Rn] 5f7 7s2"],
  96:[1618,null,13.51,"Solid","[Rn] 5f7 6d1 7s2"],
  97:[1259,null,14.78,"Solid","[Rn] 5f9 7s2"],
  98:[1173,null,15.1,"Solid","[Rn] 5f10 7s2"],
  99:[1133,null,null,"Solid","[Rn] 5f11 7s2"],
  100:[1800,null,null,"Solid","[Rn] 5f12 7s2"],
};
for(const [z,expected] of Object.entries(rsc91to100)){
 const e=detailed[Number(z)-1];
 assert.equal(e.meltingPoint,expected[0],'RSC melting point '+z);
 assert.equal(e.boilingPoint,expected[1],'RSC boiling point '+z);
 assert.equal(e.density,expected[2],'RSC density '+z);
 assert.equal(e.standardState,expected[3],'RSC state '+z);
 assert.equal(e.electronConfiguration,expected[4],'RSC electron configuration '+z);
}
const isotope91to100={93:237,94:244,95:243,96:247,97:247,98:251,99:252,100:257};
for(const [z,isotope] of Object.entries(isotope91to100)){
 const e=detailed[Number(z)-1],t=cells[Number(z)-1];
 assert.equal(e.atomicMass,null,'Unassigned standard weight (details) '+z);
 assert.equal(t.mass,null,'Unassigned standard weight (table) '+z);
 assert.equal(e.referenceMassNumber,isotope,'Representative isotope number '+z);
}
assert.equal(detailed[90].atomicMass,231.04,'Pa CIAAW standard weight');
assert.equal(detailed[91].atomicMass,238.03,'U CIAAW standard weight');
for(const z of [96,97,98,99,100])assert.equal(detailed[z-1].boilingPoint,null,'Unknown boiling point '+z);
for(const z of [99,100])assert.equal(detailed[z-1].density,null,'Unknown density '+z);
assert.equal(detailed[90].discoveredBy,'Kasimir Fajans and Otto Göhring','1913 protactinium credit');
assert.equal(detailed[92].discoveredBy,'Edwin McMillan and Philip Abelson','Neptunium full discovery team');
const html91to100=readFileSync('element.html','utf8');
for(let z=91;z<=100;z++)assert.ok(html91to100.includes('  '+z+':"'),'Discovery story missing '+z);
assert.ok(indexSource.includes('standardWeightText(e)'),'Generic isotope display helper');
// CIAAW has no standard atomic weight for elements 101–110.
// RSC fact boxes: melt/boil K, density g/cm^3, electron configuration.
const rsc101to110={
  101:[258,1100,null,null,"Solid","[Rn] 5f13 7s2","+3"],
  102:[259,1100,null,null,"Solid","[Rn] 5f14 7s2","+3, +2"],
  103:[262,1900,null,null,"Solid","[Rn] 5f14 7s2 7p1","+3"],
  104:[267,null,null,null,"Solid","[Rn] 5f14 6d2 7s2",null],
  105:[268,null,null,null,"Solid","[Rn] 5f14 6d3 7s2",null],
  106:[269,null,null,null,"Solid","[Rn] 5f14 6d4 7s2",null],
  107:[270,null,null,null,"Solid","[Rn] 5f14 6d5 7s2",null],
  108:[269,null,null,null,"Solid","[Rn] 5f14 6d6 7s2",null],
  109:[278,null,null,null,"Solid","[Rn] 5f14 6d7 7s2",null],
  110:[281,null,null,null,"Expected to be a solid","[Rn] 5f14 6d9 7s1",null],
};
for(const [z,expected] of Object.entries(rsc101to110)){
 const entry=detailed[Number(z)-1],cell=cells[Number(z)-1];
 assert.equal(entry.atomicMass,null,'No CIAAW weight '+z);
 assert.equal(cell.mass,null,'No grid standard weight '+z);
 assert.equal(entry.referenceMassNumber,expected[0],'Bracket isotope mass number '+z);
 assert.equal(entry.meltingPoint,expected[1],'RSC melting '+z);
 assert.equal(entry.boilingPoint,expected[2],'RSC boiling '+z);
 assert.equal(entry.density,expected[3],'RSC density '+z);
 assert.equal(entry.standardState,expected[4],'State (RSC; qualified 110) '+z);
 assert.equal(entry.electronConfiguration,expected[5],'RSC electron configuration '+z);
 assert.equal(entry.oxidationStates,expected[6],'RSC common oxidation '+z);
}
for(let z=101;z<=103;z++)assert.equal(detailed[z-1].electronegativity,null,'Pauling electronegativity unknown '+z);
for(let z=104;z<=110;z++)assert.equal(detailed[z-1].meltingPoint,null,'Do not invent superheavy melting points '+z);
const h101to110=readFileSync('element.html','utf8');
for(let z=101;z<=110;z++)assert.ok(h101to110.includes('  '+z+':"'),'Element-specific story missing '+z);
assert.ok(indexSource.includes('standardWeightText(e)'),'Generic isotope mass-number display');
// Final eight: CIAAW has no standard atomic weights; RSC mass-number reference and predicted ground-state configurations.
const rsc111to118={
  111:[280,"[Rn] 5f14 6d10 7s1","1994","GSI Darmstadt team led by Peter Armbruster and Gottfried Münzenberg"],
  112:[285,"[Rn] 5f14 6d10 7s2","1996","GSI Darmstadt team led by Sigurd Hofmann"],
  113:[286,"[Rn] 5f14 6d10 7s2 7p1","2004","RIKEN team led by Kosuke Morita (Japan)"],
  114:[289,"[Rn] 5f14 6d10 7s2 7p2","1998","JINR Dubna team led by Yuri Oganessian and Vladimir Utyonkov"],
  115:[289,"[Rn] 5f14 6d10 7s2 7p3","2003","JINR Dubna, Lawrence Livermore, and Oak Ridge research collaborations"],
  116:[293,"[Rn] 5f14 6d10 7s2 7p4","2000","JINR Dubna and Lawrence Livermore researchers led by Yuri Oganessian, Vladimir Utyonkov, and Kenton Moody"],
  117:[294,"[Rn] 5f14 6d10 7s2 7p5","2010","JINR Dubna, Lawrence Livermore, and Oak Ridge research collaborations"],
  118:[294,"[Rn] 5f14 6d10 7s2 7p6","2006","JINR Dubna and Lawrence Livermore collaboration"],
};
for(const [z,reference] of Object.entries(rsc111to118)){
 const x=detailed[Number(z)-1],t=cells[Number(z)-1];
 assert.equal(x.atomicMass,null,'CIAAW standard weight unassigned '+z);
 assert.equal(t.mass,null,'Grid mass unassigned '+z);
 assert.equal(x.referenceMassNumber,reference[0],'RSC mass-number reference '+z);
 assert.equal(x.electronConfiguration,reference[1],'RSC electron configuration '+z);
 assert.equal(x.yearDiscovered,reference[2],'Discovery year '+z);
 assert.equal(x.discoveredBy,reference[3],'Discovery attribution '+z);
 assert.equal(x.meltingPoint,null,'Melting unknown '+z);
 assert.equal(x.boilingPoint,null,'Boiling unknown '+z);
 assert.equal(x.density,null,'Density unknown '+z);
 assert.equal(x.standardState,'Expected solid (RSC classification; unverified)','Qualified predicted state '+z);
 assert.equal(t.state,'Unknown / predicted','Grid expected-state qualifier '+z);
 assert.equal(x.oxidationStates,null,'Unknown oxidation '+z);
 assert.equal(x.electronegativity,null,'Unknown Pauling '+z);
 assert.equal(x.ionizationEnergy,null,'Unconfirmed ionization energy '+z);
}
const finalStories=readFileSync('element.html','utf8');
for(let z=111;z<=118;z++)assert.ok(finalStories.includes('  '+z+':"'),'Discovery story missing '+z);
for(let z=1;z<=118;z++){
 const x=detailed[z-1],cell=cells[z-1];
 assert.equal(x.atomicMass,cell.mass,'All atomic-weight values aligned '+z);
 if(x.atomicMass===null)assert.ok(Number.isInteger(x.referenceMassNumber),'Reference isotope needed '+z);
}
assert.equal(detailed[22].namedBy,'Nils Gabriel Sefström','Vanadium naming attribution');
assert.equal(detailed[1].meltingPoint,null,'Helium: phase transition not established at ordinary pressure');
assert.ok(indexSource.includes('x.meltingPoint!=null') && indexSource.includes('x.boilingPoint!=null'),
          'Missing-value temperature protection was removed');


// Phase 2: PubChem's directly labelled van der Waals radius (pm), first
// ionization energy (eV) and electron affinity (eV) for Z=1..30.
const pubchemVdwRadiusFirst30=[120,140,182,153,192,170,155,152,135,154,227,173,184,210,180,180,175,188,275,231,211,187,179,189,197,194,192,163,140,139];
const pubchemFirstIonizationFirst30=[13.598,24.587,5.392,9.323,8.298,11.26,14.534,13.618,17.423,21.565,5.139,7.646,5.986,8.152,10.487,10.36,12.968,15.76,4.341,6.113,6.561,6.828,6.746,6.767,7.434,7.902,7.881,7.64,7.726,9.394];
const pubchemElectronAffinityFirst30=[0.754,null,0.618,null,0.277,1.263,null,1.461,3.339,null,0.548,null,0.441,1.385,0.746,2.077,3.617,null,0.501,null,0.188,0.079,0.525,0.666,null,0.163,0.661,1.156,1.228,null];
for(let i=0;i<30;i++){
 assert.equal(detailed[i].atomicRadius,pubchemVdwRadiusFirst30[i],'PubChem van der Waals radius '+(i+1));
 assert.equal(detailed[i].ionizationEnergy,pubchemFirstIonizationFirst30[i],'PubChem first ionization '+(i+1));
 assert.equal(detailed[i].electronAffinity,pubchemElectronAffinityFirst30[i],'PubChem electron affinity '+(i+1));
}
const catalogRaw=readFileSync('element-photo-data.js','utf8');
const catalog=JSON.parse(catalogRaw.replace(/^window\.ELEMENT_PHOTOS\s*=\s*/, '').replace(/;\s*$/, ''));
assert.equal(Object.keys(catalog).length,118,'Photo metadata all 118');
for(let z=105;z<=118;z++)assert.equal(catalog[String(z)].title,'No Image Found','No sample photo for '+z);
const detailUi=readFileSync('element.html','utf8');
assert.ok(detailUi.includes('placeholder || illustration || rightsUnknown'),'Image honesty safeguards');
assert.ok(detailUi.includes('Van der Waals atomic radius'),'Radius definition in UI');
assert.ok(detailUi.includes('First ionization energy'),'First ionization in UI');
assert.ok(detailUi.includes('Common oxidation states'),'Selected oxidation states in UI');
const quizSource=readFileSync('quiz.html','utf8');
assert.ok(!quizSource.includes('"discoverer-"+e.atomicNumber'),'Exclude ambiguous discoverer prompts');
assert.ok(!quizSource.includes('"use-"+e.atomicNumber'),'Exclude overlapping uses prompts');
const quizCode=[...quizSource.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)]
 .map(m=>m[1]).find(s=>s.includes('buildQuestionPool'));
assert.ok(quizCode,'Quiz builder present');
const poolPrefix=quizCode.slice(0,quizCode.indexOf('const pool=buildQuestionPool();'));
const questionPool=new Function('window',poolPrefix+'\nreturn buildQuestionPool();')({PERIODIC_ELEMENTS:detailed});
assert.ok(questionPool.length>=500,'Quiz has at least 500 questions');
assert.equal(new Set(questionPool.map(q=>q.id)).size,questionPool.length,'Unique question IDs');
for(const question of questionPool){
 assert.equal(question.choices.length,4,'Four choices '+question.id);
 assert.equal(new Set(question.choices).size,4,'No duplicate distractors '+question.id);
 assert.equal(question.choices.filter(c=>c===question.answer).length,1,'Unique designated answer '+question.id);
}


// Second-stage PubChem extension: Z=31..60; source units and missing values
// as detailed in the preceding Z=1..30 numeric fixture.
const pubchemVdwRadius31to60=[187,211,185,190,183,202,303,249,219,186,207,209,209,207,195,202,172,158,193,217,206,206,198,216,343,268,240,235,239,229];
const pubchemFirstIonization31to60=[5.999,7.9,9.815,9.752,11.814,14,4.177,5.695,6.217,6.634,6.759,7.092,7.28,7.361,7.459,8.337,7.576,8.994,5.786,7.344,8.64,9.01,10.451,12.13,3.894,5.212,5.577,5.539,5.464,5.525];
const pubchemElectronAffinity31to60=[0.3,1.35,0.81,2.021,3.365,null,0.468,null,0.307,0.426,0.893,0.746,0.55,1.05,1.137,0.557,1.302,null,0.3,1.2,1.07,1.971,3.059,null,0.472,null,0.5,0.5,null,null];
for(let i=0;i<30;i++){
 const z=i+31;
 assert.equal(detailed[z-1].atomicRadius,pubchemVdwRadius31to60[i],'PubChem van der Waals radius '+z);
 assert.equal(detailed[z-1].ionizationEnergy,pubchemFirstIonization31to60[i],'PubChem first ionisation '+z);
 assert.equal(detailed[z-1].electronAffinity,pubchemElectronAffinity31to60[i],'PubChem electron affinity '+z);
}

console.log('PASS: 118 unique entries, numbering and symbols;  CIAAW 2024 weight conventions 1–118 (null where unassigned); RSC melting/boiling/density 21–118, configurations 61–118; selected discovery dates; missing-phase safeguards');
console.log('PASS: PubChem Z=1–60 radius/ionization/affinity fixtures, quiz pool validity and image provenance UI guardrails');
console.log('NOTICE: These internal consistency checks do NOT certify all chemistry, history, photography or quiz accuracy.');
