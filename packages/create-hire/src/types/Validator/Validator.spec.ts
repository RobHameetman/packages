import chalk from 'chalk';
import { isValidator } from './Validator';
import { invalidValidator, validValidator } from './__test__';

describe(chalk`isValidator()`, (): void => {
	describe(chalk`given a {green valid} Validator`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isValidator(validValidator, '"knownValidValue"')).toBe(true);
		});
	});

	describe(chalk`given an {red invalid} Validator`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isValidator(invalidValidator, '"knownValidValue"')).toBe(false);
		});
	});
});
