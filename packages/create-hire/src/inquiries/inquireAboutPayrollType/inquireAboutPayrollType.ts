import chalk from 'chalk';
import { ListQuestion } from 'inquirer';
import { Actions, PayrollTypes, InquiryTypes } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';

type Question = ListQuestion<DecisionTree>;

export const inquireAboutPayrollType: Inquiry<Question> = () => ({
	prefix: '💳',
	message: chalk`What type of {yellow billing} is used for this role?`,
	name: 'payrollType',
	type: InquiryTypes.list,
	default: PayrollTypes.Salary,

	choices: [
		{
			name: PayrollTypes.Salary,
			value: PayrollTypes.Salary,
		},
		{
			name: PayrollTypes.Hourly,
			value: PayrollTypes.Hourly,
		},
	],

	when: ({ action }: DecisionTree): boolean => {
		return action === Actions.RequestInterview;
	},
});
