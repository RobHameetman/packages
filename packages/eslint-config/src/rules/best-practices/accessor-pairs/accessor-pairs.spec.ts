import rule from './accessor-pairs';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.AccessorPairs, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.AccessorPairs in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.AccessorPairs][0]).toBe(Severity.off);
	});
});
