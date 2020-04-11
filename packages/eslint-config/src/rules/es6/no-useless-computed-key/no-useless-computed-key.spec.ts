import rule from './no-useless-computed-key';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessComputedKey, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessComputedKey in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessComputedKey][0]).toBe(Severity.error);
	});
});
