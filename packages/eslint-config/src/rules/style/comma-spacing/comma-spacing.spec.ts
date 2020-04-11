import rule from './comma-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.CommaSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.CommaSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.CommaSpacing][0]).toBe(Severity.error);
	});
});
