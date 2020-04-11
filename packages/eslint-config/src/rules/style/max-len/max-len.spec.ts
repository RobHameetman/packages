import rule from './max-len';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxLen, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxLen in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.MaxLen][0]).toBe(Severity.error);
	});

	it('should enforce a maximum line length of 100 characters', (): void => {
		expect(rule[Rules.MaxLen][1]).toBe(100);
	});
});
