import rule from './prefer-default-export';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.PreferDefaultExport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferDefaultExport in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.PreferDefaultExport][0]).toBe(Severity.off);
	});
});
