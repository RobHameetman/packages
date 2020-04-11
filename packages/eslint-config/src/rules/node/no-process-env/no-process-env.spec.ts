import rule from './no-process-env';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoProcessEnv, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoProcessEnv in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoProcessEnv][0]).toBe(Severity.off);
	});
});
