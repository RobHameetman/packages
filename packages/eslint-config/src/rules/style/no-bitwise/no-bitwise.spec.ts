import rule from './no-bitwise';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoBitwise, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoBitwise in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoBitwise][0]).toBe(Severity.error);
	});
});
