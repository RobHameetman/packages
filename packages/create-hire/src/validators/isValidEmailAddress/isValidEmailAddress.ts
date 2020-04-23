import { Validator } from '../../types';
import isString from 'lodash/isString';

export const isValidEmailAddress: Validator = (
	value: unknown,
): true | string => {
	const match = /^(.*){2,}@(.*){2,}.(.*){2,}$/gi.test(
		isString(value) ? value : '',
	);

	return match ? true : 'Invalid email address';
};
