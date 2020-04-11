import rule from './no-else-return';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoElseReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoElseReturn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoElseReturn][0]).toBe(Severity.error);
	});
});
