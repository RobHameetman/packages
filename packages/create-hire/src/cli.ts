#!/usr/bin/env node

import chalk from 'chalk';
import { BANNER_RECT } from '@rob.hameetman/cli-banners';
import gstring from 'gradient-string';
import { program } from 'commander';
import { createPromptModule } from 'inquirer';
import { DecisionTree, createDecisionTree } from './types';
import { Actions } from './enums';
import { handleDecisions } from './functions';
import {
	inquireAboutAction,
	inquireAboutProjectToView,
	inquireAboutYourName,
	inquireAboutYourCompany,
	inquireAboutContactMethod,
	inquireAboutYourEmailAddress,
	inquireAboutYourPhoneNumber,
	inquireAboutTitle,
	inquireAboutPayrollType,
	inquireAboutPay,
} from './inquiries';

(async (): Promise<void> => {
	try {
		const gradient = gstring('#ed646f', '#7D0021');

		console.clear();
		console.log(gradient(BANNER_RECT));

		let decisions: DecisionTree = createDecisionTree();
		let actionFromArgs: Actions | null = null;

		program
			.version('0.1.0')
			.option('-r, --resume', 'Review my resume')
			.option('-i, --interview', 'Request an interview')
			.parse(process.argv);

		const { interview = false, resume = false } = program;

		if (resume || interview) {
			if (resume) {
				actionFromArgs = Actions.ReviewResume;
			}

			if (interview) {
				actionFromArgs = Actions.RequestInterview;
			}
		}

		decisions = {
			...decisions,
			action: actionFromArgs ? actionFromArgs : decisions.action,
		};

		const prompt = createPromptModule();

		decisions = {
			...decisions,
			...(await prompt([
				inquireAboutAction(),
				inquireAboutProjectToView(),
				inquireAboutYourName(),
				inquireAboutYourCompany(),
				inquireAboutContactMethod(),
				inquireAboutYourEmailAddress(),
				inquireAboutYourPhoneNumber(),
				inquireAboutTitle(),
				inquireAboutPayrollType(),
				inquireAboutPay(),
			])),
		};

		await handleDecisions(decisions);
	} catch (err) {
		console.error(chalk`
      {red ${err.message}}\n
      ${err.stack}
    `);

		process.exit(1);
	}
})();
