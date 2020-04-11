import rule from './no-lone-blocks';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.NoLoneBlocks, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoLoneBlocks in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoLoneBlocks][0]).toBe(Severity.error);
	});
});
