import rule from './no-floating-decimal';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoFloatingDecimal, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoFloatingDecimal in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoFloatingDecimal][0]).toBe(Severity.error);
	});
});
