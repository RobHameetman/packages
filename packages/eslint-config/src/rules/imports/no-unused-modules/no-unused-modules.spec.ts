import rule from './no-unused-modules';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnusedModules, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnusedModules in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoUnusedModules][0]).toBe(Severity.off);
	});
});
