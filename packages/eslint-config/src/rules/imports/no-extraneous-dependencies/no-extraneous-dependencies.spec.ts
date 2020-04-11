import rule from './no-extraneous-dependencies';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtraneousDependencies, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtraneousDependencies in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoExtraneousDependencies][0]).toBe(Severity.error);
	});
});
