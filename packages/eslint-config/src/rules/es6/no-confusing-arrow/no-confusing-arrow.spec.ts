import rule from './no-confusing-arrow';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoConfusingArrow, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoConfusingArrow in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoConfusingArrow][0]).toBe(Severity.error);
	});
});
