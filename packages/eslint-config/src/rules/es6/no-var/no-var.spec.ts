import rule from './no-var';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoVar, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoVar in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoVar][0]).toBe(Severity.error);
	});
});
