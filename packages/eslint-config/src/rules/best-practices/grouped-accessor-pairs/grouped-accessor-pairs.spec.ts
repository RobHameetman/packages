import rule from './grouped-accessor-pairs';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.GroupedAccessorPairs, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.GroupedAccessorPairs in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.GroupedAccessorPairs][0]).toBe(Severity.error);
	});

	it('should order getters before setters', (): void => {
		expect(rule[Rules.GroupedAccessorPairs][1]).toBe('getBeforeSet');
	});
});
