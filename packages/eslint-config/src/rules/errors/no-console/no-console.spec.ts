import rule from './no-console';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoConsole, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoConsole in rule).toBe(true);
	});

	it('should be discouraged', (): void => {
		expect(rule[Rules.NoConsole][0]).toBe(Severity.warn);
	});
});
