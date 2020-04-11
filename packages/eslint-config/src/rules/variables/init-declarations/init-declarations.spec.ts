import rule from './init-declarations';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.InitDeclarations, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.InitDeclarations in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.InitDeclarations][0]).toBe(Severity.off);
	});
});
