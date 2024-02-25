/**
 * @jest-environment jsdom
 */
import { isEventTarget } from './isEventTarget';
import { fakeEventTarget } from './__test__';

describe('isEventTarget()', () => {
	it('should return true given a valid EventTarget', () => {
		expect(isEventTarget(fakeEventTarget())).toBe(true);
	});

	it('should return false given an invalid EventTarget', () => {
		expect(isEventTarget(fakeEventTarget({ dispatchEvent: null }))).toBe(false);
	});
});
