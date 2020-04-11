import rule from './max-params';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxParams, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxParams in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.MaxParams][0]).toBe(Severity.error);
	});
});
