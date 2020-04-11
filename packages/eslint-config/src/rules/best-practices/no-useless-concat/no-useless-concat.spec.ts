import rule from './no-useless-concat';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessConcat, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessConcat in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessConcat][0]).toBe(Severity.error);
	});
});
