import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';

let browser: Browser;
let context: BrowserContext;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: true });
  context = await browser.newContext();
  page = await context.newPage();
  this.page = page;
});

After(async function () {
  await page.close();
  await context.close();
  await browser.close();
});
