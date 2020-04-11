import rule from './no-anonymous-default-export';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoAnonymousDefaultExport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoAnonymousDefaultExport in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoAnonymousDefaultExport][0]).toBe(Severity.off);
	});
});
