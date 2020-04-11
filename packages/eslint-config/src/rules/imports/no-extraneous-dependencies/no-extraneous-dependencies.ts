import { EsLintPluginImportRules as R, Severity } from '../../../enums';

export default {
	[R.NoExtraneousDependencies]: [
		Severity.error,
		{
			devDependencies: [
				'test/**', // tape, common npm pattern
				'tests/**', // also common npm pattern
				'spec/**', // mocha, rspec-like pattern
				'**/__tests__/**', // jest pattern
				'**/__mocks__/**', // jest pattern
				'test.{ts,tsx,js,jsx}', // repos with a single test file
				'test-*.{ts,tsx,js,jsx}', // repos with multiple top-level test files
				'**/*{.,_}{test,spec}.{ts,tsx,js,jsx}', // tests where the extension or filename suffix denotes that it is a test
				'**/jest.config.{ts,js}', // jest config
				'**/jest.setup.{ts,js}', // jest setup
				'**/vue.config.{ts,js}', // vue-cli config
				'**/webpack.config.{ts,js}', // webpack config
				'**/webpack.config.*.{ts,js}', // webpack config
				'**/rollup.config.{ts,js}', // rollup config
				'**/rollup.config.*.{ts,js}', // rollup config
				'**/gulpfile.{ts,js}', // gulp config
				'**/gulpfile.*.{ts,js}', // gulp config
				'**/Gruntfile{,.ts,.js}', // grunt config
				'**/protractor.conf.{ts,js}', // protractor config
				'**/protractor.conf.*.{ts,js}', // protractor config
				'**/karma.conf.{ts,js}', // karma config
			],
			optionalDependencies: false,
		},
	],
};
