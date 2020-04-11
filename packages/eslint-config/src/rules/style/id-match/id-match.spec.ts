import rule from './id-match';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.IdMatch, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.IdMatch in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.IdMatch][0]).toBe(Severity.off);
	});
});
