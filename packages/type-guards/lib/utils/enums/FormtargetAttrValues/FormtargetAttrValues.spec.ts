import { isFormtargetAttrValue } from './FormtargetAttrValues';

describe('isFormtargetAttrValue()', () => {
	it('should return true given the string value "_blank"', () => {
		expect(isFormtargetAttrValue('_blank')).toBe(true);
	});

	it('should return true given the string value "_parent"', () => {
		expect(isFormtargetAttrValue('_parent')).toBe(true);
	});

	it('should return true given the string value "_self"', () => {
		expect(isFormtargetAttrValue('_self')).toBe(true);
	});

	it('should return true given the string value "_top"', () => {
		expect(isFormtargetAttrValue('_top')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isFormtargetAttrValue('')).toBe(false);
	});
});
