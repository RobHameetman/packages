import rule from './new-parens';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NewParens, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NewParens in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NewParens][0]).toBe(Severity.error);
	});
});
