import rule from './custom-rule-example';
import { isCategory } from '../../utils';

describe('custom-rule-example', () => {
	it('should be a valid ESLint rule module', () => {
		expect(typeof rule).toBe('object');
		expect(rule).not.toBe(null);
		expect(rule instanceof Array).toBe(false);
		expect('create' in rule).toBe(true);
		expect(typeof rule.create).toBe('function');
	});

	it('should have a valid category', () => {
		expect(rule.meta?.docs?.category).toBeDefined();
		expect(isCategory(rule.meta?.docs?.category)).toBe(true);
	});
});
