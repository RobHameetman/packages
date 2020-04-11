import rule from './no-global-assign';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoGlobalAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoGlobalAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoGlobalAssign][0]).toBe(Severity.error);
	});
});
