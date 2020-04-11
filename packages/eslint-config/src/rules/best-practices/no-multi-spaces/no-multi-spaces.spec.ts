import rule from './no-multi-spaces';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoMultiSpaces, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoMultiSpaces in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoMultiSpaces][0]).toBe(Severity.error);
	});
});
