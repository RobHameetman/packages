import rule from './no-fallthrough';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoFallthrough, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoFallthrough in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoFallthrough][0]).toBe(Severity.error);
	});
});
