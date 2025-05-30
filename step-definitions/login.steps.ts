import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
//import { chromium, Page, Browser, BrowserContext } from "playwright";

//let browser: Browser;
//let context: BrowserContext;
//let page: Page;

const LOGIN_URL = "https://petstore.octoperf.com/actions/Catalog.action";

Given('el usuario está en la página de login', { timeout: 20000 }, async function () {
    //browser = await chromium.launch({}); // Mostrar el navegador
    //context = await browser.newContext();
    //page = await context.newPage();
    await this.page.goto(LOGIN_URL);
    await this.page.click('text=Sign In');
});

When('se identifica con credenciales válidas', async function () {
    await this.page.fill('input[name="username"]', 'demousergh');
    await this.page.fill('input[name="password"]', 'demousergh');
    await this.page.click('input[name="signon"]');
});

Then('debería ver su panel de usuario', async function () {
   await expect(this.page.locator('text=Welcome Guino!')).toBeVisible();
  //await browser.close();
});

When('se identifica con credenciales inválidas', async function () {
    await this.page.fill('input[name="username"]', 'usuario_invalido');
    await this.page.fill('input[name="password"]', 'contrasena_invalida');
    await this.page.click('input[name="signon"]');
});

Then('debería ser informado que sus credenciales son incorrectas', async function () {
    const errorLocator = this.page.locator('li', {
       hasText: 'Invalid username or password. Signon failed.',
    });
    await expect(errorLocator).toBeVisible();
    //await browser.close();
});