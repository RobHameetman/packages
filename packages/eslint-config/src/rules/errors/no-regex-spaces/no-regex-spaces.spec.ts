import rule from './no-regex-spaces';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoRegexSpaces, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRegexSpaces in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoRegexSpaces][0]).toBe(Severity.error);
	});
});
