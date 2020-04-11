import rule from './computed-property-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ComputedPropertySpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ComputedPropertySpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ComputedPropertySpacing][0]).toBe(Severity.error);
	});
});
