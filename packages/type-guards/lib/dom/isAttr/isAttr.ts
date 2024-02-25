import { isNode } from '@/dom/isNode';
import { DomNodeTypes } from '@/utils/enums/DomNodeTypes';
import { isBrowser } from '@/utils/functions/isBrowser';

/**
 * Checks that an `unknown` value is an {@link Attr} node.
 *
 * Requirements:
 *   - `value` must be an instance of `Attr` when the `window` object is defined or an object when `window` is `undefined`.
 *	 - `value.nodeType` must be an `ATTRIBUTE_NODE` type.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link Attr} node.
 */
export const isAttr = (
	value: unknown,
): value is Attr =>
	/**
	 * value
	 */
	(isNode(
		value,
		(isBrowser()
			? Node.ATTRIBUTE_NODE
			: DomNodeTypes.ATTRIBUTE_NODE)
		) && (isBrowser()
			? value instanceof Attr
			: true));
