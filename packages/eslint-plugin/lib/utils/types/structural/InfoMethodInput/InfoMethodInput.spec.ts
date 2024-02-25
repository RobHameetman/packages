import { isInfoMethodInput } from './InfoMethodInput';
import { fakeInfoMethodInput } from './__test__';

describe('isInfoMethodInput()', () => {
	it('should return true given a valid InfoMethodInput', () => {
		expect(isInfoMethodInput(fakeInfoMethodInput())).toBe(true);
	});

	it('should return false given an invalid InfoMethodInput', () => {
		expect(isInfoMethodInput(fakeInfoMethodInput({ recommended: false }))).toBe(false);
	});
});
