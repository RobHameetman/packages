import rule from './prefer-template';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.PreferTemplate, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferTemplate in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PreferTemplate][0]).toBe(Severity.error);
	});
});
