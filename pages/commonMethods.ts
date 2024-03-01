import { Page, expect, Locator } from '@playwright/test';

export class CommonMethods {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async assertTextIsPresent(text: string) {
		await expect(this.page.getByText(text)).toBeVisible();
	}

	async navigateTo(url: string) {
		console.log('navigating to : ' + url);
		await this.page.goto(url);
	}

	// documentation : https://playwright.dev/docs/test-snapshots
	async waitForSelectorAndCompareScreenshot(locator: Locator, image: string) {
		await locator.waitFor({ state: 'visible' });
		await new Promise((resolve) => setTimeout(resolve, 2000));
		expect(await this.page.screenshot()).toMatchSnapshot(image, {
			maxDiffPixels: 17000,
		});
	}
}
