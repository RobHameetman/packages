import rule from './no-multi-assign';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMultiAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMultiAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMultiAssign][0]).toBe(Severity.error);
	});
});
