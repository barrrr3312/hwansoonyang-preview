'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const http=require('node:http');
const puppet=require(process.env.RUNNER_TEMP+'/pwa-qa/node_modules/puppeteer-core');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8','.webmanifest':'application/manifest+json','.png':'image/png'};
const server=http.createServer((req,res)=>{
  const parsed=new URL(req.url,'http://localhost');
  const name=parsed.pathname.replace(/^\/(?:hwansoonyang-preview\/)?/,'')||'index.html';
  if(!/^[A-Za-z0-9._-]+$/.test(name)||!types[path.extname(name)]||!fs.existsSync(name)){
    res.writeHead(404).end();return;
  }
  res.writeHead(200,{'Content-Type':types[path.extname(name)],'Cache-Control':'no-cache'});
  fs.createReadStream(name).pipe(res);
});
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const browser=await puppet.launch({executablePath:process.env.PWA_CHROME,headless:true});
  try {
    for(const mount of ['/','/hwansoonyang-preview/']){
      const context=await browser.createBrowserContext();
      const page=await context.newPage();
      await page.setViewport({width:390,height:844,isMobile:true,deviceScaleFactor:1,hasTouch:true});
      const address='http://127.0.0.1:'+server.address().port+mount;
      await page.goto(address,{waitUntil:'load'});
      await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
      const metadata=await page.evaluate(async()=>{
        const manifest = await (await fetch(document.querySelector('link[rel=manifest]').href)).json();
        return {scope: (await navigator.serviceWorker.ready).scope, manifest};
      });
      assert.equal(metadata.scope,address);
      assert.equal(metadata.manifest.display,'standalone');
      assert.equal(new URL(metadata.manifest.start_url,address).href,address);
      await page.setOfflineMode(true);
      await page.reload({waitUntil:'load'});
      assert.equal(await page.$eval('#offline-status',element=>element.hidden),false);
      const data=await page.evaluate(()=>{
        go('rebirth');
        const calculator=app.textContent.includes('환생 레벨');
        go('rank');
        return [PETS.length,Object.keys(rankAll_051()).length,calculator,app.textContent.includes('최근 수집일')];
      });
      assert.deepEqual(data,[717,722,true,true]);
      await context.close();
      console.log('PASS: offline calculations and snapshot at '+mount);
    }
  } finally {await browser.close();server.close();}
})().catch(error=>{console.error(error);server.close();process.exitCode=1});
