import rule from './no-iterator';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoIterator, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoIterator in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoIterator][0]).toBe(Severity.error);
	});
});
