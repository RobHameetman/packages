import rule from './indent';
import { IndentKey, EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.Indent, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Indent in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Indent][0]).toBe(Severity.error);
	});

	it('should enforce indentation with tabs', (): void => {
		expect(rule[Rules.Indent][1]).toBe(IndentKey.tab);
	});
});
