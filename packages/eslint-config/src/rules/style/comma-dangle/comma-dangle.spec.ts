import rule from './comma-dangle';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.CommaDangle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.CommaDangle in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.CommaDangle][0]).toBe(Severity.error);
	});
});
