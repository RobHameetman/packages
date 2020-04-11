import rule from './arrow-parens';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.ArrowParens, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ArrowParens in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ArrowParens][0]).toBe(Severity.error);
	});
});
