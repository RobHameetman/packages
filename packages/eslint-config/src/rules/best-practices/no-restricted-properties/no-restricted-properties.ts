import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoRestrictedProperties]: [
		Severity.error,
		{
			object: 'arguments',
			property: 'callee',
			message: 'arguments.callee is deprecated',
		},
		{
			object: 'global',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		},
		{
			object: 'self',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		},
		{
			object: 'window',
			property: 'isFinite',
			message: 'Please use Number.isFinite instead',
		},
		{
			object: 'global',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		},
		{
			object: 'self',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		},
		{
			object: 'window',
			property: 'isNaN',
			message: 'Please use Number.isNaN instead',
		},
		{
			property: '__defineGetter__',
			message: 'Please use Object.defineProperty instead.',
		},
		{
			property: '__defineSetter__',
			message: 'Please use Object.defineProperty instead.',
		},
		{
			object: 'Math',
			property: 'pow',
			message: 'Use the exponentiation operator (**) instead.',
		},
	],
};
