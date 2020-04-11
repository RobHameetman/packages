import rule from './no-return-assign';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoReturnAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoReturnAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoReturnAssign][0]).toBe(Severity.error);
	});
});
