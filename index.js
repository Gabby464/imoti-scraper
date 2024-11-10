import puppeteer from "puppeteer"
async function run(){
    let browser;
    try{
        browser = await puppeteer.launch({
	        headless: false,
	        args: ["--disable-setuid-sandbox"],
	        'ignoreHTTPSErrors': true
	    });        const page = await browser.newPage();
        await page.goto('https://www.imot.bg/', { waitUntil: 'networkidle0' });
        await page.click('#BG-23')
        const data = await page.evaluate(() => document.querySelector('*').outerHTML);
        console.log(data);
        
    }catch(e){
        console.error('scrape failed', e)
    }finally{
        await browser?.close()
    }
}
run()