import rule from './no-absolute-path';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.NoAbsolutePath, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoAbsolutePath in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoAbsolutePath][0]).toBe(Severity.error);
	});
});
