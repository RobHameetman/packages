import rule from './array-callback-return';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.ArrayCallbackReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ArrayCallbackReturn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ArrayCallbackReturn][0]).toBe(Severity.error);
	});

	it('should allow returning `undefined` implicitely with a return statment containing no expression', (): void => {
		expect(rule[Rules.ArrayCallbackReturn][1].allowImplicit).toBe(true);
	});
});
