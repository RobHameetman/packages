import rule from './unicode-bom';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.UnicodeBom, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.UnicodeBom in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.UnicodeBom][0]).toBe(Severity.error);
	});
});
