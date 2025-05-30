import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
//import { Browser, Page, chromium } from 'playwright';
import { loginEnPetStore } from '../support/actions/login';

//let browser: Browser;
//let page: Page;

Given('el cliente ingresa a la tienda virtual de PetStore', { timeout: 20000 }, async function()  {
    //browser = await chromium.launch({});
    //const context = await browser.newContext();
    //page = await context.newPage();
    await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
});

When('se identifica como {string} con la contraseña {string}', async function (usuario: string, contraseña: string)  {
  await loginEnPetStore(this.page, usuario, contraseña);
  await expect(this.page.locator('text=Sign Out')).toBeVisible(); // toBeVisible({timeout: 30000});
});

When('explora la sección de mascotas en adopción', async function() {
  await this.page.click('#SidebarContent a[href*="categoryId=DOGS"]');
});

When('elige la mascota {string}', async function (producto: string)  {
  await this.page.click(`//tr[td[text()='${producto}']]/td[1]/a`);
});

When('la incluye en su pedido', async function () {
  await this.page.click('a.Button[href*="addItemToCart=&workingItemId=EST-26"]');
});

Then('debería ver {string} en el resumen de su compra.', async function(producto: string) {
    console.log(`Producto es: ${producto}`);
    await expect(this.page.locator('td', { hasText: producto })).toBeVisible();
    //await browser.close();
});