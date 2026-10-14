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
                 69.723,72.630,74.922,78.971,79.904,83.798,85.468,87.62,88.906,91.222];
ciaaw2024.forEach((weight,i)=>{
  assert.equal(detailed[i].atomicMass,weight,'CIAAW detailed atomic weight mismatch '+(i+1));
  assert.equal(cells[i].mass,weight,'CIAAW table atomic weight mismatch '+(i+1));
});

const history={
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

assert.equal(detailed[22].namedBy,'Nils Gabriel Sefström','Vanadium naming attribution');
assert.equal(detailed[1].meltingPoint,null,'Helium: phase transition not established at ordinary pressure');
assert.ok(indexSource.includes('x.meltingPoint!=null') && indexSource.includes('x.boilingPoint!=null'),
          'Missing-value temperature protection was removed');

console.log('PASS: 118 unique entries, numbering and symbols; CIAAW 2024 masses 1–40; RSC melting/boiling/density 21–40; selected discovery dates; missing-phase safeguards');
console.log('NOTICE: These internal consistency checks do NOT certify all chemistry, history, photography or quiz accuracy.');
