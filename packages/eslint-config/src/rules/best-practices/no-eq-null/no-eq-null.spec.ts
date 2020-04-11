import rule from './no-eq-null';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoEqNull, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoEqNull in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoEqNull][0]).toBe(Severity.error);
	});
});
