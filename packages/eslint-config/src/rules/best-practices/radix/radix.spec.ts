import rule from './radix';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.Radix, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Radix in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Radix][0]).toBe(Severity.error);
	});
});
