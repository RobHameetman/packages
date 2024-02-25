import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link FormenctypeAttrValue} values.
 */
export enum FormenctypeAttrValues {
	/**
	 * Uses the `FormData` API to manage the data, allowing for files to be
	 * submitted to the server. You _must_ use this encoding type if your form
	 * includes any `<input>` elements of `type` `file` (`<input type="file">`).
	 */
	formdata = 'multipart/form-data',

	/**
	 * Plain text; mostly useful only for debugging, so you can easily see the
	 * data that's to be submitted.
	 */
	plaintext = 'text/plain',

	/**
	 * This, the default value, sends the form data as a string after URL encoding
	 * the text using an algorithm such as `encodeURI()`.
	 */
	urlencoded = 'application/x-www-form-urlencoded',

	/**
	 * The default value.
	 */
	default = urlencoded,
}

/**
 * Any one of the above {@link FormenctypeAttrValues}.
 */
export type FormenctypeAttrValue = keyof typeof FormenctypeAttrValues;

/**
 * A list of all {@link FormenctypeAttrValue} values.
 */
export const FORMENCTYPE_ATTR_VALUES = Object.freeze(
	Object.values(FormenctypeAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link FormenctypeAttrValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link FormenctypeAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FormenctypeAttrValue}.
 */
export const isFormenctypeAttrValue = (value: unknown): value is FormenctypeAttrValue =>
	/**
	 * value
	 */
	isString(value) && (FORMENCTYPE_ATTR_VALUES as ReadonlyArray<string>).includes(value);
