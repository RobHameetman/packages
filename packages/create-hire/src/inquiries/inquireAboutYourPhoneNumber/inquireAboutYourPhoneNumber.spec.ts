import chalk from 'chalk';
import { inquireAboutYourPhoneNumber } from './inquireAboutYourPhoneNumber';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutYourPhoneNumber}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutYourPhoneNumber()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue input}`, (): void => {
			expect(inquireAboutYourPhoneNumber().type).toBe(InquiryTypes.input);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'yourPhoneNumber'}`, (): void => {
			expect(inquireAboutYourPhoneNumber().name).toBe('yourPhoneNumber');
		});
	});
});
