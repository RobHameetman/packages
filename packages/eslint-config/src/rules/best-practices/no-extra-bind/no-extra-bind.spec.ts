import rule from './no-extra-bind';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtraBind, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtraBind in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoExtraBind][0]).toBe(Severity.error);
	});
});
