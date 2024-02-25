import { isFormmethodAttrValue } from './FormmethodAttrValues';

describe('isFormmethodAttrValue()', () => {
	it('should return true given the string value "get"', () => {
		expect(isFormmethodAttrValue('get')).toBe(true);
	});

	it('should return true given the string value "post"', () => {
		expect(isFormmethodAttrValue('post')).toBe(true);
	});

	it('should return true given the string value "dialog"', () => {
		expect(isFormmethodAttrValue('dialog')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isFormmethodAttrValue('')).toBe(false);
	});
});
