import rule from './no-restricted-properties';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoRestrictedProperties, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRestrictedProperties in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoRestrictedProperties][0]).toBe(Severity.error);
	});
});
