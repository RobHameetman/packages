import { Rule } from 'eslint';
import { isListener } from '../Listener';
import { ListenerTypeList } from '../ListenerTypeList';
import { isObject } from '../../../functions';

/**
 * Represents an object which is a subtype of the ESLint `NodeListener` object,
 * including only specified keys. For instance, the type
 * `ListenersFor<'ArrayExpression' | 'BinaryExpression'>` resolves to:
 *
 * ```
 * {
 * 	ArrayExpression?: ((node: ESTree.ArrayExpression & NodeParentExtension) => void) | undefined;
 *  BinaryExpression?: ((node: ESTree.BinaryExpression & NodeParentExtension) => void) | undefined;
 * }
 * ```
 *
 * This type is used under the hood by the `CustomESLintRule` class to determine
 * what type of node object your validation `task` should receive as an argument.
 */
export type ListenersFor<T extends keyof Rule.NodeListener = keyof Rule.NodeListener> = Omit<
	Rule.NodeListener,
	Exclude<keyof Rule.NodeListener, T>
>;

/**
 * Checks that an `unknown` value is a `ListenersFor<T>`.
 *
 * Requirements:
 *   - `value` must be an object which includes all provided keys
 *
 * @param value - An `unknown` value.
 * @param keys - An array of string keys required for the value to pass
 *
 * @returns The determination that `value` is or is not a `ListenersFor<T>`.
 */
export const isListenersFor = <T extends keyof Rule.NodeListener = keyof Rule.NodeListener>(
	value: unknown,
	keys: ListenerTypeList,
): value is ListenersFor<T> => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		Object.entries(value).every(
			([key, val]) => keys.map(String).includes(key) && isListener(val),
		)
	);
};