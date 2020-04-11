import rule from './no-proto';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoProto, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoProto in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoProto][0]).toBe(Severity.error);
	});
});
