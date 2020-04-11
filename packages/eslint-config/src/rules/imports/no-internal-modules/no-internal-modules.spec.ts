import rule from './no-internal-modules';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoInternalModules, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoInternalModules in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoInternalModules][0]).toBe(Severity.off);
	});
});
