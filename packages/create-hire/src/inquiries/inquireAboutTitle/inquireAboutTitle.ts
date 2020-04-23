import chalk from 'chalk';
import { ListQuestion } from 'inquirer';
import { Actions, RoleTiers, InquiryTypes } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';

type Question = ListQuestion<DecisionTree>;

export const inquireAboutTitle: Inquiry<Question> = () => ({
	prefix: '📑',
	message: chalk`Which of these choices best describes this {yellow role}?`,
	name: 'title',
	type: InquiryTypes.list,

	choices: [
		{
			name: RoleTiers.SeniorLeadership,
			value: RoleTiers.SeniorLeadership,
		},
		{
			name: RoleTiers.Leadership,
			value: RoleTiers.Leadership,
		},
		{
			name: RoleTiers.Management,
			value: RoleTiers.Management,
		},
		{
			name: RoleTiers.SolutionOwner,
			value: RoleTiers.SolutionOwner,
		},
		{
			name: RoleTiers.TeamLead,
			value: RoleTiers.TeamLead,
		},
		{
			name: RoleTiers.SeniorContributor,
			value: RoleTiers.SeniorContributor,
		},
		{
			name: RoleTiers.IndividualContributor,
			value: RoleTiers.IndividualContributor,
		},
	],

	when: ({ action }: DecisionTree): boolean => {
		return action === Actions.RequestInterview;
	},
});
