import { createDecisionTree } from '../../../types';
import { handleDecisions } from '../handleDecisions';
import { handleReviewResumeStub } from './handleReviewResumeStub';
import { handleRequestInterviewStub } from './handleRequestInterviewStub';
import { handleBrowseProjectsStub } from './handleBrowseProjectsStub';

export const handleDecisionsWithStubsFor = (action: string) =>
	handleDecisions(
		createDecisionTree({ action }),
		handleReviewResumeStub,
		handleRequestInterviewStub,
		handleBrowseProjectsStub,
	);
