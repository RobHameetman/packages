const { DEBUG = '', NODE_ENV = 'production' } = process.env;

const isTest = NODE_ENV === 'test';
const isDevelopment = NODE_ENV === 'development';
const isProduction = NODE_ENV === 'production';
const isDebug = DEBUG.includes('eslint:code-path');

if (isDebug) {
	console.log('-------------------');
	console.group('plugin:@rob.hameetman/graphql');

	console.info(`├── process.cwd: ${process.cwd()}`);
	console.info(`├── process.env.NODE_ENV: ${process.env.NODE_ENV}`);
	console.info(`├── isTest: ${isTest}`);
	console.info(`├── isDevelopment: ${isDevelopment}`);
	console.info(`└── isProduction: ${isProduction}`);

	console.groupEnd();
	console.log('-------------------');
}

export const graphql = Object.freeze({
	plugins: [
		'graphql',
	],
	files: [
		'**/*.g?(raph)ql',
	],
	rules: {
		['import/extensions']: ['error', 'never', {
			gql: 'always',
			graphql: 'always',
		}],
	},
	settings: {
		'import/extensions': [
			'.gql',
			'.graphql',
		],
		'import/resolver': {
			node: {
				extensions: [
					'.gql',
					'.graphql',
				],
			},
		},
	},
});
