import { rules } from './rules';

module.exports = {
	env: { es6: true },
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
	},
	plugins: ['import'],
	settings: {
		'import/resolver': { node: { extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'] } },
		'import/extensions': ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
		'import/core-modules': [],
		'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
	},
	rules,
};
