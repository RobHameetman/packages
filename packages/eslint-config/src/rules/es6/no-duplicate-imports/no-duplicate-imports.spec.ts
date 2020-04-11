import rule from './no-duplicate-imports';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoDuplicateImports, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoDuplicateImports in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoDuplicateImports][0]).toBe(Severity.error);
	});
});
