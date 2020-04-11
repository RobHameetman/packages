import rule from './object-property-newline';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.ObjectPropertyNewline, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ObjectPropertyNewline in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ObjectPropertyNewline][0]).toBe(Severity.error);
	});
});
