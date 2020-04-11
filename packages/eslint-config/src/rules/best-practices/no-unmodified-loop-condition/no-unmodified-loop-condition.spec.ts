import rule from './no-unmodified-loop-condition';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoUnmodifiedLoopCondition, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUnmodifiedLoopCondition in rule).toBe(true);
	});

	it('should be turned off', (): void => {
		expect(rule[Rules.NoUnmodifiedLoopCondition][0]).toBe(Severity.off);
	});
});
