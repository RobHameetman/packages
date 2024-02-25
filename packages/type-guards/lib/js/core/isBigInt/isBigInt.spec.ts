import { isBigInt } from './isBigInt';

describe('isBigInt()', () => {
	it('should return true given a positive decimal bigint literal', () => {
		expect(isBigInt(10n)).toBe(true);
	});

	it('should return true given a negative decimal bigint literal', () => {
		expect(isBigInt(-10n)).toBe(true);
	});

	it('should return true given a zero decimal bigint literal', () => {
		expect(isBigInt(0n)).toBe(true);
	});

	it('should return true given a negatively signed zero decimal bigint literal', () => {
		expect(isBigInt(-0n)).toBe(true);
	});

	it('should return true given a positive binary bigint literal', () => {
		expect(isBigInt(0b1010n)).toBe(true);
	});

	it('should return true given a negative binary bigint literal', () => {
		expect(isBigInt(-0B1010n)).toBe(true);
	});

	it('should return true given a zero binary bigint literal', () => {
		expect(isBigInt(0b0n)).toBe(true);
	});

	it('should return true given a negatively signed zero binary bigint literal', () => {
		expect(isBigInt(-0b0n)).toBe(true);
	});

	it('should return true given a positive octal bigint literal', () => {
		expect(isBigInt(0o12n)).toBe(true);
	});

	it('should return true given a negative octal bigint literal', () => {
		expect(isBigInt(-0O12n)).toBe(true);
	});

	it('should return true given a zero octal bigint literal', () => {
		expect(isBigInt(0o0n)).toBe(true);
	});

	it('should return true given a negatively signed zero octal bigint literal', () => {
		expect(isBigInt(-0o0n)).toBe(true);
	});

	it('should return true given a positive hexadecimal bigint literal', () => {
		expect(isBigInt(0xan)).toBe(true);
	});

	it('should return true given a negative hexadecimal bigint literal', () => {
		expect(isBigInt(-0XAn)).toBe(true);
	});

	it('should return true given a zero hexadecimal bigint literal', () => {
		expect(isBigInt(0x0n)).toBe(true);
	});

	it('should return true given a negatively signed zero hexadecimal bigint literal', () => {
		expect(isBigInt(-0x0n)).toBe(true);
	});

	it('should return false given a positive decimal number', () => {
		expect(isBigInt(10)).toBe(false);
	});

	it('should return false given a negative decimal number', () => {
		expect(isBigInt(-10)).toBe(false);
	});

	it('should return false given the decimal number zero', () => {
		expect(isBigInt(0)).toBe(false);
	});

	it('should return false given the negatively signed decimal number zero', () => {
		expect(isBigInt(0)).toBe(false);
	});

	it('should return false given a positive binary number', () => {
		expect(isBigInt(0b1010)).toBe(false);
	});

	it('should return false given a negative binary number', () => {
		expect(isBigInt(-0B1010)).toBe(false);
	});

	it('should return false given the binary number zero', () => {
		expect(isBigInt(0b0)).toBe(false);
	});

	it('should return false given the negatively signed binary number zero', () => {
		expect(isBigInt(-0b0)).toBe(false);
	});

	it('should return false given a positive octal number', () => {
		expect(isBigInt(0o12)).toBe(false);
	});

	it('should return false given a negative octal number', () => {
		expect(isBigInt(-0O12)).toBe(false);
	});

	it('should return false given the octal number zero', () => {
		expect(isBigInt(0o0)).toBe(false);
	});

	it('should return false given the negatively signed octal number zero', () => {
		expect(isBigInt(-0o0)).toBe(false);
	});

	it('should return false given a positive hexadecimal number', () => {
		expect(isBigInt(0xa)).toBe(false);
	});

	it('should return false given a negatively signed positive hexadecimal number', () => {
		expect(isBigInt(-0xa)).toBe(false);
	});

	it('should return false given a negative hexadecimal number', () => {
		expect(isBigInt(-0XA)).toBe(false);
	});

	it('should return false given a the hexadecimal number zero', () => {
		expect(isBigInt(0x0)).toBe(false);
	});

	it('should return false given the negatively signed hexadecimal number zero', () => {
		expect(isBigInt(-0x0)).toBe(false);
	});
});
