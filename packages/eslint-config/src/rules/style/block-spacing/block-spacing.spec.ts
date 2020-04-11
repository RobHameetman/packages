import rule from './block-spacing';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.BlockSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.BlockSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.BlockSpacing][0]).toBe(Severity.error);
	});
});
