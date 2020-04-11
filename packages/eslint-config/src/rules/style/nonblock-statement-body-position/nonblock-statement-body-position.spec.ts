import rule from './nonblock-statement-body-position';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NonblockStatementBodyPosition, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NonblockStatementBodyPosition in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NonblockStatementBodyPosition][0]).toBe(Severity.error);
	});
});
