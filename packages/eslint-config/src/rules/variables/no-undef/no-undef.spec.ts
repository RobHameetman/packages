import rule from './no-undef';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUndef, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUndef in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUndef][0]).toBe(Severity.error);
	});
});
