import rule from './no-import-assign';
import { EsLintErrorRules as Rules, Severity } from '../../../enums';

describe(Rules.NoImportAssign, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoImportAssign in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoImportAssign][0]).toBe(Severity.error);
	});
});
