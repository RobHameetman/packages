import { isFixability } from './Fixabilities';


describe('isFixability()', () => {
	describe("given the string value 'code'", () => {
		it('should return true', () => {
			expect(isFixability('code')).toBe(true);
		});
	});

	describe("given the string value 'whitespace'", () => {
		it('should return true', () => {
			expect(isFixability('whitespace')).toBe(true);
		});
	});

	describe('given an empty string', () => {
		it('should return false', () => {
			expect(isFixability('')).toBe(false);
		});
	});
});
