import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('quote output visible for valid input', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('1');

    await expect(swapPage.quoteOutput).toBeVisible();
});