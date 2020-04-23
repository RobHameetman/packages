import chalk from 'chalk';
import { inquireAboutPay } from './inquireAboutPay';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutPay}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutPay()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue input}`, (): void => {
			expect(inquireAboutPay().type).toBe(InquiryTypes.input);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'pay'}`, (): void => {
			expect(inquireAboutPay().name).toBe('pay');
		});
	});
});
