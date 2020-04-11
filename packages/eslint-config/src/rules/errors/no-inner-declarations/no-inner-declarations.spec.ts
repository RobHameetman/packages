import rule from './no-inner-declarations';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoInnerDeclarations, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoInnerDeclarations in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoInnerDeclarations][0]).toBe(Severity.error);
	});
});
