import rule from './namespace';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Namespace, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Namespace in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.Namespace][0]).toBe(Severity.off);
	});
});
