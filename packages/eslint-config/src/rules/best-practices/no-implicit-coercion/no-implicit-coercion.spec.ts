import rule from './no-implicit-coercion';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoImplicitCoercion, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoImplicitCoercion in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoImplicitCoercion][0]).toBe(Severity.error);
	});
});
