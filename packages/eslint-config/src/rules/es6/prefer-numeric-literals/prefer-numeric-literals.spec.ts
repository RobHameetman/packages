import rule from './prefer-numeric-literals';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferNumericLiterals, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferNumericLiterals in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferNumericLiterals][0]).toBe(Severity.error);
	});
});
