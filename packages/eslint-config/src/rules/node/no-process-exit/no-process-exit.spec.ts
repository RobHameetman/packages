import rule from './no-process-exit';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoProcessExit, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoProcessExit in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoProcessExit][0]).toBe(Severity.off);
	});
});
