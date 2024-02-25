import { isElement } from '@/dom/isElement';
import { isString } from '@/js/core/isString';
import { DomNodeNamespaces } from '@/utils/enums/DomNodeNamespaces';
import { isBrowser } from '@/utils/functions/isBrowser';

/**
 * Checks that an `unknown` value is an {@link SVGElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link SVGElement}.
 *   - `value.namespaceURI` is required and must be {@link DomNodeNamespaces.SVG}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link SVGElement}.
 */
export const isSvgElement = (value: unknown): value is SVGElement =>
	/**
	 * value
	 */
	(isElement(value) && (isBrowser() ? value instanceof SVGElement : true)) &&
	/**
	 * value.namespaceURI
	 */
	'namespaceURI' in value &&
	value.namespaceURI === DomNodeNamespaces.SVG;
