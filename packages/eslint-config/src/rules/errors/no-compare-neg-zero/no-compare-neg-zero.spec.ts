import rule from './no-compare-neg-zero';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoCompareNegZero, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoCompareNegZero in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoCompareNegZero][0]).toBe(Severity.error);
	});
});
