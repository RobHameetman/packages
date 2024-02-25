import { Rule } from 'eslint';
import { isObject } from '../../../functions';

/**
 * The context object contains additional functionality that is helpful for
 * rules to do their jobs. As the name implies, the context object contains
 * information that is relevant to the context of the rule.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in the schema.
 *
 * @see https://eslint.org/docs/developer-guide/working-with-rules#the-context-object
 */
export interface RuleContext<T = never> extends Omit<Rule.RuleContext, 'options'> {
	readonly options: ReadonlyArray<T>;
}

/**
 * Checks that an `unknown` value is a `RuleContext<T>`.
 *
 * Requirements:
 *   - `value` must be an object
 *   - `value.options` is required and must be a array of options objects
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in the schema.
 * @param value - An `unknown` value.
 * @param isOptions - A type guard for one or more options objects.
 *
 * @returns The determination that `value` is or is not a `RuleContext<T>`.
 */
export const isRuleContext = <T = never>(
	value: unknown,
	isOptions = (_: unknown) => true,
): value is RuleContext<T> => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		/**
		 * value.options
		 */
		'options' in value &&
		value.options instanceof Array &&
		value.options.every(isOptions)
	);
};