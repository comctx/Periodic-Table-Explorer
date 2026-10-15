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


// Phase 2 completed for these three particular scientific fields: PubChem Z=61..118,
// van der Waals radius (pm), first ionization energy (eV), electron affinity (eV).
const pubchemVdwRadius61to90=[236,229,233,237,221,229,216,235,227,242,221,212,217,210,217,216,202,209,166,209,196,202,207,197,202,220,348,283,260,237];
const pubchemFirstIonization61to90=[5.55,5.644,5.67,6.15,5.864,5.939,6.022,6.108,6.184,6.254,5.426,6.825,7.89,7.98,7.88,8.7,9.1,9,9.226,10.438,6.108,7.417,7.289,8.417,9.5,10.745,3.9,5.279,5.17,6.08];
const pubchemElectronAffinity61to90=[null,null,null,null,null,null,null,null,null,null,null,null,0.322,0.815,0.15,1.1,1.565,2.128,2.309,null,0.2,0.36,0.946,1.9,2.8,null,0.47,null,null,null];
const pubchemVdwRadius91to118=[243,240,221,243,244,245,244,245,245,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
const pubchemFirstIonization91to118=[5.89,6.194,6.266,6.06,5.993,6.02,6.23,6.3,6.42,6.5,6.58,6.65,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
const pubchemElectronAffinity91to118=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
for(let z=61;z<=118;z++){
 const i=z<=90?z-61:z-91;
 const r=z<=90?pubchemVdwRadius61to90:pubchemVdwRadius91to118;
 const ie=z<=90?pubchemFirstIonization61to90:pubchemFirstIonization91to118;
 const ea=z<=90?pubchemElectronAffinity61to90:pubchemElectronAffinity91to118;
 assert.equal(detailed[z-1].atomicRadius,r[i],'PubChem van der Waals radius '+z);
 assert.equal(detailed[z-1].ionizationEnergy,ie[i],'PubChem first ionization '+z);
 assert.equal(detailed[z-1].electronAffinity,ea[i],'PubChem electron affinity '+z);
}


// Session 16, chemistry review, Royal Society of Chemistry:
// https://periodic-table.rsc.org/element/{Z}/
// These are the RSC's *selected common oxidation states*, not every possible state.
const rscAuditedOxidation={
  8:"-1, -2",
  17:"+7, +5, +3, +1, -1",
  35:"+7, +5, +3, +1, -1",
  36:"+2",
  42:"+6, +5, +4, +3, +2, 0",
  44:"+8, +6, +4, +3, +2, 0, -2",
  45:"+5, +4, +3, +2, +1, 0",
  46:"+4, +2, 0",
  47:"+2, +1",
  54:"+6, +4, +2",
};
for(const [z,val] of Object.entries(rscAuditedOxidation))
 assert.equal(detailed[Number(z)-1].oxidationStates,val,'RSC common oxidation states '+z);
const rscAuditedAppearance={
  6:"Appearance depends on allotrope: diamond is clear and transparent; graphite is black and shiny; graphene and fullerenes can form dark materials.",
  8:"Colorless, odorless gas at room temperature.",
  9:"Very pale yellow-green, highly reactive gas.",
  35:"Deep reddish-brown, oily liquid with an irritating vapor; toxic.",
  96:"Silvery radioactive metal that tarnishes in air.",
  100:"Radioactive metal produced only in extremely small quantities.",
};
for(const [z,val] of Object.entries(rscAuditedAppearance))
 assert.equal(detailed[Number(z)-1].appearance,val,'Scientifically qualified appearance '+z);
const sourceQualifiedUses={
  14:"Elemental silicon is used in semiconductor chips and solar cells; silicon-containing compounds are used in glass, concrete and silicones.",
  33:"Arsenic-containing compounds have applications in certain semiconductors, specialty glass and alloys. Historical arsenic wood preservatives face significant restrictions because of toxicity.",
  35:"Bromine-containing compounds are used in pharmaceuticals, chemical synthesis, some water-treatment applications and some flame retardants; several historical uses have been restricted or phased out.",
};
for(const [z,val] of Object.entries(sourceQualifiedUses))
 assert.equal(detailed[Number(z)-1].typicalUses,val,'Element vs compound uses '+z);
for(const z of [95,96,97,98,99,100])
 assert.equal(detailed[z-1].electronegativity,null,'RSC Pauling electronegativity unknown '+z);
const scienceHtml=readFileSync('element.html','utf8');
assert.ok(scienceHtml.includes('Typical Uses (Element and Its Compounds)'),'Compound-use distinction in interface');
// Neutral atom electron counts and subshell limits for all 118. Bracketed noble-gas
// cores are *electron counts*, not a literal zero-electron abbreviation.
const coreElectrons={He:2,Ne:10,Ar:18,Kr:36,Xe:54,Rn:86};
function parseOrbitalConfiguration(raw,z){
 const src=String(raw);
 let core=0;
 const remaining=src.replace(/^\[([A-Za-z]+)\]\s*/,(_,name)=>{
   assert.ok(Object.prototype.hasOwnProperty.call(coreElectrons,name),'Unknown core '+name+' at '+z);
   core=coreElectrons[name];return '';
 });
 const matches=[...remaining.matchAll(/(\d+)([spdf])(\d+)/g)];
 assert.ok(matches.length>=1,'Missing orbitals at '+z);
 assert.equal(remaining.replace(/(\d+)([spdf])(\d+)/g,'').replace(/\s+/g,''),'','Invalid configuration notation at '+z);
 const caps={s:2,p:6,d:10,f:14},orbitals={},order=[];
 for(const m of matches){
   const shell=m[1]+m[2],val=Number(m[3]);
   assert.ok(val>=1&&val<=caps[m[2]],'Invalid occupancy at '+z+' '+shell);
   assert.ok(Number(m[1])>=1&&Number(m[1])<=7,'Invalid principal quantum number '+z);
   assert.ok(!Object.prototype.hasOwnProperty.call(orbitals,shell),'Duplicate subshell '+z+' '+shell);
   orbitals[shell]=val;order.push(shell);
 }
 const electronCount=core+Object.values(orbitals).reduce((sum,num)=>sum+num,0);
 assert.equal(electronCount,z,'Neutral-atom electron count '+z);
 return {core,orbitals};
}
for(let z=1;z<=118;z++)parseOrbitalConfiguration(detailed[z-1].electronConfiguration,z);
// NIST neutral ground-state configurations (H–U, source cited in audit), special-case
// occupancy checks protect against deceptively plausible Aufbau-order mistakes.
const nistAnomalousNeutral={
  24:{'3d':5,'4s':1},29:{'3d':10,'4s':1},
  41:{'4d':4,'5s':1},42:{'4d':5,'5s':1},
  43:{'4d':5,'5s':2},44:{'4d':7,'5s':1},
  45:{'4d':8,'5s':1},46:{'4d':10},
  47:{'4d':10,'5s':1},58:{'4f':1,'5d':1,'6s':2},
  78:{'4f':14,'5d':9,'6s':1},79:{'4f':14,'5d':10,'6s':1}
};
for(const [z,shells] of Object.entries(nistAnomalousNeutral)){
 const got=parseOrbitalConfiguration(detailed[Number(z)-1].electronConfiguration,Number(z)).orbitals;
 assert.equal(JSON.stringify(Object.keys(got).sort().map(k=>[k,got[k]])),
  JSON.stringify(Object.keys(shells).sort().map(k=>[k,shells[k]])),'NIST anomalous ground state '+z);
}


// Extension: RSC transition metals 24–28. Lists indicate documented source conventions
// and may include rare but recognized forms, not their relative abundance.
const rscOxTransition={24:'+6, +3, +2, 0',25:'+7, +6, +4, +3, +2, 0, -1',
 26:'+6, +3, +2, 0, -2',28:'+3, +2, 0'};
for(const [z,states] of Object.entries(rscOxTransition))
 assert.equal(detailed[Number(z)-1].oxidationStates,states,'RSC transition-metal states '+z);


// Audit session 17: Royal Society of Chemistry Pauling electronegativity,
// all 30 elements Z=31..60. Unknowns are null, not zero.
const rscPauling31to60=[1.81,2.01,2.18,2.55,2.96,null,0.82,0.95,1.22,1.33,1.6,2.16,2.1,2.2,2.28,2.2,1.93,1.69,1.78,1.96,2.05,2.1,2.66,2.6,0.79,0.89,1.1,1.12,1.13,1.14];
for(let i=0;i<30;i++)
 assert.equal(detailed[i+30].electronegativity,rscPauling31to60[i],'RSC Pauling 31–60 '+(i+31));
const rscOxPraseodymium='+4, +3';
assert.equal(detailed[58].oxidationStates,rscOxPraseodymium,'RSC Pr common oxidation +4 and +3');
const verifiedAppearance31to60={
  31:"A soft, silvery-white metal.",
  32:"A brittle, silvery-white metalloid.",
  38:"A soft, silvery metal that reacts with water and readily oxidizes in air.",
  43:"A radioactive, silvery metal.",
  51:"In its metallic form, a silvery, hard and brittle metalloid.",
  52:"A grey metalloid, often obtained as a powder.",
  53:"Shiny black crystals that release violet vapor when heated.",
  56:"A soft, silvery metal that quickly tarnishes in air and reacts with water."
};
for(const [z,v] of Object.entries(verifiedAppearance31to60))
 assert.equal(detailed[Number(z)-1].appearance,v,'RSC qualified appearance '+z);
const verifiedUses31to60={
  31:"Gallium arsenide and gallium nitride are semiconductors used in LEDs, electronics and some solar cells. Elemental gallium is used in low-melting alloys and specialized thermometers.",
  38:"Strontium salts give red colors to fireworks and flares. Strontium ferrite is used in magnets, and strontium compounds are used in ceramics and other specialty materials.",
  40:"Zirconium metal alloys are used for nuclear-reactor cladding and corrosion-resistant components. Zirconium dioxide (zirconia) is used in ceramics, foundry products and refractory materials.",
  43:"Technetium-99m compounds are widely used for medical diagnostic imaging. Other technetium applications are limited by its radioactivity.",
  51:"Antimony metal is used in hardening alloys and some semiconductor devices. Antimony compounds are used in flame-retardant formulations, glass and ceramics; many compounds are toxic.",
  52:"Tellurium is added to copper, steel and lead alloys to alter their properties. Telluride compounds are used in some solar cells and thermoelectric devices; tellurium also has specialized rubber and semiconductor uses.",
  53:"Iodide salts are used in iodized table salt, medicines, disinfectants and photographic chemistry. Iodine compounds have industrial uses; iodine-131 is used in selected thyroid treatments.",
  56:"Barium sulfate is used in X-ray gastrointestinal imaging and drilling fluids; its very low solubility distinguishes it from toxic soluble barium compounds. Other barium compounds are used in glass, ceramics and green fireworks.",
  57:"Lanthanum-containing optical glass and catalysts use its compounds. Lanthanum alloys are used in some rechargeable batteries and specialty metals.",
  58:"Cerium oxide is used to polish glass and in catalytic converters. Cerium-containing alloys are used in lighter flints and specialty metal products."
};
for(const [z,v] of Object.entries(verifiedUses31to60))
 assert.equal(detailed[Number(z)-1].typicalUses,v,'Correct elemental/compound uses '+z);


// Session 18: source-specific RSC Pauling scale, all Z=61..70
const rscPauling61to70=[null,1.17,null,1.2,null,1.22,1.23,1.24,1.25,null];
for(let i=0;i<10;i++)
 assert.equal(detailed[60+i].electronegativity,rscPauling61to70[i],'RSC Pauling 61-70 '+(i+61));
assert.equal(detailed[64].oxidationStates,'+4, +3','RSC Tb 4 and 3');
assert.equal(detailed[68].oxidationStates,'+3, +2','RSC Tm 3 and 2');
assert.equal(detailed[62].appearance,"A soft, silvery metal that tarnishes quickly and reacts with water.",'RSC Eu appearance');
assert.equal(detailed[69].appearance,"A soft, silvery metal that gradually develops a protective oxide layer in air.",'RSC Yb appearance');
assert.equal(detailed[62].typicalUses,"Europium compounds provide light-emitting phosphors for lamps, displays and UV-visible security inks. Europium-containing materials also have specialized laser and neutron-absorption uses.",'RSC-informed uses Z=63');
assert.equal(detailed[63].typicalUses,"Gadolinium-containing compounds are used as MRI contrast agents; gadolinium-containing alloys are used in magnets and electronics. Its neutron-absorbing properties are useful in nuclear technology.",'RSC-informed uses Z=64');
assert.equal(detailed[64].typicalUses,"Terbium compounds provide green phosphors for lighting and displays. Terbium-containing alloys are used in some magnetic and electronic materials.",'RSC-informed uses Z=65');
assert.equal(detailed[69].typicalUses,"Ytterbium compounds and materials are used in certain tunable or fiber lasers and specialty catalysts; other uses remain limited or experimental.",'RSC-informed uses Z=70');


// Scientific audit session 19 — Royal Society of Chemistry 71–90:
// RSC's chosen Pauling scale can differ from other published Pauling tables,
// which must not be misconstrued as an experimental error in those tables.
const rscPauling71to90=[1,1.3,1.5,1.7,1.9,2.2,2.2,2.2,2.4,1.9,1.8,1.8,1.9,2,2.2,null,0.7,0.9,1.1,1.3];
const rscOxidation71to90={"71":"+3","72":"+4","73":"+5","74":"+6, +5, +4, +3, +2, 0","75":"+7, +6, +4, +2, -1","76":"+8, +6, +4, +3, +2, 0, -2","77":"+6, +4, +3, +2, +1, 0, -1","78":"+4, +2","79":"+5, +4, +3, +2, +1, -1","80":"+2, +1","81":"+3, +1","82":"+4, +2","83":"+5, +3","84":"+6, +4, +2","85":"+7, +5, +3, +1, -1","86":"+2","87":"+1","88":"+2","89":"+3","90":"+4"};
for(let z=71;z<=90;z++){
 const element=detailed[z-1];
 assert.equal(element.electronegativity,rscPauling71to90[z-71],'RSC Pauling 71–90 '+z);
 assert.equal(element.oxidationStates,rscOxidation71to90[z],'RSC selected oxidation states 71–90 '+z);
}
const rscAppearanceDescriptions71to90={"71":"A hard, dense, silvery-white metal.","72":"A shiny, corrosion-resistant silvery metal.","73":"A shiny, silvery metal that is highly resistant to corrosion.","74":"A shiny, silvery-white metal with an exceptionally high melting point.","76":"A shiny, silver metal that resists corrosion; its oxide osmium tetroxide is highly toxic.","77":"A hard, silvery metal with exceptional corrosion resistance.","80":"A silvery liquid metal at ordinary room temperature; toxic vapor can be released.","81":"A soft, silvery-white metal that tarnishes easily.","83":"A silvery metal with a pinkish tinge.","84":"A silvery-grey, highly radioactive semimetal.","85":"The bulk appearance of astatine has not been directly established; only very small, highly radioactive quantities have been produced.","86":"A colourless, odourless, radioactive gas at room temperature.","87":"Its bulk appearance has not been observed; the metal is expected to resemble other alkali metals, but available quantities are minute.","88":"A soft, shiny, silvery radioactive metal.","89":"A soft, silvery-white radioactive metal.","90":"A weakly radioactive, silvery metal that can tarnish."};
for(const [z,description] of Object.entries(rscAppearanceDescriptions71to90))
 assert.equal(detailed[Number(z)-1].appearance,description,'Source-aligned appearance '+z);
const sourceQualifiedUses71to90={"71":"Lutetium and its compounds have limited industrial use. Lutetium-based catalysts can assist hydrocarbon cracking in petroleum refining, and lutetium-177 is used in certain radiopharmaceutical cancer treatments.","72":"Hafnium metal is used in neutron-absorbing control rods, high-temperature alloys, and plasma torch electrodes. Hafnium oxide is used as an electrical insulator in microchips.","73":"Tantalum metal is used in compact electronic capacitors, surgical implants, and corrosion-resistant equipment. Its protective oxide film acts as the capacitor dielectric.","74":"Tungsten metal and its alloys are used in high-temperature electrodes, heating elements and specialty components. Tungsten carbide, a compound of tungsten and carbon, is used in cutting and drilling tools; incandescent lamp filaments are a historical use.","76":"Osmium-containing hard alloys have been used in pen tips, instrument pivots and electrical contacts. Some osmium compounds serve as catalysts; osmium tetroxide is volatile and highly toxic.","77":"Iridium and its alloys are used for durable spark-plug electrodes, high-temperature components and corrosion-resistant instruments; iridium compounds have specialist catalytic uses.","78":"Platinum metal is used in automotive catalytic converters, jewellery, fuel-cell catalysts and laboratory equipment. Platinum-based compounds are used in certain anticancer medicines.","80":"Mercury was historically used in thermometers, switches, lamps and chemical production. Many of these uses have been restricted or phased out because mercury and some mercury compounds are highly toxic.","81":"Thallium-containing materials have niche electronic, photoelectric and optical-glass applications. Historical uses of highly toxic thallium compounds as rodenticides are prohibited or restricted in many countries.","82":"Lead metal and lead-containing compounds are used in lead–acid batteries, radiation shielding and some specialty alloys. Exposure to lead is hazardous, especially for children, and many former uses have been restricted.","83":"Bismuth is used in low-melting metal alloys; bismuth compounds are used in some medicines, pigments, and cosmetics. These applications should not be confused with uses of the pure metal.","84":"Polonium-210 has been used as a source of alpha particles in specialized antistatic devices and research. Its radioactivity also produces heat, historically investigated for spacecraft equipment.","85":"Astatine has no established large-scale commercial use. Astatine-211 is being investigated for targeted alpha-particle cancer therapies.","86":"Radon has no widespread modern practical use. Sealed radon sources were used historically in certain cancer treatments; safer alternatives largely replaced them. Indoor radon exposure is a serious radiation health risk.","88":"Radium has few present-day uses because it is highly radioactive. Radium-223 is used in some treatments for prostate cancer involving bone metastases; luminous radium paint is a discontinued hazardous historical use.","89":"Actinium is used primarily in scientific research. Actinium-225 is under investigation and development for targeted alpha-particle cancer therapies.","90":"Thorium is used in certain high-temperature alloys and specialty industrial compounds, including thorium oxide. Thorium-based nuclear fuel cycles have been investigated but are not widely deployed commercially."};
for(const [z,description] of Object.entries(sourceQualifiedUses71to90))
 assert.equal(detailed[Number(z)-1].typicalUses,description,'Element/compound use accuracy '+z);


// Audit 20: RSC-specific Pauling and common oxidation-state fields, 91–118.
// Unknown does not mean zero; isotope-based uses need explicit qualifiers.
const rscPauling91to118=[1.5,1.7,1.3,1.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
const rscOxidation91to118={"91":"+5, +4","92":"+6, +5, +4, +3","93":"+6, +5, +4, +3","94":"+6, +5, +4, +3","95":"+6, +5, +4, +3","96":"+4, +3","97":"+4, +3","98":"+4, +3","99":"+3","100":"+3","101":"+3","102":"+3, +2","103":"+3","104":null,"105":null,"106":null,"107":null,"108":null,"109":null,"110":null,"111":null,"112":null,"113":null,"114":null,"115":null,"116":null,"117":null,"118":null};
for(let z=91;z<=118;z++){
 assert.equal(detailed[z-1].electronegativity,rscPauling91to118[z-91],'RSC Pauling 91–118 '+z);
 assert.equal(detailed[z-1].oxidationStates,rscOxidation91to118[z],'RSC oxidation 91–118 '+z);
}
const revisedAppearance91to100={"91":"A silvery, radioactive metal.","92":"A silvery, radioactive metal.","93":"A radioactive metal, usually described as silvery.","95":"A shiny, silvery radioactive metal.","97":"A rare, silvery radioactive metal.","98":"A radioactive metal; only small amounts have been prepared.","99":"A radioactive metal produced in very small quantities."};
for(const [z,value] of Object.entries(revisedAppearance91to100))
 assert.equal(detailed[Number(z)-1].appearance,value,'Appearance, radioactive metal '+z);
const revisedUses91to100={"92":"Uranium-containing nuclear fuel is used to generate electricity in nuclear reactors. Uranium-235 and uranium-238 have different nuclear properties; uranium metal and depleted uranium have also been used in shielding and specialized industrial applications.","93":"Neptunium has few applications beyond scientific research. Neptunium-237 has been used in neutron-detection equipment.","94":"Plutonium-239 is used as fissile material in some nuclear fuels and nuclear weapons. Plutonium-238 provides heat for radioisotope power systems on spacecraft; uses differ by isotope.","95":"Americium-241 is used in some ionization-type smoke detectors and industrial measuring devices. Proposed radioisotope-power applications remain specialized or developmental.","96":"Curium isotopes have been used in radioisotope-power research and specialized space equipment. Most curium applications involve scientific research and producing or studying heavier elements.","97":"Berkelium has no established commercial use. Small amounts have been used as targets in nuclear research to synthesize heavier elements.","98":"Californium-252 provides strong neutron sources used in specialized materials analysis, oil-well logging, reactor startup, and scientific research.","99":"Einsteinium is prepared in very small quantities for research, including heavy-element chemistry and the synthesis of heavier elements; it has no established commercial applications.","100":"Fermium is produced only in tiny amounts for scientific studies of nuclear properties and chemical behavior; it has no established practical use outside research."};
for(const [z,value] of Object.entries(revisedUses91to100))
 assert.equal(detailed[Number(z)-1].typicalUses,value,'Isotope-specific use '+z);
for(let z=104;z<=118;z++){
 assert.equal(detailed[z-1].electronegativity,null,'No RSC Pauling value '+z);
 assert.equal(detailed[z-1].oxidationStates,null,'No RSC oxidation data '+z);
 assert.equal(detailed[z-1].appearance,null,'Macroscopic appearance not observed '+z);
 assert.ok(/research/i.test(detailed[z-1].typicalUses),'Research-only use '+z);
}


// Final first-30 chemistry batch. RSC source-specific data:
// https://periodic-table.rsc.org/element/{atomic number}/{name}
// Pauling values and selected RSC oxidation states; null means no listed
// common compound state (NOT that the elemental oxidation state is not zero).
const rscPauling1to30=[2.2,null,0.98,1.57,2.04,2.55,3.04,3.44,3.98,null,0.93,1.31,1.61,1.9,2.19,2.58,3.16,null,0.82,1,1.36,1.54,1.63,1.66,1.55,1.83,1.88,1.91,1.9,1.65];
const rscSelectedOxidation1to30=["+1, -1",null,"+1","+2","+3","+4, +3, +2, +1, 0, -1, -2, -3, -4","+5, +4, +3, +2, -3","-1, -2","-1",null,"+1","+2","+3","+4, -4","+5, +3, -3","+6, +4, +2, -2","+7, +5, +3, +1, -1",null,"+1","+2","+3","+4, +3","+5, +4, +3, +2, 0","+6, +3, +2, 0","+7, +6, +4, +3, +2, 0, -1","+6, +3, +2, 0, -2","+3, +2, 0, -1","+3, +2, 0","+2, +1","+2"];
for(let i=0;i<30;i++){
 const z=i+1;
 assert.equal(detailed[i].electronegativity,rscPauling1to30[i],'RSC Pauling 1–30 '+z);
 assert.equal(detailed[i].oxidationStates,rscSelectedOxidation1to30[i],'RSC selected oxidation states 1–30 '+z);
}
const rscPhase1to20=[[13.99,20.271,0.000082,"Gas"],[null,4.222,0.000164,"Gas"],[453.65,1615,0.534,"Solid"],[1560,2741,1.85,"Solid"],[2350,4273,2.34,"Solid"],[null,null,2.2,"Solid"],[63.2,77.355,0.001145,"Gas"],[54.36,90.188,0.001308,"Gas"],[53.48,85.04,0.001553,"Gas"],[24.56,27.104,0.000825,"Gas"],[370.944,1156.09,0.97,"Solid"],[923,1363,1.74,"Solid"],[933.473,2792,2.7,"Solid"],[1687,3538,2.3296,"Solid"],[317.3,553.7,1.823,"Solid"],[388.36,717.76,2.07,"Solid"],[171.7,239.11,0.002898,"Gas"],[83.81,87.302,0.001633,"Gas"],[336.7,1032,0.89,"Solid"],[1115,1757,1.54,"Solid"]];
for(let i=0;i<20;i++){
 const e=detailed[i],values=rscPhase1to20[i],z=i+1;
 assert.equal(e.meltingPoint,values[0],'RSC melting 1–20 '+z);
 assert.equal(e.boilingPoint,values[1],'RSC boiling 1–20 '+z);
 assert.equal(e.density,values[2],'RSC 20°C density 1–20 '+z);
 assert.equal(e.standardState,values[3],'RSC 20°C state 1–20 '+z);
}
assert.equal(detailed[5].sublimationPoint,4098,'Carbon sublimation at near-atmospheric pressure');
assert.equal(detailed[5].meltingPoint,null,'Do not invent carbon melting at 1 atm');
assert.equal(detailed[5].boilingPoint,null,'Do not call carbon sublimation a normal boil');
assert.ok(detailed[5].densityBasis.includes('graphite'),'Carbon allotrope density noted');
assert.equal(detailed[14].densityBasis,'white phosphorus','Phosphorus allotrope density noted');
const rscAppearance1to30={"1":"A colourless, odourless gas at room temperature.","2":"A colourless, odourless, very unreactive gas. It can glow in an electric discharge, but is colourless under ordinary conditions.","3":"A soft, silvery metal that reacts vigorously with water.","4":"A silvery-white metal; inhaling beryllium-containing dust or fumes can cause serious disease.","5":"Pure amorphous boron is a dark powder; crystalline boron is dark and hard.","7":"A colourless, odourless gas at room temperature.","10":"A colourless, odourless gas that emits reddish-orange light when excited in a discharge tube.","11":"A soft, silvery metal that tarnishes rapidly in air and reacts vigorously with water.","12":"A lightweight, silvery-white metal that burns with a brilliant white flame when ignited.","13":"A lightweight, malleable, silvery-white metal.","15":"White phosphorus is a poisonous, waxy, highly flammable solid; red phosphorus is a more stable solid allotrope.","16":"Most common elemental sulfur is a bright yellow crystalline solid or powder.","18":"A colourless, odourless gas under ordinary conditions.","19":"A soft, silvery metal that rapidly tarnishes in air and reacts vigorously with water.","20":"A soft, silvery-white metal that tarnishes rapidly in air and reacts with water.","21":"A silvery metal that tarnishes in air.","22":"A hard, strong, shiny silvery metal.","23":"A silvery metal that resists corrosion.","27":"A lustrous silvery-blue magnetic metal."};
for(const [z,desc] of Object.entries(rscAppearance1to30))
 assert.equal(detailed[Number(z)-1].appearance,desc,'Element appearance Z='+z);
const rscElementCompoundUses1to30={"1":"Hydrogen gas is used to manufacture ammonia and other chemicals, remove sulfur from petroleum products, fuel certain fuel cells, and propel liquid-hydrogen rockets.","2":"Helium gas cools superconducting magnets in MRI machines and scientific equipment. It is also used for leak detection, balloons, and inert atmospheres.","3":"Lithium-containing compounds are used in rechargeable batteries, glass and ceramics; lithium stearate in greases, and lithium salts in certain prescribed medicines. Lithium metal is also used in specialist alloys and batteries.","4":"Beryllium metal and beryllium-containing alloys are used in aerospace components, electrical contacts, and X-ray windows. Some beryllium compounds have specialized ceramic and nuclear applications; beryllium dust is hazardous.","5":"Boron-containing compounds are used in borosilicate glass, fiberglass, borates, detergents, and some neutron-absorbing materials. Elemental boron has specialized semiconductor and pyrotechnic applications.","6":"Carbon's graphite form is used in electrodes and lubricants, while diamond is used in cutting tools. Carbon-based fuels, plastics, and filters involve many different compounds or forms of carbon.","7":"Nitrogen gas is used for inert atmospheres, food packaging and cryogenic cooling. Nitrogen is also a feedstock for ammonia and fertilizer compounds, which are distinct from elemental nitrogen gas.","8":"Oxygen gas supports medical oxygen therapy, steel production, welding and industrial chemical manufacture. Oxygen and oxygen-containing compounds are also used in environmental water-treatment processes.","9":"Elemental fluorine is used in specialized industrial fluorination and uranium-processing chemistry. Fluorine-containing compounds are used in fluoropolymers, refrigerants, and fluoride-containing dental products.","10":"Neon gas is used in reddish-orange advertising signs, discharge indicators and specialized lasers. Other sign colours often use different gases rather than pure neon.","11":"Sodium metal is used in some chemical syntheses, sodium-vapour lamps, and specialized heat-transfer systems. Sodium salts, including sodium chloride and sodium carbonate, are used far more widely.","12":"Magnesium metal and alloys are used for lightweight automotive and aerospace components, and elemental magnesium is used in flares and some fireworks. Magnesium compounds are used in refractory materials, medicines, and industrial chemistry.","15":"Red phosphorus is used on safety-match striking surfaces. Phosphate compounds are used in fertilizers and some detergents; other phosphorus compounds have specialized industrial and agricultural applications.","16":"Elemental sulfur is used to vulcanize rubber and make sulfuric acid. Sulfur-containing compounds are used in fertilizers, fungicides and industrial chemistry.","17":"Chlorine gas is used in controlled water disinfection and chemical manufacture. Chlorine-containing compounds are used to make bleach, PVC and many industrial chemicals; chlorine gas itself is highly toxic.","19":"Potassium metal has limited specialized uses. Potassium compounds, including potassium chloride, carbonate and hydroxide, are used in fertilizers, glassmaking, soaps and other chemicals.","20":"Calcium metal is used in some metal refining and alloy production. Calcium compounds such as calcium carbonate, oxide, hydroxide and sulfate are used in cement, plaster, agriculture and water treatment.","21":"Scandium-aluminium alloys have specialized aerospace and sporting-goods applications. Scandium iodide is used in certain high-intensity lamps; most scandium production has limited industrial uses.","22":"Titanium metal and alloys are used in aircraft, medical implants and corrosion-resistant equipment. Titanium dioxide, a titanium compound, is used as a white pigment in paints and other products.","23":"Vanadium is added to high-strength steels and some specialty alloys. Vanadium compounds are used as industrial catalysts, in pigments and as electrolytes in vanadium redox-flow batteries.","24":"Chromium metal is used in stainless steel and chrome plating. Chromium compounds are used in pigments and surface treatment; hexavalent chromium compounds are particularly hazardous.","25":"Manganese is widely used in steelmaking and metal alloys. Manganese dioxide and other manganese compounds are used in certain batteries, pigments, and industrial processes.","26":"Iron and iron-based steel are used in construction, vehicles, machinery, tools and electrical equipment. Iron compounds are used in pigments, catalysts and other industrial applications.","27":"Cobalt metal and alloys are used in high-temperature turbine parts and certain magnets. Cobalt compounds are used in pigments and battery electrodes, and cobalt-60 is used in specialized radiation applications.","28":"Nickel metal and alloys are used in stainless steel, plating, coins and high-temperature equipment. Nickel compounds and nickel-containing electrodes are used in certain rechargeable batteries.","29":"Copper metal is used in electrical wiring, motors, plumbing and electronics. Copper alloys include brass and bronze, while copper compounds have specialized chemical and agricultural uses.","30":"Zinc metal is used to galvanize steel, in brass and in die-cast components. Zinc compounds are used in batteries, pigments, rubber manufacture and other specialized applications."};
for(const [z,desc] of Object.entries(rscElementCompoundUses1to30))
 assert.equal(detailed[Number(z)-1].typicalUses,desc,'Qualified element/compound uses Z='+z);
const auditFirst30Detail=readFileSync('element.html','utf8');
const auditFirst30Index=readFileSync('index.html','utf8');
assert.ok(auditFirst30Detail.includes('e.densityBasis'),'Show allotrope-specific density in details');
assert.ok(auditFirst30Index.includes('x.densityBasis'),'Show allotrope-specific density in table details');
assert.ok(auditFirst30Index.includes('x.sublimationPoint!=null'),'Sublimation mode must be supported');


// Initial element-image source-page rights audit; source-license checks are NOT
// local cached-image approval or permission to release the package.
const sourcePageReviewed=Array.from({length:118},(_,i)=>i+1);
const photoSourceRaw=readFileSync('element-photo-data.js','utf8');
const photoSourceData=JSON.parse(photoSourceRaw.replace(/^window\.ELEMENT_PHOTOS\s*=\s*/, '').replace(/;\s*$/, ''));
for(const z of sourcePageReviewed){
 const m=photoSourceData[String(z)];
 assert.ok(m,'Source-checked photo metadata exists '+z);
 if(z<=100 && m.commonsPage)assert.ok(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(m.commonsPage),'Commons source-page URL '+z);
 assert.ok(m.originalUrl.startsWith('https://'),'Original image URL '+z);
 assert.ok(m.localUrl.startsWith('images/elements/'),'Retain local image path '+z);
}

const auditedSourceLicenses11to20={"11":"CC BY-SA 3.0","12":"CC BY-SA 3.0 (also other versions offered)","13":"CC BY 3.0","14":"CC BY 3.0","15":"CC BY 3.0","16":"CC BY 2.0","17":"Author dedicated to public domain","18":"CC BY 3.0","19":"CC BY 3.0","20":"CC BY 3.0"};
for(let z=11;z<=20;z++){
 const m=photoSourceData[String(z)],w=auditedSourceLicenses11to20[String(z)];
 if(z===15)assert.equal(m.originalUrl,'https://images-of-elements.com/s/white-phosphorus.jpg','Phosphorus photo original'); else assert.ok(m.commonsPage?.includes('/File:'),'Wikimedia source 11–20 '+z);
 assert.ok(!!w,'Source license documented for '+z);
 assert.ok(m.localUrl.endsWith('.jpg'),'Cached JPG path '+z);
}
const auditedSourceLicenses21to30={
  "21":"CC BY-SA 3.0","22":"CC BY 3.0","23":"CC BY 3.0",
  "24":"CC BY 3.0","25":"CC BY-SA 3.0","26":"CC BY 3.0 (publisher page)",
  "27":"CC BY 3.0","28":"CC BY-SA 3.0","29":"CC BY-SA 2.5","30":"CC BY 3.0"
};
for(let z=21;z<=30;z++){
 const item=photoSourceData[String(z)];
 assert.ok(item && item.localUrl.endsWith('.jpg'),'Cached photo path '+z);
 assert.ok(!!auditedSourceLicenses21to30[z],'Source-page license status recorded '+z);
 if([22,26,27,30].includes(z))assert.equal(item.sourceUrl,'https://images-of-elements.com/'+item.name.toLowerCase()+'.php','Publisher gallery 21–30 '+z);
 else assert.ok(item.commonsPage?.includes('/File:'),'Commons photo 21–30 '+z);
}

const auditedSourceLicenses31to40={
 "31":"CC BY 3.0","32":"CC BY 3.0","33":"CC BY 3.0","34":"CC BY 3.0",
 "35":"CC BY 3.0","36":"CC BY 3.0","37":"CC BY 3.0 (GFDL alternative)",
 "38":"CC BY 3.0","39":"CC BY-SA 4.0","40":"CC BY 3.0"
};
for(let z=31;z<=40;z++){
 const m=photoSourceData[String(z)];
 assert.ok(m && m.localUrl.endsWith('.jpg'),'Element image local path '+z);
 if(z===31)assert.equal(m.originalUrl,'https://images-of-elements.com/s/gallium.jpg','Gallium exact publisher photo'); else assert.ok(m.commonsPage?.includes('/File:'),'Commons photo 31–40 '+z);
 assert.ok(!!auditedSourceLicenses31to40[String(z)],'Source license documented 31–40 '+z);
}
assert.match(photoSourceData['37'].title,/superoxide/i,'Rubidium ampoule specimen caption');
assert.match(photoSourceData['36'].title,/electrical excitation/i,'Krypton discharge visual context');
assert.match(photoSourceData['39'].title,/99% pure/,'Yttrium purity translated');
assert.ok(photoSourceData['39'].licenseUrl.includes('by-sa/4.0'),'Yttrium ShareAlike license flag');
const auditedSourceLicenses41to50={
 "41":"CC BY-SA 3.0","42":"CC BY 3.0","43":"CC BY-SA 4.0",
 "44":"CC BY 3.0","45":"CC BY 3.0","46":"CC BY 3.0",
 "47":"CC BY 3.0","48":"CC BY 3.0 (publisher page)",
 "49":"CC BY 3.0 (publisher page)","50":"CC BY 3.0"
};
for(let z=41;z<=50;z++){
 const m=photoSourceData[String(z)];
 assert.ok(m && m.localUrl.endsWith('.jpg'),'Cached element image path '+z);
 assert.ok(!!auditedSourceLicenses41to50[String(z)],'Photo-source license recorded '+z);
 if([44,45,48,49,50].includes(z))assert.equal(m.sourceUrl,'https://images-of-elements.com/'+m.name.toLowerCase()+'.php','Publisher photo 41–50 '+z);
 else assert.ok(m.commonsPage?.includes('/File:'),'Commons source 41–50 '+z);
}
assert.match(photoSourceData['43'].attribution,/Marco Cardin/,'Technetium correctly names its photographer');
assert.match(photoSourceData['43'].attribution,/Double sharp/,'Technetium identifies photo cropper');
assert.match(photoSourceData['43'].attribution,/GFDL/,'Technetium retains requested source attribution');
assert.match(photoSourceData['43'].attribution,/CC BY-SA 4\.0/,'Technetium retains actual source photo license');
assert.match(photoSourceData['49'].title,/solid at ordinary room temperature/,'Molten indium not portrayed as its normal physical state');
for(const z of ['47','48','49','50'])assert.ok(photoSourceData[z].sourceUrl.startsWith('https://'),'Secure photo publisher URL '+z);
const auditedSourceLicenses51to60={
 "51":"CC BY 3.0","52":"CC BY 3.0","53":"author public domain dedication",
 "54":"CC BY 3.0","55":"CC BY-SA 3.0","56":"CC BY 3.0",
  "57":"CC BY 3.0","58":"publisher-galley CC BY 3.0 on exact photo, prior Commons was CC BY 1.0","59":"CC BY 3.0","60":"CC BY 3.0"
};
for(let z=51;z<=60;z++){
 const m=photoSourceData[String(z)];
 assert.ok(!!auditedSourceLicenses51to60[z],'Photo license source check 51–60 '+z);
 assert.ok(m && m.localUrl.endsWith('.jpg'),'Cached image path 51–60 '+z);
 if(z===58)assert.equal(m.originalUrl,'https://images-of-elements.com/s/cerium.jpg','Cerium exact publisher photo'); else assert.ok(m.commonsPage?.includes('/File:'),'Commons source 51–60 '+z);
 assert.ok(m.originalUrl.startsWith('https://'),'Original image URL 51–60 '+z);
}
for(const z of ['51','52']){
 assert.ok(/Photographer not identified/.test(photoSourceData[z].attribution),'Unknown author retained without false identification '+z);
 assert.ok(!/Unknown authorUnknown author/.test(photoSourceData[z].attribution),'Duplicated unknown-author metadata fixed '+z);
}
assert.match(photoSourceData['53'].attribution,/public domain/,'Iodine creator dedication credited');
assert.ok(!photoSourceData['53'].licenseUrl,'Iodine public-domain dedication must not be assigned invented CC license');
assert.match(photoSourceData['54'].attribution,/Papa Lima Whiskey/,'Xenon photo editor credited');
assert.match(photoSourceData['54'].title,/electrically excited/,'Xenon discharge not ordinary appearance');
assert.match(photoSourceData['55'].licenseUrl,/by-sa\/3\.0/,'Cesium ShareAlike source');
assert.ok(!/yahoo\.dk/i.test(photoSourceData['55'].attribution),'Remove malformed email from public credits');
assert.equal(photoSourceData['58'].licenseUrl,'https://creativecommons.org/licenses/by/3.0/','Cerium correct image publisher general license claim');
assert.match(photoSourceData['58'].note,/individual photographer|final release bundle/i,'Cerium attribution remains under final review');
assert.match(photoSourceData['59'].attribution,/DePiep/,'Praseodymium source edit history credited');
const auditedSourceLicenses61to70={
 "61":"CC BY 3.0 (publisher claim; file-specific Commons page unverified)",
 "62":"matching publisher gallery photo CC BY 3.0 claim","63":"CC BY 3.0",
 "64":"CC BY 3.0","65":"matching publisher gallery photo CC BY 3.0 claim",
 "66":"CC BY 3.0","67":"matching publisher gallery photo CC BY 3.0 claim",
 "68":"CC BY 3.0","69":"CC BY 3.0","70":"matching publisher gallery photo CC BY 3.0 claim"
};
for(let z=61;z<=70;z++){
 const m=photoSourceData[String(z)];
 assert.ok(m && m.localUrl.endsWith('.jpg'),'Cached local image path 61-70 '+z);
 assert.ok(!!auditedSourceLicenses61to70[String(z)],'Documented source license statement '+z);
 if([62,63,64,65,66,67,70].includes(z)) {
  assert.equal(m.originalUrl,'https://images-of-elements.com/s/'+m.name.toLowerCase()+'.jpg','Matched publisher gallery photo 62-70 '+z);
  assert.ok(!m.commonsPage,'Incorrect Commons metadata removed for photo '+z);
 } else if(z!==61) assert.ok(m.commonsPage?.startsWith('https://commons.wikimedia.org/wiki/File:'),'Commons source for unchanged photo '+z);
 else assert.equal(m.sourceUrl,'https://images-of-elements.com/promethium.php','Publisher source for unverified Commons image');
}
assert.match(photoSourceData['61'].withholdReason,/illustration|photomontage/i,'Promethium montage must be withheld');
assert.match(photoSourceData['61'].title,/NOT a photograph/,'Promethium imagery title states illustration');
for(const z of ['62','65','67']){
 const m=photoSourceData[z];
 assert.match(m.attribution,/individual photographer.*not independently confirmed/i,'No fabricated photo creator '+z);
 assert.ok(!m.attribution.includes('Unknown authorUnknown author'),'Clean duplicated author text '+z);
 assert.ok(m.licenseUrl.includes('/by/3.0'),'Publisher-specific source CC BY 3.0 claim '+z);
 assert.match(m.note,/previously catalogued Wikimedia original/i,'Old Commons author and license not misapplied '+z);
}
assert.match(photoSourceData['64'].title,/embedded in acrylic/,'Gadolinium is acrylic-embedded');
assert.match(photoSourceData['69'].title,/cast in acrylic/,'Thulium is acrylic-embedded');
assert.match(photoSourceData['69'].note,/cleanup|spot removal/,'Thulium photo edit history documented');
assert.ok(photoSourceData['70'].licenseUrl.includes('/by/3.0'),'Ytterbium matching publisher image CC BY 3.0 claim');
const auditedSourceLicenses71to80={
 "71":"CC BY 3.0","72":"CC BY 3.0","73":"CC BY 3.0",
 "74":"CC BY 1.0 (plus publisher CC BY 3.0)","75":"CC BY 3.0",
 "76":"CC BY 3.0","77":"CC BY 1.0 (plus publisher CC BY 3.0)",
 "78":"CC BY 3.0","79":"CC BY 3.0","80":"CC BY 3.0"
};
for(let z=71;z<=80;z++){
 const item=photoSourceData[String(z)];
 assert.ok(!!auditedSourceLicenses71to80[String(z)],'Source license checked 71–80 '+z);
 if([72,73,75,77,79,80].includes(z)){
  assert.equal(item.originalUrl,'https://images-of-elements.com/s/'+item.name.toLowerCase()+'.jpg','Corrected image-original link 71–80 '+z);
  assert.ok(!item.commonsPage,'No stale Commons photo link 71–80 '+z);
 } else assert.ok(item?.commonsPage?.startsWith('https://commons.wikimedia.org/wiki/File:'),'Original Commons file page 71–80 '+z);
 assert.ok(item.localUrl.endsWith('.jpg'),'Saved JPEG entry 71–80 '+z);
}
assert.match(photoSourceData['72'].title,/oxidation/,'Hafnium caption includes oxidized sample context');
assert.match(photoSourceData['74'].note,/CC BY 1.0/,'Tungsten file-specific rights retained');
assert.match(photoSourceData['74'].note,/CC BY 3.0/,'Tungsten publisher license alternative noted');
assert.match(photoSourceData['75'].title,/arc-melted/,'Rhenium source subject preserved');
assert.ok(!/radiation dose/i.test(photoSourceData['75'].title),'Unverified radiation dose not in caption');
assert.match(photoSourceData['77'].attribution,/individual photographer.*not independently confirmed/i,'Iridium creator not invented');
assert.ok(!photoSourceData['77'].attribution.includes('Unknown authorUnknown author'),'Iridium duplicated author removed');
assert.ok(photoSourceData['77'].licenseUrl.includes('/by/3.0'),'Iridium matching gallery photo publisher license claim');
assert.match(photoSourceData['77'].attribution,/CC BY 3.0/,'Iridium publisher license alternative noted');
assert.match(photoSourceData['78'].attribution,/Periodictableru/,'Platinum original creator');
assert.match(photoSourceData['78'].attribution,/Materialscientist/,'Platinum crop credit');
assert.match(photoSourceData['80'].attribution,/images-of-elements\.com\/mercury\.php/,'Mercury publisher-page attribution link required');
const auditedSourceLicenses81to90={
 "81":"CC BY 3.0","82":"CC BY 3.0","83":"CC BY 3.0",
 "84":"Publisher CC BY 3.0 claim; illustration withheld",
 "85":"Publisher CC BY 3.0 claim; illustration withheld",
 "86":"Publisher CC BY 3.0 claim; illustration withheld",
 "87":"Publisher CC BY 3.0 claim; illustration withheld",
 "88":"CC BY 3.0","89":"CC BY 2.0","90":"CC BY-SA 3.0"
};
for(let z=81;z<=90;z++){
 const item=photoSourceData[String(z)];
 assert.ok(item && item.localUrl.endsWith('.jpg'),'Saved JPEG metadata 81–90 '+z);
 assert.ok(!!auditedSourceLicenses81to90[z],'Source rights reviewed 81–90 '+z);
 if([84,85,86,87].includes(z)){
  assert.match(item.withholdReason,/illustration/,'Non-photo image must be explicitly withheld '+z);
  assert.match(item.title,/illustration/i,'Illustration must not be represented as photo '+z);
  assert.equal(item.sourceUrl,'https://images-of-elements.com/'+item.name.toLowerCase()+'.php','Illustration source page '+z);
 }else if([81,82].includes(z)){
  assert.equal(item.originalUrl,'https://images-of-elements.com/s/'+item.name.toLowerCase()+'.jpg','Publisher photo original for 81–82 '+z);
  assert.ok(!item.commonsPage,'Stale Commons photo page cleared '+z);
 }else assert.ok(item.commonsPage?.startsWith('https://commons.wikimedia.org/wiki/File:'),'Commons source link 81–90 '+z);
}
assert.match(photoSourceData['82'].note,/publisher|photographer/i,'Lead credit does not invent photographer');
assert.match(photoSourceData['88'].attribution,/Materialscientist/,'Radium edited version credited');
assert.match(photoSourceData['88'].title,/copper foil/,'Radium deposit on substrate accurately described');
assert.match(photoSourceData['89'].title,/vial/,'Actinium depicts vial, not bulk metal');
assert.ok(photoSourceData['89'].licenseUrl.endsWith('/by/2.0'),'Actinium CC BY 2.0');
assert.ok(photoSourceData['90'].licenseUrl.endsWith('/by-sa/3.0'),'Thorium share-alike noted');
const auditedSourceLicenses91to100={
  "91":"DOE official federal public domain","92":"Federal public domain + Commons VRT permission",
   "93":"Federal public domain claim + publisher CC BY 3.0","94":"Daderot historic Pu-239 museum photo CC0",
   "95":"CC BY 3.0 Bionerd","96":"RIKEN curium oxide research targets CC BY 4.0",
   "97":"Oak Ridge National Laboratory federal public domain","98":"DOE historical Cf-252 neutron source public domain",
  "99":"DOE PD; cropped/colorized derivative","100":"DOE public domain historical nuclear test, not fermium"
};
for(let z=91;z<=100;z++){
 const item=photoSourceData[String(z)];
 assert.ok(!!auditedSourceLicenses91to100[String(z)],'Documented source licensing outcome '+z);
 assert.ok(item && item.localUrl.endsWith('.jpg'),'Local image entry '+z);
 assert.ok(item.commonsPage?.startsWith('https://commons.wikimedia.org/wiki/File:'),'Verified Commons file link 91–100 '+z);
}
assert.match(photoSourceData['91'].attribution,/Department of Energy/,'Protactinium government credit');
assert.match(photoSourceData['92'].attribution,/photographer unidentified/i,'Ames uranium unknown creator');
assert.ok(!photoSourceData['92'].attribution.includes('Unknown authorUnknown author'),'No duplicate uranium unknown author');
assert.match(photoSourceData['93'].note,/public-domain and CC BY 3\.0/,'Neptunium mixed rights recorded');
assert.match(photoSourceData['94'].attribution,/Daderot|CC0/i,'Plutonium museum image creator and CC0 source');
assert.match(photoSourceData['95'].attribution,/Bionerd/i,'Americium original photographer');
assert.match(photoSourceData['96'].title,/Curium-248 oxide targets/i,'Research-target compound not labeled pure curium');
assert.match(photoSourceData['97'].title,/in dissolved form/i,'Berkelium solution distinguished from metal');
assert.match(photoSourceData['98'].title,/californium-252 neutron-source/i,'Cf source capsules not bare element');
assert.match(photoSourceData['98'].note,/older californium-249 metal-disc/i,'Earlier Cf nonfree concern fixed with different image');
assert.match(photoSourceData['99'].note,/unknown|unidentified/i,'Einsteinium derivative provenance not assumed');
assert.match(photoSourceData['100'].title,/NOT a photograph of fermium/,'Fermium mushroom cloud not sample photograph');
assert.match(photoSourceData['100'].withholdReason,/nuclear test/i,'Fermium historical image withheld');
const sourceBatch101to118=Array.from({length:18},(_,i)=>i+101);
assert.equal(sourceBatch101to118.length,18,'Final source records must include all 18 elements');
for(const z of sourceBatch101to118){
 const m=photoSourceData[String(z)];
 assert.ok(!!m,'Final batch photo metadata exists '+z);
 assert.equal(m.sourceUrl,'https://images-of-elements.com/'+(z===117?'tenessine':m.name.toLowerCase())+'.php','Publisher page for final 18 '+z);
 assert.ok(m.localUrl.endsWith('.jpg'),'Saved local JPEG metadata still tracked '+z);
 if(z<=103){
  assert.match(m.title,/illustration/i,'Illustrative art labeled for '+z);
  assert.match(m.withholdReason,/illustration/i,'Illustrative art withheld '+z);
  assert.match(m.attribution,/Individual illustrator not independently identified/,'Do not invent illustrator '+z);
 }else if(z===104){
  assert.match(m.title,/pion tracks/,'CERN picture is of pion tracks');
  assert.match(m.withholdReason,/CERN/i,'CERN copyright and subject notice');
  assert.equal(m.licenseUrl,'','Unverified CERN file copyright not assigned CC BY grant');
 }else{
  assert.equal(m.title,'No Image Found','Generic placeholder is never called sample '+z);
  assert.equal(m.originalUrl,'https://images-of-elements.com/s/transactinoid.png','All 14 reference same template '+z);
  assert.match(m.note,/generic transactinoid placeholder/,'Template not element-specific photo '+z);
  assert.ok(!m.commonsPage,'Do not fabricate Wikimedia original for template '+z);
 }
}
assert.ok(photoSourceData['101'].localUrl!==photoSourceData['102'].localUrl,'Cached paths still distinct despite illustrator unknown');
const report=readFileSync('audit/IMAGE_REVIEW.md','utf8');
assert.ok(report.includes('**118 of 118 source pages reviewed**'),'Final source review total');
assert.ok(report.includes('**0 of 118 final app image files cleared**'),'No cached image cleared by metadata audit');
assert.ok(report.includes('CERN reuse rights unverified'),'Rutherfordium exception documented in historic inventory');
assert.ok(report.includes('**118/118 element-specific source pages inspected; 0/118 actual local photographs or placeholders fully cleared'),'Report warns not release-ready');
const visualImageReport=readFileSync('audit/LOCAL_IMAGE_MATCH_1_30.md','utf8');
assert.ok(visualImageReport.includes('**30 of 30 cached JPEGs opened and inspected'), 'Thirty actual files visually inspected');
assert.ok(visualImageReport.includes('**22 of 30 have a visible match'), 'Visual matching counted separately from clearance');
assert.ok(visualImageReport.includes('**8 of 30 do not establish an exact match'), 'Unmapped JPEGs explicitly tracked');
assert.ok(visualImageReport.includes('**0 of 30 cached photos cleared'), 'Local visual check must not claim redistribution permission');
assert.ok(visualImageReport.includes('Hydrogenglow.jpg') && visualImageReport.includes('unrelated') && visualImageReport.includes('visual match'), 'Correct hydrogen source correction recorded');
for(const z of [3,4,5,14,15,22,27,30]){
 const m=photoSourceData[String(z)];
  assert.ok(!m.withholdReason,'Mismatched source now recovered or physical sample photo replaced '+z);
  assert.ok(m.originalUrl.startsWith('https://'),'Recovered photo has origin '+z);
 const row=visualImageReport.split(String.fromCharCode(10)).find(line=>line.startsWith('| '+z+' |'));
 assert.ok(row && row.includes('Not exact / withheld'),'Unmapped local image has matching report row '+z);
}
assert.match(photoSourceData['5'].title,/amorphous boron powder/, 'Correct boron allotrope for stored JPG');
assert.match(photoSourceData['14'].title,/ultrapure elemental silicon/,'New image actually depicts elemental silicon');
assert.match(photoSourceData['15'].title,/White phosphorus/, 'Correct phosphorus allotrope for local picture');
assert.match(photoSourceData['22'].title,/Titanium sponge/, 'Titanium metal form caption corrected');
assert.ok(!photoSourceData['1'].withholdReason,'Hydrogen correctly matched to actual Hydrogenglow original');
assert.ok(visualImageReport.includes('Git blob SHA'),'Version-specific real JPEG audit');
const secondBatchReport=readFileSync('audit/LOCAL_IMAGE_MATCH_31_60.md','utf8');
const masterImageReview=readFileSync('audit/IMAGE_REVIEW.md','utf8');
const machineAudit=readFileSync('audit/compare_image_identity.py','utf8');
const workflowAudit=readFileSync('.github/workflows/image-identity-audit.yml','utf8');
assert.ok(secondBatchReport.includes('30/30 saved JPEGs fetched and compared'),'Original source photos were actually downloaded and compared');
assert.ok(secondBatchReport.includes('24/30'),'24 likely image identities described');
assert.ok(secondBatchReport.includes('6/30'),'Six manual review cases recorded');
assert.ok(secondBatchReport.includes('**0 of these 30 photographs cleared'),'No premature image license clearance');
assert.ok(secondBatchReport.includes('38681018215'),'Checkable GitHub Actions workflow run');
assert.ok(masterImageReview.includes('**118 of 118 saved image files now have a matching identified original image source**'),'All source identity issues recovered');
for(const z of [31,44,45,47,50,58]){
 const m=photoSourceData[String(z)];
  assert.ok(m && !m.withholdReason,'Former mismatch source now corrected '+z);
 const row=secondBatchReport.split(String.fromCharCode(10)).find(line=>line.startsWith('| '+z+' |'));
 assert.ok(row && row.includes('Manual review required'),'Unresolved original recorded in report '+z);
}
assert.match(photoSourceData['47'].title,/Natural elemental silver nugget/,'Silver now true element specimen');
assert.equal(photoSourceData['47'].commonsPage,'https://commons.wikimedia.org/wiki/File:Silver-nugget.jpg','Exact verified Commons source for silver');
assert.match(machineAudit,/release_cleared["']?:False/,'Machine verifier must explicitly deny license clearance');
assert.match(workflowAudit,/scientific-audit-2026-10/,'Replacement workflow only runs on audit branch');
assert.match(workflowAudit,/git push origin HEAD:scientific-audit-2026-10/,'Replacement workflow cannot push to main');
const thirdBatchReport=readFileSync('audit/LOCAL_IMAGE_MATCH_61_90.md','utf8');
assert.ok(thirdBatchReport.includes('38681396126'), 'Third batch recorded reproducible GitHub action');
assert.ok(thirdBatchReport.includes('**14/30 likely same picture**'), 'Third batch same-photo candidate count');
assert.ok(thirdBatchReport.includes('**15/30 external originals differed'), 'Third batch source mapping investigations');
assert.ok(thirdBatchReport.includes('**0/30 release-cleared images.'), 'Automated matching never licenses photos');
assert.ok(thirdBatchReport.includes('promethium source file returns HTTP 404'), 'Promethium source failure documented');
for(const z of [62,63,64,65,66,67,70,72,73,75,77,79,80,81,82]){
 const row=thirdBatchReport.split(String.fromCharCode(10)).find(line=>line.startsWith('| '+z+' |'));
 assert.ok(row&&row.includes('Manual source investigation required'),'Third batch manual match triage reported '+z);
}
for(const z of [61,84,85,86,87]){
 assert.ok(photoSourceData[String(z)].withholdReason,'Non-photo illustration not re-enabled '+z);
}
assert.ok(readFileSync('audit/IMAGE_REVIEW.md','utf8').includes('**0 picture-source mismatches**'),'Recovery updates master audit tally');
const recoveredGalleryReport=readFileSync('audit/LOCAL_IMAGE_MATCH_61_90.md','utf8');
assert.ok(recoveredGalleryReport.includes('38681550877'),'Source-gallery matching run documented');
assert.ok(recoveredGalleryReport.includes('**15 previously flagged actual element photographs**'),'Fifteen exact publisher photos recovered');
const matchingPublisherImageRecords=[62,63,64,65,66,67,70,72,73,75,77,79,80,81,82];
for(const z of matchingPublisherImageRecords){
 const m=photoSourceData[String(z)];
 assert.equal(m.originalUrl,'https://images-of-elements.com/s/'+m.name.toLowerCase()+'.jpg','Exact publisher original discovered '+z);
 assert.equal(m.sourceUrl,'https://images-of-elements.com/'+m.name.toLowerCase()+'.php','Publisher license/source notice link '+z);
 assert.ok(!m.withholdReason,'Recovered source must not remain withheld solely for old photo mismatch '+z);
 assert.ok(!m.commonsPage,'Cannot attribute different publisher photograph to outdated Commons image '+z);
 assert.ok(m.licenseUrl.includes('/by/3.0'),'Publisher source CC BY 3.0 claim recorded '+z);
 assert.match(m.note,/not yet fully verified|still need final verification/,'Final photo permissions remain unverified '+z);
}
assert.equal(photoSourceData['61'].originalUrl,'https://images-of-elements.com/s/promethium.jpg','Broken promethium image URL corrected to publisher illustration');
assert.ok(!!photoSourceData['61'].withholdReason,'Promethium still withheld as illustration');
assert.match(photoSourceData['29'].title,/Native copper specimen from Michigan/i,'Accurately identified museum copper');
assert.match(photoSourceData['22'].title,/Titanium sponge/,'Titanium sample accurately classified, credited to actual gallery');
assert.match(photoSourceData['27'].title,/cobalt cathode/,'Cobalt cathode caption corrected');
assert.match(photoSourceData['96'].licenseUrl,/by\/4\.0/,'Curium target photo CC BY 4.0');
assert.match(photoSourceData['94'].licenseUrl,/publicdomain\/zero\/1\.0/,'Smithsonian photo released CC0');
const final28ImageReport=readFileSync('audit/LOCAL_IMAGE_MATCH_91_118.md','utf8');
assert.ok(final28ImageReport.includes('38682381029'),'Final 28 actual-file GitHub Actions run documented');
assert.ok(final28ImageReport.includes('**28 of 28 cached files'), 'Every actual last-batch JPEG compared to publisher original');
assert.ok(final28ImageReport.includes('**0 of 28 images cleared'), 'Photo identity never counts as legal reuse permission');
assert.ok(final28ImageReport.includes('8b42b435ef79c7becb6a5dea8f49492472fc9564'), '14 identical superheavy placeholders recorded by real blob identifier');
assert.ok(masterImageReview.includes('**118 of 118 stored JPEGs inspected or machine-compared**'),'Entire local image-file set now inspected');
assert.ok(masterImageReview.includes('**0 picture-source mismatches**'),'No outstanding original-image mismatches');
assert.ok(masterImageReview.includes('**0/118 cached images are finally approved'),'Still no certified redistribution clearance');
const rightsWithheld91to118=[100,101,102,103,104];
for(const z of rightsWithheld91to118){
 const item=photoSourceData[String(z)];
 assert.ok(item?.withholdReason?.length>30,'Keep special image excluded '+z);
}
for(let z=91;z<=118;z++){
 const m=photoSourceData[String(z)];
 const row=final28ImageReport.split(String.fromCharCode(10)).find(line=>line.startsWith('| '+z+' '+m.symbol+' — '));
 assert.ok(row&&row.includes('Image original'),'Actual stored local JPEG documented with source '+z);
}
const superheavyPlaceholders=Array.from({length:14},(_,i)=>i+105);
for(const z of superheavyPlaceholders){
 const m=photoSourceData[String(z)];
 assert.equal(m.title,'No Image Found','Never present a placeholder as a photographed sample '+z);
 assert.equal(m.originalUrl,'https://images-of-elements.com/s/transactinoid.png','Shared publisher question-mark placeholder '+z);
}
const recoveryReport=readFileSync('audit/PHOTO_RECOVERY_14.md','utf8');
assert.ok(recoveryReport.includes('38683282141'),'Verified 14 originals gallery-search action');
assert.ok(recoveryReport.includes('38683490522'),'Two real JPEG replacements action');
assert.ok(recoveryReport.includes('**12 images kept**'),'12 publisher photos retained');
assert.ok(recoveryReport.includes('**2 images physically replaced**'),'Physical silicon and silver photos replaced');
const recoveredSources={3:'lithium.jpg',4:'beryllium.jpg',5:'brown-boron.jpg',15:'white-phosphorus.jpg',22:'titanium.jpg',27:'cobalt.jpg',30:'zinc.jpg',31:'gallium.jpg',44:'ruthenium.jpg',45:'rhodium.jpg',50:'tin.jpg',58:'cerium.jpg'};
for(const [z,original] of Object.entries(recoveredSources)){
 const entry=photoSourceData[z];
 assert.equal(entry.originalUrl,'https://images-of-elements.com/s/'+original,'Recovered correct photo publisher source '+z);
 assert.ok(!entry.commonsPage,'Unrelated Commons credit deleted for '+z);
 assert.ok(!entry.withholdReason,'Actual source now known '+z);
 assert.equal(entry.licenseUrl,'https://creativecommons.org/licenses/by/3.0/','Publisher general CC BY 3.0 statement '+z);
 assert.match(entry.note,/individual photographer|final release bundle/i,'Final rights caveat not omitted '+z);
}
for(const [z,name] of [['14','Silicon.jpg'],['47','Silver-nugget.jpg']]){
 const entry=photoSourceData[z];
 assert.ok(entry.originalUrl.endsWith('/'+name),'Exact file-specific sample source '+z);
 assert.match(entry.attribution,/Jurii/,'Original file author credited '+z);
 assert.match(entry.attribution,/CC BY 3.0/,'Exact CC license credited '+z);
 assert.match(entry.note,/resized|reencoded|downscaled/i,'Changes described '+z);
 assert.ok(!entry.withholdReason,'Original sample now restored '+z);
}
const groupOneReport=readFileSync('audit/GROUP1_RIGHTS_REPLACEMENTS.md','utf8');
assert.ok(groupOneReport.includes('38685174037') && groupOneReport.includes('38685303121'),'Four image replacement runs documented');
assert.ok(groupOneReport.includes('**Four actual, different JPEG binaries were replaced**'),'Four actual new photos');
for(const z of [29,94,96,98]){
 const m=photoSourceData[String(z)];
 assert.ok(!m.withholdReason,'Resolved image no longer withheld '+z);
 assert.ok(m.originalUrl.startsWith('https://upload.wikimedia.org/'),'Original exact photo file '+z);
 assert.ok(m.commonsPage.startsWith('https://commons.wikimedia.org/wiki/File:'),'Full rights/file metadata source '+z);
 assert.ok(m.title.length>55,'Precise subject caption '+z);
}
assert.match(photoSourceData['29'].licenseUrl,/by-sa\/3\.0/,'Copper photo ShareAlike obligation');
assert.match(photoSourceData['94'].attribution,/Daderot/,'Historic plutonium creator');
assert.match(photoSourceData['96'].attribution,/RIKEN/,'Real curium research photo creator');
assert.match(photoSourceData['98'].attribution,/public.domain/i,'DOE public-domain status recorded');
assert.ok(masterImageReview.includes('**Latest audit-branch inventory:** **94 candidates'),'Master image count advanced to 94');
assert.ok(masterImageReview.includes('**24 entries currently have no displayed image.**'),'Master missing image count 24');
const hiddenCount=Object.values(photoSourceData).filter(m=>!!m.withholdReason || m.title==='No Image Found').length;
assert.equal(hiddenCount,24,'Ten withheld plus fourteen superheavy placeholders');
const elementPhotoPage=readFileSync('element.html','utf8');
assert.ok(elementPhotoPage.includes('const researchPhoto=[96,98].includes(n);'),'Actual research imagery separately labeled');
assert.ok(elementPhotoPage.includes('Historical Element Photograph'),'Historic plutonium display accurately labeled');
assert.ok(elementPhotoPage.includes('original.href=item.originalUrl'),'Open actual original image');
assert.ok(!elementPhotoPage.includes('original.href=item.localUrl'),'Local asset mislabeled original');
assert.ok(elementPhotoPage.includes('filePage.href=item.commonsPage'),'Link to Commons reuse conditions');
assert.ok(elementPhotoPage.includes('|| withholdReason'), 'Explicitly withheld images must not render');
assert.ok(elementPhotoPage.includes('else if(withholdReason) status.textContent=withholdReason'), 'Explain withheld images');


// About & Credits release-audit regression. Source licenses and local cached image
// identities are still checked separately; this is UI/data integrity, not clearance.
const aboutPage=readFileSync('about.html','utf8');
const photoDataSource=readFileSync('element-photo-data.js','utf8');
const offlineSource=readFileSync('sw.js','utf8');
const aboutDisclaimer="Every effort has been taken to ensure true and accurate facts concerning the 118 elements throughout this app. The information is believed to be highly accurate, though absolute accuracy cannot be guaranteed.";
assert.ok(aboutPage.includes('<blockquote>'+aboutDisclaimer+'</blockquote>'),'User disclaimer must stay exact');
for(const reference of ["https://periodic-table.rsc.org/","https://ciaaw.org/abridged-atomic-weights.htm","https://www.nist.gov/pml/atomic-spectra-database","https://pubchem.ncbi.nlm.nih.gov/periodic-table/"])
 assert.ok(aboutPage.includes(reference),'Scientific source listed '+reference);
assert.ok(indexSource.includes('href="about.html"'),'About page reachable from main table');
assert.ok(readFileSync('element.html','utf8').includes('href="about.html"'),'About page reachable from element details');
assert.ok(offlineSource.includes("'./about.html'"),'About page pre-cached offline');
assert.ok(offlineSource.includes("pte-core-v2"),'Cache version updated for About page');
assert.ok(aboutPage.includes('<script src="./element-photo-data.js"></script>'),'Credits reuse existing metadata');
assert.ok(aboutPage.includes('if(item.withholdReason)info(body,'), 'Credits explain withheld images');
assert.ok(aboutPage.includes('withheld?" — withheld"'), 'Credits mark withheld image');
const aboutMeta=JSON.parse(photoDataSource.replace(/^window\.ELEMENT_PHOTOS\s*=\s*/, '').replace(/;\s*$/, ''));
assert.equal(Object.keys(aboutMeta).length,118,'About credits cover all 118 elements');
const aboutScripts=aboutPage.split('<script>').slice(1).map(s=>s.split('</script>')[0]).filter(Boolean);
assert.equal(aboutScripts.length,2,'About credits script and SW registration');
for(const s of aboutScripts)new Function(s); // syntax only
// Small document mock verifies credit generation and interactive text filter.
function makeCreditNode(tag){
 return {tag,children:[],hidden:false,value:'',events:{},
  appendChild(node){this.children.push(node);return node;},
  addEventListener(ev,fn){this.events[ev]=fn;}};
}
const creditsById={};
const mockDoc={createElement:makeCreditNode,
 getElementById(id){return creditsById[id]||(creditsById[id]=makeCreditNode(id));}};
new Function('window','document',aboutScripts[0])({ELEMENT_PHOTOS:aboutMeta},mockDoc);
assert.equal(creditsById.creditList.children.length,118,'Credits 118 DOM entries');
assert.equal(creditsById.creditCount.textContent,'118 of 118 catalogued element credits','Credits initial count');
creditsById.creditSearch.value='curium';
creditsById.creditSearch.events.input();
assert.equal(creditsById.creditCount.textContent,'1 of 118 catalogued element credits','Credits keyword filter');
creditsById.creditSearch.value='';
creditsById.creditSearch.events.input();
assert.equal(creditsById.creditCount.textContent,'118 of 118 catalogued element credits','Credits filter reset');

console.log('PASS: 118 unique entries, numbering and symbols;  CIAAW 2024 weight conventions 1–118 (null where unassigned); RSC melting/boiling/density 21–118, configurations 61–118; selected discovery dates; missing-phase safeguards');
console.log('PASS: PubChem Z=1–118 radius, first ionization, electron affinity fixtures (354 slots), quiz pool and image-provenance UI safeguards');
console.log('PASS: RSC oxidation/appearance/uses subset and unknown Pauling values, NIST exceptional shell occupancy, 118 electron counts');
console.log('PASS: RSC Pauling 31–60, Pr oxidation, source-qualified appearance and element/compound uses');
console.log('PASS: RSC Pauling 61–70, Tb and Tm oxidation states, Eu/Yb appearances and clarified uses');
console.log('PASS: RSC Pauling and oxidation fixtures 71–90; careful appearances and element/compound uses');
console.log('PASS: RSC 91–118 Pauling/oxidation fields and conservative radioactive appearances/uses');
console.log('PASS: Final Z1–30 RSC Pauling, compound oxidation, Z1–20 phase/density, allotrope notes, appearance and uses');
console.log('PASS: all 118 image-source entries classified; 101-104 illustrative/CERN excluded, 105-118 generic placeholders; no cached photo cleared');
console.log('PASS: 60 local photo binaries tested, 24 of batch 31-60 likely matches, six marked withheld, silver chain correctly identified; no final photo clearance');
console.log('PASS: 90 saved JPEGs inspected; 15 alternate publisher originals recovered in 61-90, source links repaired, five illustrations remain withheld; no distribution clearance');
console.log('PASS: all 118 actual cached JPEGs inspected; 91-118 files match credited image sources, 14 superheavy placeholders identical, and 0 images release-cleared');
console.log('PASS: 14 unresolved source images recovered (12 credited publisher originals + 2 real specimen JPEG replacements); 90 visible candidates; licensing still requires release checks');
console.log('PASS: copper, plutonium, curium and californium replacements installed with honest subjects and image-specific rights, 94 photo candidates');
console.log('PASS: About & Credits exact disclaimer, four references, 118 filterable credits, navigation and offline cache');
console.log('NOTICE: These internal consistency checks do NOT certify all chemistry, history, photography or quiz accuracy.');
