import rule from './no-unused-labels';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnusedLabels, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnusedLabels in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnusedLabels][0]).toBe(Severity.error);
	});
});
