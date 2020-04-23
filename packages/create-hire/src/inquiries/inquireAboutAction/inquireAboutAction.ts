import chalk from 'chalk';
import { ListQuestion } from 'inquirer';
import { Actions, InquiryTypes } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';

type Question = ListQuestion<DecisionTree>;

export const inquireAboutAction: Inquiry<Question> = () => ({
	prefix: '💼',
	message: chalk`Welcome! What would you like to do?`,
	name: 'action',
	type: InquiryTypes.list,
	default: Actions.RequestInterview,

	choices: [
		{
			name: Actions.ReviewResume,
			value: Actions.ReviewResume,
		},
		{
			name: Actions.BrowseProjects,
			value: Actions.BrowseProjects,
		},
		{
			name: Actions.RequestInterview,
			value: Actions.RequestInterview,
		},
	],
});
