import { setUpPage } from '../utils/setUp';
import { test } from '../lib/fixtures';

test.beforeEach(async ({ page }) => {
	await setUpPage(page);
});

test.describe('Visual comparison tests @visual @ui', async () => {
	test('Successfully compare the screen of a predetermined product', async ({ commonMethods, purchases }) => {
		await commonMethods.navigateTo('https://magento.softwaretestingboard.com/driven-backpack.html');
		await commonMethods.waitForSelectorAndCompareScreenshot(purchases.price, 'product-page.png');
	});
});
