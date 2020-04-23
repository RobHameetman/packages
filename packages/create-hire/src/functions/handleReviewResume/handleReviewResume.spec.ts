import chalk from 'chalk';
import { handleReviewResume } from './handleReviewResume';
import { createDecisionTree } from '../../types';
import { stub } from './__test__';

describe(chalk`handleReviewResume()`, (): void => {
	beforeEach((): void => {
		handleReviewResume(createDecisionTree(), stub);
	});

	it(chalk`should open my resume in the user's default browser`, (): void => {
		expect(stub).toHaveBeenCalled();
	});
});
