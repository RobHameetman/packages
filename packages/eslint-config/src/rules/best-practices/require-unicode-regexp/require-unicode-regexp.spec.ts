import rule from './require-unicode-regexp';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.RequireUnicodeRegexp, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.RequireUnicodeRegexp in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.RequireUnicodeRegexp][0]).toBe(Severity.off);
	});
});
