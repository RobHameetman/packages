import { EsLintVariablesRules as Rules, Severity } from '../../../enums';
import rule from './no-use-before-define';

describe(Rules.NoUseBeforeDefine, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUseBeforeDefine in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUseBeforeDefine][0]).toBe(Severity.error);
	});
});
