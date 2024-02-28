import { Page, expect } from '@playwright/test';

export class CommonMethods {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async assertTextIsPresent(text: string) {
		await expect(this.page.getByText(text)).toBeVisible();
	}
}
