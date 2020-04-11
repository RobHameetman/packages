import rule from './no-case-declarations';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoCaseDeclarations, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoCaseDeclarations in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoCaseDeclarations][0]).toBe(Severity.error);
	});
});
