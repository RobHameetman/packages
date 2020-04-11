import rule from './no-unreachable';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnreachable, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnreachable in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUnreachable][0]).toBe(Severity.error);
	});
});
