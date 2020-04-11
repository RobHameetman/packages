import rule from './guard-for-in';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.GuardForIn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.GuardForIn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.GuardForIn][0]).toBe(Severity.error);
	});
});
