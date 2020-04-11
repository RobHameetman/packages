import rule from './no-unresolved';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnresolved, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnresolved in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnresolved][0]).toBe(Severity.error);
	});
});
