import chalk from 'chalk';
import { inquireAboutAction } from './inquireAboutAction';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutAction}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutAction()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue list}`, (): void => {
			expect(inquireAboutAction().type).toBe(InquiryTypes.list);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'action'}`, (): void => {
			expect(inquireAboutAction().name).toBe('action');
		});
	});
});
