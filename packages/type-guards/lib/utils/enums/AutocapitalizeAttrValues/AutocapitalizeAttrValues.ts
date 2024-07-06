import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link AutocapitalizeAttrValues} values.
 */
export enum AutocapitalizeAttrValues {
	/**
	 * Automatically capitalize every character.
	 */
	characters = 'characters',

	/**
	 * Do not automatically capitalize any text.
	 */
	none = 'none',

	/**
	 * Do not automatically capitalize any text.
	 */
	off = 'off',

	/**
	 * Automatically capitalize the first character of each sentence.
	 */
	on = 'on',

	/**
	 * Automatically capitalize the first character of each sentence.
	 */
	sentences = 'sentences',

	/**
	 * Automatically capitalize the first character of each word.
	 */
	words = 'words',
}

/**
 * Any one of the above {@link AutocapitalizeAttrValues}.
 */
export type AutocapitalizeAttrValue = keyof typeof AutocapitalizeAttrValues;

/**
 * A list of all {@link AutocapitalizeAttrValue} values.
 */
export const AUTOCAPITALIZE_ATTR_VALUES = Object.freeze(
	Object.values(AutocapitalizeAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is an {@link AutocapitalizeValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link AutocapitalizeAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link AutocapitalizeValue}.
 */
export const isAutocapitalizeAttrValue = (value: unknown): value is AutocapitalizeAttrValue =>
	/**
	 * value
	 */
	isString(value) && (AUTOCAPITALIZE_ATTR_VALUES as ReadonlyArray<string>).includes(value);

export default AutocapitalizeAttrValues;
