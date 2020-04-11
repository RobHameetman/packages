import rule from './no-warning-comments';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoWarningComments, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoWarningComments in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoWarningComments][0]).toBe(Severity.off);
	});
});
