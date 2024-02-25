/**
 * @jest-environment jsdom
 */
import { DomNodeNamespaces } from '@/utils/enums/DomNodeNamespaces';
import { fakeNode } from '@/dom/isNode/__test__';
import { fakeHtmlElement } from '@/html/isHtmlElement/__test__';
import { isElement } from './isElement';
import { fakeElement } from './__test__';

describe('isElement()', () => {
	it('should return true given an HTML element', () => {
		expect(isElement(fakeHtmlElement())).toBe(true);
	});

	it('should return true given an SVG Element', () => {
		expect(
			isElement(document.createElementNS(DomNodeNamespaces.SVG, 'svg')),
		).toBe(true);
	});

	it('should return true given a Node that is an ELEMENT_NODE', () => {
		expect(isElement(fakeElement())).toBe(true);
	});

	it('should return false given a Node that is not an ELEMENT_NODE', () => {
		expect(isElement(fakeNode({ nodeType: 2 }))).toBe(false);
	});
});

