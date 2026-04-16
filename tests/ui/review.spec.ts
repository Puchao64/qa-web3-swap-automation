import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('user can open review swap modal', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('1');

    await expect(swapPage.reviewSwapButton).toBeEnabled();

    await swapPage.clickReviewSwap();

    await expect(page.getByTestId('review-modal')).toBeVisible();
});
test('review modal shows selected pair and entered amount', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('1');

    await swapPage.clickReviewSwap();

    await expect(page.getByTestId('review-modal')).toBeVisible();
    await expect(page.getByTestId('review-pair')).toContainText('ETH');
    await expect(page.getByTestId('review-pair')).toContainText('USDC');
    await expect(page.getByTestId('review-amount')).toContainText('1');
});
test('user can close review swap modal', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('1');

    await swapPage.clickReviewSwap();

    await expect(page.getByTestId('review-modal')).toBeVisible();

    await page.getByTestId('close-review-button').click();

    await expect(page.getByTestId('review-modal')).toBeHidden();
});