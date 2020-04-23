import { PhoneNumberUtil } from 'google-libphonenumber';
import { Validator } from '../../types';
import isString from 'lodash/isString';

const _phoneUtil = PhoneNumberUtil.getInstance();

export const isValidPhoneNumber: Validator = (
	value: unknown,
): true | string => {
	const parsed = _phoneUtil.parseAndKeepRawInput(
		isString(value) ? value : '',
		'US',
	);

	return _phoneUtil.isPossibleNumber(parsed) ? true : 'Invalid phone number';
};
