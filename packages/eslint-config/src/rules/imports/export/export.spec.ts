import rule from './export';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Export, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Export in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Export][0]).toBe(Severity.error);
	});
});
