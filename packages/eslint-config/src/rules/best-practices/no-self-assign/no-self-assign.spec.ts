import rule from './no-self-assign';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoSelfAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoSelfAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoSelfAssign][0]).toBe(Severity.error);
	});
});
