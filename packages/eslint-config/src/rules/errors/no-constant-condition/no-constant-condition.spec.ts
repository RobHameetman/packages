import rule from './no-constant-condition';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoConstantCondition, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoConstantCondition in rule).toBe(true);
	});

	it('should be discouraged', (): void => {
		expect(rule[Rules.NoConstantCondition][0]).toBe(Severity.warn);
	});
});
