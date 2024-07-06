import { isString } from '@/js/core/isString';

/**
 * A list of all possible {@link AutocompleteAttrValue} values.
 */
export enum AutocompleteAttrValues {
	/**
	 * The street address to associate with the form of payment used. This can be
	 * combined with other tokens, such as "`billing street-address`" and
	 * "`billing address-level2`".
	 */
	address_billing = 'billing',

	/**
	 * The first administrative level in the address. This is typically the
	 * province in which the address is located. In the United States, this would
	 * be the state. In Switzerland, the canton. In the United Kingdom, the post
	 * town.
	 *
	 * `address-level1` always represents the broadest administrative division; it
	 * is the least-specific portion of the address short of the country name.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#administrative_levels_in_addresses
	 */
	address_level1 = 'address-level1',

	/**
	 * The second administrative level, in addresses with at least two of them. In
	 * countries with two administrative levels, this would typically be the city,
	 * town, village, or other locality in which the address is located.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#administrative_levels_in_addresses
	 */
	address_level2 = 'address-level2',

	/**
	 * The third administrative level, in addresses with at least three
	 * administrative levels.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#administrative_levels_in_addresses
	 */
	address_level3 = 'address-level3',

	/**
	 * The finest-grained administrative level, in addresses which have four
	 * levels. The four administrative level fields (`address-level1` through
	 * `address-level4`) describe the address in terms of increasing levels of
	 * precision within the country in which the address is located. Each country
	 * has its own system of administrative levels, and may arrange the levels in
	 * different orders when addresses are written.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#administrative_levels_in_addresses
	 */
	address_level4 = 'address-level4',

	/**
	 * An individual line of the street address. Should only be present if the
	 * "`street-address`" is not present.
	 */
	address_line1 = 'address-line1',

	/**
	 * An individual line of the street address. Should only be present if the
	 * "`street-address`" is not present.
	 */
	address_line2 = 'address-line2',

	/**
	 * An individual line of the street address. Should only be present if the
	 * "`street-address`" is not present.
	 */
	address_line3 = 'address-line3',

	/**
	 * The street address to send the product. This can be combined with other
	 * tokens, such as "`shipping street-address`" and "`shipping address-level2`".
	 */
	address_shipping = 'shipping',

	/**
	 * A street address. This can be multiple lines of text, and should fully
	 * identify the location of the address within its second administrative level
	 * (typically a city or town), but should not include the city name, ZIP or
	 * postal code, or country name.
	 */
	address_street = 'street-address',

	/**
	 * A country or territory code.
	 */
	country = 'country',

	/**
	 * A country or territory name.
	 */
	country_name = 'country-name',

	/**
	 * A birth date, as a full date.
	 */
	bday = 'bday',

	/**
	 * The day of the month of a birth date.
	 */
	bday_day = 'bday-day',

	/**
	 * The month of the year of a birth date.
	 */
	bday_month = 'bday-month',

	/**
	 * The year of a birth date.
	 */
	bday_year = 'bday-year',

	/**
	 * The full name as printed on or associated with a payment instrument such as
	 * a credit card. Using a full name field is preferred, typically, over
	 * breaking the name into pieces.
	 */
	cc_name = 'cc-name',

	/**
	 * A given (first) name as given on a payment instrument like a credit card.
	 */
	cc_name_given = 'cc-given-name',

	/**
	 * A middle name as given on a payment instrument or credit card.
	 */
	cc_name_additional = 'cc-additional-name',

	/**
	 * A family name, as given on a credit card.
	 */
	cc_name_family = 'cc-family-name',

	/**
	 * A credit card number or other number identifying a payment method, such as
	 * an account number.
	 */
	cc_number = 'cc-number',

	/**
	 * A payment method expiration date, typically in the form "MM/YY" or
	 * "MM/YYYY".
	 */
	cc_exp = 'cc-exp',

	/**
	 * The month in which the payment method expires.
	 */
	cc_exp_month = 'cc-exp-month',

	/**
	 * The year in which the payment method expires.
	 */
	cc_exp_year = 'cc-exp-year',

	/**
	 * The security code for the payment instrument; on credit cards, this is the
	 * 3-digit verification number on the back of the card.
	 */
	cc_csc = 'cc-csc',

	/**
	 * The type of payment instrument (such as "Visa" or "Master Card").
	 */
	cc_type = 'cc-type',

	/**
	 * An email address.
	 */
	email = 'email',

	/**
	 * A URL for an instant messaging protocol endpoint, such as
	 * "xmpp:username@example.net".
	 */
	impp = 'impp',

	/**
	 * A preferred language, given as a valid BCP 47 language tag.
	 *
	 * @see https://en.wikipedia.org/wiki/IETF_language_tag
	 */
	language = 'language',

	/**
	 * The field expects the value to be a person's full name. Using "`name`"
	 * rather than breaking the name down into its components is generally
	 * preferred because it avoids dealing with the wide diversity of human names
	 * and how they are structured.
	 */
	name = 'name',

	/**
	 * A `name` component representing the middle name.
	 */
	name_additional = 'additional-name',

	/**
	 * A `name` component representing the family (or "last") name.
	 */
	name_family = 'family-name',

	/**
	 * A `name` component representing the given (or "first") name.
	 */
	name_given = 'given-name',

	/**
	 * A `name` component representing the prefix or title, such as "Mrs.", "Mr.",
	 * "Miss", "Ms.", "Dr.", or "Mlle.".
	 */
	name_honorific_prefix = 'honorific-prefix',

	/**
	 * A `name` component representing the suffix, such as "Jr.", "B.Sc.", "PhD.",
	 * "MBASW", or "IV".
	 */
	name_honorific_suffix = 'honorific-suffix',

	/**
	 * A `name` component representing a nickname or handle.
	 */
	name_nickname = 'nickname',

	/**
	 * The browser is not permitted to automatically enter or select a value for
	 * this field. It is possible that the document or application provides its own
	 * autocomplete feature, or that security concerns require that the field's
	 * value not be automatically entered.
	 *
	 * @remarks
	 * In most modern browsers, setting `autocomplete` to "`off`" will not prevent
	 * a password manager from asking the user if they would like to save username
	 * and password information, or from automatically filling in those values in a
	 * site's login form. See the autocomplete attribute and login fields.
	 */
	off = 'off',

	/**
	 * The browser is allowed to automatically complete the input. No guidance is
	 * provided as to the type of data expected in the field, so the browser may
	 * use its own judgement.
	 */
	on = 'on',

	/**
	 * A company or organization name, such as "Acme Widget Company" or "Girl
	 * Scouts of America".
	 */
	org = 'organization',

	/**
	 * A job title, or the title a person has within an organization, such as
	 * "Senior Technical Writer", "President", or "Assistant Troop Leader".
	 */
	org_title = 'organization-title',

	/**
	 * A one-time password (OTP) for verifying user identity that is used as an
	 * additional factor in a sign-in flow. Most commonly this is a code received
	 * via some out-of-channel mechanism, such as SMS, email, or authenticator
	 * application.
	 */
	otp = 'one-time-code',

	/**
	 * A new password. When creating a new account or changing passwords, this
	 * should be used for an "Enter your new password" or "Confirm new password"
	 * field, as opposed to a general "Enter your current password" field that might
	 * be present. This may be used by the browser both to avoid accidentally
	 * filling in an existing password and to offer assistance in creating a secure
	 * password.
	 *
	 * @see https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#preventing_autofilling_with_autocompletenew-password
	 */
	password_new = 'new-password',

	/**
	 * The user's current password.
	 */
	password_current = 'current-password',

	/**
	 * The URL of an image representing the person, company, or contact
	 * information given in the other fields in the form.
	 */
	photo = 'photo',

	/**
	 * A gender identity (such as "Female", "Fa'afafine", "Hijra", "Male",
	 * "Nonbinary"), as freeform text without newlines.
	 */
	sex = 'sex',

	/**
	 * A full telephone number, including the country code. This can be made more
	 * specific with values "`tel-country-code`", "`tel-area-code`",
	 * "`tel-national`", "`tel-local`", and "`tel-extension`".
	 */
	tel = 'tel',

	/**
	 * A `tel` component representing the country code, such as "1" for the United
	 * States, Canada, and other areas in North America and parts of the Caribbean.
	 */
	tel_country_code = 'tel-country-code',

	/**
	 * A `tel` component representing the area code, with any country-internal
	 * prefix applied if appropriate.
	 */
	tel_area_code = 'tel-area-code',

	/**
	 * A `tel` component representing the entire phone number without the country
	 * code component, including a country-internal prefix. For the phone number
	 * "`1-855-555-6502`", this field's value would be "`855-555-6502`".
	 */
	tel_national = 'tel-national',

	/**
	 * A `tel` component representing the phone number without the country or area
	 * code. This can be split further into two parts, for phone numbers which
	 * have an exchange number and then a number within the exchange. For the
	 * phone number "555-6502", use "`tel-local-prefix`" for "`555`" and
	 * "`tel-local-suffix`" for "`6502`".
	 */
	tel_local = 'tel-local',

	/**
	 * A `tel` component representing a telephone extension code within the phone
	 * number, such as a room or suite number in a hotel or an office extension in
	 * a company.
	 */
	tel_extension = 'tel-extension',

	/**
	 * The amount, given in the currency specified by "`transaction-currency`", of
	 * the transaction, for a payment form.
	 */
	transaction_amount = 'transaction-amount',

	/**
	 * The currency in which the transaction is to take place.
	 */
	transaction_currency = 'transaction-currency',

	/**
	 * A URL, such as a home page or company website address as appropriate given
	 * the context of the other fields in the form.
	 */
	url = 'url',

	/**
	 * A username or account name.
	 */
	username = 'username',

	/**
	 * Passkeys generated by the Web Authentication API, as requested by a
	 * conditional navigator.credentials.get() call (i.e., one that includes
	 * `mediation: 'conditional'`).
	 *
	 * @see https://web.dev/articles/passkey-form-autofill
	 */
	webauthn = 'webauthn',

	/**
	 * A postal code (in the United States, this is the ZIP code).
	 */
	zip = 'postal-code',
}

/**
 * Any one of the above {@link AutocompleteAttrValues}.
 */
export type AutocompleteAttrValue = keyof typeof AutocompleteAttrValues;

/**
 * A list of all {@link AutocompleteAttrValue} values.
 */
export const AUTOCOMPLETE_ATTR_VALUES = Object.freeze(
	Object.values(AutocompleteAttrValues).filter(isString),
);

/**
 * Checks that an `unknown` value is an {@link AutocompleteAttrValue}.
 *
 * Requirements:
 *   - `value` must be a non-empty string and must be included as a string key
 *     of {@link AutocompleteAttrValues}.
 *
 * @param value - An `unknown` value.
 *
 * @returns The determination that `value` is or is not an {@link AutocompleteAttrValue}.
 */
export const isAutocompleteAttrValue = (value: unknown): value is AutocompleteAttrValue =>
	/**
	 * value
	 */
	isString(value) && (AUTOCOMPLETE_ATTR_VALUES as ReadonlyArray<string>).includes(value);

export default AutocompleteAttrValues;
