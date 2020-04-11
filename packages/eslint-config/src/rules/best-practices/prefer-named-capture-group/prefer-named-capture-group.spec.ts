import rule from './prefer-named-capture-group';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.PreferNamedCaptureGroup, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PreferNamedCaptureGroup in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.PreferNamedCaptureGroup][0]).toBe(Severity.off);
	});
});
