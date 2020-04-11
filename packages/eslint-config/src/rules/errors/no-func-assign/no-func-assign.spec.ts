import rule from './no-func-assign';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoFuncAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoFuncAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoFuncAssign][0]).toBe(Severity.error);
	});
});
