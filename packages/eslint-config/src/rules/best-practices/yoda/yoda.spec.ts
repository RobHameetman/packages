import rule from './yoda';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.Yoda, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Yoda in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Yoda][0]).toBe(Severity.error);
	});
});
