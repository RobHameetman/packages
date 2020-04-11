import { rules } from './rules';

module.exports = {
	env: {
		'jest/globals': true,
	},
	extends: ['plugin:jest/recommended'],
	rules,
};
