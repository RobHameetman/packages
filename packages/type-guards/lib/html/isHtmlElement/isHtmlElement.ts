import { isElement } from '@/dom/isElement';
import { isString } from '@/js/core/isString';
import { isBrowser } from '@/utils/functions/isBrowser';

/**
 * Checks that an `unknown` value is an {@link HTMLElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link HTMLElement}.
 *   - `value.title` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HTMLElement}.
 */
export const isHtmlElement = (value: unknown): value is HTMLElement =>
	/**
	 * value
	 */
	(isElement(value) && (isBrowser() ? value instanceof HTMLElement : true)) &&
	/**
	 * value.title
	 */
	'title' in value &&
	isString(value.title);

export default isHtmlElement;
