import rule from './use-isnan';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.UseIsNaN, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.UseIsNaN in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.UseIsNaN][0]).toBe(Severity.error);
	});
});
