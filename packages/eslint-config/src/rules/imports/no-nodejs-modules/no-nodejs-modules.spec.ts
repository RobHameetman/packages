import rule from './no-nodejs-modules';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNodejsModules, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNodejsModules in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoNodejsModules][0]).toBe(Severity.off);
	});
});
