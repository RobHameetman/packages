import rule from './no-self-import';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSelfImport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSelfImport in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoSelfImport][0]).toBe(Severity.error);
	});
});
