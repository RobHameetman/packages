import rule from './no-sequences';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSequences, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSequences in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoSequences][0]).toBe(Severity.error);
	});
});
