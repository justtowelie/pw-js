async function setUpServer() {
	if (process.env.ENV == 'alpha') {
		return 'alpha-server.com';
	} else {
		return 'qa-server.com';
	}
}

async function getSqlConfig() {
	const serverName = await setUpServer();
	let password;

	if (process.env.ENV == 'alpha') {
		password = 'alphapassword';
	} else {
		password = 'qapassword';
	}

	const sqlConfig = {
		user: 'test_user',
		password: password,
		data: 'Database',
		port: 1433,
		options: {
			trustServerCertificate: true,
			trustedConnection: true,
		},
		server: serverName,
	};
	return sqlConfig;
}

export { getSqlConfig };
