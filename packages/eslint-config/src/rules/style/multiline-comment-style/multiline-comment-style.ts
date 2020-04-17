import {
	MultilineCommentStyles,
	EsLintStyleRules as R,
	Severity,
} from '../../../enums';

export default {
	[R.MultilineCommentStyle]: [
		Severity.error,
		MultilineCommentStyles.starredBlock,
	],
};
