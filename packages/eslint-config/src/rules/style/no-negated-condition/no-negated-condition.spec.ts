import rule from './no-negated-condition';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNegatedCondition, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNegatedCondition in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoNegatedCondition][0]).toBe(Severity.off);
	});
});
