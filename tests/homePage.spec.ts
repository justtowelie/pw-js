import { setUpPage } from '../utils/setUp';
import { test } from '../lib/fixtures';

test.beforeEach(async ({ page }) => {
	await setUpPage(page);
});

test.describe('Home page tests @homepage @ui', () => {
	test('successfully launch and validate homepage', async ({ homePage }) => {
		await homePage.validateHomePageLoaded();
	});

	test('successfully perform a search from the homepage', async ({ homePage, commonMethods }) => {
		await homePage.performSearch('Radiant Tee');
		await commonMethods.assertTextIsPresent('Radiant Tee');
	});
});
