import chalk from 'chalk';
import { inquireAboutYourCompany } from './inquireAboutYourCompany';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutYourCompany}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutYourCompany()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue input}`, (): void => {
			expect(inquireAboutYourCompany().type).toBe(InquiryTypes.input);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'yourCompany'}`, (): void => {
			expect(inquireAboutYourCompany().name).toBe('yourCompany');
		});
	});
});
