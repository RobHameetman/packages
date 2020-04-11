import rule from './wrap-iife';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.WrapIife, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.WrapIife in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.WrapIife][0]).toBe(Severity.error);
	});
});
