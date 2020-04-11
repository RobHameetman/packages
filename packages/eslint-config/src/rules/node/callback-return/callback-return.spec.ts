import rule from './callback-return';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.CallbackReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.CallbackReturn in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.CallbackReturn][0]).toBe(Severity.off);
	});
});
