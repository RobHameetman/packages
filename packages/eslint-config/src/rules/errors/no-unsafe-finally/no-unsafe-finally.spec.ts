import rule from './no-unsafe-finally';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnsafeFinally, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnsafeFinally in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnsafeFinally][0]).toBe(Severity.error);
	});
});
