import chalk from 'chalk';
import { InquiryTypes, isInquiryType } from './InquiryTypes';
import { invalidInquiryType, nativePrompts, validInquiryType } from './__test__';

describe(chalk`InquiryTypes`, (): void => {
  it(chalk`should have {yellow 9} keys {grey (1 for each native prompt type)}`, (): void => {
    expect(Object.keys(InquiryTypes).length).toBe(nativePrompts.length);
    expect(Object.keys(InquiryTypes).sort()).toEqual(nativePrompts.sort());
  });
});

describe(chalk`isInquiryType()`, (): void => {
  describe(chalk`given a {green valid} string`, (): void => {
    it(chalk`should return {magenta true}`, (): void => {
      expect(isInquiryType(validInquiryType)).toBe(true);
    });
  });

  describe(chalk`given an {red invalid} string`, (): void => {
    it(chalk`should return {magenta false}`, (): void => {
      expect(isInquiryType(invalidInquiryType)).toBe(false);
    });
  });
});
