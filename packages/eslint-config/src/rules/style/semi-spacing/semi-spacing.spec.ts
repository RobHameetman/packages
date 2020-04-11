import rule from './semi-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SemiSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SemiSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SemiSpacing][0]).toBe(Severity.error);
	});
});
