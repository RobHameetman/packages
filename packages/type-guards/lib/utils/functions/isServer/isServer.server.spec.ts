/**
 * @jest-environment node
 */
import { isServer } from './isServer';

describe('isServer()', () => {
	it('should return true when the window object is undefined', () => {
		expect(typeof window).toBe('undefined');
		expect(isServer()).toBe(true);
	});
});
