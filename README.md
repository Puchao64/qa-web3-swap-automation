# 🧪 QA Web3 Swap Automation

End-to-end test automation framework for a Web3 token swap interface using Playwright + TypeScript.

---

## 🚀 Project Overview

This project demonstrates automated testing of a decentralized token swap UI, covering core user flows, validations, and dynamic state updates.

The goal is to simulate real-world QA scenarios for Web3 applications, including wallet interaction, token selection, slippage handling, and swap validation.

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI-ready)

---

## 📂 Project Structure

```bash
qa-web3-swap-automation/
├── tests/
│   ├── smoke/
│   └── ui/
├── src/
│   └── pages/
├── playwright.config.ts
├── package.json
```

---

## ✅ Test Coverage

### 🔹 Smoke
- Basic app load

### 🔹 Swap Form
- Valid swap flow

### 🔹 Validation
- Empty amount
- Zero amount
- Same token pair
- Slippage lower than allowed
- Slippage higher than allowed
- Insufficient balance

### 🔹 UI Behavior
- Max button fills available balance
- Token selection updates form state
- Slippage change updates quote

### 🔹 Button State
- Review button disabled before wallet connection
- Review button disabled for invalid form

### 🔹 Quote
- Quote output visible for valid input

---

## ▶️ How to Run Tests

```bash
npm install
npx playwright install
npx playwright test
```

---

## 📊 Test Reports

```bash
npx playwright show-report
```

---

## 🎯 Purpose

This project is part of a QA portfolio focused on:

- Web3 testing
- UI automation
- Real-world scenarios simulation
- Clean test architecture

---

## 📌 Notes

- Tests use Page Object Model for maintainability
- Designed to be CI-ready (GitHub Actions integration planned)
