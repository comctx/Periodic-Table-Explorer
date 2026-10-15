// Browser-level audit of actual Periodic Table Explorer screens, not only data fixtures.
// Read-only navigation; never publishes builds, edits source data, or clears image licenses.
// Run: npm install --no-save playwright && npx playwright install chromium
//      python3 -m http.server 8765 --bind 127.0.0.1 &
//      node audit/browser-smoke.mjs
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {chromium} from 'playwright';

const src=readFileSync('element-photo-data.js','utf8');
const photos=JSON.parse(src.replace(/^window\.ELEMENT_PHOTOS\s*=\s*/, '').replace(/;\s*$/, ''));
const ds=readFileSync('elements-data.js','utf8');
const elements=JSON.parse(ds.match(/window\.PERIODIC_ELEMENTS=(\[[^\n]*\]);/)?.[1]||'[]');
assert.equal(elements.length,118);
assert.equal(Object.keys(photos).length,118);
const blocked=new Set([61,84,85,86,87,93,99,...Array.from({length:19},(_,i)=>100+i)]);
assert.equal(blocked.size,26);
const base=(process.env.AUDIT_BASE_URL||'http://127.0.0.1:8765').replace(/\/$/,'');
const browser=await chromium.launch({headless:true});
const errors=[];
let checked=0;
const attach=(page)=> {
  page.on('pageerror',error=>errors.push({url:page.url(),message:error.message}));
};
const open=async(page,path)=> {
  const response=await page.goto(base+'/'+path,{waitUntil:'domcontentloaded',timeout:20000});
  assert.ok(response?.ok(), 'Unreachable '+path+' status '+response?.status());
};
try{
  const desktop=await browser.newContext({viewport:{width:1366,height:900},deviceScaleFactor:1});
  const main=await desktop.newPage();
  attach(main);
  await open(main,'index.html');
  assert.equal(await main.locator('#ptable button.element').count(),118,'Full periodic table 118 buttons');
  await main.locator('#search').fill('Gallium');
  assert.equal(await main.locator('#ptable button.element').count(),1,'Name search');
  assert.match(await main.locator('#ptable button.element').first().getAttribute('aria-label'),/Gallium/);
  await main.locator('#clear').click();
  assert.equal(await main.locator('#ptable button.element').count(),118,'Clear resets 118 cells');
  await main.locator('#temperatureModeBtn').click();
  assert.match(await main.locator('#tempCounts').innerText(),/unknown/);
  const cellClass=async(z)=>main.locator('#ptable button.element[aria-label$="atomic number '+z+'"]').getAttribute('class');
  assert.match(await cellClass(80),/state-liquid/,'Mercury liquid at 20 Celsius');
  assert.match(await cellClass(35),/state-liquid/,'Bromine liquid at 20 Celsius');
  assert.match(await cellClass(118),/state-unknown/,'Oganesson thermal data unknown, not guessed gas');
  await main.locator('[data-temp-preset="0"]').click();
  assert.match(await main.locator('#tempReadout').innerText(),/0 °C/);
  await main.locator('[data-temp-preset="100"]').click();
  assert.match(await main.locator('#tempReadout').innerText(),/100 °C/);
  await main.locator('#tempReset').click();
  await main.locator('#familyModeBtn').click();

  const logo=main.locator('.brand-footer img').first();
  for(let i=0;i<5;i++)await logo.click();
  await main.locator('#bayCityEasterEgg.open').waitFor();
  assert.match(await main.locator('.easter-credit').first().innerText(),/Andrew Jameson/);
  await main.locator('#closeBayCityEgg').click();
  assert.equal(await main.locator('#bayCityEasterEgg.open').count(),0,'Secret overlay closes');

  const about=await desktop.newPage();
  attach(about);
  await open(about,'about.html');
  assert.match(await about.locator('#creditCount').innerText(),/118 of 118/);
  assert.equal(await about.locator('#creditList details').count(),118,'All credits generated');
  await about.locator('#creditSearch').fill('indium');
  assert.equal(await about.locator('#creditList details:not([hidden])').count(),1,'Indium photo credit search');
  assert.match(await about.locator('#creditList details:not([hidden])').innerText(),/Jurii/);
  assert.match(await about.locator('#otherImagesTitle').innerText(),/Other Image Credits/);
  assert.ok(await about.locator('a[href*="Bay_City_MI_City_Hall"]').count()>0,'Non-element photo credited');

  const page=await desktop.newPage();
  attach(page);
  for(let z=1;z<=118;z++){
    await open(page,'element.html?z='+z);
    const e=elements[z-1];
    assert.equal(await page.locator('#name').innerText(),e.name,'Element heading #'+z);
    assert.equal((await page.locator('#symbol').innerText()).trim(),e.symbol,'Symbol #'+z);
    assert.ok((await page.locator('#basicGrid').innerText()).includes('Atomic number'),'Basic details #'+z);
    assert.ok((await page.locator('#scienceGrid').innerText()).includes('Electron configuration'),'Science #'+z);
    assert.ok((await page.locator('#usesText').innerText()).length>10,'Uses section #'+z);
    if(blocked.has(z)){
      assert.equal(await page.locator('#elementPhotoWrap:not(.hidden)').count(),0,'Withheld image not displayed #'+z);
      assert.ok((await page.locator('#elementPhotoStatus').innerText()).length>10,'Explicit photo placeholder/status #'+z);
    }else{
      assert.equal(await page.locator('#elementPhotoWrap.hidden').count(),0,'Expected photo displayed #'+z);
      const img=page.locator('#elementPhoto');
      await img.scrollIntoViewIfNeeded();
      // Decode ensures local JPEG bytes were actually loaded by the browser.
      const loaded=await img.evaluate(async img=>{try{await img.decode();return img.naturalWidth>0&&img.naturalHeight>0}catch{return false}});
      assert.ok(loaded,'Local JPEG failed to decode #'+z+' ('+photos[z].localUrl+')');
      assert.ok((await page.locator('#elementPhotoCredit').innerText()).length>3,'Photo has credit #'+z);
    }
    checked++;
  }
  await page.close();

  const quiz=await desktop.newPage();
  attach(quiz);
  await open(quiz,'quiz.html');
  for(let i=1;i<=20;i++){
    assert.match(await quiz.locator('#progress').innerText(),new RegExp('Question '+i+' of 20'),'Quiz progress '+i);
    assert.ok((await quiz.locator('#question').innerText()).length>10,'Quiz wording '+i);
    assert.equal(await quiz.locator('#answers button.answer').count(),4,'Four options '+i);
    await quiz.locator('#answers button.answer').first().click();
    assert.equal(await quiz.locator('#answers button.answer.correct').count(),1,'Exactly one marked correct '+i);
    assert.equal(await quiz.locator('#answers button.answer:disabled').count(),4,'Locks answers after selection '+i);
    assert.equal(await quiz.locator('#nextButton.show').count(),1,'Next available '+i);
    await quiz.locator('#nextButton').click();
  }
  assert.match(await quiz.locator('#quizCard').innerText(),/Your Score/);
  assert.equal(await quiz.locator('#anotherRound').count(),1,'Play another 20 button');
  await quiz.close();
  await about.close();
  await main.close();

  // iPhone narrow-screen runtime checks are separate from desktop assertions.
  const phone=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:3,isMobile:true,hasTouch:true});
  const small=await phone.newPage();
  attach(small);
  for(const path of ['index.html','element.html?z=48','element.html?z=49','element.html?z=118','quiz.html','about.html']){
    await open(small,path);
    assert.equal(await small.locator('body').count(),1,'Phone body '+path);
    const dims=await small.evaluate(()=>({viewport:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,win:innerWidth}));
    // Wide table may scroll within its own container; the BODY must not drift horizontally.
    if(dims.scroll>dims.viewport+2)throw new Error('Horizontal document overflow on phone '+path+': '+JSON.stringify(dims));
    if(path==='about.html')assert.match(await small.locator('#creditCount').innerText(),/118 of 118/);
    if(path.startsWith('element.html'))assert.ok((await small.locator('#name').innerText()).length>1);
  }
  await small.close();
  await phone.close();
  assert.deepEqual(errors,[],'Browser JS runtime errors detected');
  console.log('PASS: Chromium live browser smoke: all '+checked+' detail pages; 92 JPEGs decoded; 26 images withheld; 20-question quiz and scoring; search/temperature/credits; desktop/iPhone; zero JS runtime errors');
  console.log('LIMIT: browser checks do not certify external source rights, fully offline operation, signed Store build or exhaustive cross-device UX.');
}catch(error){
  console.error('FAIL: Chromium app smoke after '+checked+' detail pages:',error?.stack||error);
  if(errors.length)console.error('BROWSER RUNTIME ERRORS:',JSON.stringify(errors.slice(0,12)));
  process.exitCode=1;
}finally{await browser.close();}
