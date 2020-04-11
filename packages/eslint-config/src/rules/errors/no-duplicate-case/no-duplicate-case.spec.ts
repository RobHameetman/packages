import rule from './no-duplicate-case';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDuplicateCase, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDuplicateCase in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoDuplicateCase][0]).toBe(Severity.error);
	});
});
