This is a typescript playwright project to show and demonstrate various features that playwright has to offer.

## Tech stack

- Typescript
- Playwright
- Node js
- a pre-commit hook composed of husky, eslint and prettier for gatekeeping.

## Optional stack

- msql for our database needs

## How do i get set up?

- npm install

## How to run the tests

- npm run test
  for CI (yet to be implemented)

- npm run test:moon

## How to run a singular test/feature

- add either an ".only" to the test/describe.
- to run a singular test or block of tests via cmd line : npx playwright test --config=playwright.config.ts --headed --workers 4 --grep "@{annotation of feature}"

## PRE-COMMIT HOOK

Upon attempting to git commit - the eslint/prettier hook will run according to our rules highlighted in .eslintrc.json
this will identify any errors or issues of standards that has been pre-agreed and set.
