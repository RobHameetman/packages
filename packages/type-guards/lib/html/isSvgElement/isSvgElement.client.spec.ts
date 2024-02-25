/**
 * @jest-environment jsdom
 */
import { fakeNode } from '@/dom/isNode/__test__/fakeNode';
import { fakeHtmlElement } from '@/html/isHtmlElement/__test__/fakeHtmlElement';
import { isSvgElement } from './isSvgElement';
import { fakeSvgElement } from './__test__';

describe('isSvgElement()', () => {
	it('should return true given an SVG element', () => {
		expect(isSvgElement(fakeSvgElement())).toBe(true);
	});

	it('should return false given an HTML Element', () => {
		expect(isSvgElement(fakeHtmlElement())).toBe(false);
	});

	it('should return false given a Node that is not an ELEMENT_NODE', () => {
		expect(isSvgElement(fakeNode({ type: 'ATTRIBUTE_NODE' }))).toBe(false);
	});
});
