import rule from './no-dupe-class-members';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.NopDupeClassMembers, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.NopDupeClassMembers in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.NopDupeClassMembers][0]).toBe(Severity.error);
	});
});
