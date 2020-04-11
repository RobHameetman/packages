import rule from './max-statements';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxStatements, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxStatements in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MaxStatements][0]).toBe(Severity.off);
	});
});
