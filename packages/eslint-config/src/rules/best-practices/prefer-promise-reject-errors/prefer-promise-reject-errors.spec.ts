import rule from './prefer-promise-reject-errors';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.PreferPromiseRejectErrors, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferPromiseRejectErrors in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferPromiseRejectErrors][0]).toBe(Severity.error);
	});
});
