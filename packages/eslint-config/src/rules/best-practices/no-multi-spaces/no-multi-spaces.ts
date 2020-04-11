import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.NoMultiSpaces]: [Severity.error, { ignoreEOLComments: false }],
};
