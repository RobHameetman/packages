import { isNull } from '@/js/core/isNull';
import { isUndefined } from '@/js/core/isUndefined';

/**
 * Checks that an `unknown` value is `undefined` or `null`. This type-guard is
 * used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be `undefined` or `null`.
 *
 * @typeParam T - [Optional] The type of data the function takes as arguments. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not `undefined` or `null`.
 */
export const isUndefinedOrNull = <T = unknown>(
	value: unknown,
): value is null | undefined =>
	/**
	 * value
	 */
	isUndefined(value) || isNull(value);
