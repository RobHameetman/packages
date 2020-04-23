import chalk from 'chalk';
import { inquireAboutContactMethod } from './inquireAboutContactMethod';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutContactMethod}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutContactMethod()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue list}`, (): void => {
			expect(inquireAboutContactMethod().type).toBe(InquiryTypes.list);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'contactMethod'}`, (): void => {
			expect(inquireAboutContactMethod().name).toBe('contactMethod');
		});
	});
});
