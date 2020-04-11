import rule from './switch-colon-spacing';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.SwitchColonSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SwitchColonSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SwitchColonSpacing][0]).toBe(Severity.error);
	});
});
