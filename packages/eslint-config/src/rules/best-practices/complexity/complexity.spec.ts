import rule from './complexity';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.Complexity, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Complexity in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.Complexity][0]).toBe(Severity.off);
	});
});
