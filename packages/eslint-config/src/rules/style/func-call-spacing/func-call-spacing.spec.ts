import rule from './func-call-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.FuncCallSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.FuncCallSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.FuncCallSpacing][0]).toBe(Severity.error);
	});
});
