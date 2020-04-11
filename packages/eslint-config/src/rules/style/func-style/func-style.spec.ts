import rule from './func-style';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.FuncStyle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.FuncStyle in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.FuncStyle][0]).toBe(Severity.off);
	});
});
