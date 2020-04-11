import rule from './max-statements-per-line';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxStatementsPerLine, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxStatementsPerLine in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MaxStatementsPerLine][0]).toBe(Severity.off);
	});
});
