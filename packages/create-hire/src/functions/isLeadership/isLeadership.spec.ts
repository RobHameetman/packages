import chalk from 'chalk';
import { isLeadership } from './isLeadership';
import { RoleTiers } from './../../enums';

describe(chalk`isLeadership()`, (): void => {
	describe(chalk`given {cyan RoleTiers.SeniorLeadership}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isLeadership(RoleTiers.SeniorLeadership)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.Leadership}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isLeadership(RoleTiers.Leadership)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.Management}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isLeadership(RoleTiers.Management)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.SolutionOwner}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isLeadership(RoleTiers.SolutionOwner)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.TeamLead}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isLeadership(RoleTiers.TeamLead)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.SeniorContributor}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isLeadership(RoleTiers.SeniorContributor)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.IndividualContributor}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isLeadership(RoleTiers.IndividualContributor)).toBe(false);
		});
	});
});
