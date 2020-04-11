import rule from './no-useless-return';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessReturn in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessReturn][0]).toBe(Severity.error);
	});
});
