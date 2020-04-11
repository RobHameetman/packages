import rule from './no-template-curly-in-string';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoTemplateCurlyInString, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoTemplateCurlyInString in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoTemplateCurlyInString][0]).toBe(Severity.off);
	});
});
