/**
 * Checks that an `unknown` value is a function. This type-guard is used in
 * other type-guards to keep them readable.
 *
 * Requirements:
 *   - `value` must be of type `'function'`.
 *   - `value()` must take arguments type `U` if a type-guard for type `U` is provided.
 *   - `value()` must never return a value.
 *
 * @typeParam T - [Optional] The type of data the function takes as arguments. Defaults to `unknown`.
 *
 * @param value - An `unknown` value.
 * @param args - [Optional] An array of arguments passed in with an additional type-guard.
 * @param isT() - [Optional] An additional type-guard to check whether the arguments of the function are of type `T`.
 *
 * @returns The determination that `value` is or is not a function.
 */
export const isVoidFunction = <T = unknown>(
	value: unknown,
	args: ReadonlyArray<unknown> = [],
	isT?: (value: unknown) => value is T,
): value is (...args: ReadonlyArray<T>) => void =>
	/**
	 * value
	 */
	typeof value === 'function' &&
	(isT ? args.every(isT) : true) &&
	typeof (args.length ? value(...args) : value()) === 'undefined';
