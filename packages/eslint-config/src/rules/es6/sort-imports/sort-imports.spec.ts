import rule from './sort-imports';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.SortImport, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SortImport in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SortImport][0]).toBe(Severity.error);
	});
});
