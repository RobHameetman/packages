/**
 * @jest-environment jsdom
 */
import { isServer } from './isServer';

describe('isServer()', () => {
	it('should return false when the window object is defined', () => {
		expect(window).toBeDefined();
		expect(isServer()).toBe(false);
	});
});
