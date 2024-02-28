import { setUpPage } from '../utils/setUp';
import { test } from '../lib/fixtures';

test.beforeEach(async ({ page }) => {
	await setUpPage(page);
});

test.describe('Home page tests @homepage', () => {
	test('successfully launch and validate homepage', async ({ homePage }) => {
		await homePage.validateHomePageLoaded();
	});
});
