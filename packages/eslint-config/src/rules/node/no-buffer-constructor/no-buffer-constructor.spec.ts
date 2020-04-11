import rule from './no-buffer-constructor';
import { EsLintNodeRules as Rules, Severity } from '../../../enums';

describe(Rules.NoBufferConstructor, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoBufferConstructor in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoBufferConstructor][0]).toBe(Severity.error);
	});
});
