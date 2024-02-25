import { isFunction } from '@/js/core/isFunction';
import { isObject } from '@/js/core/isObject';
import { isBrowser } from '@/utils/functions/isBrowser';

type MaybeEventTarget = EventTarget | Record<string, unknown>;

/**
 * Checks that an `unknown` value is an {@link EventTarget} node.
 *
 * Requirements:
 *   - `value` must be an instance of `EventTarget` if `window` is defined or an object if `window` is `undefined`.
 *   - `value.addEventListener()` must be a function if `window` is `undefined`.
 *   - `value.dispatchEvent()` must be a function if `window` is `undefined`.
 *   - `value.removeEventListener()` must be a function if `window` is `undefined`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link EventTarget} node.
 */
export const isEventTarget = (value: unknown): value is EventTarget =>
	/**
	 * value
	 */
	(isBrowser()
		? value instanceof EventTarget
		: isObject(value)) &&
		/**
		 * value.addEventListener()
		 */
		'addEventListener' in (value as MaybeEventTarget) &&
		isFunction((value as MaybeEventTarget).addEventListener) &&
		/**
		 * value.dispatchEvent()
		 */
		'dispatchEvent' in (value as MaybeEventTarget) &&
		isFunction((value as MaybeEventTarget).dispatchEvent) &&
		/**
		 * value.removeEventListener()
		 */
		'removeEventListener' in (value as MaybeEventTarget) &&
		isFunction((value as MaybeEventTarget).removeEventListener);
