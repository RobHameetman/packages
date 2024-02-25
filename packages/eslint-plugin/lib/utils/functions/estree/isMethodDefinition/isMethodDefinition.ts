import type { MethodDefinition } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link MethodDefinition}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`.
 *   - `value.type` is required and must be the string `'MethodDefinition'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link MethodDefinition}.
 */
export const isMethodDefinition = (value: unknown): value is MethodDefinition =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'MethodDefinition';
