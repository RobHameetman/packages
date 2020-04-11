import rule from './no-useless-escape';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessEscape, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessEscape in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessEscape][0]).toBe(Severity.error);
	});
});
