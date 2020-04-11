import rule from './no-empty-function';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoEmptyFunction, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoEmptyFunction in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoEmptyFunction][0]).toBe(Severity.error);
	});
});
