import { graphql, recommended } from './configs';

export default Object.freeze({
	rules: Object.freeze({
		/**
		 * Add custom rules here.
		 *
		 * @example
		 * import { CustomRuleExample } from './rules';
		 *
		 * export default Object.freeze({
		 *   rules: Object.freeze({
		 *     'custom-rule-example': CustomRuleExample,
		 *   }),
		 * });
		 */
	}),
	configs: Object.freeze({
		recommended,
		graphql,
	}),
});
