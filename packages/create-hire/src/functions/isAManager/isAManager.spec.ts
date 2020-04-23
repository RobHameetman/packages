import chalk from 'chalk';
import { isAManager } from './isAManager';
import { RoleTiers } from './../../enums';

describe(chalk`isAManager()`, (): void => {
	describe(chalk`given {cyan RoleTiers.SeniorLeadership}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAManager(RoleTiers.SeniorLeadership)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.Leadership}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAManager(RoleTiers.Leadership)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.Management}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isAManager(RoleTiers.Management)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.SolutionOwner}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAManager(RoleTiers.SolutionOwner)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.TeamLead}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAManager(RoleTiers.TeamLead)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.SeniorContributor}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAManager(RoleTiers.SeniorContributor)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.IndividualContributor}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isAManager(RoleTiers.IndividualContributor)).toBe(false);
		});
	});
});
