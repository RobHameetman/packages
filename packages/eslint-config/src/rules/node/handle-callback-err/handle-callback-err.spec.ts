import rule from './handle-callback-err';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.HandleCallbackErr, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.HandleCallbackErr in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.HandleCallbackErr][0]).toBe(Severity.off);
	});
});
