import chalk from 'chalk';
import { ListQuestion } from 'inquirer';
import { Actions, PublicProjects, InquiryTypes } from '../../enums';
import { Inquiry, DecisionTree } from '../../types';

type Question = ListQuestion<DecisionTree>;

export const inquireAboutProjectToView: Inquiry<Question> = () => ({
	prefix: '🛠 ',
	message: chalk`Which {yellow project} would you like to see?`,
	name: 'projectToView',
	type: InquiryTypes.list,

	choices: [
		{
			name: (PublicProjects.MicroFe as unknown) as string,
			value: PublicProjects.MicroFe,
		},
		{
			name: (PublicProjects.Packages as unknown) as string,
			value: PublicProjects.Packages,
		},
		{
			name: (PublicProjects.ShadowUI as unknown) as string,
			value: PublicProjects.ShadowUI,
		},
	],

	when: ({ action }: DecisionTree): boolean => {
		return action === Actions.BrowseProjects;
	},
});
