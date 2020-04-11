import rule from './require-atomic-updates';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.RequireAtomicUpdates, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.RequireAtomicUpdates in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.RequireAtomicUpdates][0]).toBe(Severity.off);
	});
});
