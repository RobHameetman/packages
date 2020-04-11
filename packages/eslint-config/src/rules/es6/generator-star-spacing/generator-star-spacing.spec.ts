import rule from './generator-star-spacing';
import { EsLintEs6Rules as Rules, Severity } from '../../../enums';

describe(Rules.GeneratorStarSpacing, (): void => {
	it('should have the correct rule', (): void => {
		expect(Object.keys(rule).length).toBe(1);
		expect(Rules.GeneratorStarSpacing in rule).toBe(true);
	});

	it('should be required', (): void => {
		expect(rule[Rules.GeneratorStarSpacing][0]).toBe(Severity.error);
	});
});
