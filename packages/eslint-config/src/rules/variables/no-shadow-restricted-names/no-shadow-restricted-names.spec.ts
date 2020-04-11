import rule from './no-shadow-restricted-names';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoShadowRestrictedNames, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoShadowRestrictedNames in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoShadowRestrictedNames][0]).toBe(Severity.error);
	});
});
