import rule from './no-param-reassign';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoParamReassign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoParamReassign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoParamReassign][0]).toBe(Severity.error);
	});
});
