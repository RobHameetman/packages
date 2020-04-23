import { DecisionTree } from '../../types';
import open from 'open';
import chalk from 'chalk';
import { PublicProjects } from './../../enums';

export const handleBrowseProjects = async (
	{ projectToView }: DecisionTree,
	openBrowserAtUrl: Function = open,
): Promise<void> => {
	let url = '';

	switch (projectToView) {
		case PublicProjects.Packages:
			url = 'https://github.com/RobHameetman/packages';
			break;
		case PublicProjects.ShadowUI:
			url = 'https://github.com/RobHameetman/shadow-ui';
			break;
		case PublicProjects.MicroFe:
			url = 'https://github.com/RobHameetman/micro-fe';
			break;
		default:
			break;
	}

	console.log(chalk`\n{green 🙌 Opening default browser to:}\n{cyan ${url}}\n`);

	if (url) {
		await openBrowserAtUrl(url);
	}
};
