import rule from './default-case-last';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.DefaultCaseLast, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.DefaultCaseLast in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.DefaultCaseLast][0]).toBe(Severity.error);
	});
});
