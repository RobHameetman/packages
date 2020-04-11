import rule from './no-div-regex';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoDivRegex, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDivRegex in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoDivRegex][0]).toBe(Severity.off);
	});
});
