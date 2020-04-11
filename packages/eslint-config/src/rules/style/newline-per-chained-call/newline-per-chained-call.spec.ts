import rule from './newline-per-chained-call';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NewlinePerChainedCall, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NewlinePerChainedCall in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NewlinePerChainedCall][0]).toBe(Severity.error);
	});
});
