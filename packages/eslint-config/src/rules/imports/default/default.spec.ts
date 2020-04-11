import rule from './default';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Default, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Default in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.Default][0]).toBe(Severity.off);
	});
});
