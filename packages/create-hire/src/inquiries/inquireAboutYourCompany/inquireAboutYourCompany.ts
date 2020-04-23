import chalk from 'chalk';
import { InputQuestion } from 'inquirer';
import { InquiryTypes, Actions } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';
import { isValidInput } from '../../validators';

type Question = InputQuestion<DecisionTree>;

export const inquireAboutYourCompany: Inquiry<Question> = () => ({
	prefix: '🏢',
	message: chalk`What is the name of your {yellow company}?`,
	name: 'yourCompany',
	type: InquiryTypes.input,

	when: ({ action }: DecisionTree): boolean => {
		return action === Actions.RequestInterview;
	},
	validate: (input: unknown) => {
		return isValidInput(input);
	},
});
