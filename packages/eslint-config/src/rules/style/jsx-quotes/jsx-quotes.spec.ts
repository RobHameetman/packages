import rule from './jsx-quotes';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.JsxQuotes, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.JsxQuotes in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.JsxQuotes][0]).toBe(Severity.error);
	});
});
