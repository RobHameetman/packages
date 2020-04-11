import rule from './no-default-export';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDefaultExport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDefaultExport in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoDefaultExport][0]).toBe(Severity.off);
	});
});
