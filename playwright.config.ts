import { defineConfig } from '@playwright/test';
export default defineConfig({
    use: {
        headless: true,
        trace: 'on-first-retry',
        screenshot: 'only-on-failure',
    },
    reporter: [['html', { outputFolder: 'playwright-report' }]]
});