import rule from './func-names';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.FuncNames, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.FuncNames in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.FuncNames][0]).toBe(Severity.error);
	});
});
