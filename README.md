# 🧪 QA Web3 Swap Automation

[![CI](https://github.com/Puchao64/qa-web3-swap-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/Puchao64/qa-web3-swap-automation/actions/workflows/playwright.yml)

End-to-end QA automation framework for a Web3 token swap interface using Playwright + TypeScript.

---

## 🚀 Project Overview

This project demonstrates automated testing of a decentralized token swap UI, covering core user flows, validations, and dynamic state updates.

The goal is to simulate real-world QA scenarios for Web3 applications, including wallet interaction, token selection, slippage handling, and swap validation logic.

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- GitHub Actions (CI)

---

## 🔄 Continuous Integration

This project uses GitHub Actions to automatically validate test scenarios on every change.

CI workflow includes:
- Installing project dependencies
- Installing Playwright browsers
- Running Playwright tests in Chromium
- Verifying test stability in a clean environment

Triggers:
- Push to `main` branch
- Pull requests

This ensures that all test scenarios are continuously validated and prevents breaking changes.

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
- Basic application load

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

## ▶️ How to Run Tests Locally

npm install  
npx playwright install  
npx playwright test  

---

## 📊 Test Reports

npx playwright show-report  

---

## 🎯 Purpose

This project is part of a QA portfolio focused on:

- Web3 application testing
- UI automation with Playwright
- Real-world test scenario simulation
- Clean and scalable test architecture
- CI integration for reliability

---

## 📌 Notes

- Tests are built using Page Object Model for maintainability
- CI pipeline ensures automated validation of all test scenarios
- Designed to reflect production-like QA practices
