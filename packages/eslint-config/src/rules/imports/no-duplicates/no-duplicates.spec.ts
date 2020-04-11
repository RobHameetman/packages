import rule from './no-duplicates';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDuplicates, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDuplicates in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoDuplicates][0]).toBe(Severity.error);
	});
});
