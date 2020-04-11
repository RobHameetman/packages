import rule from './no-unneeded-ternary';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnneededTernary, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnneededTernary in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnneededTernary][0]).toBe(Severity.error);
	});
});
