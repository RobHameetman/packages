import rule from './getter-return';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.GetterReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.GetterReturn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.GetterReturn][0]).toBe(Severity.error);
	});
});
