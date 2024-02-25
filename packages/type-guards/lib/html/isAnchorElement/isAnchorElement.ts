import { isHtmlElement } from '@/html/isHtmlElement';
import { isBrowser } from '@/utils/functions/isBrowser';

/**
 * Checks that an `unknown` value is an {@link HTMLAnchorElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link HTMLAnchorElement}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HTMLAnchorElement}.
 */
export const isAnchorElement = (value: unknown): value is HTMLAnchorElement =>
	/**
	 * value
	 */
	(isHtmlElement(value) &&
	(isBrowser()
		? value instanceof HTMLAnchorElement
		: true)) &&
	/**
	 * value.tagName
	 */
	value.tagName === 'A';
