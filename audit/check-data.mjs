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
                 22.990,24.305,26.982,28.085,30.974,32.06,35.45,39.95,39.098,40.078];
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
};
for(const [z,expected] of Object.entries(history)){
  const record=detailed[Number(z)-1];
  assert.equal(record.yearDiscovered,expected.year, 'Historical year regression: '+z);
  assert.equal(record.discoveredBy,expected.by, 'Discoverer regression: '+z);
}
assert.equal(detailed[1].meltingPoint,null,'Helium: phase transition not established at ordinary pressure');
assert.ok(indexSource.includes('x.meltingPoint!=null') && indexSource.includes('x.boilingPoint!=null'),
          'Missing-value temperature protection was removed');

console.log('PASS: 118 unique entries, numbering and symbols; CIAAW 2024 masses 1–20; selected discovery dates; missing-phase safeguards');
console.log('NOTICE: These internal consistency checks do NOT certify all chemistry, history, photography or quiz accuracy.');
