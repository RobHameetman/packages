import rule from './no-shadow';
import { EsLintVariablesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoShadow, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoShadow in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoShadow][0]).toBe(Severity.error);
	});
});
