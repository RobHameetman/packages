import chalk from 'chalk';
import { inquireAboutPayrollType } from './inquireAboutPayrollType';
import { InquiryTypes } from '../../enums';

describe(chalk`{green inquireAboutPayrollType}()`, (): void => {
	it(chalk`should create`, (): void => {
		expect(inquireAboutPayrollType()).toBeTruthy();
	});

	describe(chalk`type`, (): void => {
		it(chalk`should be {blue list}`, (): void => {
			expect(inquireAboutPayrollType().type).toBe(InquiryTypes.list);
		});
	});

	describe(chalk`name`, (): void => {
		it(chalk`should be {green 'payrollType'}`, (): void => {
			expect(inquireAboutPayrollType().name).toBe('payrollType');
		});
	});
});
