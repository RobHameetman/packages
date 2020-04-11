import rule from './constructor-super';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.ConstructorSuper, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ConstructorSuper in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ConstructorSuper][0]).toBe(Severity.error);
	});
});
