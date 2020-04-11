import rule from './no-webpack-loader-syntax';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoWebpackLoaderSyntax, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoWebpackLoaderSyntax in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoWebpackLoaderSyntax][0]).toBe(Severity.error);
	});
});
