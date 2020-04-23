import chalk from 'chalk';
import { isNotManagement } from './isNotManagement';
import { RoleTiers } from './../../enums';

describe(chalk`isNotManagement()`, (): void => {
	describe(chalk`given {cyan RoleTiers.SeniorLeadership}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isNotManagement(RoleTiers.SeniorLeadership)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.Leadership}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isNotManagement(RoleTiers.Leadership)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.Management}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isNotManagement(RoleTiers.Management)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.SolutionOwner}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotManagement(RoleTiers.SolutionOwner)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.TeamLead}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotManagement(RoleTiers.TeamLead)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.SeniorContributor}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotManagement(RoleTiers.SeniorContributor)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.IndividualContributor}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotManagement(RoleTiers.IndividualContributor)).toBe(true);
		});
	});
});
