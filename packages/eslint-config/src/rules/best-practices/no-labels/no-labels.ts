import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoLabels]: [
		Severity.error,
		{
			allowLoop: false,
			allowSwitch: false,
		},
	],
};
