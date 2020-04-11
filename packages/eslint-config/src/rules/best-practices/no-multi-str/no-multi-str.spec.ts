import rule from './no-multi-str';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMultiStr, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMultiStr in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMultiStr][0]).toBe(Severity.error);
	});
});
