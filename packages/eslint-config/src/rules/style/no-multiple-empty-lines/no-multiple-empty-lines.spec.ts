import rule from './no-multiple-empty-lines';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMultipleEmptyLines, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMultipleEmptyLines in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMultipleEmptyLines][0]).toBe(Severity.error);
	});
});
