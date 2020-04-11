import rule from './no-labels';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoLabels, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoLabels in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoLabels][0]).toBe(Severity.error);
	});
});
