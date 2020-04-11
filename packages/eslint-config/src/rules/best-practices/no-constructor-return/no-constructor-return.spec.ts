import rule from './no-constructor-return';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoConstructorReturn, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoConstructorReturn in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoConstructorReturn][0]).toBe(Severity.off);
	});
});
