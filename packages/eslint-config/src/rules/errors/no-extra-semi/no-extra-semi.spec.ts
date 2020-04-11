import rule from './no-extra-semi';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtraSemi, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtraSemi in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoExtraSemi][0]).toBe(Severity.error);
	});
});
