import chalk from 'chalk';
import { handleBrowseProjects } from './handleBrowseProjects';
import { PublicProjects } from '../../enums';
import { createDecisionTree } from '../../types';
import { stub } from './__test__';

describe(chalk`handleBrowseProjects()`, (): void => {
	describe(chalk`given {cyan PublicProjects.Packages}`, (): void => {
		beforeEach((): void => {
			handleBrowseProjects(
				createDecisionTree({ projectToView: PublicProjects.Packages }),
				stub,
			);
		});

		it(
			chalk`should open the project in the user's default browser`,
			(): void => {
				expect(stub).toHaveBeenCalled();
			},
		);
	});
});
