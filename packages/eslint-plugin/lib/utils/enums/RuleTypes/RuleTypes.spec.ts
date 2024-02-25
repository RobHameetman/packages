import { isRuleType } from './RuleTypes';

describe('isRuleType()', () => {
	describe("given the string value 'problem'", () => {
		it('should return true', () => {
			expect(isRuleType('problem')).toBe(true);
		});
	});

	describe("given the string value 'suggestion'", () => {
		it('should return true', () => {
			expect(isRuleType('suggestion')).toBe(true);
		});
	});

	describe("given the string value 'layout'", () => {
		it('should return true', () => {
			expect(isRuleType('layout')).toBe(true);
		});
	});

	describe('given an empty string', () => {
		it('should return false', () => {
			expect(isRuleType('')).toBe(false);
		});
	});
});
