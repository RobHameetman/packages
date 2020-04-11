import rule from './for-direction';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.ForDirection, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ForDirection in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ForDirection][0]).toBe(Severity.error);
	});
});
