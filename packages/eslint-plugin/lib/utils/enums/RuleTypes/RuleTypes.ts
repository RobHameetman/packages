/**
 * Rule types used for custom ESLint rule validation.
 *
 * @see https://eslint.org/docs/developer-guide/working-with-rules#rule-basics
 */
export enum RuleTypes {
	/**
	 * The rule is identifying code that either will cause an error or may cause a
	 * confusing behavior. Developers should consider this a high priority to
	 * resolve.
	 */
	problem = 'problem',
	/**
	 * The rule is identifying something that could be done in a better way but no
	 * errors will occur if the code isn't changed.
	 */
	suggestion = 'suggestion',
	/**
	 * the rule cares primarily about whitespace, semicolons, commas, and
	 * parentheses, all the parts of the program that determine how the code looks
	 * rather than how it executes. These rules work on parts of the code that
	 * aren't specified in the AST.
	 */
	layout = 'layout',
}

/**
 * Union type of enum keys (i.e. `"problem" | "suggestion" | "layout"`).
 * Represents any one of the rule types defined in the above enum values.
 */
export type RuleType = keyof typeof RuleTypes;

/**
 * An array of all possible `RuleType`s.
 */
export const RULE_TYPES = Object.freeze(
	Object.keys(RuleTypes),
);

/**
 * Checks that an `unknown` value is a `RuleType`.
 *
 * Requirements:
 *   - `value` must be included as a value of `RuleTypes`.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not a `RuleType`.
 */
export const isRuleType = (value: unknown): value is RuleType => {
	return (
		/**
		 * value
		 */
		typeof value === 'string' &&
		RULE_TYPES.map(String).includes(value)
	);
}
