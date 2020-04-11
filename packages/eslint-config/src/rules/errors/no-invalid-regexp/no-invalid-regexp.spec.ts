import rule from './no-invalid-regexp';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoInvalidRegexp, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoInvalidRegexp in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoInvalidRegexp][0]).toBe(Severity.error);
	});
});
