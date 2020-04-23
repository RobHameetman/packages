import chalk from 'chalk';
import { isNotLeadership } from './isNotLeadership';
import { RoleTiers } from './../../enums';

describe(chalk`isNotLeadership()`, (): void => {
	describe(chalk`given {cyan RoleTiers.SeniorLeadership}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isNotLeadership(RoleTiers.SeniorLeadership)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.Leadership}`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isNotLeadership(RoleTiers.Leadership)).toBe(false);
		});
	});

	describe(chalk`given {cyan RoleTiers.Management}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotLeadership(RoleTiers.Management)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.SolutionOwner}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotLeadership(RoleTiers.SolutionOwner)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.TeamLead}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotLeadership(RoleTiers.TeamLead)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.SeniorContributor}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotLeadership(RoleTiers.SeniorContributor)).toBe(true);
		});
	});

	describe(chalk`given {cyan RoleTiers.IndividualContributor}`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isNotLeadership(RoleTiers.IndividualContributor)).toBe(true);
		});
	});
});
