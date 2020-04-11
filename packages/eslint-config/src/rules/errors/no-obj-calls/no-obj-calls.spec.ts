import rule from './no-obj-calls';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoObjCalls, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoObjCalls in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoObjCalls][0]).toBe(Severity.error);
	});
});
