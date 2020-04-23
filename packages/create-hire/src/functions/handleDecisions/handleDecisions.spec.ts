import chalk from 'chalk';
import { handleDecisions } from './handleDecisions';
import { createDecisionTree } from '../../types';
import { Actions } from './../../enums';
import {
	handleBrowseProjectsStub,
	// handleDecisionsWithStubs,
	handleRequestInterviewStub,
	handleReviewResumeStub,
} from './__test__';

describe(chalk`handleDecisions()`, (): void => {
	describe(chalk`given {cyan Actions.BrowseProjects}`, (): void => {
		beforeEach((): void => {
			handleDecisions(
				createDecisionTree({ action: Actions.BrowseProjects }),
				handleReviewResumeStub,
				handleBrowseProjectsStub,
				handleRequestInterviewStub,
			);
		});

		it(chalk`should allow the user to browse public projects`, (): void => {
			expect(handleBrowseProjectsStub).toHaveBeenCalled();
		});
	});

	describe(chalk`given {cyan Actions.RequestInterview}`, (): void => {
		beforeEach((): void => {
			handleDecisions(
				createDecisionTree({ action: Actions.RequestInterview }),
				handleReviewResumeStub,
				handleBrowseProjectsStub,
				handleRequestInterviewStub,
			);
		});

		it(chalk`should allow the user to request an interview`, (): void => {
			expect(handleRequestInterviewStub).toHaveBeenCalled();
		});
	});

	describe(chalk`given {cyan Actions.ReviewResume}`, (): void => {
		beforeEach((): void => {
			handleDecisions(
				createDecisionTree({ action: Actions.ReviewResume }),
				handleReviewResumeStub,
				handleBrowseProjectsStub,
				handleRequestInterviewStub,
			);
		});

		it(chalk`should allow the user to review my resume`, (): void => {
			expect(handleReviewResumeStub).toHaveBeenCalled();
		});
	});
});
