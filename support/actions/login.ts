import { Page } from 'playwright';

export async function loginEnPetStore(page: Page, usuario: string, contraseña: string) {
    await page.click('text=Sign In');
    await page.fill('input[name="username"]', usuario);
    await page.fill('input[name="password"]', contraseña);
    await page.click('input[name="signon"]');
}
