import { Rule } from 'eslint';
import { isListenerType } from '../../../enums';

/**
 * Alias for a collection of `ListenerType`s.
 */
export type ListenerTypeList<T extends keyof Rule.NodeListener = keyof Rule.NodeListener> =
	ReadonlyArray<T>;

/**
 * Checks that an `unknown` value is a `ListenerTypeList`.
 *
 * Requirements:
 *   - `value` must be an array of `ListenerType`s
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a `ListenerTypeList`.
 */
export const isListenerTypeList = <T extends keyof Rule.NodeListener = keyof Rule.NodeListener>(
	value: unknown,
): value is ListenerTypeList<T> => {
	return (
		value instanceof Array &&
		value.every(isListenerType)
	);
};
