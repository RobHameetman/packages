import rule from './max-nested-callbacks';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxNestedCallbacks, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxNestedCallbacks in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.MaxNestedCallbacks][0]).toBe(Severity.off);
	});
});
