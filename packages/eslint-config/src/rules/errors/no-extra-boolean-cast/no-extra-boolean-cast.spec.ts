import rule from './no-extra-boolean-cast';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoExtraBooleanCast, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoExtraBooleanCast in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoExtraBooleanCast][0]).toBe(Severity.error);
	});
});
