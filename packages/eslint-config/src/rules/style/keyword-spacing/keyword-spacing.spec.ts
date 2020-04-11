import rule from './keyword-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.KeywordSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.KeywordSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.KeywordSpacing][0]).toBe(Severity.error);
	});
});
