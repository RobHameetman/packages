import rule from './no-cond-assign';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoCondAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoCondAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoCondAssign][0]).toBe(Severity.error);
	});
});
