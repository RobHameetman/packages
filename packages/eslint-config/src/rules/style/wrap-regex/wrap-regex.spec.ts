import rule from './wrap-regex';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.WrapRegex, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.WrapRegex in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.WrapRegex][0]).toBe(Severity.off);
	});
});
