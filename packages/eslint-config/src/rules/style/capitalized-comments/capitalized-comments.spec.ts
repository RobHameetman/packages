import rule from './capitalized-comments';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.CapitalizedComments, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.CapitalizedComments in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.CapitalizedComments][0]).toBe(Severity.off);
	});
});
