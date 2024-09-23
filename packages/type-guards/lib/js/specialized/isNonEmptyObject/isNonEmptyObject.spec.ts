import { isNonEmptyObject } from './isNonEmptyObject';

describe('isNonEmptyObject()', () => {
	it('should return true given a non-emtpy object', () => {
		expect(isNonEmptyObject({ prop1: 'test', })).toBe(true);
	});

	it('should return false given an empty object', () => {
		expect(isNonEmptyObject({})).toBe(false);
	});

	it('should return false given a non-empty empty array', () => {
		expect(isNonEmptyObject(['test'])).toBe(false);
	});

	it('should return false given an empty array', () => {
		expect(isNonEmptyObject([])).toBe(false);
	});

	it('should return false given null', () => {
		expect(isNonEmptyObject(null)).toBe(false);
	});
});
