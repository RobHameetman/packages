import rule from './max-dependencies';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxDependencies, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxDependencies in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MaxDependencies][0]).toBe(Severity.off);
	});
});
