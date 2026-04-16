import { test, expect } from '@playwright/test';
import { SwapPage } from '../../src/pages/swapPage';

test('changing slippage updates quote state', async ({ page }) => {
    const swapPage = new SwapPage(page);

    await swapPage.open();
    await swapPage.connectWallet();
    await swapPage.enterAmount('1');

    const quoteBefore = await swapPage.quoteOutput.textContent();

    await swapPage.setSlippage('1');

    const quoteAfter = await swapPage.quoteOutput.textContent();

    expect(quoteBefore).not.toEqual(quoteAfter);
});