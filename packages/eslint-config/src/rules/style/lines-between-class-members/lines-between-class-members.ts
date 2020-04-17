import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default {
	[R.LinesBetweenClassMembers]: [
		Severity.error,
		Usage.always,
		{ exceptAfterSingleLine: false },
	],
};
