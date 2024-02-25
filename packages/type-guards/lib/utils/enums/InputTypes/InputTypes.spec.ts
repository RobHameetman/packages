import { isAnyInputType, isInputType, isObsoleteInputType } from './InputTypes';
import { randomAnyInputType, randomInputType, randomObsoleteInputType } from './__test__';
import { randomInvalidStringEnumValue } from '@test/utils';

describe('isAnyInputType()', () => {
	it('should return true given a valid AnyInputType', () => {
		expect(isAnyInputType(randomAnyInputType())).toBe(true);
	});

	it('should return false given an invalid AnyInputType', () => {
		expect(isAnyInputType(randomInvalidStringEnumValue())).toBe(false);
	});

	it('should return true given an ObsoleteInputType', () => {
		expect(isAnyInputType(randomObsoleteInputType())).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isAnyInputType('')).toBe(false);
	});
});

describe('isInputType()', () => {
	it('should return true given a valid InputType', () => {
		expect(isInputType(randomInputType())).toBe(true);
	});

	it('should return false given an invalid InputType', () => {
		expect(isInputType(randomInvalidStringEnumValue())).toBe(false);
	});

	it('should return false given an ObsoleteInputType', () => {
		expect(isInputType(randomObsoleteInputType())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isInputType('')).toBe(false);
	});
});

describe('isObsoleteInputType()', () => {
	it('should return false given a valid InputType', () => {
		expect(isObsoleteInputType(randomInputType())).toBe(false);
	});

	it('should return false given an invalid InputType', () => {
		expect(isObsoleteInputType(randomInvalidStringEnumValue())).toBe(false);
	});

	it('should return true given an ObsoleteInputType', () => {
		expect(isObsoleteInputType(randomObsoleteInputType())).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isObsoleteInputType('')).toBe(false);
	});
});
