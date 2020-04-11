import rule from './no-dynamic-require';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDynamicRequire, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDynamicRequire in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoDynamicRequire][0]).toBe(Severity.off);
	});
});
