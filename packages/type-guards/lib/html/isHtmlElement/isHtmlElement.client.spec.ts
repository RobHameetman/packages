/**
 * @jest-environment jsdom
 */
import { fakeNode } from '@/dom/isNode/__test__/fakeNode';
import { fakeSvgElement } from '@/html/isSvgElement/__test__/fakeSvgElement';
import { isHtmlElement } from './isHtmlElement';
import { fakeHtmlElement } from './__test__';

describe('isHTMLElement()', () => {
	it('should return true given an HTML element', () => {
		expect(isHtmlElement(fakeHtmlElement())).toBe(true);
	});

	it('should return false given an SVG Element', () => {
		expect(isHtmlElement(fakeSvgElement())).toBe(false);
	});

	it('should return false given a Node that is not an ELEMENT_NODE', () => {
		expect(isHtmlElement(fakeNode({ type: 'ATTRIBUTE_NODE' }))).toBe(false);
	});
});
