import rule from './no-void';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoVoid, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoVoid in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoVoid][0]).toBe(Severity.error);
	});
});
