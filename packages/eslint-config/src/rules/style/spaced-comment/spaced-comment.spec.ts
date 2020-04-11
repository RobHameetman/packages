import rule from './spaced-comment';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SpacedComment, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SpacedComment in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SpacedComment][0]).toBe(Severity.error);
	});
});
