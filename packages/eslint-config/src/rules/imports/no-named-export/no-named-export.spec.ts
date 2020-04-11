import rule from './no-named-export';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNamedExport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNamedExport in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoNamedExport][0]).toBe(Severity.off);
	});
});
