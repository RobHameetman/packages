import rule from './prefer-exponentiation-operator';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.PreferExponentiationOperator, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferExponentiationOperator in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferExponentiationOperator][0]).toBe(Severity.error);
	});
});
