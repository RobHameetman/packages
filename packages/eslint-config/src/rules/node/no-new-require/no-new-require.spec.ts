import rule from './no-new-require';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoNewRequire, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoNewRequire in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoNewRequire][0]).toBe(Severity.error);
	});
});
