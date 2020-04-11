import rule from './no-restricted-modules';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoRestrictedModules, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRestrictedModules in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoRestrictedModules][0]).toBe(Severity.off);
	});
});
