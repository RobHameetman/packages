import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link FormmethodAttrValue} values.
 */
export enum FormmethodAttrValues {
	/**
	 * A URL is constructed by starting with the URL given by the `formaction` or
	 * `action` attribute, appending a question mark ("?") character, then
	 * appending the form's data, encoded as described by `formenctype` or the
	 * form's `enctype` attribute. This URL is then sent to the server using an
	 * HTTP `get` request. This method works well for simple forms that contain
	 * only ASCII characters and have no side effects. This is the default value.
	 */
	get = 'get',

	/**
	 * The form's data is included in the body of the request that is sent to the
	 * URL given by the `formaction` or `action` attribute using an HTTP `post`
	 * method. This method supports complex data and file attachments.
	 */
	post = 'post',

	/**
	 * This method is used to indicate that the button closes the dialog with
	 * which the input is associated, and does not transmit the form data at all.
	 */
	dialog = 'dialog',

	/**
	 * The default value.
	 */
	default = get,
}

/**
 * Any one of the above {@link FormmethodAttrValues}.
 */
export type FormmethodAttrValue = keyof typeof FormmethodAttrValues;

/**
 * A list of all {@link FormmethodAttrValue} values.
 */
export const FORMMETHOD_ATTR_VALUES = Object.freeze(
	Object.values(FormmethodAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link FormmethodAttrValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link FormmethodAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FormmethodAttrValue}.
 */
export const isFormmethodAttrValue = (value: unknown): value is FormmethodAttrValue =>
	/**
	 * value
	 */
	isString(value) && (FORMMETHOD_ATTR_VALUES as ReadonlyArray<string>).includes(value);

export default FormmethodAttrValues;
