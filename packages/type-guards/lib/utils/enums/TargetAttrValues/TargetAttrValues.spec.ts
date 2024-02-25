import { isTargetAttrValue } from './TargetAttrValues';
import { randomTargetAttrValue } from './__test__';
import { randomInvalidStringEnumValue } from '@test/utils';

describe('isTargetAttrValue()', () => {
	it('should return true given a valid TargetAttrValue', () => {
		expect(isTargetAttrValue(randomTargetAttrValue())).toBe(true);
	});

	it('should return false given an invalid TargetAttrValue', () => {
		expect(isTargetAttrValue(randomInvalidStringEnumValue())).toBe(false);
	});

	it('should return false given an empty string', () => {
		expect(isTargetAttrValue('')).toBe(false);
	});
});
