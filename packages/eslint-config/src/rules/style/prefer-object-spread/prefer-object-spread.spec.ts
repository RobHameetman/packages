import rule from './prefer-object-spread';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.PreferObjectSpread, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferObjectSpread in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferObjectSpread][0]).toBe(Severity.error);
	});
});
