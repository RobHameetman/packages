import rule from './array-element-newline';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ArrayElementNewline, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ArrayElementNewline in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ArrayElementNewline][0]).toBe(Severity.error);
	});
});
