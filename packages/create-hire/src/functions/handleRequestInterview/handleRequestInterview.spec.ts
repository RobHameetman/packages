import { handleRequestInterview } from './handleRequestInterview';
import chalk from 'chalk';
import { createDecisionTree } from '../../types';

describe(chalk`handleRequestInterview()`, (): void => {
	describe(chalk`given a {cyan DecisionTree}`, (): void => {
		const stub = jest.fn();

		beforeEach((): void => {
			handleRequestInterview(createDecisionTree(), stub);
		});

		it(
			chalk`should send me a text message with the received input data`,
			(): void => {
				expect(stub).toHaveBeenCalled();
			},
		);
	});
});
