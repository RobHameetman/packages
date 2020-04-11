import rule from './semi';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.Semi, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.Semi in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.Semi][0]).toBe(Severity.error);
	});
});
