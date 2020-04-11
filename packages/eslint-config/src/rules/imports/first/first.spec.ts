import rule from './first';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.First, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.First in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.First][0]).toBe(Severity.error);
	});
});
