import chalk from 'chalk';
import { ContactMethods, isContactMethod } from './ContactMethods';
import { invalidContactMethod, validContactMethod } from './__test__';

describe(chalk`ContactMethods`, (): void => {
	it(chalk`should have {yellow 2} keys`, (): void => {
		expect(Object.keys(ContactMethods).length).toBe(2);
	});
});

describe(chalk`isContactMethod()`, (): void => {
	describe(chalk`given a {green valid} string`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isContactMethod(validContactMethod)).toBe(true);
		});
	});

	describe(chalk`given an {red invalid} string`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isContactMethod(invalidContactMethod)).toBe(false);
		});
	});
});
