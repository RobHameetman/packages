import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoUnusedExpressions]: [
		Severity.error,
		{
			allowShortCircuit: false,
			allowTernary: false,
			allowTaggedTemplates: false,
		},
	],
};
