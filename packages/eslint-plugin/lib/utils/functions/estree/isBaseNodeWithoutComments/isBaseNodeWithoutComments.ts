import type { BaseNodeWithoutComments } from 'estree';
import { isObject } from '@functions/misc/isObject';
import { isString } from '@functions/misc/isString';

/**
 * Checks that an `unknown` value is a {@link BaseNodeWithoutComments}.
 *
 * Requirements:
 *   - `value` must be an `'object'`.
 *   - `value.type` is required and must be a string.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BaseNodeWithoutComments}.
 */
export const isBaseNodeWithoutComments = (value: unknown): value is BaseNodeWithoutComments =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.type
	 */
	'type' in value &&
	isString(value.type);
