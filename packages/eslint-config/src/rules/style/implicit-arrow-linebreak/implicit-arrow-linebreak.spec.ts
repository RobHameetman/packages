import rule from './implicit-arrow-linebreak';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ImplicitArrowLinebreak, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ImplicitArrowLinebreak in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ImplicitArrowLinebreak][0]).toBe(Severity.error);
	});
});
