import rule from './no-lonely-if';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoLonelyIf, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoLonelyIf in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoLonelyIf][0]).toBe(Severity.error);
	});
});
