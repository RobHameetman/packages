import rule from './template-tag-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.TemplateTagSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.TemplateTagSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.TemplateTagSpacing][0]).toBe(Severity.error);
	});
});
