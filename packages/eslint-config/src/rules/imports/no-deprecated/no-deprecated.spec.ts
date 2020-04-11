import rule from './no-deprecated';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDeprecated, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDeprecated in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoDeprecated][0]).toBe(Severity.error);
	});
});
