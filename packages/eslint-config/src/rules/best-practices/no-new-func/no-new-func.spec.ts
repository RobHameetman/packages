import rule from './no-new-func';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNewFunc, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNewFunc in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoNewFunc][0]).toBe(Severity.error);
	});
});
