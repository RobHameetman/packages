import rule from './no-caller';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoCaller, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoCaller in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoCaller][0]).toBe(Severity.error);
	});
});
