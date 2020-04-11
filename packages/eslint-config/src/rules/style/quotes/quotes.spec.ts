import rule from './quotes';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.Quotes, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Quotes in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Quotes][0]).toBe(Severity.error);
	});
});
