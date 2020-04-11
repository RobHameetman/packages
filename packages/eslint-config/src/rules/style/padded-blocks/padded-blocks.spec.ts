import rule from './padded-blocks';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.PaddedBlocks, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.PaddedBlocks in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.PaddedBlocks][0]).toBe(Severity.error);
	});
});
