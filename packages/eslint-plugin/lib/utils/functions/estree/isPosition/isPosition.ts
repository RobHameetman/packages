import type { Position } from 'estree';
import { isObject } from '@functions/misc/isObject';
import { isNumberGreaterThanOne } from '@functions/misc/isNumberGreaterThanOne';
import { isNumberGreaterThanZero } from '@functions/misc/isNumberGreaterThanZero';

/**
 * Checks that an `unknown` value is a {@link Position}.
 *
 * Requirements:
 *   - `value` must be an `'object'`.
 *   - `value.line` is optional and must be a number greater than `1` if provided.
 *   - `value.column` is optional and must be a number greater than `0` if provided.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Position}.
 */
export const isPosition = (value: unknown): value is Position =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.line
	 */
	('line' in value ? isNumberGreaterThanOne(value.line) : true) &&
	/**
	 * value.column
	 */
	('column' in value ? isNumberGreaterThanZero(value.column) : true);
