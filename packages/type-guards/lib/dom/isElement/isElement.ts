import { isNode } from '@/dom/isNode';
import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { isBrowser } from '@/utils/functions/isBrowser';

/**
 * Checks that an `unknown` value is an {@link Element}.
 *
 * Requirements:
 *   - `value` must be a valid {@link Node} and must be an instance of {@link Element} if running in the browser.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Element}.
 */
export const isElement = (value: unknown): value is Element =>
	/**
	 * value
	 */
	isNode(value, DomNodeTypes.ELEMENT_NODE) &&
	(isBrowser() ? value instanceof Element : true);
