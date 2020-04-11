import rule from './space-before-function-paren';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SpaceBeforeFunctionParen, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SpaceBeforeFunctionParen in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SpaceBeforeFunctionParen][0]).toBe(Severity.error);
	});
});
