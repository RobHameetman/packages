/**
 * Currently ESLint doesn't use these values for anything (other than the
 * existence of any value under the `fixable` property). This is meant for
 * future use. For example, at some point ESLint might provide a way to only fix
 * whitespace rules, or only code.
 *
 * @see https://stackoverflow.com/questions/38278273/eslint-code-vs-whitespace-values-for-fixable
 */
export enum Fixabilities {
	/**
	 * Should be used for everything else.
	 */
	code,
	/**
	 * Should be used for any rules that deal with spacing (indentation, spacing
	 * between properties, etc.)
	 */
	whitespace,
}

/**
 * Union type of enum keys (i.e. `"code" | "whitespace"`). Represents any one of
 * the rule types defined in the above enum values.
 */
export type Fixability = keyof typeof Fixabilities;

/**
 * An array of all possible `Fixability`s.
 */
export const FIXABILITIES = Object.freeze(
	Object.keys(Fixabilities)
		.filter((key) => isNaN(Number(key)))
);

/**
 * Checks that an `unknown` value is a `Fixability`.
 *
 * Requirements:
 *   - `value` must be included as a value of `Fixabilities`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a `Fixability`.
 */
export const isFixability = (value: unknown): value is Fixability => {
	return (
		/**
		 * value
		 */
		typeof value === 'string' &&
		FIXABILITIES.map(String).includes(value)
	);
}