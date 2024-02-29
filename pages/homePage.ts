import { Locator, Page } from '@playwright/test';

export class HomePage {
	readonly page: Page;
	readonly loadedElement: Locator;
	readonly shoppingCart: Locator;
	readonly searchBar: Locator;
	readonly shoppingCartTotal: Locator;

	constructor(page: Page) {
		this.page = page;
		this.loadedElement = page.locator('[class="column main"]');
		this.shoppingCart = page.locator('a[class="action showcart"]');
		this.searchBar = page.locator('input[id="search"]');
		this.shoppingCartTotal = page.locator('[class="amount price-container"] [class="price-wrapper"]');
	}

	async validateHomePageLoaded() {
		await this.loadedElement.isVisible();
	}

	async performSearch(text: string) {
		await this.searchBar.fill(text);
	}

	async clickShoppingCart() {
		await this.shoppingCart.click();
	}
}
