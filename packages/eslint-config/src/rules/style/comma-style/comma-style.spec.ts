import rule from './comma-style';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.CommaStyle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.CommaStyle in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.CommaStyle][0]).toBe(Severity.error);
	});
});
