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
 * @param attrName - [Optional] The name of type `K` to check for.
 * @param nodeValue - [Optional] The name of type `V` to check for.
 *
 * @returns The determination that `value` is or is not an {@link Attr} node.
 */
export const isAttr = <T extends Attr = Attr>(
	value: unknown,
	attrName = '',
	attrValue = '',
): value is T =>
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
			: true)) &&
	/**
	 * value.localName
	 */
	(attrName ? 'localName' in value && value.localName === attrName : true) &&
	/**
	 * value.name
	 */
	(attrName ? 'name' in value && value.name === attrName : true) &&
	/**
	 * value.nodeName
	 */
	(attrName ? 'nodeName' in value && value.nodeName === attrName : true) &&
	/**
	 * value.nodeValue
	 */
	(attrValue ? 'nodeValue' in value &&  value.nodeValue === attrValue : true) &&
	/**
	 * value.textContent
	 */
	(attrValue ? 'textContent' in value && value.textContent === attrValue : true) &&
	/**
	 * value.value
	 */
	(attrValue ? 'value' in value && value.value === attrValue : true);

export default isAttr;
