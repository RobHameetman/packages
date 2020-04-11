import rule from './max-classes-per-file';
import { EsLintBestPracticesRules as Rules, Severity } from '../../../enums';

describe(Rules.MaxClassesPerFile, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.MaxClassesPerFile in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.MaxClassesPerFile][0]).toBe(Severity.error);
	});

	it('should limit the number of classes to 1 per file', (): void => {
		expect(rule[Rules.MaxClassesPerFile][1]).toBe(1);
	});
});
