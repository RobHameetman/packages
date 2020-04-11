import rule from './no-undefined';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUndefined, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUndefined in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoUndefined][0]).toBe(Severity.off);
	});
});
