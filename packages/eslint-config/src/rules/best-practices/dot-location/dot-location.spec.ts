import rule from './dot-location';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.DotLocation, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.DotLocation in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.DotLocation][0]).toBe(Severity.error);
	});
});
