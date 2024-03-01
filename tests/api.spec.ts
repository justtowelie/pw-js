import { Activities } from '../api/activities';
import { test } from '../lib/fixtures';

// https://fakerestapi.azurewebsites.net/index.html

test.describe('API Activities @api', async () => {
	test('GET', async ({ request }) => {
		const activities = new Activities(request);
		await activities.getActivities();
	});

	test('POST', async ({ request }) => {
		const activities = new Activities(request);
		await activities.postActivities();
	});

	test('DELETE', async ({ request }) => {
		const activities = new Activities(request);
		await activities.deleteActivities();
	});
});
