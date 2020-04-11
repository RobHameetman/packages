import rule from './prefer-regex-literals';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.PreferRegexLiterals, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferRegexLiterals in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.PreferRegexLiterals][0]).toBe(Severity.off);
	});
});
