import rule from './max-lines-per-function';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxLinesPerFunction, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxLinesPerFunction in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MaxLinesPerFunction][0]).toBe(Severity.off);
	});
});
