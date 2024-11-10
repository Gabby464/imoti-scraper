
import puppeteer from "puppeteer";
import { launchOptions } from "./launchOptions.js";
export async function createBrowser() {
    const browser = await puppeteer.launch(launchOptions);
    return browser;
}

