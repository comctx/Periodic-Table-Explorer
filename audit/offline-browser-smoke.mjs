// Complete offline browser smoke after HTTPS service-worker installation.
// Audit only: this checks HTTP cache/routing; it never grants photo licenses.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {chromium} from 'playwright';

const photoSrc=readFileSync('element-photo-data.js','utf8');
const photos=JSON.parse(photoSrc.replace(/^window\.ELEMENT_PHOTOS\s*=\s*/, '').replace(/;\s*$/, ''));
const manifest=JSON.parse(readFileSync('offline-photos.json','utf8'));
const excluded=new Set([61,84,85,86,87,93,99,...Array.from({length:19},(_,i)=>i+100)]);
assert.equal(manifest.photos.length,92);
const base=(process.env.AUDIT_HTTPS_URL||'https://127.0.0.1:9443').replace(/\/$/,'');
const browser=await chromium.launch({headless:true,args:['--ignore-certificate-errors']});
const context=await browser.newContext({ignoreHTTPSErrors:true,viewport:{width:1280,height:900}});
const page=await context.newPage();
const browserErrors=[];
page.on('pageerror',e=>browserErrors.push({url:page.url(),message:e.message}));
let checked=0,decoded=0,missing=0;
async function visit(path){
  const response=await page.goto(base+'/'+path,{waitUntil:'domcontentloaded',timeout:30000});
  assert.ok(response?.ok(), 'Offline navigation did not return a cached document: '+path+' '+response?.status());
}
try {
  // Model a student who already installed the earlier Store PWA (v3). The
  // privacy page does not register a service worker, so we can seed a stale
  // science-data cache before the updated index starts registration.
  await visit('privacy.html');
  await page.evaluate(async()=>{
    const previous=await caches.open('pte-core-v3');
    await previous.put('./elements-data.js',
      new Response('OLD_SCIENCE_DATA_SHOULD_NEVER_SURVIVE_UPGRADE',
        {headers:{'Content-Type':'application/javascript'}}));
  });
  assert.ok((await page.evaluate(()=>caches.keys())).includes('pte-core-v3'),
    'Test setup must simulate an existing old v3 cache');
  await visit('index.html');
  assert.equal(await page.locator('#ptable button.element').count(),118,'Online install page must load');
  await page.waitForFunction(async() => {
    const records=await caches.keys();
    if(!records.includes('pte-core-v4')) return false;
    const cache=await caches.open('pte-core-v4');
    const urls=(await cache.keys()).map(x=>new URL(x.url).pathname);
    return urls.filter(x=>x.includes('/images/elements/')).length===92 &&
           urls.some(x=>x.endsWith('/images/bay-city-city-hall.jpg')) &&
           urls.some(x=>x.endsWith('/offline-photos.json'));
  },null,{timeout:150000,polling:500});
  // Installation and navigation control are distinct lifecycle steps.
  // Once the full install cache exists, refresh while ONLINE so the active
  // service worker will control subsequent navigations before the network drops.
  await visit('index.html');
  await page.waitForFunction(() => Boolean(navigator.serviceWorker?.controller),
    null, {timeout:60000});
  const cacheReport=await page.evaluate(async()=>{
    const cache=await caches.open('pte-core-v4');
    const keys=await cache.keys();
    return {controlled:!!navigator.serviceWorker.controller,
      photos:keys.map(x=>new URL(x.url).pathname).filter(x=>x.includes('/images/elements/')),
      all:keys.length};
  });
  // During the v4 service-worker activation, outdated v3 science files must
  // disappear. A student installing the update cannot be left offline with the
  // old GitHub main-branch details/atomic weight wording.
  await page.waitForFunction(async()=>{
    const keys=await caches.keys();
    return keys.includes('pte-core-v4') && !keys.includes('pte-core-v3');
  },null,{timeout:20000,polling:500});
  const latestScience=await page.evaluate(async()=>{
    const upgraded=await caches.open('pte-core-v4');
    const detail=await upgraded.match('./element.html');
    const data=await upgraded.match('./elements-data.js');
    return {detail:detail?await detail.text():'', data:data?await data.text():''};
  });
  assert.ok(latestScience.detail.includes('Standard atomic weight (CIAAW 2024, abridged)'),
    'New offline science cache must contain the audited CIAAW labels');
  assert.ok(latestScience.detail.includes('Sigurd Hofmann'),
    'New offline science cache must include corrected GSI history');
  assert.ok(latestScience.data.includes('Expected solid (RSC classification; unverified)'),
    'New offline science cache must preserve uncertain superheavy state');
  assert.ok(!latestScience.data.includes('OLD_SCIENCE_DATA_SHOULD_NEVER_SURVIVE_UPGRADE'),
    'Outdated science data must not survive offline cache migration');
  assert.ok(cacheReport.controlled,'HTTPS PWA registration did not take control');
  assert.equal(cacheReport.photos.length,92,'Initial install must cache all 92 photos');
  for(const z of excluded) {
    const blocked=photos[String(z)].localUrl.split('/').pop();
    assert.ok(!cacheReport.photos.some(x=>x.endsWith('/'+blocked)),'WITHHELD photo was saved for offline use #'+z);
  }
  console.log('ONLINE INSTALL PASS: HTTPS service worker active, '+cacheReport.photos.length+' audited photos and '+cacheReport.all+' files cached.');

  // FIRST disconnect, THEN revisit 118 pages; this does not simply reuse
  // photos loaded by the user while they had internet access.
  await context.setOffline(true);
  await visit('index.html');
  assert.equal(await page.locator('#ptable button.element').count(),118);
  await page.locator('#search').fill('Uranium');
  assert.equal(await page.locator('#ptable button.element').count(),1);
  await page.locator('#clear').click();
  await page.locator('#temperatureModeBtn').click();
  assert.match(await page.locator('#tempCounts').innerText(),/unknown/);
  await page.locator('[data-temp-preset="100"]').click();
  assert.match(await page.locator('#tempReadout').innerText(),/100 °C/);

  await visit('about.html');
  assert.equal(await page.locator('#creditList details').count(),118);
  await page.locator('#creditSearch').fill('indium');
  await page.locator('#creditList details:not([hidden]) summary').click();
  assert.match(await page.locator('#creditList details:not([hidden]) .credit-body').innerText(),/Jurii/);
  const external=page.locator('#otherImagesTitle');
  assert.ok((await external.innerText()).includes('Other Image Credits'));

  for(let z=1;z<=118;z++){
    await visit('element.html?z='+z);
    assert.equal(await page.locator('#atomicNumber').innerText(),String(z),'Offline element number '+z);
    assert.ok((await page.locator('#scienceGrid').innerText()).length>20,'Science offline #'+z);
    if(excluded.has(z)){
      missing++;
      assert.equal(await page.locator('#elementPhotoWrap:not(.hidden)').count(),0,'Withheld photo shown offline #'+z);
      assert.ok((await page.locator('#elementPhotoStatus').innerText()).length>10,'Withheld status #'+z);
    }else{
      const img=page.locator('#elementPhoto');
      await img.scrollIntoViewIfNeeded();
      const ok=await img.evaluate(async el=>{
        try{await el.decode();return el.naturalWidth>0&&el.naturalHeight>0;}catch{return false;}
      });
      assert.ok(ok,'OFFLINE JPEG NOT AVAILABLE: element #'+z+', '+photos[String(z)].localUrl);
      decoded++;
    }
    checked++;
  }
  assert.equal(checked,118);
  assert.equal(decoded,92);
  assert.equal(missing,26);
  await visit('quiz.html');
  for(let n=1;n<=20;n++){
    assert.match(await page.locator('#progress').innerText(),new RegExp('Question '+n+' of 20'));
    assert.equal(await page.locator('#answers button.answer').count(),4);
    await page.locator('#answers button.answer').first().click();
    assert.equal(await page.locator('#answers button.answer.correct').count(),1);
    await page.locator('#nextButton').click();
  }
  assert.match(await page.locator('#quizCard').innerText(),/Your Score/);

  await page.setViewportSize({width:390,height:844});
  for(const path of ['index.html','element.html?z=48','element.html?z=49','element.html?z=118','about.html']){
    await visit(path);
    const dimensions=await page.evaluate(()=>({view:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}));
    assert.ok(dimensions.scroll<=dimensions.view+2,'Offline mobile horizontal overflow '+path);
  }
  // Easter egg is cached as a separate photo, not part of the 92.
  await visit('index.html');
  for(let n=0;n<5;n++)await page.locator('.brand-footer img').click();
  const bay=page.locator('#bayCityEasterEgg .easter-photo');
  await page.locator('#bayCityEasterEgg.open').waitFor();
  assert.ok(await bay.evaluate(async el=>{try{await el.decode();return el.naturalWidth>0}catch{return false;}}),
    'Bay City extra photograph not available offline');
  assert.deepEqual(browserErrors,[],'Unexpected JS errors while offline');
  console.log('PASS: TRUE OFFLINE HTTPS Chromium: installed/controlled SW; 118 pages; 92 first-use cached JPEGs decoded; 26 withheld not cached/shown; 20-question quiz; search, temperature, 118 credits and Bay City; 390px viewport; no JS page errors.');
  console.log('LIMIT: signed iOS IPA, native WKWebView and Safari on physical devices, and photo-license release approval still unverified.');
}catch(e){
  console.error('FAIL: OFFLINE Chromium after '+checked+' element pages / '+decoded+' decoded photos:',e?.stack||String(e));
  if(browserErrors.length)console.error('JavaScript runtime errors:',JSON.stringify(browserErrors.slice(0,10)));
  process.exitCode=1;
}finally{
  await context.setOffline(false).catch(()=>{});
  await browser.close();
}
