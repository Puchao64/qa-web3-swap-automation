import type { Page, Locator } from '@playwright/test';
export class SwapPage {
    readonly page: Page;

    readonly connectWalletButton: Locator;
    readonly fromTokenSelect: Locator;
    readonly toTokenSelect: Locator;
    readonly amountInput: Locator;
    readonly maxButton: Locator;
    readonly slippageInput: Locator;
    readonly reviewSwapButton: Locator;

    readonly errorMessage: Locator;
    readonly quoteOutput: Locator;

    constructor(page: Page) {
        this.page = page;

        this.connectWalletButton = page.getByTestId('connect-wallet-button');
        this.fromTokenSelect = page.getByTestId('from-token-select');
        this.toTokenSelect = page.getByTestId('to-token-select');
        this.amountInput = page.getByTestId('amount-input');
        this.maxButton = page.getByTestId('max-button');
        this.slippageInput = page.getByTestId('slippage-input');
        this.reviewSwapButton = page.getByTestId('review-swap-button');

        this.errorMessage = page.getByTestId('error-message');
        this.quoteOutput = page.getByTestId('quote-output');
    }

    async open() {
        await this.page.goto('/');
    }

    async connectWallet() {
        await this.connectWalletButton.click();
    }

    async selectFromToken(token: string) {
        await this.fromTokenSelect.selectOption(token);
    }

    async selectToToken(token: string) {
        await this.toTokenSelect.selectOption(token);
    }

    async enterAmount(value: string) {
        await this.amountInput.fill(value);
    }

    async clickMax() {
        await this.maxButton.click();
    }

    async setSlippage(value: string) {
        await this.slippageInput.fill(value);
    }

    async clickReviewSwap() {
        await this.reviewSwapButton.click();
    }
}