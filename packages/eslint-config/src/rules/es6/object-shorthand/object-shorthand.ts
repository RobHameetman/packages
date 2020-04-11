import { EsLintEs6Rules as R, Severity, Usage } from '../../../enums';

export default {
	[R.ObjectShorthand]: [
		Severity.error,
		Usage.always,
		{
			ignoreConstructors: false,
			avoidQuotes: true,
		},
	],
};
