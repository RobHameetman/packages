import rule from './require-yield';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.RequireYield, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.RequireYield in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.RequireYield][0]).toBe(Severity.error);
	});
});
