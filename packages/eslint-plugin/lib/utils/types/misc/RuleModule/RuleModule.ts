import { Rule } from 'eslint';
import { RuleFactory, isRuleFactory } from '../RuleFactory';
import { isObject } from '../../../functions';

/**
 * A specialized copy of the `RuleModule` type provided by ESLint used only by
 * the `CustomESLintRule` class for better type-checking against the provided
 * schema for the rule.
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in the schema.
 */
export interface RuleModule<T = never> extends Rule.RuleModule {
	create: RuleFactory<T>;
}

/**
 * Checks that an `unknown` value is a `RuleModule<T>`.
 *
 * Requirements:
 *   - `value` must be a an object
 *   - `value.create()` is required and must be a valid `RuleFactory<T>`
 *
 * @typeParam T - A union of interfaces for any top-level object types defined in the schema.
 * @param value - An `unknown` value.
 * @param context - [Optional] An options object of type `T`. If provided,
 * `value.create()` must return a `RuleListener` object when invoked with it.
 *
 * @returns The determination that `value` is or is not a `RuleModule<T>`.
 */
export const isRuleModule = <T = never>(
	value: unknown,
	context?: T,
): value is RuleModule<T> => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		/**
		 * value.create()
		 */
		'create' in value &&
		isRuleFactory(value.create, context)
	);
};