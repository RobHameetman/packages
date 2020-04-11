import rule from './no-cycle';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoCycle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoCycle in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoCycle][0]).toBe(Severity.error);
	});
});
