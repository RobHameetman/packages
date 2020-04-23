import { Validator } from './../Validator';

export const validValidator: Validator = (value: unknown): true | string => {
	return typeof value === 'string' &&
		value.startsWith('"') &&
		value.endsWith('"')
		? true
		: 'Value must be a surrounded by double quotes';
};
