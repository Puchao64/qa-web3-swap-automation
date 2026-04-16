import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('shows insufficient balance error for too large amount', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('10');

    await expect(swapPage.errorMessage).toHaveText('Insufficient balance');
    await expect(swapPage.reviewSwapButton).toBeDisabled();
});
test('shows error for empty amount', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();

    await expect(swapPage.reviewSwapButton).toBeDisabled();
});
test('shows error for zero amount', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('0');

    await expect(swapPage.reviewSwapButton).toBeDisabled();
});
test('shows error for same token pair', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();

    await swapPage.selectFromToken('ETH');
    await swapPage.selectToToken('ETH');

    await expect(swapPage.errorMessage).toBeVisible();
    await expect(swapPage.reviewSwapButton).toBeDisabled();
});
test('shows error for slippage lower than allowed', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.setSlippage('0');

    await expect(swapPage.errorMessage).toBeVisible();
    await expect(swapPage.reviewSwapButton).toBeDisabled();
});
test('shows error for slippage higher than allowed', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.setSlippage('10');

    await expect(swapPage.errorMessage).toBeVisible();
    await expect(swapPage.reviewSwapButton).toBeDisabled();
});