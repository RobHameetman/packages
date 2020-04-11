import rule from './space-before-blocks';
import { EsLintStyleRules as Rules, Severity } from '../../../enums';

describe(Rules.SpaceBeforeBlocks, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SpaceBeforeBlocks in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SpaceBeforeBlocks][0]).toBe(Severity.error);
	});
});
