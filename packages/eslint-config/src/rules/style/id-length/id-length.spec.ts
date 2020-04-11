import rule from './id-length';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.IdLength, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.IdLength in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.IdLength][0]).toBe(Severity.off);
	});
});
