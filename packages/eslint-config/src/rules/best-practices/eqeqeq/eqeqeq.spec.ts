import rule from './eqeqeq';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.Eqeqeq, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Eqeqeq in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Eqeqeq][0]).toBe(Severity.error);
	});
});
