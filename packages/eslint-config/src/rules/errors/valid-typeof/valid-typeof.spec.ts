import rule from './valid-typeof';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.ValidTypeof, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ValidTypeof in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ValidTypeof][0]).toBe(Severity.error);
	});
});
