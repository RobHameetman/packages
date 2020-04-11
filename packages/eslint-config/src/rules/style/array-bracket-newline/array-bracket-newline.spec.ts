import rule from './array-bracket-newline';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ArrayBracketNewline, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ArrayBracketNewline in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.ArrayBracketNewline][0]).toBe(Severity.off);
	});
});
