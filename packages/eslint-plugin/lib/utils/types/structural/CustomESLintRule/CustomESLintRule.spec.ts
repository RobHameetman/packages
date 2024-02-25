import { CustomESLintRule, isCustomESLintRule } from './CustomESLintRule';

describe('isCustomESLintRule()', () => {
	it('should return true given a valid CustomESLintRule', () => {
		expect(isCustomESLintRule(new CustomESLintRule([]))).toBe(true);
	});

	it('should return false given an invalid CustomESLintRule', () => {
		expect(isCustomESLintRule({ ...(new CustomESLintRule([])) })).toBe(false);
	});
});

