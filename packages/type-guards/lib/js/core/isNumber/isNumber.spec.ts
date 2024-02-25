import { isNumber } from './isNumber';

describe('isNumber()', () => {
	it('should return true given a positive decimal number', () => {
		expect(isNumber(10)).toBe(true);
	});

	it('should return true given a negative decimal number', () => {
		expect(isNumber(-10)).toBe(true);
	});

	it('should return true given the decimal number zero', () => {
		expect(isNumber(0)).toBe(true);
	});

	it('should return true given the negatively signed decimal number zero', () => {
		expect(isNumber(0)).toBe(true);
	});

	it('should return true given a positive binary number', () => {
		expect(isNumber(0b1010)).toBe(true);
	});

	it('should return true given a negative binary number', () => {
		expect(isNumber(-0B1010)).toBe(true);
	});

	it('should return true given the binary number zero', () => {
		expect(isNumber(0b0)).toBe(true);
	});

	it('should return true given the negatively signed binary number zero', () => {
		expect(isNumber(-0b0)).toBe(true);
	});

	it('should return true given a positive octal number', () => {
		expect(isNumber(0o12)).toBe(true);
	});

	it('should return true given a negative octal number', () => {
		expect(isNumber(-0O12)).toBe(true);
	});

	it('should return true given the octal number zero', () => {
		expect(isNumber(0o0)).toBe(true);
	});

	it('should return true given the negatively signed octal number zero', () => {
		expect(isNumber(-0o0)).toBe(true);
	});

	it('should return true given a positive hexadecimal number', () => {
		expect(isNumber(0xa)).toBe(true);
	});

	it('should return true given a negatively signed positive hexadecimal number', () => {
		expect(isNumber(-0xa)).toBe(true);
	});

	it('should return true given a negative hexadecimal number', () => {
		expect(isNumber(-0XA)).toBe(true);
	});

	it('should return true given a the hexadecimal number zero', () => {
		expect(isNumber(0x0)).toBe(true);
	});

	it('should return true given the negatively signed hexadecimal number zero', () => {
		expect(isNumber(-0x0)).toBe(true);
	});

	it('should return false given a positive decimal bigint literal', () => {
		expect(isNumber(10n)).toBe(false);
	});

	it('should return false given a negative decimal bigint literal', () => {
		expect(isNumber(-10n)).toBe(false);
	});

	it('should return false given a zero decimal bigint literal', () => {
		expect(isNumber(0n)).toBe(false);
	});

	it('should return false given a negatively signed zero decimal bigint literal', () => {
		expect(isNumber(-0n)).toBe(false);
	});

	it('should return false given a positive binary bigint literal', () => {
		expect(isNumber(0b1010n)).toBe(false);
	});

	it('should return false given a negative binary bigint literal', () => {
		expect(isNumber(-0B1010n)).toBe(false);
	});

	it('should return false given a zero binary bigint literal', () => {
		expect(isNumber(0b0n)).toBe(false);
	});

	it('should return false given a negatively signed zero binary bigint literal', () => {
		expect(isNumber(-0b0n)).toBe(false);
	});

	it('should return false given a positive octal bigint literal', () => {
		expect(isNumber(0o12n)).toBe(false);
	});

	it('should return false given a negative octal bigint literal', () => {
		expect(isNumber(-0O12n)).toBe(false);
	});

	it('should return false given a zero octal bigint literal', () => {
		expect(isNumber(0o0n)).toBe(false);
	});

	it('should return false given a negatively signed zero octal bigint literal', () => {
		expect(isNumber(-0o0n)).toBe(false);
	});

	it('should return false given a positive hexadecimal bigint literal', () => {
		expect(isNumber(0xan)).toBe(false);
	});

	it('should return false given a negative hexadecimal bigint literal', () => {
		expect(isNumber(-0XAn)).toBe(false);
	});

	it('should return false given a zero hexadecimal bigint literal', () => {
		expect(isNumber(0x0n)).toBe(false);
	});

	it('should return false given a negatively signed zero hexadecimal bigint literal', () => {
		expect(isNumber(-0x0n)).toBe(false);
	});
});
