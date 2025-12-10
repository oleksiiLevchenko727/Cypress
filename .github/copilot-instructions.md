# Copilot / AI Agent Instructions for this Cypress repo

This repository contains Cypress end-to-end tests for https://qauto.forstudy.space. The guidance below is concise and focused on patterns and workflows discovered in the codebase to make AI coding agents immediately productive.

- **Project layout**: tests live under `cypress/e2e/`, reusable page objects under `pageObjects/`, and test data under `cypress/fixtures/`.
- **Key files**: `cypress.config.js` (baseUrl and run options), `package.json` (devDependencies & scripts), `pageObjects/loginPage.js`, `cypress/fixtures/creds.js`, `cypress/e2e/*.cy.js`.

- **How tests run**: `npm run test` executes `cypress run` (headless). For interactive debugging use `npx cypress open`.

- **Base URL and auth**: `cypress.config.js` sets `baseUrl: "https://qauto.forstudy.space"`. Many tests call:

  ```js
  cy.visit('/', { auth: { username: Creds.auth.username, password: Creds.auth.password } })
  ```

  If updating environments, edit `cypress.config.js` or pass env options via the Cypress CLI.

- **Fixtures & test data**: `cypress/fixtures/creds.js` uses `@faker-js/faker` and exports an instance (`export default new Creds()`). Tests and page objects import it directly, for example:

  - Test: `import Creds from '../fixtures/creds.js'`
  - Page object: `import Creds from '../cypress/fixtures/creds'`

  Note: test data is generated at runtime and therefore non-deterministic. If deterministic behavior is required, seed Faker explicitly (not present today).

- **Page Object pattern**: Page objects are classes that expose element getters (arrow functions returning `cy.get(...)`) and action methods. Example from `pageObjects/loginPage.js`:

  - Element getter: `emailField: () => cy.get('input[name="email"]')`
  - Action: `logIn()` clicks header sign-in, types `Creds.login.password` with `{ sensitive: true }`, and clicks login.

  Page objects are exported as a single instance: `export default new LoginPage()` — follow this pattern for new page objects.

- **Conventions observed**:
  - Put new tests under `cypress/e2e/` and name them `*.cy.js`.
  - Page objects in `pageObjects/` use instance exports and keep selectors and actions together.
  - Use fixture values from `cypress/fixtures/creds.js` instead of hard-coding test strings.
  - Use `it.skip(...)` to temporarily disable tests (existing in `loginField.cy.js`).

- **Common code snippets to reuse**:

  - Visit with basic auth:
    `cy.visit('/', { auth: { username: Creds.auth.username, password: Creds.auth.password } })`

  - Type password as sensitive:
    `this.loginField.passwordField().type(Creds.login.password, { sensitive: true })`

- **When modifying tests or adding features**:
  - Keep assertions in tests, not inside page object action methods (current code keeps page objects focused on actions; follow this pattern).
  - Reuse fixtures from `cypress/fixtures/` for test data generation.
  - Update `cypress.config.js` when changing global run options (video, screenshots, baseUrl).

- **Dependencies**: `devDependencies` include `cypress` and `@faker-js/faker`. Install via `npm install` before running tests.

- **Troubleshooting tips**:
  - If imports fail ensure Node/Cypress versions are compatible with ESM-style `import` usage (tests use `import ...`).
  - For flaky tests, consider freezing faker output by adding `faker.seed(<number>)` into `cypress/fixtures/creds.js`.

If any part of this is unclear or you want instruction examples for authoring a new test or page object, tell me which area to expand and I will iterate.
