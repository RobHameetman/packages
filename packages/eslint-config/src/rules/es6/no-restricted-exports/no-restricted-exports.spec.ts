import rule from './no-restricted-exports';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoRestrictedExports, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRestrictedExports in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoRestrictedExports][0]).toBe(Severity.off);
	});
});
