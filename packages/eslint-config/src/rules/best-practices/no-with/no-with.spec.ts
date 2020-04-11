import rule from './no-with';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoWith, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoWith in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoWith][0]).toBe(Severity.error);
	});
});
