import { EsLintStyleRules as R, Severity } from '../../../enums';

/**
 * @see:
 */
export default {
	[R.MaxLen]: [
		Severity.error,
		100,
		{
			tabWidth: 2,
			ignoreUrls: true,
			ignoreComments: false,
			ignoreTrailingComments: false,
			ignoreRegExpLiterals: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true,
		},
	],
};
