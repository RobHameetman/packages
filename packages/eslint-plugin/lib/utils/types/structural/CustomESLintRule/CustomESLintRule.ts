import { Rule as ESLint } from 'eslint';
import { InfoMethodInput } from '../InfoMethodInput';
import { ValidateMethodInput } from '../ValidateMethodInput';
import {
	ListenerTypeList,
	RuleContext,
	RuleListeners,
	RuleModule,
	ValidationTask,
} from '../../misc';
import { Categories, RuleTypes } from '../../../enums';
import { url } from '../../../functions';

/**
 * A façade class used to improve the experience of creating new custom ESLint
 * rules. This class abstracts over some of ESLint's gotchas so that those with
 * less experience writing custom ESLint rules don't have to read as much of
 * the documentation. It also implements ESLint's `RuleModule` interface, so an
 * instance of a `CustomESLintRule` may be provided directly to ESLint.
 */
export class CustomESLintRule<T = never> implements RuleModule<T> {
	/**
	 * The internal object with methods that ESLint calls to "visit" nodes while
	 * traversing the abstract syntax tree (AST as defined by ESTree).
	 */
	private _listeners: RuleListeners<T> = {};

	/**
	 * Contains metadata for the rule.
	 */
	private _meta: RuleModule<T>['meta'];

	/**
	 * Instantiating a new `CustomESLintRule` requires a schema which specifies
	 * the options so ESLint can prevent invalid rule configurations.
	 */
	constructor(schema: ESLint.RuleMetaData['schema']) {
		this._meta = {
			...(this._meta || {}),
			schema: [
				...(this._meta?.schema instanceof Array ? this._meta?.schema : []),
				...(schema instanceof Array ? schema : []),
			],
		};
	}

	/**
	 * Public getter for `this._meta`. This allows us to update the rule's
	 * metadata internally while preventing any unwanted external state changes.
	 */
	get meta(): RuleModule<T>['meta'] {
		return this._meta;
	}

	/**
	 * Returns an object with methods that ESLint calls to "visit" nodes while
	 * traversing the abstract syntax tree (AST as defined by ESTree).
	 */
	create = (context: RuleContext<T>, listeners = this._listeners): ESLint.RuleListener => {
		return Object.entries(listeners)
			.reduce<ESLint.RuleListener>(
				(prev, [key, callback]) => {
					const next = { ...prev };

					if (callback !== undefined) {
						next[key] = callback(context);
					}

					return next;
				},
				{} as ESLint.RuleListener,
			);
	}

	/**
	 * Sets the metadata for the rule.
	 */
	info({
		category,
		deprecated,
		description,
		hasSuggestions,
		name,
		recommended,
	}: InfoMethodInput): this {
		const isDeprecated =
			deprecated ||
			category === Categories.Deprecated ||
			category === Categories.Removed;

		const isSuggestion =
			hasSuggestions ||
			category === Categories.Suggestions;

		const meta = {
			...(this._meta || {}),
			docs: {
				...(this._meta?.docs || {}),
				description,
				category,
				recommended,
				url: url(name),
			},
		};

		if (category === Categories.LayoutAndFormatting) {
			meta.type = RuleTypes.layout;
		}

		if (category === Categories.PossibleProblems) {
			meta.type = RuleTypes.problem;
		}

		if (isDeprecated) {
			meta.deprecated = true;
		}

		if (isSuggestion) {
			meta.hasSuggestions = true;
			meta.type = RuleTypes.suggestion;
		}

		this._meta = meta;

		return this;
	}

	/**
	 * Returns the rule object provided to ESLint as an object literal instead of
	 * an instance of the `CustomESLintRule` class.
	 */
	pure(): ESLint.RuleModule {
		return {
			meta: { ...this._meta },
			create: (context: RuleContext<T>) => {
				const listeners = { ...this._listeners };

				return this.create(context, listeners);
			},
		};
	}

	/**
	 * Add an ESTree evaluation function to the internal map of listeners returned
	 * by the `create()` method.
	 */
	validate<U extends ListenerTypeList = ListenerTypeList>({
		check,
		task,
	}: ValidateMethodInput<T, U>): this {
		check.forEach((key) => {
			this._listeners[key] = task as ValidationTask<T>;
		});

		return this;
	}
};

/**
 * Checks that an `unknown` value is a `CustomESLintRule`.
 *
 * Requirements:
 *   - `value` must be an instance of the `CustomESLintRule` class
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an `CustomESLintRule`.
 */
export const isCustomESLintRule = (value: unknown): value is CustomESLintRule =>
	value instanceof CustomESLintRule;
