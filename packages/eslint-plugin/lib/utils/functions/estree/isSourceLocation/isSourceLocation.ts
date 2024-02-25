import type { SourceLocation } from 'estree';
import { isPosition } from '@functions/estree/isPosition';
import { isObject } from '@functions/misc/isObject';
import { isString } from '@functions/misc/isString';

/**
 * Checks that an `unknown` value is a {@link SourceLocation}.
 *
 * Requirements:
 *   - `value` must be an `'object'`.
 *   - `value.end` is optional and must be a valid `Position` if provided.
 *   - `value.source` is optional and must be a string or `null` if provided.
 *   - `value.start` is optional and must be a valid `Position` if provided.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link SourceLocation}.
 */
export const isSourceLocation = (value: unknown): value is SourceLocation =>
	/**
	 * value
	 */
	isObject(value) &&
	/**
	 * value.end
	 */
	('end' in value ? isPosition(value.end) : true) &&
	/**
	 * value.source
	 */
	('source' in value ? (isString(value.source) || value.source === null) : true) &&
	/**
	 * value.start
	 */
	('start' in value ? isPosition(value.start) : true);
