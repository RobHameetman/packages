import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.SpaceUnaryOps]: [
		Severity.error,
		{
			words: true,
			nonwords: false,
			overrides: {},
		},
	],
};
