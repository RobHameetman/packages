import rule from './curly';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.Curly, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Curly in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Curly][0]).toBe(Severity.error);
	});
});
