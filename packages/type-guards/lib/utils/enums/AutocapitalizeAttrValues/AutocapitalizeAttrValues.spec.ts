import { isAutocapitalizeAttrValue } from './AutocapitalizeAttrValues';

describe('isAutocapitalizeAttrValue()', () => {
	it('should return true given the string value "characters"', () => {
		expect(isAutocapitalizeAttrValue('characters')).toBe(true);
	});

	it('should return true given the string value "none"', () => {
		expect(isAutocapitalizeAttrValue('none')).toBe(true);
	});

	it('should return true given the string value "off"', () => {
		expect(isAutocapitalizeAttrValue('off')).toBe(true);
	});

	it('should return true given the string value "on"', () => {
		expect(isAutocapitalizeAttrValue('on')).toBe(true);
	});

	it('should return true given the string value "sentences"', () => {
		expect(isAutocapitalizeAttrValue('sentences')).toBe(true);
	});

	it('should return true given the string value "words"', () => {
		expect(isAutocapitalizeAttrValue('words')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isAutocapitalizeAttrValue('')).toBe(false);
	});
});
