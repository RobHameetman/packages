import rule from './no-eval';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoEval, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoEval in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoEval][0]).toBe(Severity.error);
	});
});
