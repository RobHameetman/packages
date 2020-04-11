import rule from './no-extra-parens';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtraParens, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtraParens in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoExtraParens][0]).toBe(Severity.off);
	});
});
