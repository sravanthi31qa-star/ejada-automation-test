Here's a breakdown of essential components you should consider when designing your 
Custom framework:

Core Components to Include

1.Folder Structure

 Organize files like this (i.e example)
 
 saucedemo-framework/
│── playwright.config.ts
│── package.json
│── .env
│── tests/
│   └── login.test.ts
│── pages/
│   ├── BasePage.ts
│   ├── LoginPage.ts
│   └── InventoryPage.ts
│── utils/
│   ├── helpers.ts
│   └── dataGenerator.ts
│── fixtures/
│   └── testData.json
│── reports/
│   └── test-results/
│── .github/
│   └── workflows/
│       └── ci.yml



2.Page Object Model(POM)

-Encapsulation page interactions into reusable classes
-change existing tests to follow page object model
-Example: 'searchPage.search(keyword)'

3.Test Data Management

-JSON or CSV files static data(search Keywords like JS, TS)
-Dynamic data generation with libraries like Faker

4.Custom Commands & Utilities

-Wrap repetitive actions (e.g. Search)
-Utility function for today date, wait, date conversions, etc.

5.Configuration & Environment setup

-Update config file( e.g,.'playwright.config.ts')
-Support for multiple env (dev, staging, prod) using .env

6.Reporting

-Configure HTML reports using Allure in playwright config
-Configure Screenshorts & video recording on failure

7.CI/CD Integration

-Create GitHub Actions workflow (.yml)- Jenkins/Azure Devops
-Automatic testing on Push, PRs, or nightly runs

8.Hooks & Fixtures

-Setup/teardown logic before/after tests
-Custom fixture for login states , mock data, etc.

9.Cross-Browser Testing

-Enable Chromium , Firefox support
-Run tests in Parallel across different browsers



How to run
----------

1. Install dependencies and browsers:

```bash
npm install
npx playwright install
```

2. Run tests (parallel, Chromium & Firefox):

```bash
npm test
```

3. Run tests with Allure reporter and generate a report:

```bash
npm run test:allure
npm run allure:generate
npm run allure:open
```

Files added:
- `src/pages` - Page Object Model classes.
- `tests/` - Playwright test specs for login and order flow.
- `playwright.config.ts` - config for cross-browser and reporters.
- `tsconfig.json` - TypeScript config.
