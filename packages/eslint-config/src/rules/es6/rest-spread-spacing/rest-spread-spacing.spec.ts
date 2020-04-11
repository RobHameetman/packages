import rule from './rest-spread-spacing';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.RestSpreadSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.RestSpreadSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.RestSpreadSpacing][0]).toBe(Severity.error);
	});
});
