import rule from './operator-assignment';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.OperatorAssignment, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.OperatorAssignment in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.OperatorAssignment][0]).toBe(Severity.error);
	});
});
