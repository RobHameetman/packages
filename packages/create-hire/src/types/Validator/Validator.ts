import { Answers } from 'inquirer';
import { DecisionTree } from '../DecisionTree';
import isString from 'lodash/isString';

/**
 * Inquirer's `Validator` type is:
 * (input: any, answers?: T): boolean | string | Promise<boolean | string>;
 *
 * You see why I'm not using it, right?
 */
export type Validator<T extends Answers = DecisionTree> = (
	value: unknown,
	answers?: T,
) => true | string | Promise<true | string>;

export const isValidator = <T extends Answers = DecisionTree>(
	value: unknown,
	knownValidValue?: unknown,
): value is Validator<T> => {
	return (
		typeof value === 'function' &&
		isString(value()) &&
		(knownValidValue !== undefined ? value(knownValidValue) === true : true)
	);
};
