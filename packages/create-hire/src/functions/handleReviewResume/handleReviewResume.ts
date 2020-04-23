import chalk from 'chalk';
import { DecisionTree } from '../../types';
import open from 'open';

export const handleReviewResume = async (
	_: DecisionTree,
	openBrowserAtUrl: Function = open,
): Promise<void> => {
	const url = 'https://robhameetman.com/resume.pdf';

	console.log(chalk`\n{green ⏳ Opening default browser to:}\n{cyan ${url}}\n`);

	await openBrowserAtUrl(url);
};
