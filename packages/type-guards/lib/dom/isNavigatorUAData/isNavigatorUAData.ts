import { areNavigatorUABrandVersions } from '@/dom/areNavigatorUABrandVersions';
import { isBoolean } from '@/js/core/isBoolean';
import { isObject } from '@/js/core/isObject';
import { isString } from '@/js/core/isString';
import { isUndefined } from '@/js/core/isUndefined';
import { isBrowser } from '@/utils/functions/isBrowser';

type MaybeNavigatorUAData = NavigatorUAData | Record<string, unknown>;

/**
 * Checks that an `unknown` value is a {@link NavigatorUAData}.
 *
 * Requirements:
 *   - `value` must be an instance of `NavigatorUAData` if supported or an object.
 *   - `value.brands` is required and must be an array of valid `NavigatorUABrandVersions`.
 *   - `value.mobile` is required and must be a boolean.
 *   - `value.platform` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link NavigatorUAData}.
 */
export const isNavigatorUAData = (value: unknown): value is NavigatorUAData =>
	/**
	 * value
	 */
	(isBrowser() &&
	'NavigatorUAData' in window &&
	!isUndefined(window.NavigatorUAData)
		? value instanceof NavigatorUAData
		: isObject(value)) &&
		/**
		 * value.brands
		 */
		'brands' in (value as MaybeNavigatorUAData) &&
		areNavigatorUABrandVersions((value as MaybeNavigatorUAData).brands) &&
		/**
		 * value.mobile
		 */
		'mobile' in (value as MaybeNavigatorUAData) &&
		isBoolean((value as MaybeNavigatorUAData).mobile) &&
		/**
		 * value.platform
		 */
		'platform' in (value as MaybeNavigatorUAData) &&
		isString((value as MaybeNavigatorUAData).platform);
