import rule from './no-setter-return';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSetterReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSetterReturn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoSetterReturn][0]).toBe(Severity.error);
	});
});
