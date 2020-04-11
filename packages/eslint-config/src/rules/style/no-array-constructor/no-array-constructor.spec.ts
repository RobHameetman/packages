import rule from './no-array-constructor';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoArrayConstructor, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoArrayConstructor in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoArrayConstructor][0]).toBe(Severity.error);
	});
});
