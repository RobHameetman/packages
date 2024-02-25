import { isAutocompleteAttrValue } from './AutocompleteAttrValues';

describe('isAutocompleteAttrValue()', () => {
	it('should return true given the string value "billing"', () => {
		expect(isAutocompleteAttrValue('billing')).toBe(true);
	});

	it('should return true given the string value "address-level1"', () => {
		expect(isAutocompleteAttrValue('address-level1')).toBe(true);
	});

	it('should return true given the string value "address-level2"', () => {
		expect(isAutocompleteAttrValue('address-level2')).toBe(true);
	});

	it('should return true given the string value "address-level3"', () => {
		expect(isAutocompleteAttrValue('address-level3')).toBe(true);
	});

	it('should return true given the string value "address-level4"', () => {
		expect(isAutocompleteAttrValue('address-level4')).toBe(true);
	});

	it('should return true given the string value "address-line1"', () => {
		expect(isAutocompleteAttrValue('address-line1')).toBe(true);
	});

	it('should return true given the string value "address-line2"', () => {
		expect(isAutocompleteAttrValue('address-line2')).toBe(true);
	});

	it('should return true given the string value "address-line3"', () => {
		expect(isAutocompleteAttrValue('address-line3')).toBe(true);
	});

	it('should return true given the string value "shipping"', () => {
		expect(isAutocompleteAttrValue('shipping')).toBe(true);
	});

	it('should return true given the string value "street-address"', () => {
		expect(isAutocompleteAttrValue('street-address')).toBe(true);
	});

	it('should return true given the string value "country"', () => {
		expect(isAutocompleteAttrValue('country')).toBe(true);
	});

	it('should return true given the string value "country-name"', () => {
		expect(isAutocompleteAttrValue('country-name')).toBe(true);
	});

	it('should return true given the string value "bday"', () => {
		expect(isAutocompleteAttrValue('bday')).toBe(true);
	});

	it('should return true given the string value "bday-day"', () => {
		expect(isAutocompleteAttrValue('bday-day')).toBe(true);
	});

	it('should return true given the string value "bday-month"', () => {
		expect(isAutocompleteAttrValue('bday-month')).toBe(true);
	});

	it('should return true given the string value "bday-year"', () => {
		expect(isAutocompleteAttrValue('bday-year')).toBe(true);
	});

	it('should return true given the string value "cc-name"', () => {
		expect(isAutocompleteAttrValue('cc-name')).toBe(true);
	});

	it('should return true given the string value "cc-given-name"', () => {
		expect(isAutocompleteAttrValue('cc-given-name')).toBe(true);
	});

	it('should return true given the string value "cc-additional-name"', () => {
		expect(isAutocompleteAttrValue('cc-additional-name')).toBe(true);
	});

	it('should return true given the string value "cc-family-name"', () => {
		expect(isAutocompleteAttrValue('cc-family-name')).toBe(true);
	});

	it('should return true given the string value "cc-number"', () => {
		expect(isAutocompleteAttrValue('cc-number')).toBe(true);
	});

	it('should return true given the string value "cc-exp"', () => {
		expect(isAutocompleteAttrValue('cc-exp')).toBe(true);
	});

	it('should return true given the string value "cc-exp-month"', () => {
		expect(isAutocompleteAttrValue('cc-exp-month')).toBe(true);
	});

	it('should return true given the string value "cc-exp-year"', () => {
		expect(isAutocompleteAttrValue('cc-exp-year')).toBe(true);
	});

	it('should return true given the string value "cc-csc"', () => {
		expect(isAutocompleteAttrValue('cc-csc')).toBe(true);
	});

	it('should return true given the string value "cc-type"', () => {
		expect(isAutocompleteAttrValue('cc-type')).toBe(true);
	});

	it('should return true given the string value "email"', () => {
		expect(isAutocompleteAttrValue('email')).toBe(true);
	});

	it('should return true given the string value "impp"', () => {
		expect(isAutocompleteAttrValue('impp')).toBe(true);
	});

	it('should return true given the string value "language"', () => {
		expect(isAutocompleteAttrValue('language')).toBe(true);
	});

	it('should return true given the string value "name"', () => {
		expect(isAutocompleteAttrValue('name')).toBe(true);
	});

	it('should return true given the string value "additional-name"', () => {
		expect(isAutocompleteAttrValue('additional-name')).toBe(true);
	});

	it('should return true given the string value "family-name"', () => {
		expect(isAutocompleteAttrValue('family-name')).toBe(true);
	});

	it('should return true given the string value "given-name"', () => {
		expect(isAutocompleteAttrValue('given-name')).toBe(true);
	});

	it('should return true given the string value "honorific-prefix"', () => {
		expect(isAutocompleteAttrValue('honorific-prefix')).toBe(true);
	});

	it('should return true given the string value "honorific-suffix"', () => {
		expect(isAutocompleteAttrValue('honorific-suffix')).toBe(true);
	});

	it('should return true given the string value "nickname"', () => {
		expect(isAutocompleteAttrValue('nickname')).toBe(true);
	});

	it('should return true given the string value "off"', () => {
		expect(isAutocompleteAttrValue('off')).toBe(true);
	});

	it('should return true given the string value "on"', () => {
		expect(isAutocompleteAttrValue('on')).toBe(true);
	});

	it('should return true given the string value "organization"', () => {
		expect(isAutocompleteAttrValue('organization')).toBe(true);
	});

	it('should return true given the string value "organization-title"', () => {
		expect(isAutocompleteAttrValue('organization-title')).toBe(true);
	});

	it('should return true given the string value "one-time-code"', () => {
		expect(isAutocompleteAttrValue('one-time-code')).toBe(true);
	});

	it('should return true given the string value "new-password"', () => {
		expect(isAutocompleteAttrValue('new-password')).toBe(true);
	});

	it('should return true given the string value "current-password"', () => {
		expect(isAutocompleteAttrValue('current-password')).toBe(true);
	});

	it('should return true given the string value "photo"', () => {
		expect(isAutocompleteAttrValue('photo')).toBe(true);
	});

	it('should return true given the string value "sex"', () => {
		expect(isAutocompleteAttrValue('sex')).toBe(true);
	});

	it('should return true given the string value "tel"', () => {
		expect(isAutocompleteAttrValue('tel')).toBe(true);
	});

	it('should return true given the string value "tel-country-code"', () => {
		expect(isAutocompleteAttrValue('tel-country-code')).toBe(true);
	});

	it('should return true given the string value "tel-area-code"', () => {
		expect(isAutocompleteAttrValue('tel-area-code')).toBe(true);
	});

	it('should return true given the string value "tel-national"', () => {
		expect(isAutocompleteAttrValue('tel-national')).toBe(true);
	});

	it('should return true given the string value "tel-local"', () => {
		expect(isAutocompleteAttrValue('tel-local')).toBe(true);
	});

	it('should return true given the string value "tel-extension"', () => {
		expect(isAutocompleteAttrValue('tel-extension')).toBe(true);
	});

	it('should return true given the string value "transaction-amount"', () => {
		expect(isAutocompleteAttrValue('transaction-amount')).toBe(true);
	});

	it('should return true given the string value "transaction-currency"', () => {
		expect(isAutocompleteAttrValue('transaction-currency')).toBe(true);
	});

	it('should return true given the string value "url"', () => {
		expect(isAutocompleteAttrValue('url')).toBe(true);
	});

	it('should return true given the string value "username"', () => {
		expect(isAutocompleteAttrValue('username')).toBe(true);
	});

	it('should return true given the string value "webauthn"', () => {
		expect(isAutocompleteAttrValue('webauthn')).toBe(true);
	});

	it('should return true given the string value "postal-code"', () => {
		expect(isAutocompleteAttrValue('postal-code')).toBe(true);
	});

	it('should return false given an empty string', () => {
		expect(isAutocompleteAttrValue('')).toBe(false);
	});
});
