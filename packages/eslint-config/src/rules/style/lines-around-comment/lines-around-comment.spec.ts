import rule from './lines-around-comment';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.LinesAroundComment, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.LinesAroundComment in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.LinesAroundComment][0]).toBe(Severity.off);
	});
});
