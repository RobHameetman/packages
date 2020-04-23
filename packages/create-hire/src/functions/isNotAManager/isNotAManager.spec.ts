import chalk from 'chalk';
import { isNotAManager } from './isNotAManager';
import { RoleTiers } from './../../enums';

describe(chalk`isNotAManager()`, (): void => {
	describe(chalk`given {cyan RoleTiers.SeniorLeadership}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotAManager(RoleTiers.SeniorLeadership)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.Leadership}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotAManager(RoleTiers.Leadership)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.Management}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isNotAManager(RoleTiers.Management)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.SolutionOwner}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotAManager(RoleTiers.SolutionOwner)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.TeamLead}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotAManager(RoleTiers.TeamLead)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.SeniorContributor}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotAManager(RoleTiers.SeniorContributor)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.IndividualContributor}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotAManager(RoleTiers.IndividualContributor)).toBe(true);
		});
	});
});
