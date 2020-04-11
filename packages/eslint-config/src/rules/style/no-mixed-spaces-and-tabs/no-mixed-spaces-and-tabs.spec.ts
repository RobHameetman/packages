import rule from './no-mixed-spaces-and-tabs';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMixedSpacesAndTabs, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMixedSpacesAndTabs in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMixedSpacesAndTabs][0]).toBe(Severity.error);
	});
});
