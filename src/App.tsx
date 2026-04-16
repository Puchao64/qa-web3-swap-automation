import { useMemo, useState } from 'react';

type Token = {
  symbol: string;
  name: string;
  price: number;
};

const tokens: Token[] = [
  { symbol: 'ETH', name: 'Ethereum', price: 3000 },
  { symbol: 'USDC', name: 'USD Coin', price: 1 },
  { symbol: 'DAI', name: 'Dai', price: 1 },
  { symbol: 'MATIC', name: 'Polygon', price: 0.7 },
];

const balances: Record<string, number> = {
  ETH: 2.5,
  USDC: 1200,
  DAI: 800,
  MATIC: 3000,
};

function App() {
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState('0.5');
  const [walletConnected, setWalletConnected] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);

  const numericAmount = Number(amount);
  const fromBalance = balances[fromToken] ?? 0;

  const error = useMemo(() => {
    if (!amount) return 'Enter an amount';
    if (Number.isNaN(numericAmount) || numericAmount <= 0) return 'Amount must be greater than 0';
    if (fromToken === toToken) return 'Select different tokens';
    if (numericAmount > fromBalance) return 'Insufficient balance';
    if (Number(slippage) < 0.1 || Number(slippage) > 5) return 'Slippage must be between 0.1 and 5';
    return '';
  }, [amount, numericAmount, fromToken, toToken, fromBalance, slippage]);

  const quote = useMemo(() => {
    if (error) return 0;

    const from = tokens.find((t) => t.symbol === fromToken);
    const to = tokens.find((t) => t.symbol === toToken);

    if (!from || !to) return 0;

    const gross = (numericAmount * from.price) / to.price;
    const slipMultiplier = 1 - Number(slippage) / 100;

    return Number((gross * slipMultiplier).toFixed(4));
  }, [error, numericAmount, fromToken, toToken, slippage]);

  return (
      <main style={{ maxWidth: 520, margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
        <h1>Web3 Swap Demo</h1>

        <button data-testid="connect-wallet-button" onClick={() => setWalletConnected(true)}>
          {walletConnected ? 'Wallet Connected' : 'Connect Wallet'}
        </button>

        <div style={{ marginTop: 24, display: 'grid', gap: 16 }}>
          <label>
            From Token
            <select
                data-testid="from-token-select"
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
            >
              {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </option>
              ))}
            </select>
          </label>

          <label>
            To Token
            <select
                data-testid="to-token-select"
                value={toToken}
                onChange={(e) => setToToken(e.target.value)}
            >
              {tokens.map((token) => (
                  <option key={token.symbol} value={token.symbol}>
                    {token.symbol}
                  </option>
              ))}
            </select>
          </label>

          <label>
            Amount
            <input
                data-testid="amount-input"
                type="number"
                step="0.0001"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
          </label>

          <button data-testid="max-button" onClick={() => setAmount(String(fromBalance))}>
            Max
          </button>

          <div data-testid="balance-display">
            Balance: {fromBalance} {fromToken}
          </div>

          <label>
            Slippage %
            <input
                data-testid="slippage-input"
                type="number"
                step="0.1"
                value={slippage}
                onChange={(e) => setSlippage(e.target.value)}
            />
          </label>

          {error ? (
              <div data-testid="error-message">{error}</div>
          ) : (
              <div data-testid="quote-output">
                You receive: {quote} {toToken}
              </div>
          )}

          <button
              data-testid="review-swap-button"
              disabled={!walletConnected || !!error}
              onClick={() => setReviewOpen(true)}
          >
            Review Swap
          </button>
        </div>

        {reviewOpen && (
            <div
                data-testid="review-modal"
                style={{
                  marginTop: 24,
                  padding: 16,
                  border: '1px solid #ccc',
                  borderRadius: 8,
                }}
            >
              <h2>Review Swap</h2>
              <p data-testid="review-pair">
                {fromToken} → {toToken}
              </p>
              <p data-testid="review-amount">
                Amount: {amount} {fromToken}
              </p>
              <p data-testid="review-quote">
                Estimated received: {quote} {toToken}
              </p>
              <button data-testid="close-review-button" onClick={() => setReviewOpen(false)}>
                Close
              </button>
            </div>
        )}
      </main>
  );
}

export default App;