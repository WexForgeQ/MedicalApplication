import { generateApi } from 'swagger-typescript-api';

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

generateApi({
	fileName: 'api.ts',
	output: '../../../src/api-gen',
	url: 'http://192.168.10.31:5002/swagger/v1/swagger.json',
	httpClientType: 'axios',
	nameVariants: {
		patterns: ['camelCase'],
	},
})
	.then(() => {
		console.log('API generation completed successfully.');
	})
	.catch((error) => {
		console.error('Error during API generation:', error.message);
	});
