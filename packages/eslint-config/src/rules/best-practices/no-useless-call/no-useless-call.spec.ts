import rule from './no-useless-call';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessCall, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessCall in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoUselessCall][0]).toBe(Severity.off);
	});
});
