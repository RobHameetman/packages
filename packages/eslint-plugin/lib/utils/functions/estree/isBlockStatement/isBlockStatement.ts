import type { BlockStatement } from 'estree';
import { isBaseStatement } from '@functions/estree/isBaseStatement';

/**
 * Checks that an `unknown` value is a {@link BlockStatement}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseStatement`.
 *   - `value.type` is required and must be the string `'BlockStatement'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BlockStatement}.
 */
export const isBlockStatement = (value: unknown): value is BlockStatement =>
	/**
	 * value
	 */
	isBaseStatement(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	value.type === 'BlockStatement';
