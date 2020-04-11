import rule from './no-new';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNew, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNew in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoNew][0]).toBe(Severity.error);
	});
});
