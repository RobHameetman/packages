import rule from './no-restricted-imports';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoRestrictedImports, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRestrictedImports in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoRestrictedImports][0]).toBe(Severity.off);
	});
});
