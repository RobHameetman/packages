import rule from './no-control-regex';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoControlRegex, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoControlRegex in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoControlRegex][0]).toBe(Severity.error);
	});
});
