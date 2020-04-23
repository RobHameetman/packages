import chalk from 'chalk';
import { inquireAboutProjectToView } from './inquireAboutProjectToView';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutProjectToView}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutProjectToView()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue list}`, (): void => {
			expect(inquireAboutProjectToView().type).toBe(InquiryTypes.list);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'projectToView'}`, (): void => {
			expect(inquireAboutProjectToView().name).toBe('projectToView');
		});
	});
});
