import rule from './func-name-matching';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.FuncNameMatching, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.FuncNameMatching in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.FuncNameMatching][0]).toBe(Severity.off);
	});
});
