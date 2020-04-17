import { EsLintBestPracticesRules as R, Severity } from '../../../enums';

export default {
	[R.PreferPromiseRejectErrors]: [Severity.error, { allowEmptyReject: true }],
};
