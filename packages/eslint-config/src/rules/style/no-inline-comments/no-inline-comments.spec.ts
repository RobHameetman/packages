import rule from './no-inline-comments';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoInlineComments, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoInlineComments in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoInlineComments][0]).toBe(Severity.off);
	});
});
