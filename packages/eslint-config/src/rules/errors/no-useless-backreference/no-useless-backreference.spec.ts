import rule from './no-useless-backreference';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessBackreference, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessBackreference in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoUselessBackreference][0]).toBe(Severity.off);
	});
});
