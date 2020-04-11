import rule from './group-exports';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.GroupExports, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.GroupExports in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.GroupExports][0]).toBe(Severity.off);
	});
});
