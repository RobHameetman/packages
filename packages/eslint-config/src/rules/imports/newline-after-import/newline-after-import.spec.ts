import rule from './newline-after-import';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NewlineAfterImport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NewlineAfterImport in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NewlineAfterImport][0]).toBe(Severity.error);
	});
});
