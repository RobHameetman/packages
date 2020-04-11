import rule from './object-curly-newline';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ObjectCurlyNewline, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ObjectCurlyNewline in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ObjectCurlyNewline][0]).toBe(Severity.error);
	});
});
