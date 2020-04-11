import rule from './no-useless-rename';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NoUselessRename, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NoUselessRename in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NoUselessRename][0]).toBe(Severity.error);
	});
});
