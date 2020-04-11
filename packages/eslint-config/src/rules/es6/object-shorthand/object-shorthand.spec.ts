import rule from './object-shorthand';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.ObjectShorthand, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.ObjectShorthand in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.ObjectShorthand][0]).toBe(Severity.error);
	});
});
