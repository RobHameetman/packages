import rule from './vars-on-top';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.VarsOnTop, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.VarsOnTop in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.VarsOnTop][0]).toBe(Severity.error);
	});
});
