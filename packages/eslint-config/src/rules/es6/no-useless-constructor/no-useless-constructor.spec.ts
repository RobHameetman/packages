import rule from './no-useless-constructor';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessConstructor, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessConstructor in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessConstructor][0]).toBe(Severity.error);
	});
});
