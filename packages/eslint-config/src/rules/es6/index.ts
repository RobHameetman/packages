import { rules } from './rules';

module.exports = {
	env: { es6: true },
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			generators: true,
			objectLiteralDuplicateProperties: false,
		},
	},
	rules,
};
