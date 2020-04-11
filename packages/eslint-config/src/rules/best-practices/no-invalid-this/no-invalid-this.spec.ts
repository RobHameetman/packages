import rule from './no-invalid-this';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoInvalidThis, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoInvalidThis in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoInvalidThis][0]).toBe(Severity.off);
	});
});
