import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('token selection updates form state', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();

    await swapPage.selectFromToken('ETH');
    await swapPage.selectToToken('USDC');

    await expect(swapPage.fromTokenSelect).toContainText('ETH');
    await expect(swapPage.toTokenSelect).toContainText('USDC');
});