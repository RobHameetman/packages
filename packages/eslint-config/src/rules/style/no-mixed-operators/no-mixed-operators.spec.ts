import rule from './no-mixed-operators';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMixedOperators, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMixedOperators in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMixedOperators][0]).toBe(Severity.error);
	});
});
