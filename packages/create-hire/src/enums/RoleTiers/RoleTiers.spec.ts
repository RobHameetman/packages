import chalk from 'chalk';
import { RoleTiers, isRoleTier } from './RoleTiers';
import {
	invalidInquiryType,
	nativePrompts,
	validInquiryType,
} from './__test__';

describe(chalk`RoleTiers`, (): void => {
	it(
		chalk`should have {yellow 9} keys {grey (1 for each native prompt type)}`,
		(): void => {
			expect(Object.keys(RoleTiers).length).toBe(nativePrompts.length);
			expect(Object.keys(RoleTiers).sort()).toEqual(nativePrompts.sort());
		},
	);
});

describe(chalk`isRoleTier()`, (): void => {
	describe(chalk`given a {green valid} string`, (): void => {
		it(chalk`should return {magenta true}`, (): void => {
			expect(isRoleTier(validInquiryType)).toBe(true);
		});
	});

	describe(chalk`given an {red invalid} string`, (): void => {
		it(chalk`should return {magenta false}`, (): void => {
			expect(isRoleTier(invalidInquiryType)).toBe(false);
		});
	});
});
