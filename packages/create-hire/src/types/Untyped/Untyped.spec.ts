import chalk from 'chalk';
import { isUntyped } from './Untyped';
import { invalidObject, validObject } from './__test__';

describe(chalk`isUntyped()`, (): void => {
  describe(chalk`given a {green valid} Untyped`, (): void => {
    it(chalk`should return {magenta true}`, (): void => {
      expect(isUntyped(validObject)).toBe(true);
    });
  });

  describe(chalk`given an {red invalid} Untyped`, (): void => {
    it(chalk`should return {magenta false}`, (): void => {
      expect(isUntyped(invalidObject)).toBe(false);
    });
  });
});
