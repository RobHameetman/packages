import rule from './no-amd';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoAmd, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoAmd in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoAmd][0]).toBe(Severity.error);
	});
});
