import rule from './yield-star-spacing';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.YieldStarSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.YieldStarSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.YieldStarSpacing][0]).toBe(Severity.error);
	});
});
