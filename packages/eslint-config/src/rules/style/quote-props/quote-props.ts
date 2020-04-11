import { EsLintStyleRules as R, Severity, Usage } from '../../../enums';

export default {
	[R.QuoteProps]: [
		Severity.error,
		Usage.consistentAsNeeded,
		{ keywords: false, unnecessary: true, numbers: false },
	],
};
