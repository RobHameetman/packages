import rule from './no-loop-func';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoLoopFunc, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoLoopFunc in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoLoopFunc][0]).toBe(Severity.error);
	});
});
