import type { Directive } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link Directive}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'ExpressionStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Directive}.
 */
export const isDirective = (value: unknown): value is Directive =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ExpressionStatement';
