import rule from './no-empty-pattern';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoEmptyPattern, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoEmptyPattern in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoEmptyPattern][0]).toBe(Severity.error);
	});
});
