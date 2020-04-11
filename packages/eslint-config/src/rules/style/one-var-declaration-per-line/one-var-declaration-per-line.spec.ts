import rule from './one-var-declaration-per-line';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.OneVarDeclarationPerLine, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.OneVarDeclarationPerLine in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.OneVarDeclarationPerLine][0]).toBe(Severity.error);
	});
});
