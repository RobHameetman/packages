import rule from './no-async-promise-executor';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoAsyncPromiseExecutor, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoAsyncPromiseExecutor in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoAsyncPromiseExecutor][0]).toBe(Severity.error);
	});
});
