import rule from './no-throw-literal';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoThrowLiteral, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoThrowLiteral in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoThrowLiteral][0]).toBe(Severity.error);
	});
});
