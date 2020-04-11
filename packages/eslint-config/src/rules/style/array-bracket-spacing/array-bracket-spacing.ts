import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default {
	[R.ArrayBracketSpacing]: [
		Severity.error,
		Usage.always,
		{
			objectsInArrays: false,
			arraysInArrays: false,
		},
	],
};
