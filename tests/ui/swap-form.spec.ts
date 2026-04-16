import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('user can connect wallet and enter valid swap amount', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('1');

    await expect(swapPage.reviewSwapButton).toBeEnabled();
    await expect(swapPage.quoteOutput).toBeVisible();
});