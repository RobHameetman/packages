import rule from './prefer-spread';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferSpread, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferSpread in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferSpread][0]).toBe(Severity.error);
	});
});
