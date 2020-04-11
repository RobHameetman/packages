import rule from './named';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Named, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Named in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Named][0]).toBe(Severity.error);
	});
});
