import rule from './no-whitespace-before-property';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.NoWhitespaceBeforeProperty, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoWhitespaceBeforeProperty in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoWhitespaceBeforeProperty][0]).toBe(Severity.error);
	});
});
