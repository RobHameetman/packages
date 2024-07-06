import { isObject } from '@/js/core/isObject';
import { DomNodeTypes, isDomNodeType } from '@/utils/enums/DomNodeTypes';
import { isBrowser } from '@/utils/functions/isBrowser';

export type MaybeNode = Node | Record<string, unknown>;

/**
 * Checks that an `unknown` value is an {@link Node} node.
 *
 * Requirements:
 *   - `window` must be defined.
 *   - `value` must be an instance of `Node`.
 *
 * @param value - An `unknown` value.
 * @param type - [Optional] An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Node} node.
 */
export const isNode = <T extends Node = Node>(
	value: unknown,
	type?: DomNodeTypes,
): value is T =>
	/**
	 * value
	 */
	((isBrowser() && value instanceof Node) ||
		isObject(value)) &&
	/**
	 * value.nodeType
	 */
	'nodeType' in (value as MaybeNode) &&
	isDomNodeType(DomNodeTypes[(value as MaybeNode).nodeType as number]) &&
	(type ? (value as MaybeNode).nodeType === type : true);

export default isNode;
