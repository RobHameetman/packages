/**
 * @jest-environment jsdom
 */
import { fakeHtmlElement } from '@/html/isHtmlElement/__test__';
import { isAnchorElement } from './isAnchorElement';
import { fakeAnchorElement } from './__test__';

describe('isAnchorElement()', () => {
	it('should return true given an HTML <a /> element', () => {
		expect(isAnchorElement(fakeAnchorElement())).toBe(true);
	});

	it('should return true given an HTML element which is not <a />', () => {
		expect(isAnchorElement(fakeHtmlElement())).toBe(false);
	});
});
