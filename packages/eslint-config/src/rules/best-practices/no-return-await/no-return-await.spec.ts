import rule from './no-return-await';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoReturnAwait, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoReturnAwait in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoReturnAwait][0]).toBe(Severity.error);
	});
});
