import { Validator } from '../../types';
import isString from 'lodash/isString';

export const isValidInput: Validator = (value: unknown): true | string => {
	return isString(value) && value.length > 0
		? true
		: 'Input for this question is required';
};
