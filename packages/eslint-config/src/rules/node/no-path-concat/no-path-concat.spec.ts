import rule from './no-path-concat';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoPathConcat, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoPathConcat in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoPathConcat][0]).toBe(Severity.error);
	});
});
