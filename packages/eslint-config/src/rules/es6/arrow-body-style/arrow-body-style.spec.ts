import rule from './arrow-body-style';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.ArrowBodyStyle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ArrowBodyStyle in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ArrowBodyStyle][0]).toBe(Severity.error);
	});
});
