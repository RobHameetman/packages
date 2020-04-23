import chalk from 'chalk';
import { inquireAboutTitle } from './inquireAboutTitle';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutTitle}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutTitle()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue list}`, (): void => {
			expect(inquireAboutTitle().type).toBe(InquiryTypes.list);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'title'}`, (): void => {
			expect(inquireAboutTitle().name).toBe('title');
		});
	});
});
