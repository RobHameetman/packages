import chalk from 'chalk';
import { InputQuestion } from 'inquirer';
import { Actions, PayrollTypes, InquiryTypes } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';
import { isValidInput } from '../../validators';

type Question = InputQuestion<DecisionTree>;

export const inquireAboutPay: Inquiry<Question> = () => ({
	prefix: '💵',
	message: ({ payrollType = PayrollTypes.Salary }) =>
		chalk`What {yellow ${
			payrollType === PayrollTypes.Salary ? 'salary range' : 'rate'
		}} are you offering for this role (e.g. ${
			payrollType === PayrollTypes.Salary
				? '"$120,000 - $170,000"'
				: '"$100 - $130"'
		})?`,
	name: 'pay',
	type: InquiryTypes.input,

	when: ({ action }): boolean => {
		return action === Actions.RequestInterview;
	},
	validate: (input: unknown) => {
		return isValidInput(input);
	},
});
