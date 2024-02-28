import { Page } from '@playwright/test';

async function setUpPage(page: Page) {
	await page.goto('https://magento.softwaretestingboard.com/');
}

export { setUpPage };
