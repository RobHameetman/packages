import chalk from 'chalk';
import { ListQuestion } from 'inquirer';
import { Actions, ContactMethods, InquiryTypes } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';

type Question = ListQuestion<DecisionTree>;

export const inquireAboutContactMethod: Inquiry<Question> = () => ({
	prefix: '📮',
	message: chalk`What is your preferred {yellow contact method}?`,
	name: 'contactMethod',
	type: InquiryTypes.list,
	default: ContactMethods.Call,

	choices: [
		{
			name: ContactMethods.Call,
			value: ContactMethods.Call,
		},
		{
			name: ContactMethods.Email,
			value: ContactMethods.Email,
		},
	],

	when: ({ action }: DecisionTree): boolean => {
		return action === Actions.RequestInterview;
	},
});
