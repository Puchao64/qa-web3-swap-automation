import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('swap page loads with main elements', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();

    await expect(page.getByText('Web3 Swap Demo')).toBeVisible();
    await expect(swapPage.connectWalletButton).toBeVisible();
    await expect(swapPage.fromTokenSelect).toBeVisible();
    await expect(swapPage.toTokenSelect).toBeVisible();
    await expect(swapPage.amountInput).toBeVisible();
    await expect(swapPage.slippageInput).toBeVisible();
    await expect(swapPage.reviewSwapButton).toBeVisible();
});