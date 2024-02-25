import { isNonEmptyObject } from './isNonEmptyObject';

describe('isNonEmptyObject', (): void => {
	describe('given a non-emtpy object', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = {
				prop1: '3i04c3c',
				prop2: 'c3nrcu43fim',
			};
		});

		it('should return true', (): void => {
			expect(isNonEmptyObject(value)).toBe(true);
		});
	});

	describe('given an empty object', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = {};
		});

		it('should return false', (): void => {
			expect(isNonEmptyObject(value)).toBe(false);
		});
	});

	describe('given an array', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = [];
		});

		it('should return false', (): void => {
			expect(isNonEmptyObject(value)).toBe(false);
		});
	});

	describe('given null', (): void => {
		let value: unknown;

		beforeEach((): void => {
			value = null;
		});

		it('should return false', (): void => {
			expect(isNonEmptyObject(value)).toBe(false);
		});
	});
});
