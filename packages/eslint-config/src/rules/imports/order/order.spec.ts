import rule from './order';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.Order, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Order in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Order][0]).toBe(Severity.error);
	});
});
