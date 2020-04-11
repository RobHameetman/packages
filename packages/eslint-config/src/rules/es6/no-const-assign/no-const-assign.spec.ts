import rule from './no-const-assign';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoConstAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoConstAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoConstAssign][0]).toBe(Severity.error);
	});
});
