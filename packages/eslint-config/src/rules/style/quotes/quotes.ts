import { Quotes, EsLintStyleRules as R, Severity } from '../../../enums';

export default {
	[R.Quotes]: [
		Severity.error,
		Quotes.single,
		{ avoidEscape: false, allowTemplateLiterals: true },
	],
};
