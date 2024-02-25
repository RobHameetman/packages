/**
 * @jest-environment jsdom
 */
import { isBrowser } from './isBrowser';

describe('isBrowser()', () => {
	it('should return true when the window object is defined', () => {
		expect(window).toBeDefined();
		expect(isBrowser()).toBe(true);
	});
});
