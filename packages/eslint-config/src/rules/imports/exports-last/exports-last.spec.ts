import rule from './exports-last';
import { EsLintPluginImportRules as Rules, Severity } from '../../../enums';

describe(Rules.ExportsLast, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ExportsLast in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.ExportsLast][0]).toBe(Severity.off);
	});
});
