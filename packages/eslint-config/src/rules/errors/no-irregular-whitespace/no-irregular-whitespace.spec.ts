import rule from './no-irregular-whitespace';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoIrregularWhitespace, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoIrregularWhitespace in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoIrregularWhitespace][0]).toBe(Severity.error);
	});
});
