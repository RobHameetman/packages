import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.SortKeys]: [
		Severity.error,
		'asc',
		{
			caseSensitive: true,
			minKeys: 2,
			natural: false,
		},
	],
};
