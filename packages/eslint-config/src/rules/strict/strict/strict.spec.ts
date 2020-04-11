import rule from './strict';
import { EsLintStrictRules as Rules, Severity } from '../../../enums';

describe(Rules.Strict, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Strict in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.Strict][0]).toBe(Severity.off);
	});
});
