import { isFormenctypeAttrValue } from './FormenctypeAttrValues';

describe('isFormenctypeAttrValue()', () => {
	it('should return true given the string value "multipart/form-data"', () => {
		expect(isFormenctypeAttrValue('multipart/form-data')).toBe(true);
	});

	it('should return true given the string value "text/plain"', () => {
		expect(isFormenctypeAttrValue('text/plain')).toBe(true);
	});

	it('should return true given the string value "application/x-www-form-urlencoded"', () => {
		expect(isFormenctypeAttrValue('application/x-www-form-urlencoded')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isFormenctypeAttrValue('')).toBe(false);
	});
});
