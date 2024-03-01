import { APIRequestContext, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

export class Activities {
	readonly context: APIRequestContext;

	constructor(context: APIRequestContext) {
		this.context = context;
	}

	async getActivities() {
		const response = await this.context.get('https://fakerestapi.azurewebsites.net/api/v1/Activities');

		const responseBody = await response.json();
		console.log(responseBody);

		expect(response.status()).toBe(200);
	}

	async postActivities() {
		const idNumber = faker.number.int({ min: 3, max: 5 });
		const response = await this.context.post('https://fakerestapi.azurewebsites.net/api/v1/Activities', {
			data: {
				id: idNumber,
				title: 'Test automation',
				dueDate: '2024-03-01T10:53:55.292Z',
				completed: true,
			},
		});
		const responseBody = await response.json();
		console.log(responseBody);
		expect(response.status()).toBe(200);

		return responseBody.id;
	}

	async deleteActivities() {
		const id = await this.postActivities();
		const deleteCall = await this.context.delete(`https://fakerestapi.azurewebsites.net/api/v1/Activities/${id}`);
		console.log((await deleteCall.body()).toString());
		expect(deleteCall.status()).toBe(200);
	}
}
