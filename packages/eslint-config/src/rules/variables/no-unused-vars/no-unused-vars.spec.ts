import rule from './no-unused-vars';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnusedVars, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnusedVars in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnusedVars][0]).toBe(Severity.error);
	});
});
