import rule from './space-unary-ops';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SpaceUnaryOps, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SpaceUnaryOps in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SpaceUnaryOps][0]).toBe(Severity.error);
	});
});
