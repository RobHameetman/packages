import chalk from 'chalk';
import { Actions } from './../../enums';
import {
	handleBrowseProjectsStub,
	handleDecisionsWithStubsFor,
	handleRequestInterviewStub,
	handleReviewResumeStub,
} from './__test__';

describe(chalk`handleDecisions()`, (): void => {
	describe(chalk`given {cyan Actions.BrowseProjects}`, (): void => {
		beforeEach((): void => {
			handleDecisionsWithStubsFor(Actions.BrowseProjects);
		});

		it(chalk`should allow the user to browse public projects`, (): void => {
			expect(handleBrowseProjectsStub).toHaveBeenCalled();
		});
	});

	describe(chalk`given {cyan Actions.RequestInterview}`, (): void => {
		beforeEach((): void => {
			handleDecisionsWithStubsFor(Actions.RequestInterview);
		});

		it(chalk`should allow the user to request an interview`, (): void => {
			expect(handleRequestInterviewStub).toHaveBeenCalled();
		});
	});

	describe(chalk`given {cyan Actions.ReviewResume}`, (): void => {
		beforeEach((): void => {
			handleDecisionsWithStubsFor(Actions.ReviewResume);
		});

		it(chalk`should allow the user to review my resume`, (): void => {
			expect(handleReviewResumeStub).toHaveBeenCalled();
		});
	});
});
