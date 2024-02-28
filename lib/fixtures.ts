import { test as base } from '@playwright/test';
import { CommonMethods } from '../pages/commonMethods';
import { HomePage } from '../pages/homePage';

type Fixtures = {
	commonMethods: CommonMethods;
	homePage: HomePage;
};

export const test = base.extend<Fixtures>({
	commonMethods: async ({ page }, use) => {
		await use(new CommonMethods(page));
	},

	homePage: async ({ page }, use) => {
		await use(new HomePage(page));
	},
});
