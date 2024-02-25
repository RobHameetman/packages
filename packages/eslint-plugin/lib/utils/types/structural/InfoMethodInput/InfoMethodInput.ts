import { Rule } from 'eslint';
import { isCategory, isFixability } from '../../../enums';
import { isObject } from '../../../functions';

type RuleMetaData = Rule.RuleMetaData;

/**
 * A destructured input object for the `info()` method on the `CustomESLintRule`
 * class.
 */
export interface InfoMethodInput {
	/**
	 * Specifies the heading under which the rule is listed in the rules index.
	 */
	readonly category: Required<Required<RuleMetaData>['docs']>['category'];
	/**
	 * [Optional] Indicates whether the rule has been deprecated. Should be set to
	 * `true` if provided. If `category` is set to `Categories.Deprecated` or,
	 * `Categories.Removed`, this will be set to `true` by default.
	 */
	readonly deprecated?: true;
	/**
	 * Provides the short description of the rule in the rules index.
	 */
	readonly description: Required<Required<RuleMetaData>['docs']>['description'];
	/**
	 * Required if the `--fix` option on the command line automatically fixes
	 * problems reported by the rule.
	 */
	readonly fixable?: Required<RuleMetaData>['fixable'];
	/**
	 * [Optional] Specifies whether rules can return suggestions. Should be set to
	 * `true` if provided. If `category` is set to `Categories.Suggestions` or if
	 * `type` is set to `RuleTypes.suggestion`, this will be set to `true` by
	 * default.
	 */
	readonly hasSuggestions?: true;
	/**
	 * Used for the `url` provided in the rule metadata. Should be a kebob-case
	 * name identical to the directory/file name of the rule.
	 */
	readonly name: string;
	/**
	 * [Optional] Determines the `"extends": "eslint:recommended"` property in a
	 * configuration file. Should be set to `true` if provided.
	 */
	readonly recommended?: true;
}

/**
 * Checks that an `unknown` value is a `InfoMethodInput`.
 *
 * Requirements:
 *   - `value` must be an object
 *   - `value.category` is required and must be a valid `Category`
 *   - `value.deprecated` is optional and must be `true` if provided
 *   - `value.description` is required and must be a string
 *   - `value.fixable` is optional and must be a valid `Fixability` if provided
 *   - `value.hasSuggestions` is optional and must be `true` if provided
 *   - `value.name` is required and must be a string
 *   - `value.recommended` is optional and must be `true` if provided
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `InfoMethodInput`.
 */
export const isInfoMethodInput = (value: unknown): value is InfoMethodInput => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		/**
		 * value.category
		 */
		'category' in value &&
		isCategory(value.category) &&
		/**
		 * value.deprecated
		 */
		('deprecated' in value
			? value.deprecated === true
			: true) &&
		/**
		 * value.description
		 */
		'description' in value &&
		typeof value.description === 'string' &&
		/**
		 * value.fixable
		 */
		('fixable' in value
			? isFixability(value.fixable)
			: true) &&
		/**
		 * value.hasSuggestions
		 */
		('hasSuggestions' in value
			? value.hasSuggestions === true
			: true) &&
		/**
		 * value.name
		 */
		'name' in value &&
		typeof value.name === 'string' &&
		/**
		 * value.recommended
		 */
		('recommended' in value
			? value.recommended === true
			: true)
	);
};
