import rule from './no-delete-var';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDeleteVar, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDeleteVar in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoDeleteVar][0]).toBe(Severity.off);
	});
});
