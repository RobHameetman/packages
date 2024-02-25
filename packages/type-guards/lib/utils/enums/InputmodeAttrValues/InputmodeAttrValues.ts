import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link InputmodeAttrValue} values.
 */
export enum InputmodeAttrValues {
	/**
	 * Fractional numeric input keyboard that contains the digits and decimal
	 * separator for the user's locale (typically `.` or `,`).
	 */
	decimal = 'decimal',

	/**
	 * A virtual keyboard optimized for entering email addresses. Typically
	 * includes the `@` character as well as other optimizations.
	 */
	email = 'email',

	/**
	 * No virtual keyboard. This is used when the page implements its own keyboard
	 * input control.
	 */
	none = 'none',

	/**
	 * Numeric input keyboard that only requires the digits 0–9. Devices may or
	 * may not show a minus key.
	 */
	numeric = 'numeric',

	/**
	 * A virtual keyboard optimized for search input. For instance, the
	 * return/submit key may be labeled "Search".
	 *
	 * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-enterkeyhint-attribute
	 */
	search = 'search',

	/**
	 * A telephone keypad input that includes the digits 0–9, the asterisk (`*`),
	 * and the pound (`#`) key.
	 */
	tel = 'tel',

	/**
	 * Standard input keyboard for the user's current locale.
	 */
	text = 'text',

	/**
	 * A keypad optimized for entering URLs. This may have the `/` key more
	 * prominent, for example.
	 */
	url = 'url',
}

/**
 * Any one of the above {@link InputmodeAttrValues}.
 */
export type InputmodeAttrValue = keyof typeof InputmodeAttrValues;

/**
 * A list of all {@link InputmodeAttrValue} values.
 */
export const INPUTMODE_ATTR_VALUES = Object.freeze(
	Object.values(InputmodeAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is an {@link InputmodeAttrValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link InputmodeAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link InputmodeAttrValue}.
 */
export const isInputmodeAttrValue = (value: unknown): value is InputmodeAttrValue =>
	/**
	 * value
	 */
	isString(value) && (INPUTMODE_ATTR_VALUES as ReadonlyArray<string>).includes(value);
