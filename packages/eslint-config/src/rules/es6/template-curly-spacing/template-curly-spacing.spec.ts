import rule from './template-curly-spacing';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.TemplateCurlySpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.TemplateCurlySpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.TemplateCurlySpacing][0]).toBe(Severity.error);
	});
});
