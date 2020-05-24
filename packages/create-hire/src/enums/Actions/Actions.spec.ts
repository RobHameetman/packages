import chalk from 'chalk';
import { Actions, isAction } from './Actions';
import { invalidAction, validAction } from './__test__';

describe(chalk`Actions`, (): void => {
	it(chalk`should have at least {yellow 2} keys`, (): void => {
		expect(Object.keys(Actions).length).toBeGreaterThanOrEqual(2);
	});

	it(chalk`should have an {red exit} action`, (): void => {
		expect(
			Object.keys(Actions).some(key => /exit/i.test(key)),
		).toBe(true);
	});
});

describe(chalk`isAction()`, (): void => {
	describe(chalk`given a {green valid} string`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isAction(validAction)).toBe(true);
		});
	});

	describe(chalk`given an {red invalid} string`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAction(invalidAction)).toBe(false);
		});
	});
});
