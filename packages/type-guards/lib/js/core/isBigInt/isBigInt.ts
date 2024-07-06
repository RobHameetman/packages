/**
 * Checks that an `unknown` value is a {@link BigInt}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'bigint'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link BigInt}.
 */
export const isBigInt = (value: unknown): value is bigint =>
	/**
	 * value
	 */
	typeof value === 'bigint';

export default isBigInt;
