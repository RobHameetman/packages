import { QuestionMap, createPromptModule } from 'inquirer';
import { DecisionTree } from './../../types';

export enum InquiryTypes {
	input = 'input',
	number = 'number',
	password = 'password',
	list = 'list',
	rawlist = 'rawlist',
	expand = 'expand',
	checkbox = 'checkbox',
	confirm = 'confirm',
	editor = 'editor',
}

/**
 * This is the "more correct" type, as Inquirer could add or remove
 * question types and this type would not need to change. The enum
 * above, however, would still need to be updated.
 */
export type InquiryType<
	T extends DecisionTree = DecisionTree
> = keyof QuestionMap<T>;

export const isInquiryType = (value: unknown): value is InquiryType => {
	return (
		typeof value === 'string' &&
		Object.keys(InquiryTypes).includes(value) &&
		Object.keys(createPromptModule().prompts).includes(value)
	);
};
