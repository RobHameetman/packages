import { isNonEmptyString } from '@/js/specialized/isNonEmptyString';

/**
 * Checks that an `unknown` value is a non-empty {@link string} that is alphanumeric.
 *
 * Requirements:
 *   - `value` be a string with a length greater than zero and must only contain A-Z (case-insensitive) and 0-9.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a non-empty {@link string} that is alphanumeric.
 */
export const isAlphaNumericString = (value: unknown): value is string =>
	/**
	 * value
	 */
	isNonEmptyString(value) && /^[a-zA-Z0-9]*$/i.test(value);

export default isAlphaNumericString;
