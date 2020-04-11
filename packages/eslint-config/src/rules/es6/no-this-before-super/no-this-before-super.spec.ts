import rule from './no-this-before-super';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoThisBeforeSuper, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoThisBeforeSuper in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoThisBeforeSuper][0]).toBe(Severity.error);
	});
});
