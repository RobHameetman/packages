import { faker } from '@faker-js/faker';
import { isAlphaNumericString } from './isAlphaNumericString';

describe('isAlphaNumericString()', () => {
	it('should return true given a non-empty alphanumeric string', () => {
		expect(isAlphaNumericString(faker.string.alphanumeric())).toBe(true);
	});

	it('should return true given a non-empty numeric string', () => {
		expect(isAlphaNumericString(faker.string.numeric())).toBe(true);
	});

	it('should return true given a non-empty alphabetic string', () => {
		expect(isAlphaNumericString(faker.string.alpha())).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isAlphaNumericString('')).toBe(false);
	});
});
