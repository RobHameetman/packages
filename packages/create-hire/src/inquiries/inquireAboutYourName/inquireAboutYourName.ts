import chalk from 'chalk';
import { InputQuestion } from 'inquirer';
import { InquiryTypes, Actions } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';
import { isValidInput } from '../../validators';

type Question = InputQuestion<DecisionTree>;

export const inquireAboutYourName: Inquiry<Question> = () => ({
	prefix: '👋',
	message: chalk`What is your {yellow full name}?`,
	name: 'yourName',
	type: InquiryTypes.input,

	when: ({ action }: DecisionTree): boolean => {
		return action === Actions.RequestInterview;
	},
	validate: (input: unknown) => {
		return isValidInput(input);
	},
});
