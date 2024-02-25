import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link TargetAttrValue} values.
 */
export enum TargetAttrValues {
	/**
	 * Usually a new tab, but users can configure browsers to open a new window
	 * instead.
	 */
	blank = '_blank',

	/**
	 * The parent browsing context of the current one. If no parent, behaves as
	 * `_self`.
	 */
	parent = '_parent',

	/**
	 * The current browsing context. (Default)
	 */
	self = '_self',

	/**
	 * The topmost browsing context (the "highest" context that's an ancestor of
	 * the current one). If no ancestors, behaves as `_self`.
	 */
	top = '_top',

	/**
	 * The default value.
	 */
	default = self,
}

/**
 * Any one of the above {@link TargetAttrValues}.
 */
export type TargetAttrValue = keyof typeof TargetAttrValues;

/**
 * A list of all {@link TargetAttrValue} values.
 */
export const TARGET_ATTR_VALUES = Object.freeze(
	Object.values(TargetAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is a {@link TargetAttrValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link TargetAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link TargetAttrValue}.
 */
export const isTargetAttrValue = (value: unknown): value is TargetAttrValue =>
	/**
	 * value
	 */
	isString(value) && (TARGET_ATTR_VALUES as ReadonlyArray<string>).includes(value);
