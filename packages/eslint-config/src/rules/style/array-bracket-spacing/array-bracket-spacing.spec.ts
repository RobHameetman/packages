import rule from './array-bracket-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ArrayBracketSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ArrayBracketSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ArrayBracketSpacing][0]).toBe(Severity.error);
	});
});
