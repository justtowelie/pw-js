import * as sql from 'mssql';
import { getSqlConfig } from './sqlConnection';
import { faker } from '@faker-js/faker';

async function testProcedure() {
	try {
		const sqlConfig = await getSqlConfig();
		const connection = await sql.connect(sqlConfig);
		const procName = 'testProc';
		const req = new sql.Request(connection);
		const alias = faker.string.alpha(7);
		const password = faker.string.alpha(7);
		req.input('user', alias);
		req.input('password', password);
		req.input('address', faker.location.streetAddress());
		await req.execute(procName);
		return {
			alias: alias,
			password: password,
		};
	} catch (error) {
		console.error('Error: ' + error);
		throw error;
	}
}

export { testProcedure };
