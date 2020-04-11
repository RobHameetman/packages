import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoEmptyFunction]: [
		Severity.error,
		{
			allow: ['arrowFunctions', 'functions', 'methods'],
		},
	],
};
