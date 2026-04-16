import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('max button fills available balance', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.clickMax();

    await expect(swapPage.amountInput).toHaveValue('2.5');
});