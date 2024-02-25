import { isHtmlElement } from '@/html/isHtmlElement';
import { isBrowser } from '@/utils/functions/isBrowser';

/**
 * Checks that an `unknown` value is an {@link HTMLInputElement}.
 *
 * Requirements:
 *   - `value` must be an instance of {@link HTMLInputElement}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link HTMLInputElement}.
 */
export const isInputElement = (value: unknown): value is HTMLInputElement =>
	/**
	 * value
	 */
	(isHtmlElement(value) && (isBrowser() ? value instanceof HTMLInputElement : true)) &&
	/**
	 * value.tagName
	 */
	value.tagName === 'INPUT';
