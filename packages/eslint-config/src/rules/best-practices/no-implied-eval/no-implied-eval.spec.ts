import rule from './no-implied-eval';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoImpliedEval, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoImpliedEval in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoImpliedEval][0]).toBe(Severity.error);
	});
});
