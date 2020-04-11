import rule from './no-relative-parent-imports';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoRelativeParentImports, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRelativeParentImports in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoRelativeParentImports][0]).toBe(Severity.off);
	});
});
