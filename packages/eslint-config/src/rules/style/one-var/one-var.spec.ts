import rule from './one-var';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.BlockScopedVar, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.BlockScopedVar in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.BlockScopedVar][0]).toBe(Severity.error);
	});
});
