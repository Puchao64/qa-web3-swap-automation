import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('review button disabled before wallet connection', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();

    await expect(swapPage.reviewSwapButton).toBeDisabled();
});
test('review button disabled for invalid form', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    // ничего не вводим → форма невалидна

    await expect(swapPage.reviewSwapButton).toBeDisabled();
});