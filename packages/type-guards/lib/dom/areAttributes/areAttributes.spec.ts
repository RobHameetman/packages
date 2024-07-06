import { areAttributes } from './areAttributes';
import { fakeAttributes } from './__test__';

describe('areAttributes()', () => {
	it('should return true given valid Attributes', () => {
		expect(areAttributes(fakeAttributes())).toBe(true);
	});

	it('should return false given invalid Attributes', () => {
		expect(areAttributes(fakeAttributes({ type: 'drag' }))).toBe(false);
	});
});
