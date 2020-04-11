import rule from './unambiguous';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Unambiguous, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Unambiguous in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.Unambiguous][0]).toBe(Severity.off);
	});
});
