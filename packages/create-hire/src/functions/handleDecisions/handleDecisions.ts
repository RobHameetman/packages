import { DecisionTree } from '../../types';
import { Actions, isAction } from './../../enums';
import { handleReviewResume as _handleReviewResume } from '../handleReviewResume';
import { handleBrowseProjects as _handleBrowseProjects } from '../handleBrowseProjects';
import { handleRequestInterview as _handleRequestInterview } from '../handleRequestInterview';

export const handleDecisions = async (
	decisions: DecisionTree,
	...handlers: Array<Function>
): Promise<void> => {
	const { action = Actions.Exit } = decisions;

	const applicableHandlers = handlers.filter(
		(handler) =>
			typeof handler === 'function' &&
			isAction(action) &&
			handler.name.startsWith('handle') &&
			handler.name.endsWith(Actions[action]),
	);

	const [handle] = applicableHandlers;

	if (!handle) {
		throw new Error(`Missing handler for action ${action}`);
	}

	if (applicableHandlers.length > 1) {
		console.warn(`Received multiple handlers for action ${action}`);
	}

	handle(action);
};
