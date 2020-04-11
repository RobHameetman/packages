import rule from './no-implicit-globals';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoImplicitGlobals, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoImplicitGlobals in rule).toBe(true);
	});

	it('should be utned off', (): void => {
		expect(rule[Rules.NoImplicitGlobals][0]).toBe(Severity.off);
	});
});
