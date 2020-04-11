import rule from './class-methods-use-this';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.ClassMethodsUseThis, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ClassMethodsUseThis in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ClassMethodsUseThis][0]).toBe(Severity.error);
	});
});
