import rule from './consistent-return';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.ConsistentReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ConsistentReturn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ConsistentReturn][0]).toBe(Severity.error);
	});
});
