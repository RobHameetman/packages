import { isNumber } from '@functions/misc/isNumber';

/**
 * Checks that an `unknown` value is a {@link number} greater than one. This
 * type-guard is used in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be a number which is greater than one.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link number} greater than one.
 */
export const isNumberGreaterThanOne = (value: unknown): value is number =>
	/**
	 * value
	 */
	isNumber(value) && value > 1;
