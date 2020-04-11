import rule from './no-redeclare';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoRedeclare, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoRedeclare in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoRedeclare][0]).toBe(Severity.error);
	});
});
