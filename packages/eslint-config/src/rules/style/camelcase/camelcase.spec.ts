import rule from './camelcase';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.Camelcase, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Camelcase in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Camelcase][0]).toBe(Severity.error);
	});
});
