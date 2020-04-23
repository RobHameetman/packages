import chalk from 'chalk';
import { InputQuestion } from 'inquirer';
import { InquiryTypes, Actions, ContactMethods } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';
import { isValidInput, isValidPhoneNumber } from '../../validators';

type Question = InputQuestion<DecisionTree>;

export const inquireAboutYourPhoneNumber: Inquiry<Question> = () => ({
	prefix: '📲',
	message: chalk`What is your {yellow phone number}?`,
	name: 'yourPhoneNumber',
	type: InquiryTypes.input,

	when: ({ action, contactMethod }: DecisionTree): boolean => {
		return (
			action === Actions.RequestInterview &&
			contactMethod === ContactMethods.Call
		);
	},
	validate: (input: unknown) => {
		return isValidInput(input) && isValidPhoneNumber(input);
	},
});
