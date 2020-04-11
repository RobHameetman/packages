import rule from './operator-linebreak';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.OperatorLinebreak, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.OperatorLinebreak in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.OperatorLinebreak][0]).toBe(Severity.error);
	});
});
