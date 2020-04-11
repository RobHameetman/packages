import rule from './no-named-as-default';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNamedAsDefault, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNamedAsDefault in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoNamedAsDefault][0]).toBe(Severity.error);
	});
});
