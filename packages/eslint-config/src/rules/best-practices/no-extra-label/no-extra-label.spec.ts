import rule from './no-extra-label';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtraLabel, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtraLabel in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoExtraLabel][0]).toBe(Severity.error);
	});
});
