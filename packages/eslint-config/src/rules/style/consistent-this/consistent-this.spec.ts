import rule from './consistent-this';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ConsistentThis, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ConsistentThis in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.ConsistentThis][0]).toBe(Severity.off);
	});
});
