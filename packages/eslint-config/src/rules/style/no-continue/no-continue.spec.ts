import rule from './no-continue';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoContinue, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoContinue in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoContinue][0]).toBe(Severity.error);
	});
});
