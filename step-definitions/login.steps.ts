import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Page, Browser, BrowserContext } from "playwright";

let browser: Browser;
let context: BrowserContext;
let page: Page;

const LOGIN_URL = "https://petstore.octoperf.com/actions/Catalog.action";

Given('el usuario está en la página de login', { timeout: 20000 }, async function () {
    browser = await chromium.launch({ headless: true }); // Mostrar el navegador
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(LOGIN_URL);
    await page.click('text=Sign In');
});

When('se identifica con credenciales válidas', { timeout: 10000 }, async function () {
    await page.fill('input[name="username"]', 'jose.moyano');
    await page.fill('input[name="password"]', 'Prueba1');
    await page.click('input[name="signon"]');
});

Then('debería ver su panel de usuario', { timeout: 10000 }, async function () {
    await expect(page.locator('text=Welcome Jose!')).toBeVisible();
    await browser.close();
});

When('se identifica con credenciales inválidas', { timeout: 10000 }, async function () {
    await page.fill('input[name="username"]', 'usuario_invalido');
    await page.fill('input[name="password"]', 'Prueba12');
    await page.click('input[name="signon"]');
});

Then('debería ser informado que sus credenciales son incorrectas', { timeout: 10000 }, async function () {
    const errorLocator = page.locator('li', {
        hasText: 'Invalid username or password. Signon failed.',
    });
    await expect(errorLocator).toBeVisible();
    await browser.close();
});
