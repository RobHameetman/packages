import rule from './no-extended-native';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtendedNative, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtendedNative in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoExtendedNative][0]).toBe(Severity.error);
	});
});
