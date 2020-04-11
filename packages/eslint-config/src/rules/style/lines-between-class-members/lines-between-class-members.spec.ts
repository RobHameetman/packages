import rule from './lines-between-class-members';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.LinesBetweenClassMembers, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.LinesBetweenClassMembers in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.LinesBetweenClassMembers][0]).toBe(Severity.error);
	});
});
