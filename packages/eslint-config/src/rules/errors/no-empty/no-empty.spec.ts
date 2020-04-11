import rule from './no-empty';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoEmpty, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoEmpty in rule).toBe(true);
	});

	it('should be discouraged', (): void => {
		expect(rule[Rules.NoEmpty][0]).toBe(Severity.warn);
	});
});
