import rule from './function-call-argument-newline';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.FunctionCallArgumentNewline, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.FunctionCallArgumentNewline in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.FunctionCallArgumentNewline][0]).toBe(Severity.error);
	});
});
