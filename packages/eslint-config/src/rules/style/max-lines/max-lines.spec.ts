import rule from './max-lines';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxLines, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxLines in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MaxLines][0]).toBe(Severity.off);
	});
});
