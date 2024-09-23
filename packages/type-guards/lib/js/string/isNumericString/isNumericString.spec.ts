import { faker } from '@faker-js/faker';
import { isNumericString } from './isNumericString';

describe('isNumericString()', () => {
	it('should return true given a non-empty numeric string', () => {
		expect(isNumericString(faker.string.numeric())).toBe(true);
	});

	it('should return false given a non-empty alphabetic string', () => {
		expect(isNumericString(faker.string.alpha())).toBe(false);
	});

	it('should return false given a non-empty alphanumeric string', () => {
		expect(isNumericString(faker.string.alphanumeric())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isNumericString('')).toBe(false);
	});
});
