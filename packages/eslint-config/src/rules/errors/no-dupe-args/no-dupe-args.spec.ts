import rule from './no-dupe-args';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDupeArgs, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDupeArgs in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoDupeArgs][0]).toBe(Severity.error);
	});
});
