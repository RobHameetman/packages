import { areAttributes } from './Attributes';
import { fakeAttributes } from './__test__';

describe('areAttributes()', () => {
	it('should return true given valid Attributes', () => {
		expect(areAttributes(fakeAttributes())).toBe(true);
	});

	it('should return false given invalid Attributes', () => {
		expect(areAttributes(null)).toBe(false);
	});
});
