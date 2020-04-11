import rule from './no-label-var';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoLabelVar, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoLabelVar in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoLabelVar][0]).toBe(Severity.error);
	});
});
