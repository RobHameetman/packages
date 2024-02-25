import { Rule } from 'eslint';
import { ListenerTypeList } from '../ListenerTypeList';
import { ValidationTask, isValidationTask } from '../ValidationTask';
import { isObject } from '../../../functions';

/**
 * An internal object used by the `CustomESLintRule` class with methods that
 * ESLint calls to "visit" nodes while traversing the abstract syntax tree (AST
 * as defined by ESTree).
 */
export type RuleListeners<T = never, U extends ListenerTypeList = ListenerTypeList> = {
	[K in U[number]]?: ValidationTask<T, U>;
};

export const isRuleListeners = <T = never, U extends ListenerTypeList = ListenerTypeList>(
	value: unknown,
	keys: U,
): value is RuleListeners<T, U> => {
	return (
		/**
		 * value
		 */
		isObject(value) &&
		Object.values(value).every(isValidationTask) &&
		(keys
			? Object.keys(value).every((key) => keys.map(String).includes(key))
			: true)
	);
}