import { HomePage } from "./pages/homePage.js";
import { createBrowser } from "./browsers/browserSetup.js";
async function run(){
    let browser;
    try{
        const browser = await createBrowser();
        const page = await browser.newPage();
        
        await page.setViewport({ width: 1280, height: 800 });
        
        const homePage = new HomePage(page);
        
        // Start automation workflow
        console.log('Starting automation process...');
        await homePage.navigate()
        await homePage.acceptCookies();
        const data = await homePage.evaluate(() => document.querySelector('*').outerHTML);
        console.log(data);
        
    }catch(e){
        console.error('scrape failed', e)
    }finally{
        await browser?.close()
    }
}
run()