import rule from './multiline-ternary';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MultilineTernary, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MultilineTernary in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MultilineTernary][0]).toBe(Severity.off);
	});
});
