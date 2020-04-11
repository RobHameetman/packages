import rule from './no-script-url';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoScriptUrl, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoScriptUrl in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoScriptUrl][0]).toBe(Severity.error);
	});
});
