import rule from './no-nested-ternary';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNestedTernary, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNestedTernary in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoNestedTernary][0]).toBe(Severity.off);
	});
});
