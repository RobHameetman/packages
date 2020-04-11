import rule from './key-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.KeySpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.KeySpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.KeySpacing][0]).toBe(Severity.error);
	});
});
