// Microsoft Store desktop screenshots from the UPDATED audit branch.
// Private engineering-only evidence; media/credits are NOT yet licensed for release.
// Serve the EXACT filtered audited staging Web folder on http://127.0.0.1:8769.
// npm install --no-save playwright && npx playwright install chromium
// AUDIT_BASE_URL=http://127.0.0.1:8769 PTE_STORE_SHOTS_DIR=/tmp/screens node audit/capture_ms_store_screens.mjs
import assert from 'node:assert/strict';
import {mkdir,readdir,stat} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {chromium} from 'playwright';

const base = (process.env.AUDIT_BASE_URL || 'http://127.0.0.1:8769').replace(/\/$/,'');
const output = resolve(process.env.PTE_STORE_SHOTS_DIR || '/tmp/pte-ms-store-shots');
const shots = [];
await mkdir(output,{recursive:true});
const browser=await chromium.launch({headless:true});
const context=await browser.newContext({viewport:{width:1366,height:768},deviceScaleFactor:1,colorScheme:'light'});
const page=await context.newPage();
const errs=[];
page.on('pageerror',e=>errs.push(e.message));
async function load(path){
  const response=await page.goto(base+'/'+path,{waitUntil:'load',timeout:20000});
  assert.ok(response && response.ok(),'Page not reachable: '+path+' status '+response?.status());
  await page.evaluate(()=>document.fonts.ready);
}
async function screenshot(name){
  const target=join(output,name+'.png');
  await page.screenshot({path:target,fullPage:false,animations:'disabled',caret:'hide'});
  const bytes=(await stat(target)).size;
  assert.ok(bytes>15000&&bytes<50*1024*1024,'Invalid Microsoft screenshot size '+name+' '+bytes);
  shots.push({file:name+'.png',bytes});
}
try{
  await load('index.html');
  assert.equal(await page.locator('#ptable button.element').count(),118,'Must be updated full 118 element table');
  await screenshot('01-periodic-table');
  await page.locator('#search').fill('Carbon');
  assert.equal(await page.locator('#ptable button.element').count(),1,'Search view must show carbon');
  await screenshot('02-element-search');
  await page.locator('#search').fill('');
  await page.locator('#temperatureModeBtn').click();
  assert.ok((await page.locator('#tempCounts').innerText()).includes('unknown'),'Temperature view must include uncertainty');
  await screenshot('03-temperature-explorer');

  await load('element.html?z=29');
  assert.equal((await page.locator('#name').innerText()).trim(),'Copper','Copper details not rendered');
  await screenshot('04-copper-details');

  await load('quiz.html');
  assert.match(await page.locator('#progress').innerText(),/Question 1 of 20/);
  assert.equal(await page.locator('#answers button.answer').count(),4,'Quiz must render four choices');
  await screenshot('05-element-quiz');

  await load('about.html');
  assert.match(await page.locator('#creditCount').innerText(),/118 of 118/);
  await screenshot('06-scientific-credits');

  assert.deepEqual(errs,[],'JavaScript runtime errors in screenshots');
  const files=(await readdir(output)).filter(f=>f.endsWith('.png')).sort();
  assert.deepEqual(files,shots.map(x=>x.file).sort(),'Screenshot count mismatch');
  console.log(JSON.stringify({result:'PASS',viewport:'1366x768',source:'audit-only filtered PWA staging',screenshots:shots},null,2));
  console.log('REVIEW ONLY: these are Chromium screenshots of audited PWA, NOT screenshots of installed MSIX.');
  console.log('DO NOT PUBLISH: source image commercial rights and Bay City photo are not finally cleared.');
}finally{
  await context.close();
  await browser.close();
}
