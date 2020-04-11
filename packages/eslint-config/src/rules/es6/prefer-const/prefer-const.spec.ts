import rule from './prefer-const';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferConst, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferConst in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferConst][0]).toBe(Severity.error);
	});
});
