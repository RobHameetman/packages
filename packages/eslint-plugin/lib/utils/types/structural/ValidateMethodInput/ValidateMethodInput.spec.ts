import { ValidateMethodInput, isValidateMethodInput } from './ValidateMethodInput';
import { fakeValidateMethodInput } from './__test__';

describe('isValidateMethodInput()', () => {
	it('should return true given a valid ValidateMethodInput', () => {
		expect(isValidateMethodInput(fakeValidateMethodInput())).toBe(true);
	});

	it('should return false given an invalid ValidateMethodInput', () => {
		expect(isValidateMethodInput(fakeValidateMethodInput({ check: null }))).toBe(false);
	});
});
