import { faker } from '@faker-js/faker';
import { isNonNumericString } from './isNonNumericString';

describe('isNonNumericString()', () => {
	it('should return true given a non-empty alphabetic string', () => {
		expect(isNonNumericString(faker.string.alpha())).toBe(true);
	});

	it('should return true given a non-empty alphanumeric string', () => {
		expect(isNonNumericString(faker.string.alphanumeric())).toBe(true);
	});

	it('should return false given a non-empty numeric string', () => {
		expect(isNonNumericString(faker.string.numeric())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isNonNumericString('')).toBe(false);
	});
});
