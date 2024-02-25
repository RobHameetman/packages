import { isString } from '@/js/core/isString';
import { TargetAttrValues } from '../TargetAttrValues';

/**
 * A list of all possible {@link FormtargetAttrValue} values.
 */
export enum FormtargetAttrValues {
	/**
	 * Loads the response into a new, unnamed, browsing context. This is typically
	 * a new tab in the same window as the current document, but may differ
	 * depending on the configuration of the user agent.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Glossary/User_agent
	 */
	blank = TargetAttrValues.blank,

	/**
	 * Loads the response into the parent browsing context of the current one. If
	 * there is no parent context, this behaves the same as `_self`.
	 */
	parent = TargetAttrValues.parent,

	/**
	 * Loads the response into the same browsing context as the one that contains
	 * the form. This will replace the current document with the received data.
	 * This is the default value used if none is specified.
	 */
	self = TargetAttrValues.self,

	/**
	 * Loads the response into the top-level browsing context; this is the
	 * browsing context that is the topmost ancestor of the current context. If
	 * the current context is the topmost context, this behaves the same as
	 * `_self`.
	 */
	top = TargetAttrValues.top,

	/**
	 * The default value.
	 */
	default = self,
}

/**
 * Any one of the above {@link FormtargetAttrValues}.
 */
export type FormtargetAttrValue = keyof typeof FormtargetAttrValues;

/**
 * A list of all {@link FormtargetAttrValue} values.
 */
export const FORMTARGET_ATTR_VALUES = Object.freeze(
	Object.values(FormtargetAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link FormtargetAttrValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link FormtargetAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link FormtargetAttrValue}.
 */
export const isFormtargetAttrValue = (value: unknown): value is FormtargetAttrValue =>
	/**
	 * value
	 */
	isString(value) && (FORMTARGET_ATTR_VALUES as ReadonlyArray<string>).includes(value);
