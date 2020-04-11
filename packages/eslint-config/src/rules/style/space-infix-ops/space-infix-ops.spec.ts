import rule from './space-infix-ops';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SpaceInfixOps, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SpaceInfixOps in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SpaceInfixOps][0]).toBe(Severity.error);
	});
});
