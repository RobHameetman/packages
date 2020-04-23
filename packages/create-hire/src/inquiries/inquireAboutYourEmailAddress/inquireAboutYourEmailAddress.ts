import chalk from 'chalk';
import { InputQuestion } from 'inquirer';
import { InquiryTypes, Actions, ContactMethods } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';
import { isValidInput, isValidEmailAddress } from '../../validators';

type Question = InputQuestion<DecisionTree>;

export const inquireAboutYourEmailAddress: Inquiry<Question> = () => ({
	prefix: '📨',
	message: chalk`What is your {yellow email address}?`,
	name: 'yourEmailAddress',
	type: InquiryTypes.input,

	when: ({ action, contactMethod }: DecisionTree): boolean => {
		return (
			action === Actions.RequestInterview &&
			contactMethod === ContactMethods.Email
		);
	},
	validate: (input: unknown) => {
		return isValidInput(input) && isValidEmailAddress(input);
	},
});
