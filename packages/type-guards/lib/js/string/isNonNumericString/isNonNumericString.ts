import { isNonEmptyString } from '@/js/specialized/isNonEmptyString';

/**
 * Checks that an `unknown` value is a non-empty {@link string} that is not a number.
 *
 * Requirements:
 *   - `value` must be a string with a length greater than zero and must be `NaN` when converted to a `number`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a non-empty {@link string} that is not a number.
 */
export const isNonNumericString = (value: unknown): value is string =>
	/**
	 * value
	 */
	isNonEmptyString(value) && isNaN(Number(value));

export default isNonNumericString;
