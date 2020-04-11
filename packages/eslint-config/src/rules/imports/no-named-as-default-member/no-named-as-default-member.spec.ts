import rule from './no-named-as-default-member';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNamedAsDefaultMember, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNamedAsDefaultMember in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoNamedAsDefaultMember][0]).toBe(Severity.error);
	});
});
