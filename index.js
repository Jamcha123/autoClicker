import puppeteer from "puppeteer";

async function getDoc(){
    const browser = await puppeteer.launch({
        headless: false
    })
    try{
        const page = await browser.newPage(); 
        await page.goto('http://127.0.0.1:3000', {
            waitUntil: "networkidle2",
        })
        await page.waitForNetworkIdle(2000);
        await page.setViewport({
            width: 1080,
            height: 800,  
        })
        for(let i = 0; i < 100; i++){
            await Promise.all([
                await page.waitForSelector("#press"),
                await page.click("#press"),
            ])
        }
    }
    catch(e){
        console.error("error", e)
    }
}
getDoc(); 