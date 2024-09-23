import { faker } from '@faker-js/faker';
import { isAlphabeticString } from './isAlphabeticString';

describe('isAlphabeticString()', () => {
	it('should return true given a non-empty alphabetic string', () => {
		expect(isAlphabeticString(faker.string.alpha())).toBe(true);
	});

	it('should return false given a non-empty alphanumeric string', () => {
		expect(isAlphabeticString(faker.string.alphanumeric({ length: faker.number.int({ min: 10, max: 100 }) }))).toBe(false);
	});

	it('should return false given a non-empty numeric string', () => {
		expect(isAlphabeticString(faker.string.numeric())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isAlphabeticString('')).toBe(false);
	});
});
