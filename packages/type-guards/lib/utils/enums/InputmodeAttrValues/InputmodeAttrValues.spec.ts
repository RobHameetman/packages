import { isInputmodeAttrValue } from './InputmodeAttrValues';
import { randomInputmodeAttrValue } from './__test__';
import { randomInvalidStringEnumValue } from '@test/utils';

describe('isInputmodeAttrValue()', () => {
	it('should return true given a valid InputmodeAttrValue', () => {
		expect(isInputmodeAttrValue(randomInputmodeAttrValue())).toBe(true);
	});

	it('should return false given an invalid InputmodeAttrValue', () => {
		expect(isInputmodeAttrValue(randomInvalidStringEnumValue())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isInputmodeAttrValue('')).toBe(false);
	});
});
