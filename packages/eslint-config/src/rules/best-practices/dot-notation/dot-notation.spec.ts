import rule from './dot-notation';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.DotNotation, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.DotNotation in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.DotNotation][0]).toBe(Severity.error);
	});
});
