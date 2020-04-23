import chalk from 'chalk';
import { isInquiry } from './Inquiry';
import { invalidInquiry, validInquiry } from './__test__';

describe(chalk`isInquiry()`, (): void => {
  describe(chalk`given a {green valid} Inquiry`, (): void => {
    it(chalk`should return {magenta true}`, (): void => {
      expect(isInquiry(validInquiry)).toBe(true);
    });
  });

  describe(chalk`given an {red invalid} Inquiry`, (): void => {
    it(chalk`should return {magenta false}`, (): void => {
      expect(isInquiry(invalidInquiry)).toBe(false);
    });
  });
});
