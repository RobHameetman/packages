import rule from './extensions';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Extensions, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Extensions in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Extensions][0]).toBe(Severity.error);
	});
});
