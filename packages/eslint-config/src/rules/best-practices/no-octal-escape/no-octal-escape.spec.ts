import rule from './no-octal-escape';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoOctalEscape, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoOctalEscape in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoOctalEscape][0]).toBe(Severity.error);
	});
});
