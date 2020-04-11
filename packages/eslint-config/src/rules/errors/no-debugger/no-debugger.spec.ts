import rule from './no-debugger';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDebugger, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDebugger in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoDebugger][0]).toBe(Severity.error);
	});
});
