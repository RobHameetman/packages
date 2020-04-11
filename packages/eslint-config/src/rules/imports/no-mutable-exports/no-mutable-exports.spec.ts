import rule from './no-mutable-exports';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMutableExports, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMutableExports in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMutableExports][0]).toBe(Severity.error);
	});
});
