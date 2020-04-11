import rule from './no-useless-catch';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessCatch, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessCatch in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessCatch][0]).toBe(Severity.error);
	});
});
