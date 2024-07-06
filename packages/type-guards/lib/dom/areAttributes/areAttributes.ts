import { isObject } from '@/js/core/isObject';
import { isUndefined } from '@/js/core/isUndefined';
import { isAttr as _isAttr } from '@/dom/isAttr';

/**
 * Checks that an `unknown` value is a list of {@link Attributes}.
 *
 * Requirements:
 *   - `value` must be a valid {@link EscapeEvent} or {@link PressEvent}.
 *
 * @typeParam K - [Optional] The name of the attribute as a string literal type.
 * Defaults to type `string`.
 *
 * @typeParam V - [Optional] The value of the attribute as a string literal
 * type. Defaults to type `string`.
 *
 * @param value - An `unknown` value.
 * @param isAttr - [Optional] An `unknown` value.
 *
 * @returns The determination that `value` is or is not a list of {@link Attributes}.
 */
export const areAttributes = <T extends NamedNodeMap = NamedNodeMap>(
	value: unknown,
  isAttr = _isAttr,
	includes = {} as Record<string, string>,
): value is T =>
	/**
	 * value
	 */
	((!isUndefined(window) && value instanceof NamedNodeMap) ||
		isObject(value)) &&
		Object.values(value as NamedNodeMap).every((attr) => isAttr(attr)) &&
		(Object.keys(includes).length
			? Object.entries(includes).every(
				([attrName, attrValue]) => Object.values(value as NamedNodeMap).some(
					(attr) => isAttr(attr, attrName, attrValue)
				))
			: true);

export default areAttributes;
