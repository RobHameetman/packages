import rule from './prefer-rest-params';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferRestParams, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferRestParams in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferRestParams][0]).toBe(Severity.error);
	});
});
