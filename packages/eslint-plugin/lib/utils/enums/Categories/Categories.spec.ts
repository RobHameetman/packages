import { isCategory } from './Categories';

describe('isCategory()', (): void => {
	describe("given the string value 'Deprecated'", (): void => {
		it('should return true', (): void => {
			expect(isCategory('Deprecated')).toBe(true);
		});
	});

	describe("given the string value 'Layout & Formatting'", (): void => {
		it('should return true', (): void => {
			expect(isCategory('Layout & Formatting')).toBe(true);
		});
	});

	describe("given the string value 'Possible Problems'", (): void => {
		it('should return true', (): void => {
			expect(isCategory('Possible Problems')).toBe(true);
		});
	});

	describe("given the string value 'Removed'", (): void => {
		it('should return true', (): void => {
			expect(isCategory('Removed')).toBe(true);
		});
	});

	describe("given the string value 'Suggestions'", (): void => {
		it('should return true', (): void => {
			expect(isCategory('Suggestions')).toBe(true);
		});
	});

	describe('given an empty string', (): void => {
		it('should return false', (): void => {
			expect(isCategory('')).toBe(false);
		});
	});
});
