import rule from './default-case';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.DefaultCase, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.DefaultCase in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.DefaultCase][0]).toBe(Severity.error);
	});

	it('should allow the rule to be skipped with an intentional comment', (): void => {
		expect(rule[Rules.DefaultCase][1].commentPattern).toBe('^no default$');
	});
});
