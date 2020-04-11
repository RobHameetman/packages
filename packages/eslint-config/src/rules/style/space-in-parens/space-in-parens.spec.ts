import rule from './space-in-parens';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SpaceInParens, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SpaceInParens in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SpaceInParens][0]).toBe(Severity.error);
	});
});
