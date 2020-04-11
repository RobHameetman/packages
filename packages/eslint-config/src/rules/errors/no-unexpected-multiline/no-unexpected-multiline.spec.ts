import rule from './no-unexpected-multiline';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnexpectedMultiline, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnexpectedMultiline in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnexpectedMultiline][0]).toBe(Severity.error);
	});
});
