import { DecisionTree } from '../../../types';
import { handleDecisions } from '../handleDecisions';
import { handleReviewResumeStub } from './handleReviewResumeStub';
import { handleRequestInterviewStub } from './handleRequestInterviewStub';
import { handleBrowseProjectsStub } from './handleBrowseProjectsStub';

export const handleDecisionsWithStubs = (decisions: DecisionTree) =>
	handleDecisions(
		decisions,
		handleReviewResumeStub,
		handleRequestInterviewStub,
		handleBrowseProjectsStub,
	);
