import { faker } from '@faker-js/faker';
import { isNumberGreaterThanOne } from './isNumberGreaterThanOne';

describe('isNumberGreaterThanOne()', () => {
	it('should return true given a positive integer greater than 1', () => {
		expect(isNumberGreaterThanOne(faker.number.int({ min: 2, max: 10 }))).toBe(
			true,
		);
	});

	it('should return false given the number one', () => {
		expect(isNumberGreaterThanOne(1)).toBe(false);
	});

	it('should return false given the number zero', () => {
		expect(isNumberGreaterThanOne(0)).toBe(false);
	});

	it('should return false given a negative integer', () => {
		expect(
			isNumberGreaterThanOne(faker.number.int({ min: -10, max: -1 })),
		).toBe(false);
	});
});
