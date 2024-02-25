import type { ClassBody } from 'estree';
import { isBaseNode } from '@functions/estree/isBaseNode';

/**
 * Checks that an `unknown` value is a {@link ClassBody}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNode`
 *   - `value.type` is required and must be the string `'ClassBody'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link ClassBody}.
 */
export const isClassBody = (value: unknown): value is ClassBody =>
	/**
	 * value
	 */
	isBaseNode(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'ClassBody';
