import rule from './default-param-last';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.DefaultParamLast, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.DefaultParamLast in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.DefaultParamLast][0]).toBe(Severity.off);
	});
});
