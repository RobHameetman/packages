import rule from './prefer-arrow-callback';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferArrowCallback, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferArrowCallback in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferArrowCallback][0]).toBe(Severity.error);
	});
});
