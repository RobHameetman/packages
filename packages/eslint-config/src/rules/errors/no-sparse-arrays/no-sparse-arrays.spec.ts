import rule from './no-sparse-arrays';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSparseArrrays, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSparseArrrays in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoSparseArrrays][0]).toBe(Severity.error);
	});
});
