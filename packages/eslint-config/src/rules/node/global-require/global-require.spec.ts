import rule from './global-require';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.GlobalRequire, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.GlobalRequire in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.GlobalRequire][0]).toBe(Severity.error);
	});
});
