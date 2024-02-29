import { Locator, Page } from '@playwright/test';

export class Purchases {
	readonly page: Page;
	readonly itemLocator: Locator;
	readonly price: Locator;
	private sizeLocators: Record<string, Locator>;
	readonly color: Locator;
	readonly addToCart: Locator;
	private priceValue: string | null = null;
	private sizes: Locator[] = [];

	constructor(page: Page) {
		this.page = page;
		this.itemLocator = page.locator('[class="product-image-photo"]');
		this.price = page.locator('[class="product-info-price"] span[class="price"]');
		this.sizeLocators = {
			S: page.getByLabel('S', { exact: true }),
			M: page.getByLabel('M', { exact: true }),
			L: page.getByLabel('L', { exact: true }),
			XL: page.getByLabel('XL', { exact: true }),
		};
		this.color = page.getByLabel('Color');
		this.addToCart = page.getByRole('button', { name: 'Add to Cart' });
	}

	async selectAndAddItemToCart() {
		await this.selectProductFromSearch();
		await this.selectRandomColor();
		await this.selectRandomSize();
		await this.obtainPrice();
		await this.addToCart.click();
	}

	async selectProductFromSearch() {
		const productList = await this.itemLocator.all();
		if (productList.length === 0) {
			console.error('No products found.');
			return;
		}
		// Generates a random number
		const randomIndex = Math.floor(Math.random() * productList.length);

		// Select the random product
		const randomProduct = productList[randomIndex];

		await randomProduct.click();
	}

	// Not an optimal way to select it, but its different so i've added it so learning purposes.
	async selectRandomSize(): Promise<boolean> {
		// Get an array of size keys
		const sizeKeys = Object.keys(this.sizeLocators);

		// Check if there are sizes available
		if (sizeKeys.length === 0) {
			console.error('No sizes found.');
			return false; // Return false since there are no sizes available
		}

		// Select a random size key
		const randomSizeKey = sizeKeys[Math.floor(Math.random() * sizeKeys.length)];

		// Get the locator corresponding to the random size key
		const randomSizeLocator = this.sizeLocators[randomSizeKey];

		// Click or perform any other action with the selected size locator
		await randomSizeLocator.click();
		console.log('Clicked on random size:', randomSizeKey);

		return true; // Return true since a size was successfully selected
	}

	async selectRandomColor(): Promise<boolean> {
		// Obtain the list of colors
		const colorList = await this.color.all();

		// Check if there are colors available
		if (colorList.length === 0) {
			console.error('No colors found.');
			return false; // Return false since there are no colors available
		}

		// Generate a random index
		const randomIndex = Math.floor(Math.random() * colorList.length);

		// Select the random color
		const randomColor = colorList[randomIndex];

		// Check if randomColor is defined
		if (randomColor) {
			await randomColor.click();
			console.log('Clicked on random color:', randomColor);
			return true; // Return true since a color was successfully selected
		} else {
			console.error('Random color is undefined.');
			return false;
		}
	}

	async obtainPrice() {
		const price = await this.price.textContent();
		this.priceValue = price;
		console.log('cost is : ' + this.priceValue);
	}

	async getCostOfProduct() {
		return this.priceValue;
	}
}
