import { setUpPage } from '../utils/setUp';
import { test } from '../lib/fixtures';
import { expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
	await setUpPage(page);
});

test.describe('Purchases', async () => {
	test('Successfully add and check out a product', async ({ homePage, purchases }) => {
		await homePage.performSearch('t-shirt');
		await purchases.selectAndAddItemToCart();
		await purchases.getCostOfProduct();
		const costOfProduct = await purchases.obtainPrice();
		await homePage.clickShoppingCart();
		expect(homePage.shoppingCartTotal.textContent).toContain(costOfProduct);
	});
});
