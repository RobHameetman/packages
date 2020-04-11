import rule from './no-unused-expressions';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnusedExpressions, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnusedExpressions in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnusedExpressions][0]).toBe(Severity.error);
	});
});
