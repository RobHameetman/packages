module.exports = {
	extends: [
		'eslint/conf/eslint-recommended',
		'./rules/best-practices',
		'./rules/errors',
		'./rules/node',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
		'./rules/imports',
		'./rules/strict',
		'./rules/typescript',
		'./rules/prettier',
		'./rules/jest',
	].map((path) => require.resolve(path)),
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {},
};
