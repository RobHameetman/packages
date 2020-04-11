import rule from './no-new-wrappers';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNewWrappers, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNewWrappers in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoNewWrappers][0]).toBe(Severity.error);
	});
});
