import rule from './no-undef-init';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUndefInit, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUndefInit in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUndefInit][0]).toBe(Severity.error);
	});
});
