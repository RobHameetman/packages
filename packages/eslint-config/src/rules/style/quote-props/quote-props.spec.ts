import rule from './quote-props';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.QuoteProps, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.QuoteProps in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.QuoteProps][0]).toBe(Severity.error);
	});
});
