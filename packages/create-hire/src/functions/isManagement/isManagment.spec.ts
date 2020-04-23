import chalk from 'chalk';
import { isManagement } from './isManagement';
import { RoleTiers } from './../../enums';

describe(chalk`isManagement()`, (): void => {
	describe(chalk`given {cyan RoleTiers.SeniorLeadership}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isManagement(RoleTiers.SeniorLeadership)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.Leadership}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isManagement(RoleTiers.Leadership)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.Management}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isManagement(RoleTiers.Management)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.SolutionOwner}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isManagement(RoleTiers.SolutionOwner)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.TeamLead}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isManagement(RoleTiers.TeamLead)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.SeniorContributor}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isManagement(RoleTiers.SeniorContributor)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.IndividualContributor}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isManagement(RoleTiers.IndividualContributor)).toBe(false);
		});
	});
});
