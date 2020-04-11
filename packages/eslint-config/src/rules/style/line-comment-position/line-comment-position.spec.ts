import rule from './line-comment-position';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.LineCommentPosition, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.LineCommentPosition in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.LineCommentPosition][0]).toBe(Severity.error);
	});
});
