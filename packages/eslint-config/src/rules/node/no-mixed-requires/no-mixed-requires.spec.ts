import rule from './no-mixed-requires';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMixedRequires, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMixedRequires in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoMixedRequires][0]).toBe(Severity.off);
	});
});
