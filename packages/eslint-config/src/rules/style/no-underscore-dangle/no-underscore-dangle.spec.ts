import rule from './no-underscore-dangle';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnderscoreDangle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnderscoreDangle in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoUnderscoreDangle][0]).toBe(Severity.off);
	});
});
