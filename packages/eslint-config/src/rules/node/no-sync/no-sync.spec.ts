import rule from './no-sync';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSync, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSync in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoSync][0]).toBe(Severity.off);
	});
});
