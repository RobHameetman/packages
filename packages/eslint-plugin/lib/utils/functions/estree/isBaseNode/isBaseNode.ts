import type { BaseNode } from 'estree';
import { isBaseNodeWithoutComments } from '@functions/estree/isBaseNodeWithoutComments';
import { isString } from '@functions/misc/isString';

/**
 * Checks that an `unknown` value is a {@link BaseNode}.
 *
 * Requirements:
 *   - `value` must be a valid `BaseNodeWithoutComments`.
 *   - `value.type` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseNode}.
 */
export const isBaseNode = (value: unknown): value is BaseNode =>
	/**
	 * value
	 */
	isBaseNodeWithoutComments(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isString(value.type);
