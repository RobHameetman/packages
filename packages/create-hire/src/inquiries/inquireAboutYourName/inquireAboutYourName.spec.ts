import chalk from 'chalk';
import { inquireAboutYourName } from './inquireAboutYourName';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutYourName}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutYourName()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue input}`, (): void => {
			expect(inquireAboutYourName().type).toBe(InquiryTypes.input);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'yourName'}`, (): void => {
			expect(inquireAboutYourName().name).toBe('yourName');
		});
	});
});
