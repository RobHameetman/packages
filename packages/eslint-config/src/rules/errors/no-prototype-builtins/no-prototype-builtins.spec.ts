import rule from './no-prototype-builtins';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoPrototypeBuitlins, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoPrototypeBuitlins in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoPrototypeBuitlins][0]).toBe(Severity.error);
	});
});
