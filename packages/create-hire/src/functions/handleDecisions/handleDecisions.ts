import { DecisionTree } from '../../types';
import { Actions } from './../../enums';
import { handleReviewResume as _handleReviewResume } from '../handleReviewResume';
import { handleBrowseProjects as _handleBrowseProjects } from '../handleBrowseProjects';
import { handleRequestInterview as _handleRequestInterview } from '../handleRequestInterview';

export const handleDecisions = async (
	decisions: DecisionTree,
	handleReviewResume: Function = _handleReviewResume,
	handleBrowseProjects: Function = _handleBrowseProjects,
	handleRequestInterview: Function = _handleRequestInterview,
): Promise<void> => {
	switch (decisions.action) {
		case Actions.ReviewResume:
			handleReviewResume(decisions);
			break;
		case Actions.BrowseProjects:
			handleBrowseProjects(decisions);
			break;
		case Actions.RequestInterview:
			handleRequestInterview(decisions);
			break;
		default:
			break;
	}
};
