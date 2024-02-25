/**
 * Categories available for ESLint rule documentation.
 */
export enum Categories {
	/**
	 * These rules have been deprecated in accordance with the deprecation policy,
	 * and replaced by newer rules.
	 */
	Deprecated = 'Deprecated',

	/**
	 * These rules care about how the code looks rather than how it executes.
	 */
	LayoutAndFormatting = 'Layout & Formatting',

	/**
	 * These rules relate to possible logic errors in code.
	 */
	PossibleProblems = 'Possible Problems',

	/**
	 * These rules from older versions of ESLint (before the deprecation policy
	 * existed) have been replaced by newer rules.
	 */
	Removed = 'Removed',

	/**
	 * These rules suggest alternate ways of doing things.
	 */
	Suggestions = 'Suggestions',
}

/**
 * Union type of enum values (i.e. `"Deprecated" | "Layout & Formatting" | ...`).
 * Represents any one category defined in the above enum values.
 */
export type Category = `${Categories}`;

/**
 * A list of all {@link Category} values.
 */
export const CATEGORIES = Object.values(Categories);

/**
 * Checks that an `unknown` value is a `Category`.
 *
 * Requirements:
 *   - `value` must be included as a value of `Categories`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a `Category`.
 */
export const isCategory = (value: unknown): value is Category =>
	Object.values<unknown>(Categories).includes(value);
