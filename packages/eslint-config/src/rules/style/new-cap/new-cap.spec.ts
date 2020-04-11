import rule from './new-cap';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NewCap, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NewCap in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NewCap][0]).toBe(Severity.error);
	});
});
