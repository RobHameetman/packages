import { faker } from '@faker-js/faker';
import { isSymbol } from './isSymbol';

describe('isSymbol()', () => {
	it('should return true given a symbol of a non-empty string', () => {
		expect(isSymbol(Symbol(faker.string.sample()))).toBe(true);
	});

	it('should return true given a symbol of an empty string', () => {
		expect(isSymbol(Symbol(''))).toBe(true);
	});

	it('should return true given an empty symbol', () => {
		expect(isSymbol(Symbol())).toBe(true);
	});

	it('should return false given a non-empty string', () => {
		expect(isSymbol(faker.string.sample())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isSymbol('')).toBe(false);
	});
});
