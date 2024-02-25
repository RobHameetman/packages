/**
 * Checks that an `unknown` value is a {@link Symbol}. This type-guard is used
 * in other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be have a type of `'symbol'`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a {@link Symbol}.
 */
export const isSymbol = (value: unknown): value is symbol =>
	/**
	 * value
	 */
	typeof value === 'symbol';
