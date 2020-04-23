import chalk from 'chalk';
import { inquireAboutYourEmailAddress } from './inquireAboutYourEmailAddress';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutYourEmailAddress}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutYourEmailAddress()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue input}`, (): void => {
			expect(inquireAboutYourEmailAddress().type).toBe(InquiryTypes.input);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'yourEmailAddress'}`, (): void => {
			expect(inquireAboutYourEmailAddress().name).toBe('yourEmailAddress');
		});
	});
});
