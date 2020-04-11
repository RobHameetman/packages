import rule from './no-magic-numbers';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMagicNumbers, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMagicNumbers in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoMagicNumbers][0]).toBe(Severity.off);
	});
});
