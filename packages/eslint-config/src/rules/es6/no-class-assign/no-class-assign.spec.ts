import rule from './no-class-assign';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoClassAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoClassAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoClassAssign][0]).toBe(Severity.error);
	});
});
