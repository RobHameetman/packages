import { EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.LineCommentPosition]: [
		Severity.error,
		{ position: 'beside', ignorePattern: '', applyDefaultPatterns: true },
	],
};
