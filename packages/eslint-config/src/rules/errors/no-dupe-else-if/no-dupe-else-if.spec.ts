import rule from './no-dupe-else-if';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDupeElseIf, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDupeElseIf in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoDupeElseIf][0]).toBe(Severity.off);
	});
});
