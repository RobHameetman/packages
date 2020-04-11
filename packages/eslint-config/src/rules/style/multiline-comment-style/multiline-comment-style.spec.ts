import rule from './multiline-comment-style';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MultilineCommentStyle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MultilineCommentStyle in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.MultilineCommentStyle][0]).toBe(Severity.error);
	});
});
