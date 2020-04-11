import rule from './symbol-description';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.SymbolDescription, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.SymbolDescription in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.SymbolDescription][0]).toBe(Severity.error);
	});
});
