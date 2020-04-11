import rule from './no-alert';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoAlert, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoAlert in rule).toBe(true);
	});

	it('should be discouraged', (): void => {
		expect(rule[Rules.NoAlert][0]).toBe(Severity.warn);
	});
});
