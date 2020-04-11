import rule from './no-restricted-paths';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoRestrictedPaths, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRestrictedPaths in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoRestrictedPaths][0]).toBe(Severity.off);
	});
});
