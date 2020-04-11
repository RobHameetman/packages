import rule from './linebreak-style';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.LinebreakStyle, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.LinebreakStyle in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.LinebreakStyle][0]).toBe(Severity.error);
	});
});
