/**
 * @jest-environment node
 */
import { isBrowser } from './isBrowser';

describe('isBrowser()', () => {
	it('should return false when the window object is undefined', () => {
		expect(typeof window).toBe('undefined');
		expect(isBrowser()).toBe(false);
	});
});
