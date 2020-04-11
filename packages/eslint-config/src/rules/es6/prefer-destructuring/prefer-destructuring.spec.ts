import rule from './prefer-destructuring';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferDestructuring, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferDestructuring in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferDestructuring][0]).toBe(Severity.error);
	});
});
