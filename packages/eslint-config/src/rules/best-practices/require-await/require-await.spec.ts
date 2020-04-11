import rule from './require-await';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.RequireAwait, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.RequireAwait in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.RequireAwait][0]).toBe(Severity.off);
	});
});
