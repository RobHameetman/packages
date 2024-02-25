import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link InputType} values.
 */
export enum InputTypes {
	/**
	 * A push button with no default behavior displaying the value of the `value`
	 * attribute, empty by default.
	 */
	button = 'button',

	/**
	 * A checkbox allowing single values to be selected/deselected.
	 */
	checkbox = 'checkbox',

	/**
	 * A control for specifying a color; opening a color picker when active in
	 * supporting browsers.
	 */
	color = 'color',

	/**
	 * A control for entering a date (year, month, and day, with no time). Opens a
	 * date picker or numeric wheels for year, month, day when active in
	 * supporting browsers.
	 */
	date = 'date',

	/**
	 * A control for entering a date and time, with no time zone. Opens a date
	 * picker or numeric wheels for date- and time-components when active in
	 * supporting browsers.
	 */
	datetime = 'datetime-local',

	/**
	 * A control for entering a date and time (hour, minute, second, and fraction
	 * of a second) based on UTC time zone.
	 * @deprecated
	 */
	datetime_obsolete = 'datetime',

	/**
	 * A field for editing an email address. Looks like a `text` input, but has
	 * validation parameters and relevant keyboard in supporting browsers and
	 * devices with dynamic keyboards.
	 */
	email = 'email',

	/**
	 * A control that lets the user select a file. Use the `accept` attribute to
	 * define the types of files that the control can select.
	 */
	file = 'file',

	/**
	 * A control that is not displayed but whose value is submitted to the server.
	 * There is an example in the next column, but it's hidden!
	 */
	hidden = 'hidden',

	/**
	 * A graphical `submit` button. Displays an image defined by the `src`
	 * attribute. The `alt` attribute displays if the image `src` is missing.
	 */
	image = 'image',

	/**
	 * A control for entering a month and year, with no time zone.
	 */
	month = 'month',

	/**
	 * A control for entering a number. Displays a spinner and adds default
	 * validation. Displays a numeric keypad in some devices with dynamic keypads.
	 */
	number = 'number',

	/**
	 * A single-line text field whose value is obscured. Will alert user if site is
	 * not secure.
	 */
	password = 'password',

	/**
	 * A radio button, allowing a single value to be selected out of multiple
	 * choices with the same `name` value.
	 */
	radio = 'radio',

	/**
	 * A control for entering a number whose exact value is not important.
	 * Displays as a range widget defaulting to the middle value. Used in
	 * conjunction `min` and `max` to define the range of acceptable values.
	 */
	range = 'range',

	/**
	 * A button that resets the contents of the form to default values. Not
	 * recommended.
	 */
	reset = 'reset',

	/**
	 * A single-line text field for entering search strings. Line-breaks are
	 * automatically removed from the input value. May include a delete icon in
	 * supporting browsers that can be used to clear the field. Displays a search
	 * icon instead of enter key on some devices with dynamic keypads.
	 */
	search = 'search',

	/**
	 * A button that submits the form.
	 */
	submit = 'submit',

	/**
	 * A control for entering a telephone number. Displays a telephone keypad in
	 * some devices with dynamic keypads.
	 */
	tel = 'tel',

	/**
	 * The default value. A single-line text field. Line-breaks are automatically
	 * removed from the input value.
	 */
	text = 'text',

	/**
	 * A control for entering a time value with no time zone.
	 */
	time = 'time',

	/**
	 * A field for entering a URL. Looks like a `text` input, but has validation
	 * parameters and relevant keyboard in supporting browsers and devices with
	 * dynamic keyboards.
	 */
	url = 'url',

	/**
	 * A control for entering a date consisting of a week-year number and a week
	 * number with no time zone.
	 */
	week = 'week',
}

/**
 * Any one of the above {@link InputTypes}.
 */
export type AnyInputType = `${InputTypes}`;

/**
 * Any one of the above {@link InputTypes} which are obsolete.
 */
export type ObsoleteInputType = typeof OBSOLETE_INPUT_TYPES[number];

/**
 * Any one of the above {@link InputTypes} except any deprecated or obsolete
 * values.
 */
export type InputType = Exclude<AnyInputType, 'datetime'>;

/**
 * A list of {@link AnyInputType} values, including any which are deprecated
 * and/or obsolete.
 */
export const ALL_INPUT_TYPES = Object.freeze(
	Object.values(InputTypes).filter(isString),
) as ReadonlyArray<AnyInputType>;

/**
 * A list of {@link ObsoleteInputType} values.
 */
export const OBSOLETE_INPUT_TYPES = Object.freeze([
	InputTypes.datetime_obsolete,
] as const);

/**
 * A list of all {@link InputType} values, excluding any which are deprecated
 * and/or obsolete.
 */
export const INPUT_TYPES = Object.freeze(
	ALL_INPUT_TYPES.filter((type) => !(OBSOLETE_INPUT_TYPES as [string]).includes(type)),
) as ReadonlyArray<InputType>;

/**
 * Checks that an `unknown` value is {@link AnyInputType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link InputTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not {@link AnyInputType}.
 */
export const isAnyInputType = (value: unknown): value is AnyInputType =>
	/**
	 * value
	 */
	isString(value) && (ALL_INPUT_TYPES as ReadonlyArray<string>).includes(value);

/**
 * Checks that an `unknown` value is an {@link ObsoleteInputType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as an obsolete
 *     string key of {@link InputTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link ObsoleteInputType}.
 */
export const isObsoleteInputType = (value: unknown): value is ObsoleteInputType =>
	/**
	 * value
	 */
	isString(value) && (OBSOLETE_INPUT_TYPES as [string]).includes(value);

/**
 * Checks that an `unknown` value is an {@link InputType}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a non-obsolete
 *     string key of {@link InputTypes}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link InputType}.
 */
export const isInputType = (value: unknown): value is InputType =>
	/**
	 * value
	 */
	isString(value) && (INPUT_TYPES as ReadonlyArray<string>).includes(value);
