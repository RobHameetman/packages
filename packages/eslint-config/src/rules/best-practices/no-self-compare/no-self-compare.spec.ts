import rule from './no-self-compare';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSelfCompare, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSelfCompare in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoSelfCompare][0]).toBe(Severity.error);
	});
});
