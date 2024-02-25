import { isListener } from './Listener';
import { fakeListener } from './__test__';

describe('isListener()', () => {
	it('should return true given a function', () => {
		expect(isListener(fakeListener())).toBe(true);
	});

	it('should return false given null', () => {
		expect(isListener(null)).toBe(false);
	});
});
