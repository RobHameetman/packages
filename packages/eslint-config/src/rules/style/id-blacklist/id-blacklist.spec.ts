import rule from './id-blacklist';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.IdBlacklist, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.IdBlacklist in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.IdBlacklist][0]).toBe(Severity.off);
	});
});
