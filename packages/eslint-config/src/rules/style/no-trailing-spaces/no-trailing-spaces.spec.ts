import rule from './no-trailing-spaces';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoTrailingSpaces, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoTrailingSpaces in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoTrailingSpaces][0]).toBe(Severity.error);
	});
});
