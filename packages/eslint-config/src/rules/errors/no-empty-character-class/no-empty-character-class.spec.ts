import rule from './no-empty-character-class';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoEmptyCharacterClass, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoEmptyCharacterClass in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoEmptyCharacterClass][0]).toBe(Severity.error);
	});
});
